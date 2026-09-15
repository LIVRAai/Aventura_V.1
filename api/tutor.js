import { POST as legacyPOST } from './tutor-legacy.js';

function cleanName(value) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 60);
}

function personalize(value, studentName) {
  if (typeof value !== 'string' || !studentName) return value;
  return value
    .replace(/EMILIANO/g, studentName.toUpperCase())
    .replace(/Emiliano/g, studentName)
    .replace(/emiliano/g, studentName);
}

export async function POST(request) {
  let studentName = '';
  try {
    const body = await request.clone().json();
    studentName = cleanName(body?.studentName);
  } catch {
    // El endpoint legado conserva su propia validación del body.
  }

  const response = await legacyPOST(request);
  if (!studentName) return response;

  const contentType = String(response.headers.get('content-type') || '');
  if (!contentType.includes('application/json')) return response;

  let data;
  try {
    data = await response.clone().json();
  } catch {
    return response;
  }

  if (typeof data?.message === 'string') {
    data.message = personalize(data.message, studentName);
  }

  const headers = new Headers(response.headers);
  headers.set('content-type', 'application/json; charset=utf-8');
  headers.set('cache-control', 'no-store');

  return new Response(JSON.stringify(data), {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}
