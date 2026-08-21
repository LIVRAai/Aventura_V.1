import { createClient } from '@supabase/supabase-js';

function required(name, fallbackName = '') {
  const value = process.env[name] || (fallbackName ? process.env[fallbackName] : '');
  if (!value) throw new Error(`Falta ${name} en Vercel.`);
  return value;
}

export function createSupabaseAdmin() {
  const url = required('SUPABASE_URL');
  const secret = required('SUPABASE_SECRET_KEY', 'SUPABASE_SERVICE_ROLE_KEY');

  return createClient(url, secret, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false
    }
  });
}

export function bearerToken(req) {
  const header = String(req.headers?.authorization || '');
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : '';
}

export async function requireUser(req) {
  const token = bearerToken(req);
  if (!token) {
    const error = new Error('Debes iniciar sesión.');
    error.statusCode = 401;
    throw error;
  }

  const admin = createSupabaseAdmin();
  const { data, error } = await admin.auth.getUser(token);
  if (error || !data?.user) {
    const authError = new Error('La sesión no es válida o expiró.');
    authError.statusCode = 401;
    throw authError;
  }

  return { admin, user: data.user, token };
}

export function sendServerError(res, error, fallback = 'Error interno.') {
  const status = Number(error?.statusCode || 500);
  if (status >= 500) console.error(fallback, error);
  return res.status(status).json({ error: error?.message || fallback });
}
