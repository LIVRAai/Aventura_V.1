import { randomUUID } from 'node:crypto';
import { requireUser, sendServerError } from './_supabase-server.js';

function cleanBaseUrl(value = '') {
  return String(value).trim().replace(/\/+$/, '');
}

function getAppUrl(req) {
  const configured = cleanBaseUrl(process.env.APP_URL || '');
  if (configured) return configured;
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || 'https';
  return host ? `${proto}://${host}` : '';
}

function normalizeEmail(value = '') {
  return String(value).trim().toLowerCase();
}

function isEmail(value = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isCardToken(value = '') {
  const token = String(value).trim();
  return token.length >= 12 && token.length <= 512 && /^[^\s]+$/.test(token);
}

function mercadoPagoErrorBody(data = {}, status = 0, requestId = '') {
  const cause = Array.isArray(data?.cause) ? data.cause[0] : null;
  return {
    error: data?.message || cause?.description || 'Mercado Pago rechazó la creación de la suscripción.',
    mercadoPagoStatus: status,
    mercadoPagoCode: cause?.code || data?.error || null,
    mercadoPagoRequestId: requestId || null
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
      return res.status(503).json({ error: 'Mercado Pago aún no está configurado en Vercel.' });
    }

    const accountEmail = normalizeEmail(user.email || '');
    if (!isEmail(accountEmail)) {
      return res.status(400).json({ error: 'La cuenta no tiene un correo válido.' });
    }

    const cardTokenId = String(req.body?.cardTokenId || '').trim();
    if (!isCardToken(cardTokenId)) {
      return res.status(400).json({ error: 'Mercado Pago no generó un token de tarjeta válido. Intenta nuevamente.' });
    }

    const childId = String(req.body?.childId || '').trim();
    if (!childId) return res.status(400).json({ error: 'Falta el perfil del niño.' });

    const { data: child, error: childError } = await admin
      .from('children')
      .select('id, parent_id')
      .eq('id', childId)
      .eq('parent_id', user.id)
      .maybeSingle();
    if (childError) throw childError;
    if (!child) return res.status(403).json({ error: 'El perfil del niño no pertenece a esta cuenta.' });

    const amount = Number(process.env.SUBSCRIPTION_AMOUNT || 24900);
    const currency = String(process.env.SUBSCRIPTION_CURRENCY || 'COP').trim().toUpperCase();
    if (!Number.isFinite(amount) || amount <= 0) {
      return res.status(500).json({ error: 'SUBSCRIPTION_AMOUNT no es válido.' });
    }

    const appUrl = getAppUrl(req);
    if (!appUrl) return res.status(500).json({ error: 'No fue posible determinar APP_URL.' });

    // Evita cobros duplicados si ya existe cualquier suscripción autorizada.
    const { data: activeExisting, error: activeExistingError } = await admin
      .from('subscriptions')
      .select('provider_subscription_id, status')
      .eq('parent_id', user.id)
      .eq('provider', 'mercadopago')
      .eq('status', 'authorized')
      .order('updated_at', { ascending: false })
      .limit(1)
      .maybeSingle();
    if (activeExistingError) throw activeExistingError;
    if (activeExisting?.provider_subscription_id) {
      return res.status(409).json({
        error: 'Esta cuenta ya tiene una suscripción activa.',
        id: activeExisting.provider_subscription_id,
        status: 'authorized',
        active: true
      });
    }

    const externalReference = `expedicion-${user.id}-${randomUUID()}`;
    const payload = {
      reason: process.env.SUBSCRIPTION_REASON || 'La Expedición - Plan familiar mensual',
      external_reference: externalReference,
      payer_email: accountEmail,
      card_token_id: cardTokenId,
      auto_recurring: {
        frequency: 1,
        frequency_type: 'months',
        transaction_amount: amount,
        currency_id: currency
      },
      back_url: `${appUrl}/?subscription=active`,
      status: 'authorized'
    };

    const mpRes = await fetch('https://api.mercadopago.com/preapproval', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const requestId = String(mpRes.headers.get('x-request-id') || '').trim();
    const data = await mpRes.json().catch(() => ({}));

    if (!mpRes.ok) {
      console.error('Mercado Pago subscription-create error', {
        status: mpRes.status,
        requestId,
        message: data?.message,
        error: data?.error,
        cause: data?.cause
      });
      return res.status(502).json(mercadoPagoErrorBody(data, mpRes.status, requestId));
    }

    if (!data?.id) {
      console.error('Mercado Pago subscription-create missing id', { requestId, data });
      return res.status(502).json({
        error: 'Mercado Pago creó una respuesta incompleta para la suscripción.',
        mercadoPagoRequestId: requestId || null
      });
    }

    const providerStatus = String(data.status || 'unknown').toLowerCase();
    const providerData = {
      ...data,
      _expedicion: {
        flow: 'authorized-card-token',
        account_email: accountEmail,
        mercado_pago_request_id: requestId || null
      }
    };

    const { error: saveError } = await admin
      .from('subscriptions')
      .insert({
        parent_id: user.id,
        provider: 'mercadopago',
        provider_subscription_id: String(data.id),
        external_reference: externalReference,
        payer_email: accountEmail,
        status: providerStatus,
        next_payment_date: data.next_payment_date || null,
        amount,
        currency,
        raw_provider_data: providerData
      });

    if (saveError) {
      console.error('Supabase subscription insert error', saveError);
      return res.status(500).json({
        error: 'Mercado Pago creó la suscripción, pero no pudimos asociarla a tu cuenta. Contacta soporte.',
        id: String(data.id),
        status: providerStatus,
        mercadoPagoRequestId: requestId || null
      });
    }

    return res.status(200).json({
      id: String(data.id),
      status: providerStatus,
      active: providerStatus === 'authorized',
      nextPaymentDate: data.next_payment_date || null,
      mercadoPagoRequestId: requestId || null
    });
  } catch (error) {
    return sendServerError(res, error, 'No fue posible crear la suscripción.');
  }
}
