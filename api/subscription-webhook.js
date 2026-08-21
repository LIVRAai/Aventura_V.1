// Endpoint preparado para registrar notificaciones de Mercado Pago.
// Esta versión no guarda eventos en base de datos: el acceso se revalida
// consultando /preapproval/{id} cada vez que el usuario abre la app.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método no permitido.' });
  }

  // Respondemos rápido para que Mercado Pago no reintente por timeout.
  // Cuando agregues Supabase, este es el lugar para persistir el evento.
  console.log('Mercado Pago webhook', {
    type: req.body?.type || req.query?.type || null,
    action: req.body?.action || null,
    dataId: req.body?.data?.id || req.query?.['data.id'] || null
  });

  return res.status(200).json({ received: true });
}
