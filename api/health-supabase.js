export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  return res.status(200).json({
    supabaseUrlConfigured: Boolean(process.env.SUPABASE_URL),
    publishableKeyConfigured: Boolean(
      process.env.SUPABASE_PUBLISHABLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
      process.env.SUPABASE_ANON_KEY
    ),
    secretKeyConfigured: Boolean(process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY),
    mercadoPagoConfigured: Boolean(process.env.MERCADOPAGO_ACCESS_TOKEN),
    openAIConfigured: Boolean(process.env.OPENAI_API_KEY)
  });
}
