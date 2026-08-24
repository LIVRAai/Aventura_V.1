function validHttpUrl(value = '') {
  try {
    const url = new URL(String(value).trim());
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  return res.status(200).json({
    supabaseUrlConfigured: validHttpUrl(process.env.SUPABASE_URL),
    publishableKeyConfigured: Boolean(
      process.env.SUPABASE_PUBLISHABLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
      process.env.SUPABASE_ANON_KEY
    ),
    secretKeyConfigured: Boolean(process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY),
    mercadoPagoAccessTokenConfigured: Boolean(process.env.MERCADOPAGO_ACCESS_TOKEN),
    mercadoPagoPublicKeyConfigured: Boolean(process.env.MERCADOPAGO_PUBLIC_KEY),
    mercadoPagoWebhookSecretConfigured: Boolean(process.env.MERCADOPAGO_WEBHOOK_SECRET),
    subscriptionFlow: 'authorized-card-token',
    openAIConfigured: Boolean(process.env.OPENAI_API_KEY)
  });
}
