export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  const amount = Number(process.env.SUBSCRIPTION_AMOUNT || 24900);
  const currency = String(process.env.SUBSCRIPTION_CURRENCY || 'COP').trim().toUpperCase();
  const enabled = String(process.env.SUBSCRIPTIONS_ENABLED || 'true').toLowerCase() !== 'false';
  const publicKeyConfigured = Boolean(String(process.env.MERCADOPAGO_PUBLIC_KEY || '').trim());
  const accessTokenConfigured = Boolean(String(process.env.MERCADOPAGO_ACCESS_TOKEN || '').trim());

  return res.status(200).json({
    enabled,
    paymentConfigured: publicKeyConfigured && accessTokenConfigured,
    publicKeyConfigured,
    accessTokenConfigured,
    flow: 'authorized-card-token',
    amount,
    currency,
    formattedAmount: new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0
    }).format(amount)
  });
}
