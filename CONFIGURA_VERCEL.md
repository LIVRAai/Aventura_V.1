# La Expedición v17 — configuración productiva en Vercel

Esta versión elimina el flujo anterior `pending → checkout externo` y usa el flujo productivo de Mercado Pago con **CardForm + CardToken + `/preapproval` autorizado**.

## Variables requeridas

En **Vercel → Project → Settings → Environment Variables**, configura para **Production** (y Preview si lo necesitas):

### Supabase

- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SECRET_KEY`

### OpenAI / NOVA

- `OPENAI_API_KEY`
- `OPENAI_MODEL` (opcional; el endpoint tiene valor por defecto)

### Mercado Pago — PRODUCCIÓN

- `MERCADOPAGO_ACCESS_TOKEN` — Access Token productivo y privado.
- `MERCADOPAGO_PUBLIC_KEY` — Public Key productiva. Esta sí se usa en el navegador por MercadoPago.js.
- `MERCADOPAGO_WEBHOOK_SECRET` — Clave secreta de la URL Webhook productiva.

### Plan

- `SUBSCRIPTION_AMOUNT=24900`
- `SUBSCRIPTION_CURRENCY=COP`
- `SUBSCRIPTION_REASON=La Expedición - Plan familiar mensual`
- `SUBSCRIPTIONS_ENABLED=true`
- `APP_URL=https://aventura-v-1.vercel.app`

## Variables antiguas que ya no se usan

Puedes eliminar o dejar sin efecto:

- `MERCADOPAGO_MODE`
- `MERCADOPAGO_TEST_PAYER_EMAIL`

La v17 siempre usa el correo real de la cuenta autenticada y las credenciales productivas que tengas configuradas.

## Webhook productivo

En **Mercado Pago Developers → tu aplicación productiva → Webhooks → Modo productivo**:

URL:

`https://aventura-v-1.vercel.app/api/subscription-webhook`

Eventos recomendados para este proyecto:

- **Planes y suscripciones** (`subscription_preapproval` y `subscription_authorized_payment`)
- **Pagos** (`payment`) para auditoría de los cobros asociados

Guarda la **Clave secreta** generada y colócala en `MERCADOPAGO_WEBHOOK_SECRET`.

## Comprobación después del deploy

Abre:

`https://aventura-v-1.vercel.app/api/health-supabase`

Debes ver en `true`:

- `supabaseUrlConfigured`
- `publishableKeyConfigured`
- `secretKeyConfigured`
- `mercadoPagoAccessTokenConfigured`
- `mercadoPagoPublicKeyConfigured`
- `mercadoPagoWebhookSecretConfigured`
- `openAIConfigured`

Y:

`subscriptionFlow: "authorized-card-token"`

## Base de datos

No hace falta crear tablas nuevas. Se conservan:

- `parent_profiles`
- `children`
- `child_progress`
- `subscriptions`
- `subscription_events`

Las filas antiguas `pending` pueden permanecer como historial. La aplicación da prioridad a cualquier suscripción `authorized`.

## Flujo productivo

1. El adulto inicia sesión.
2. Pulsa **Suscribirme con Mercado Pago**.
3. MercadoPago.js muestra campos seguros y tokeniza la tarjeta.
4. El navegador envía únicamente el `card_token_id` al backend.
5. `/api/subscription-create` crea el `/preapproval` con `status=authorized`.
6. Supabase guarda el ID y estado real de la suscripción.
7. El acceso se habilita si Mercado Pago responde `authorized`.
8. Webhooks mantienen el estado sincronizado en cambios futuros.

> La Expedición no recibe ni guarda el número de tarjeta o CVV.


## Cancelación autoservicio

La V17 agrega `POST /api/subscription-cancel`. No necesita variables nuevas: usa `MERCADOPAGO_ACCESS_TOKEN` y la sesión autenticada de Supabase ya existentes. Tampoco requiere tablas ni columnas nuevas.

## Precio administrado desde Vercel

El precio comercial de nuevas suscripciones se controla con una sola variable:

`SUBSCRIPTION_AMOUNT`

Ejemplo para cobrar $29.900 COP al mes:

`SUBSCRIPTION_AMOUNT=29900`

Después de cambiarla en Vercel, haz un **Redeploy** del proyecto.

La app obtiene ese valor desde `/api/public-config` y lo refleja automáticamente en:
- tarjeta del plan familiar;
- botón para continuar al pago;
- botón final de activación;
- formulario de Mercado Pago;
- cualquier vista que use el precio vigente para una nueva suscripción.

No necesitas editar `index.html` ni `app.js` para cambiar el precio.

Importante: una suscripción que ya fue creada en Mercado Pago conserva el monto con el que fue autorizada. Cambiar `SUBSCRIPTION_AMOUNT` define el precio para nuevas suscripciones; no altera automáticamente contratos ya existentes.
