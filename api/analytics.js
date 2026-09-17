import { createSupabaseAdmin, bearerToken } from './_supabase-server.js';

const ALLOWED_EVENTS = new Set([
  'landing_view',
  'trial_started',
  'trial_mission_completed',
  'trial_completed',
  'signup_started',
  'signup_completed',
  'login_completed',
  'app_opened',
  'home_viewed',
  'nova_question_sent',
  'paywall_viewed',
  'checkout_started',
  'subscription_activated',
  'curriculum_game_started',
  'curriculum_game_completed',
  'adaptive_profile_updated',
  'adaptive_recommendation_viewed',
  'adaptive_recommendation_started',
  'skill_state_changed',
  'badge_unlocked',
  'parent_summary_viewed',
  'weekly_goal_viewed',
  'achievement_shared',
  'weekly_summary_shared',
  'visual_narrative_enabled',
  'narrative_scene_viewed',
  'immersive_learning_enabled',
  'immersive_scene_viewed',
  'immersive_interaction'
]);

function cleanText(value, max = 240) {
  return String(value || '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}

function safeProperties(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  const out = {};
  for (const [key, raw] of Object.entries(value).slice(0, 20)) {
    const safeKey = cleanText(key, 60);
    if (!safeKey) continue;
    if (typeof raw === 'boolean' || typeof raw === 'number') out[safeKey] = raw;
    else if (typeof raw === 'string') out[safeKey] = cleanText(raw, 180);
  }
  return out;
}

function validUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(value || ''));
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  try {
    const eventName = cleanText(req.body?.event, 80);
    const sessionId = cleanText(req.body?.sessionId, 40);
    if (!ALLOWED_EVENTS.has(eventName) || !validUuid(sessionId)) {
      return res.status(400).json({ error: 'Evento inválido.' });
    }

    const admin = createSupabaseAdmin();
    let userId = null;
    const token = bearerToken(req);
    if (token) {
      const { data } = await admin.auth.getUser(token);
      userId = data?.user?.id || null;
    }

    const source = cleanText(req.body?.source, 80) || null;
    const path = cleanText(req.body?.path, 240) || null;
    const properties = safeProperties(req.body?.properties);

    const { error } = await admin.from('product_events').insert({
      event_name: eventName,
      session_id: sessionId,
      user_id: userId,
      source,
      path,
      properties,
      user_agent: cleanText(req.headers['user-agent'], 300) || null,
      ip_hash: null
    });
    if (error) throw error;
    return res.status(202).json({ ok: true });
  } catch (error) {
    console.error('analytics insert failed', error?.message || error);
    return res.status(500).json({ error: 'No fue posible registrar el evento.' });
  }
}
