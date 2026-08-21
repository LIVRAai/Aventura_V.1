export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  const amount = Number(process.env.SUBSCRIPTION_AMOUNT || 24900);
  const currency = process.env.SUBSCRIPTION_CURRENCY || 'COP';
  const enabled = String(process.env.SUBSCRIPTIONS_ENABLED || 'true').toLowerCase() !== 'false';

  return res.status(200).json({
    enabled,
    paymentConfigured: Boolean(process.env.MERCADOPAGO_ACCESS_TOKEN),
    amount,
    currency,
    formattedAmount: new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0
    }).format(amount)
  });
}
