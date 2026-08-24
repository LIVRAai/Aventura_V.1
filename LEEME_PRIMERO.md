# La Expedición v11 — revisión productiva

## Problema encontrado en la versión recibida

El código actual creaba `/preapproval` con `status: pending` y redirigía al `init_point` de Mercado Pago. En producción la suscripción sí se creaba, pero el comprador llegaba a una pantalla donde el botón **Confirmar** podía quedar deshabilitado; la fila de Supabase seguía con `payment_method_id: null` y `status: pending`.

## Cambio principal

La v11 utiliza el otro flujo oficial de Suscripciones de Mercado Pago:

**MercadoPago.js CardForm → CardToken → `/preapproval` con `status: authorized`.**

La tarjeta se captura en campos seguros controlados por Mercado Pago. El servidor de La Expedición recibe solamente el token temporal.

## Qué se conservó

No se reescribió la experiencia educativa:

- Atlas y 36 misiones.
- Academia de División.
- 8 rutas.
- NOVA.
- Modo de pruebas para adultos.
- Progreso local + sincronización Supabase.
- Tablas actuales de Supabase.

## Optimizaciones adicionales

- `subscription-status` ya no deja que un intento `pending` reciente oculte una suscripción `authorized` anterior.
- Errores de Mercado Pago incluyen `x-request-id` para diagnóstico sin exponer secretos.
- Webhook productivo valida `x-signature` con `MERCADOPAGO_WEBHOOK_SECRET`.
- `subscription_authorized_payment` consulta la factura y actualiza la suscripción relacionada.
- Se eliminó el endpoint temporal `api/create-mp-test-user.js`.
- `health-supabase` verifica Public Key, Access Token y secreto de Webhook por separado.

## Antes de desplegar

Lee `CONFIGURA_VERCEL.md`. En particular, agrega:

- `MERCADOPAGO_PUBLIC_KEY`
- `MERCADOPAGO_WEBHOOK_SECRET`

con valores de **producción**.


## UX v11

La v11 conserva la integración productiva de Mercado Pago de v10 y mejora la navegación para móvil/tablet:
- menú inferior: Inicio, Atlas, Academia y Ajustes;
- progreso de Matemáticas visible desde Inicio;
- Academia accesible desde navegación, no desde Configuración;
- Configuración agrupada por propósito;
- paleta más consistente y jerarquía visual más clara.
