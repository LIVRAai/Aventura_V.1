import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { createSupabaseAdmin, sendServerError } from './_supabase-server.js';

function header(req, name) {
  const value = req.headers?.[name.toLowerCase()];
  return Array.isArray(value) ? String(value[0] || '') : String(value || '');
}

function signatureParts(value = '') {
  const result = {};
  for (const part of String(value).split(',')) {
    const index = part.indexOf('=');
    if (index < 1) continue;
    result[part.slice(0, index).trim()] = part.slice(index + 1).trim();
  }
  return result;
}

function safeEqualHex(left = '', right = '') {
  if (!/^[a-f0-9]+$/i.test(left) || !/^[a-f0-9]+$/i.test(right)) return false;
  const a = Buffer.from(left, 'hex');
  const b = Buffer.from(right, 'hex');
  return a.length === b.length && timingSafeEqual(a, b);
}

function validateMercadoPagoSignature(req, dataId, secret) {
  const xSignature = header(req, 'x-signature');
  const xRequestId = header(req, 'x-request-id').trim();
  const { ts, v1 } = signatureParts(xSignature);

  if (!xSignature || !ts || !v1) return false;

  const manifestParts = [];
  if (dataId) manifestParts.push(`id:${dataId};`);
  if (xRequestId) manifestParts.push(`request-id:${xRequestId};`);
  manifestParts.push(`ts:${ts};`);

  const expected = createHmac('sha256', secret)
    .update(manifestParts.join(''))
    .digest('hex');

  return safeEqualHex(expected, v1);
}

function eventKey(req, body, type, action, dataId) {
  const notificationId = String(body?.id || '').trim();
  if (notificationId) return `mp:event:${notificationId}`;

  const requestId = header(req, 'x-request-id').trim();
  if (requestId) return `mp:req:${requestId}`;

  return `mp:${createHash('sha256')
    .update(`${type}|${action}|${dataId}|${JSON.stringify(body || {})}`)
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

async function fetchMercadoPago(path, token) {
  const response = await fetch(`https://api.mercadopago.com${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    },
    cache: 'no-store'
  });
  const data = await response.json().catch(() => ({}));
  return { response, data };
}

