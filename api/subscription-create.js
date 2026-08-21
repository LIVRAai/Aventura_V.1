import { randomUUID } from 'node:crypto';

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

  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
  if (!accessToken) {
    return res.status(503).json({ error: 'Mercado Pago aún no está configurado en Vercel.' });
  }

  const email = String(req.body?.email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'El correo del adulto no es válido.' });
  }

  const amount = Number(process.env.SUBSCRIPTION_AMOUNT || 24900);
  const currency = process.env.SUBSCRIPTION_CURRENCY || 'COP';
  if (!Number.isFinite(amount) || amount <= 0) {
    return res.status(500).json({ error: 'SUBSCRIPTION_AMOUNT no es válido.' });
  }

  const appUrl = getAppUrl(req);
  if (!appUrl) {
    return res.status(500).json({ error: 'No fue posible determinar APP_URL.' });
  }

  const externalReference = `expedicion-${randomUUID()}`;
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

  try {
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
      return res.status(502).json({
        error: data?.message || 'Mercado Pago rechazó la creación de la suscripción.'
      });
    }

    if (!data?.id || !data?.init_point) {
      console.error('Mercado Pago incomplete response', data);
      return res.status(502).json({ error: 'Mercado Pago no devolvió el enlace de suscripción.' });
    }

    return res.status(200).json({
      id: data.id,
      status: data.status || 'pending',
      initPoint: data.init_point
    });
  } catch (error) {
    console.error('subscription-create network error', error);
    return res.status(502).json({ error: 'No fue posible conectar con Mercado Pago.' });
  }
}
