import { createHash } from 'node:crypto';
import { createSupabaseAdmin, sendServerError } from './_supabase-server.js';

function eventKey(req, type, action, dataId) {
  const requestId = String(req.headers?.['x-request-id'] || '').trim();
  if (requestId) return `mp:${requestId}`;
  return `mp:${createHash('sha256').update(`${type}|${action}|${dataId}|${JSON.stringify(req.body || {})}`).digest('hex').slice(0, 48)}`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  try {
    const admin = createSupabaseAdmin();
    const type = String(req.body?.type || req.query?.type || 'unknown');
    const action = String(req.body?.action || req.query?.action || '');
    const dataId = String(req.body?.data?.id || req.query?.['data.id'] || req.query?.id || '');
    const key = eventKey(req, type, action, dataId);

    await admin.from('subscription_events').upsert({
      provider: 'mercadopago',
      event_key: key,
      event_type: type,
      action,
      provider_resource_id: dataId || null,
      payload: { body: req.body || {}, query: req.query || {} },
      processed: false
    }, { onConflict: 'event_key', ignoreDuplicates: true });

    // Cuando el evento apunta a un preapproval, refrescamos el estado en nuestra DB.
    const isPreapproval = type.toLowerCase().includes('preapproval') || action.toLowerCase().includes('preapproval');
    const mpToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

    if (isPreapproval && dataId && mpToken) {
      const mpRes = await fetch(`https://api.mercadopago.com/preapproval/${encodeURIComponent(dataId)}`, {
        headers: { Authorization: `Bearer ${mpToken}` },
        cache: 'no-store'
      });
      const mpData = await mpRes.json().catch(() => ({}));

      if (mpRes.ok && mpData?.id) {
        const status = String(mpData.status || 'unknown').toLowerCase();
        const update = {
          status,
          next_payment_date: mpData.next_payment_date || null,
          raw_provider_data: mpData
        };

        let updateQuery = admin.from('subscriptions').update(update);
        if (mpData.external_reference) updateQuery = updateQuery.eq('external_reference', mpData.external_reference);
        else updateQuery = updateQuery.eq('provider_subscription_id', mpData.id);
        await updateQuery;
      }
    }

    await admin
      .from('subscription_events')
      .update({ processed: true })
      .eq('event_key', key);

    return res.status(200).json({ received: true });
  } catch (error) {
    // Si Supabase falla, devolvemos error para permitir reintento del webhook.
    return sendServerError(res, error, 'No fue posible registrar el webhook.');
  }
}
