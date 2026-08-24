# La Expedición v17.1 — corrección de cancelación

## Problema observado en producción
Mercado Pago Colombia respondió HTTP 400 al `PUT /preapproval/{id}` con `status: "canceled"` y el mensaje:

`Invalid preapproval status param: canceled`

## Corrección aplicada
- La app detiene futuras renovaciones usando `status: "paused"`, estado aceptado por el mismo endpoint.
- Para el cliente, la operación sigue siendo **Cancelar renovación**.
- La Expedición conserva el acceso hasta `next_payment_date` (fin del periodo ya cubierto).
- En Supabase el estado de negocio queda como `canceled`.
- En `raw_provider_data` se conserva el estado real de Mercado Pago (`paused`) y metadatos de cancelación.
- `subscription-status` y el webhook preservan la cancelación aunque Mercado Pago reporte `paused`.
- Al terminar `access_until`, el acceso deja de estar activo y no existen nuevos cobros.

No se modificaron pagos, CardForm, NOVA, progreso ni contenido pedagógico.
