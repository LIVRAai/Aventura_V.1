export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  const amount = Number(process.env.SUBSCRIPTION_AMOUNT || 24900);
  const currency = process.env.SUBSCRIPTION_CURRENCY || 'COP';
  const enabled = String(process.env.SUBSCRIPTIONS_ENABLED || 'true').toLowerCase() !== 'false';
  const supabaseUrl = String(process.env.SUPABASE_URL || '').trim();
  const publishableKey = String(
    process.env.SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    ''
  ).trim();

  return res.status(200).json({
    supabase: {
      configured: Boolean(supabaseUrl && publishableKey),
      url: supabaseUrl,
      publishableKey
    },
    subscription: {
      enabled,
      paymentConfigured: Boolean(process.env.MERCADOPAGO_ACCESS_TOKEN),
      serverDatabaseConfigured: Boolean(process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY),
      amount,
      currency,
      formattedAmount: new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency,
        maximumFractionDigits: 0
      }).format(amount)
    }
  });
}