async function findExistingSubscription(admin, data) {
  let query = admin
    .from('subscriptions')
    .select('id, raw_provider_data, next_payment_date, status')
    .eq('provider', 'mercadopago');

  if (data?.external_reference) {
    query = query.eq('external_reference', String(data.external_reference));
  } else if (data?.id) {
    query = query.eq('provider_subscription_id', String(data.id));
  } else {
    return null;
  }

  const { data: existing, error } = await query
    .order('updated_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) throw supabaseError('No se pudo leer subscriptions', error);
  return existing;
}

async function refreshSubscription(admin, subscriptionId, token) {
  if (!subscriptionId) return { processed: false, providerLookup: 'missing_subscription_id' };

  const { response, data } = await fetchMercadoPago(
    `/preapproval/${encodeURIComponent(subscriptionId)}`,
    token
  );

  if (!response.ok || !data?.id) {
    return { processed: false, providerLookup: `preapproval_${response.status}` };
  }

  const existing = await findExistingSubscription(admin, data);
  const previousMeta = existing?.raw_provider_data?._expedicion || {};
  const rawProviderData = {
    ...data,
    _expedicion: previousMeta
  };

  const providerStatus = String(data.status || 'unknown').toLowerCase();
  const cancellationRequested = Boolean(previousMeta.cancel_requested);
  const appStatus = cancellationRequested && ['paused', 'canceled', 'cancelled'].includes(providerStatus)
    ? 'canceled'
    : (providerStatus === 'cancelled' ? 'canceled' : providerStatus);
  const update = {
    status: appStatus,
    provider_subscription_id: String(data.id),
    next_payment_date: data.next_payment_date || existing?.next_payment_date || null,
    raw_provider_data: rawProviderData
  };
  if (data.payer_email) update.payer_email = String(data.payer_email);
  if (data.auto_recurring?.transaction_amount != null) update.amount = Number(data.auto_recurring.transaction_amount);
  if (data.auto_recurring?.currency_id) update.currency = String(data.auto_recurring.currency_id);

  let query = admin.from('subscriptions').update(update);
  if (data.external_reference) {
    query = query.eq('external_reference', String(data.external_reference));
  } else {
    query = query.eq('provider_subscription_id', String(data.id));
  }

  const { error } = await query;
  if (error) throw supabaseError('No se pudo actualizar subscriptions', error);

  return { processed: true, providerLookup: 'preapproval_ok', subscriptionId: String(data.id), status: update.status };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  try {
    const webhookSecret = String(process.env.MERCADOPAGO_WEBHOOK_SECRET || '').trim();
    if (!webhookSecret) {
      const error = new Error('Falta MERCADOPAGO_WEBHOOK_SECRET en Vercel.');
      error.statusCode = 503;
      throw error;
    }

    const body = req.body && typeof req.body === 'object' ? req.body : {};
    const type = String(body.type || req.query?.type || 'unknown').trim();
    const action = String(body.action || req.query?.action || '').trim();

    const signatureDataId = String(
      req.query?.['data.id'] ||
      req.query?.data_id ||
      body?.data?.id ||
      ''
    ).trim();

    if (!validateMercadoPagoSignature(req, signatureDataId, webhookSecret)) {
      const error = new Error('Firma de Webhook de Mercado Pago no válida.');
      error.statusCode = 401;
      throw error;
    }

    const admin = createSupabaseAdmin();
    const resourceId = String(body?.data?.id || signatureDataId || '').trim();
    const key = eventKey(req, body, type, action, resourceId);

    const { error: eventInsertError } = await admin
      .from('subscription_events')
      .upsert(
        {
          provider: 'mercadopago',
          event_key: key,
          event_type: type,
          action,
          provider_resource_id: resourceId || null,
          payload: {
            body,
            query: req.query || {},
            x_request_id: header(req, 'x-request-id') || null,
            signature_validated: true,
            received_at: new Date().toISOString()
          },
          processed: false
        },
        { onConflict: 'event_key', ignoreDuplicates: true }
      );

    if (eventInsertError) {
      throw supabaseError('No se pudo insertar subscription_events', eventInsertError);
    }

    const token = String(process.env.MERCADOPAGO_ACCESS_TOKEN || '').trim();
    if (!token) {
      const error = new Error('Falta MERCADOPAGO_ACCESS_TOKEN en Vercel.');
      error.statusCode = 503;
      throw error;
    }

    let result = { processed: true, providerLookup: 'audit_only' };
    const normalizedType = type.toLowerCase();

    if (normalizedType === 'subscription_preapproval') {
      result = await refreshSubscription(admin, resourceId, token);
    } else if (normalizedType === 'subscription_authorized_payment' && resourceId) {
      const invoice = await fetchMercadoPago(`/authorized_payments/${encodeURIComponent(resourceId)}`, token);
      if (invoice.response.ok && invoice.data?.preapproval_id) {
        result = await refreshSubscription(admin, String(invoice.data.preapproval_id), token);
        result.providerLookup = result.processed ? 'authorized_payment_and_preapproval_ok' : result.providerLookup;
      } else {
        result = { processed: false, providerLookup: `authorized_payment_${invoice.response.status}` };
      }
    }

    if (result.processed) {
      const { error: processedError } = await admin
        .from('subscription_events')
        .update({ processed: true })
        .eq('event_key', key);
      if (processedError) throw supabaseError('No se pudo marcar subscription_events como procesado', processedError);
    }

    return res.status(200).json({
      received: true,
      eventSaved: true,
      signatureValidated: true,
      eventType: type,
      resourceId: resourceId || null,
      processed: Boolean(result.processed),
      providerLookup: result.providerLookup || null
    });
  } catch (error) {
    return sendServerError(res, error, 'No fue posible registrar el webhook.');
  }
}
