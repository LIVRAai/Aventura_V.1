import { requireUser, sendServerError } from './_supabase-server.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  try {
    const { admin, user } = await requireUser(req);
    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
    if (!accessToken) {
      return res.status(503).json({ error: 'Mercado Pago aún no está configurado en Vercel.' });
    }

    const requestedId = String(req.query?.id || '').trim();
    let query = admin
      .from('subscriptions')
      .select('id, provider_subscription_id, status, payer_email, next_payment_date, amount, currency')
      .eq('parent_id', user.id)
      .eq('provider', 'mercadopago');

    if (requestedId) query = query.eq('provider_subscription_id', requestedId);
    else query = query.order('updated_at', { ascending: false }).limit(1);

    const { data: subscription, error: dbError } = await query.maybeSingle();
    if (dbError) throw dbError;
    if (!subscription?.provider_subscription_id) {
      return res.status(404).json({ error: 'Esta cuenta todavía no tiene una suscripción.' });
    }

    const id = subscription.provider_subscription_id;
    const mpRes = await fetch(`https://api.mercadopago.com/preapproval/${encodeURIComponent(id)}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: 'no-store'
    });

    const data = await mpRes.json().catch(() => ({}));
    if (!mpRes.ok) {
      console.error('Mercado Pago subscription-status error', mpRes.status, data);
      return res.status(mpRes.status === 404 ? 404 : 502).json({
        error: mpRes.status === 404 ? 'No encontramos esa suscripción en Mercado Pago.' : 'No pudimos verificar la suscripción.'
      });
    }

    const status = String(data?.status || 'unknown').toLowerCase();
    const { error: updateError } = await admin
      .from('subscriptions')
      .update({
        status,
        next_payment_date: data?.next_payment_date || null,
        raw_provider_data: data
      })
      .eq('parent_id', user.id)
      .eq('provider_subscription_id', id);

    if (updateError) console.error('Supabase subscription status update error', updateError);

    return res.status(200).json({
      id,
      status,
      active: status === 'authorized',
      nextPaymentDate: data?.next_payment_date || null
    });
  } catch (error) {
    return sendServerError(res, error, 'No fue posible verificar la suscripción.');
  }
}
