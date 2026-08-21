import { createHash } from 'node:crypto';
import { createSupabaseAdmin, sendServerError } from './_supabase-server.js';

function eventKey(req, type, action, dataId) {
  const requestId = String(req.headers?.['x-request-id'] || '').trim();
  if (requestId) return `mp:${requestId}`;

  return `mp:${createHash('sha256')
    .update(`${type}|${action}|${dataId}|${JSON.stringify(req.body || {})}`)
    .digest('hex')
    .slice(0, 48)}`;
}

function supabaseError(label, error) {
  if (!error) return null;
  const details = [error.message, error.details, error.hint, error.code]
    .filter(Boolean)
    .join(' | ');
  return new Error(`${label}: ${details || 'error desconocido de Supabase'}`);
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
    const dataId = String(
      req.body?.data?.id ||
      req.query?.['data.id'] ||
      req.query?.id ||
      ''
    );
    const key = eventKey(req, type, action, dataId);

    // 1) SIEMPRE registrar primero el webhook.
    // Supabase JS devuelve los errores en { error }; no los lanza automáticamente.
    const { error: eventInsertError } = await admin
      .from('subscription_events')
      .upsert(
        {
          provider: 'mercadopago',
          event_key: key,
          event_type: type,
          action,
          provider_resource_id: dataId || null,
          payload: {
            body: req.body || {},
            query: req.query || {},
            received_at: new Date().toISOString()
          },
          processed: false
        },
        {
          onConflict: 'event_key',
          ignoreDuplicates: true
        }
      );

    if (eventInsertError) {
      throw supabaseError('No se pudo insertar subscription_events', eventInsertError);
    }

    let processed = false;
    let providerLookup = 'not_needed';

    // 2) Si el evento apunta a un preapproval REAL, consultar a Mercado Pago
    // y refrescar subscriptions. En una simulación con ID 123456 la consulta
    // puede devolver 404: el evento queda registrado igualmente.
    const isPreapproval =
      type.toLowerCase().includes('preapproval') ||
      action.toLowerCase().includes('preapproval') ||
      String(req.body?.entity || '').toLowerCase().includes('preapproval');

    const mpToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

    if (isPreapproval && dataId && mpToken) {
      providerLookup = 'attempted';

      const mpRes = await fetch(
        `https://api.mercadopago.com/preapproval/${encodeURIComponent(dataId)}`,
        {
          headers: { Authorization: `Bearer ${mpToken}` },
          cache: 'no-store'
        }
      );

      const mpData = await mpRes.json().catch(() => ({}));

      if (mpRes.ok && mpData?.id) {
        providerLookup = 'ok';

        const status = String(mpData.status || 'unknown').toLowerCase();
        const update = {
          status,
          provider_subscription_id: String(mpData.id),
          next_payment_date: mpData.next_payment_date || null,
          payer_email: mpData.payer_email || null,
          amount: mpData.auto_recurring?.transaction_amount ?? null,
          currency: mpData.auto_recurring?.currency_id || 'COP',
          raw_provider_data: mpData
        };

        let updateQuery = admin.from('subscriptions').update(update);

        if (mpData.external_reference) {
          updateQuery = updateQuery.eq(
            'external_reference',
            String(mpData.external_reference)
          );
        } else {
          updateQuery = updateQuery.eq(
            'provider_subscription_id',
            String(mpData.id)
          );
        }

        const { error: subscriptionUpdateError } = await updateQuery;

        if (subscriptionUpdateError) {
          throw supabaseError(
            'No se pudo actualizar subscriptions',
            subscriptionUpdateError
          );
        }

        processed = true;
      } else {
        // Es normal durante "Simular notificación" si se usa un Data ID ficticio.
        providerLookup = `not_found_${mpRes.status}`;
      }
    } else if (!isPreapproval) {
      // El webhook se registró correctamente, aunque todavía no tengamos
      // procesamiento específico para ese tipo de evento.
      processed = true;
    }

    // 3) Marcar processed solo cuando realmente pudimos procesar el evento.
    if (processed) {
      const { error: processedUpdateError } = await admin
        .from('subscription_events')
        .update({ processed: true })
        .eq('event_key', key);

      if (processedUpdateError) {
        throw supabaseError(
          'No se pudo marcar subscription_events como procesado',
          processedUpdateError
        );
      }
    }

    return res.status(200).json({
      received: true,
      eventSaved: true,
      eventType: type,
      resourceId: dataId || null,
      processed,
      providerLookup
    });
  } catch (error) {
    // Al devolver 500 Mercado Pago podrá reintentar el webhook.
    return sendServerError(res, error, 'No fue posible registrar el webhook.');
  }
}
