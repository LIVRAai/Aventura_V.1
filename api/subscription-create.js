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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  try {
    const { admin, user } = await requireUser(req);

    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
    if (!accessToken) {
      return res.status(503).json({ error: 'Mercado Pago aún no está configurado en Vercel.' });
    }

    const email = String(user.email || '').trim().toLowerCase();
    if (!email) return res.status(400).json({ error: 'La cuenta no tiene un correo válido.' });

    const childId = String(req.body?.childId || '').trim();
    if (childId) {
      const { data: child, error: childError } = await admin
        .from('children')
        .select('id, parent_id')
        .eq('id', childId)
        .eq('parent_id', user.id)
        .maybeSingle();
      if (childError) throw childError;
      if (!child) return res.status(403).json({ error: 'El perfil del niño no pertenece a esta cuenta.' });
    }

    const amount = Number(process.env.SUBSCRIPTION_AMOUNT || 24900);
    const currency = process.env.SUBSCRIPTION_CURRENCY || 'COP';
    if (!Number.isFinite(amount) || amount <= 0) {
      return res.status(500).json({ error: 'SUBSCRIPTION_AMOUNT no es válido.' });
    }

    const appUrl = getAppUrl(req);
    if (!appUrl) return res.status(500).json({ error: 'No fue posible determinar APP_URL.' });

    // Si ya existe una suscripción activa, no creamos otra.
    const { data: existing } = await admin
      .from('subscriptions')
      .select('provider_subscription_id, status')
      .eq('parent_id', user.id)
      .eq('provider', 'mercadopago')
      .order('updated_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (existing?.provider_subscription_id && String(existing.status).toLowerCase() === 'authorized') {
      return res.status(409).json({ error: 'Esta cuenta ya tiene una suscripción activa.' });
    }

    const externalReference = `expedicion-${user.id}-${randomUUID()}`;
    const payload = {
      reason: process.env.SUBSCRIPTION_REASON || 'La Expedición - Plan familiar mensual',
      external_reference: externalReference,
      payer_email: email,
      auto_recurring: {
        frequency: 1,
        frequency_type: 'months',
        transaction_amount: amount,
        currency_id: currency
      },
      back_url: `${appUrl}/?subscription=return`,
      status: 'pending'
    };

    const mpRes = await fetch('https://api.mercadopago.com/preapproval', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await mpRes.json().catch(() => ({}));
    if (!mpRes.ok) {
      console.error('Mercado Pago subscription-create error', mpRes.status, data);
      return res.status(502).json({ error: data?.message || 'Mercado Pago rechazó la creación de la suscripción.' });
    }

    if (!data?.id || !data?.init_point) {
      return res.status(502).json({ error: 'Mercado Pago no devolvió el enlace de suscripción.' });
    }

    const { error: saveError } = await admin
      .from('subscriptions')
      .insert({
        parent_id: user.id,
        provider: 'mercadopago',
        provider_subscription_id: data.id,
        external_reference: externalReference,
        payer_email: email,
        status: String(data.status || 'pending').toLowerCase(),
        next_payment_date: data.next_payment_date || null,
        amount,
        currency,
        raw_provider_data: data
      });

    if (saveError) {
      console.error('Supabase subscription insert error', saveError);
      return res.status(500).json({ error: 'La suscripción se creó en Mercado Pago, pero no pudimos asociarla a tu cuenta. Contacta soporte.' });
    }

    return res.status(200).json({
      id: data.id,
      status: data.status || 'pending',
      initPoint: data.init_point
    });
  } catch (error) {
    return sendServerError(res, error, 'No fue posible crear la suscripción.');
  }
}
