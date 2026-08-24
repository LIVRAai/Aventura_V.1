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

function providerDataWithMeta(providerData = {}, previousRaw = {}) {
  const previousMeta = previousRaw && typeof previousRaw === 'object'
    ? (previousRaw._expedicion || {})
    : {};
  return {
    ...providerData,
    _expedicion: previousMeta
  };
}

async function findSubscription(admin, userId, requestedId = '') {
  const base = () => admin
    .from('subscriptions')
    .select('id, provider_subscription_id, status, payer_email, next_payment_date, amount, currency, updated_at, raw_provider_data')
    .eq('parent_id', userId)
    .eq('provider', 'mercadopago');

  if (requestedId) {
    const { data, error } = await base()
      .eq('provider_subscription_id', requestedId)
      .maybeSingle();
    if (error) throw error;
    return data;
  }

  // Una suscripción que sigue renovando tiene prioridad. Si fue cancelada,
  // la más reciente conserva la información del periodo ya pagado.
  const { data: active, error: activeError } = await base()
    .eq('status', 'authorized')
    .order('updated_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  if (activeError) throw activeError;
  if (active) return active;

  const { data: latest, error: latestError } = await base()
    .order('updated_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  if (latestError) throw latestError;
  return latest;
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  try {
    const { admin, user } = await requireUser(req);
    const accessToken = String(process.env.MERCADOPAGO_ACCESS_TOKEN || '').trim();
    if (!accessToken) {
      return res.status(503).json({ error: 'El plan no se puede verificar en este momento.' });
    }

    const requestedId = String(req.query?.id || '').trim();
    const subscription = await findSubscription(admin, user.id, requestedId);
    if (!subscription?.provider_subscription_id) {
      return res.status(404).json({ error: 'Esta cuenta todavía no tiene una suscripción.' });
    }

    const id = String(subscription.provider_subscription_id);
    const mpRes = await fetch(`https://api.mercadopago.com/preapproval/${encodeURIComponent(id)}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json'
      },
      cache: 'no-store'
    });

    const requestId = String(mpRes.headers.get('x-request-id') || '').trim();
    const data = await mpRes.json().catch(() => ({}));
    if (!mpRes.ok) {
      console.error('Mercado Pago subscription-status error', {
        status: mpRes.status,
        requestId,
        message: data?.message,
        error: data?.error
      });
      return res.status(mpRes.status === 404 ? 404 : 502).json({
        error: mpRes.status === 404 ? 'No encontramos ese plan.' : 'No pudimos verificar el plan.',
        mercadoPagoRequestId: requestId || null
      });
    }

    const providerStatus = String(data?.status || 'unknown').toLowerCase();
    const meta = subscription.raw_provider_data?._expedicion || {};
    const cancellationRequested = Boolean(meta.cancel_requested);
    const accessUntil = cancellationRequested || ['canceled', 'cancelled'].includes(providerStatus)
      ? futureIso(meta.access_until)
      : null;
    const entitlementActive = providerStatus === 'authorized' || Boolean(accessUntil);
    const appStatus = cancellationRequested && ['paused', 'canceled', 'cancelled'].includes(providerStatus)
      ? 'canceled'
      : (providerStatus === 'cancelled' ? 'canceled' : providerStatus);

    const rawProviderData = providerDataWithMeta(data, subscription.raw_provider_data);
    const update = {
      status: appStatus,
      next_payment_date: data?.next_payment_date || subscription.next_payment_date || null,
      raw_provider_data: rawProviderData
    };
    if (data?.payer_email) update.payer_email = String(data.payer_email);
    if (data?.auto_recurring?.transaction_amount != null) update.amount = Number(data.auto_recurring.transaction_amount);
    if (data?.auto_recurring?.currency_id) update.currency = String(data.auto_recurring.currency_id);

    const { error: updateError } = await admin
      .from('subscriptions')
      .update(update)
      .eq('parent_id', user.id)
      .eq('provider_subscription_id', id);

    if (updateError) console.error('Supabase subscription status update error', updateError);

    return res.status(200).json({
      id,
      status: appStatus,
      active: entitlementActive,
      renews: appStatus === 'authorized',
      accessUntil,
      canceledAt: asIso(meta.canceled_at),
      nextPaymentDate: appStatus === 'authorized'
        ? (data?.next_payment_date || subscription.next_payment_date || null)
        : null,
      amount: data?.auto_recurring?.transaction_amount ?? subscription.amount ?? null,
      currency: data?.auto_recurring?.currency_id || subscription.currency || null,
      mercadoPagoRequestId: requestId || null
    });
  } catch (error) {
    return sendServerError(res, error, 'No fue posible verificar la suscripción.');
  }
}
