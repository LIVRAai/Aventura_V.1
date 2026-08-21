export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
  if (!accessToken) {
    return res.status(503).json({ error: 'Mercado Pago aún no está configurado en Vercel.' });
  }

  const id = String(req.query?.id || '').trim();
  if (!/^[a-zA-Z0-9_-]{8,120}$/.test(id)) {
    return res.status(400).json({ error: 'El identificador de suscripción no es válido.' });
  }

  try {
    const mpRes = await fetch(`https://api.mercadopago.com/preapproval/${encodeURIComponent(id)}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: 'no-store'
    });

    const data = await mpRes.json().catch(() => ({}));
    if (!mpRes.ok) {
      console.error('Mercado Pago subscription-status error', mpRes.status, data);
      return res.status(mpRes.status === 404 ? 404 : 502).json({
        error: mpRes.status === 404 ? 'No encontramos esa suscripción.' : 'No pudimos verificar la suscripción.'
      });
    }

    const status = String(data?.status || 'unknown').toLowerCase();
    return res.status(200).json({
      id: data.id,
      status,
      active: status === 'authorized',
      nextPaymentDate: data?.next_payment_date || null
    });
  } catch (error) {
    console.error('subscription-status network error', error);
    return res.status(502).json({ error: 'No fue posible conectar con Mercado Pago.' });
  }
}
