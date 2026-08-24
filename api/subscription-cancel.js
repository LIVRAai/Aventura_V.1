import { requireUser, sendServerError } from './_supabase-server.js';

function asIso(value = '') {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function futureIso(value = '') {
  const iso = asIso(value);
  if (!iso) return null;
  return new Date(iso).getTime() > Date.now() ? iso : null;
}

function mergeProviderData(providerData = {}, previousRaw = {}, extraMeta = {}) {
  const previousMeta = previousRaw && typeof previousRaw === 'object'
    ? (previousRaw._expedicion || {})
    : {};
  return {
    ...providerData,
    _expedicion: {
      ...previousMeta,
      ...extraMeta
    }
  };
}

async function findManageableSubscription(admin, userId) {
  const { data, error } = await admin
    .from('subscriptions')
    .select('id, provider_subscription_id, status, next_payment_date, raw_provider_data, updated_at')
    .eq('parent_id', userId)
    .eq('provider', 'mercadopago')
    .in('status', ['authorized', 'paused', 'pending', 'canceled', 'cancelled'])
    .order('updated_at', { ascending: false })
    .limit(12);

  if (error) throw error;
  if (!Array.isArray(data) || !data.length) return null;

  return data.find(row => String(row.status).toLowerCase() === 'authorized')
    || data.find(row => String(row.status).toLowerCase() === 'paused')
    || data.find(row => ['canceled', 'cancelled'].includes(String(row.status).toLowerCase()))
    || data[0];
}

async function mpRequest(path, accessToken, options = {}) {
  const response = await fetch(`https://api.mercadopago.com${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...(options.headers || {})
    },
    cache: 'no-store'
  });
  const data = await response.json().catch(() => ({}));
  return {
    response,
    data,
    requestId: String(response.headers.get('x-request-id') || '').trim()
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  try {
    const { admin, user } = await requireUser(req);
    const accessToken = String(process.env.MERCADOPAGO_ACCESS_TOKEN || '').trim();
    if (!accessToken) {
      return res.status(503).json({ error: 'El plan no se puede administrar en este momento.' });
    }

    const subscription = await findManageableSubscription(admin, user.id);
    if (!subscription?.provider_subscription_id) {
      return res.status(404).json({ error: 'No encontramos un plan para cancelar.' });
    }

    const id = String(subscription.provider_subscription_id);
    const previousMeta = subscription.raw_provider_data?._expedicion || {};
    const alreadyCanceled = ['canceled', 'cancelled'].includes(String(subscription.status).toLowerCase());

    if (alreadyCanceled) {
      const accessUntil = futureIso(previousMeta.access_until);
      return res.status(200).json({
        id,
        status: 'canceled',
        active: Boolean(accessUntil),
        renews: false,
        accessUntil,
        canceledAt: asIso(previousMeta.canceled_at),
        alreadyCanceled: true
      });
    }

    // Consultamos el estado real antes de cancelar para conservar el fin del
    // periodo ya pagado. Normalmente coincide con next_payment_date.
    const before = await mpRequest(`/preapproval/${encodeURIComponent(id)}`, accessToken);
    if (!before.response.ok) {
      console.error('Mercado Pago subscription-cancel precheck error', {
        status: before.response.status,
        requestId: before.requestId,
        message: before.data?.message,
        error: before.data?.error
      });
      return res.status(before.response.status === 404 ? 404 : 502).json({
        error: before.response.status === 404
          ? 'No encontramos el plan en Mercado Pago.'
          : 'No pudimos preparar la cancelación. Intenta nuevamente.',
        mercadoPagoRequestId: before.requestId || null
      });
    }

    const providerBeforeStatus = String(before.data?.status || subscription.status || '').toLowerCase();
    if (['canceled', 'cancelled'].includes(providerBeforeStatus)) {
      const accessUntil = futureIso(previousMeta.access_until || subscription.next_payment_date || before.data?.next_payment_date);
      const canceledAt = asIso(previousMeta.canceled_at) || new Date().toISOString();
      const rawProviderData = mergeProviderData(before.data, subscription.raw_provider_data, {
        canceled_at: canceledAt,
        access_until: accessUntil,
        cancellation_source: previousMeta.cancellation_source || 'self_service'
      });

      const { error: syncError } = await admin
        .from('subscriptions')
        .update({
          status: 'canceled',
          next_payment_date: before.data?.next_payment_date || subscription.next_payment_date || null,
          raw_provider_data: rawProviderData
        })
        .eq('parent_id', user.id)
        .eq('provider_subscription_id', id);
      if (syncError) throw syncError;

      return res.status(200).json({
        id,
        status: 'canceled',
        active: Boolean(accessUntil),
        renews: false,
        accessUntil,
        canceledAt,
        alreadyCanceled: true
      });
    }

    const accessUntil = futureIso(before.data?.next_payment_date || subscription.next_payment_date);
    const canceledAt = new Date().toISOString();

    const canceled = await mpRequest(`/preapproval/${encodeURIComponent(id)}`, accessToken, {
      method: 'PUT',
      body: JSON.stringify({ status: 'canceled' })
    });

    if (!canceled.response.ok) {
      console.error('Mercado Pago subscription-cancel error', {
        status: canceled.response.status,
        requestId: canceled.requestId,
        message: canceled.data?.message,
        error: canceled.data?.error,
        cause: canceled.data?.cause
      });
      return res.status(502).json({
        error: 'No pudimos cancelar la renovación. No se hizo ningún cambio.',
        mercadoPagoRequestId: canceled.requestId || null
      });
    }

    const status = String(canceled.data?.status || 'canceled').toLowerCase();
    if (!['canceled', 'cancelled'].includes(status)) {
      return res.status(502).json({
        error: 'Mercado Pago no confirmó la cancelación. No se hizo ningún cambio visible.',
        mercadoPagoRequestId: canceled.requestId || null
      });
    }

    const rawProviderData = mergeProviderData(canceled.data, subscription.raw_provider_data, {
      canceled_at: canceledAt,
      access_until: accessUntil,
      cancellation_source: 'self_service',
      cancellation_request_id: canceled.requestId || null
    });

    const { error: updateError } = await admin
      .from('subscriptions')
      .update({
        status: 'canceled',
        next_payment_date: canceled.data?.next_payment_date || subscription.next_payment_date || null,
        raw_provider_data: rawProviderData
      })
      .eq('parent_id', user.id)
      .eq('provider_subscription_id', id);

    if (updateError) throw updateError;

    return res.status(200).json({
      id,
      status: 'canceled',
      active: Boolean(accessUntil),
      renews: false,
      accessUntil,
      canceledAt,
      alreadyCanceled: false
    });
  } catch (error) {
    return sendServerError(res, error, 'No fue posible cancelar el plan.');
  }
}
