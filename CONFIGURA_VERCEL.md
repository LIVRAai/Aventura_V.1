# La Expedición — versión 9.0 · Supabase + Mercado Pago

Esta versión conserva el Atlas, las 36 misiones, la Academia de División, NOVA, el modo de pruebas y las claves históricas de `localStorage`. La diferencia es que ahora existe una cuenta familiar real con Supabase y el progreso se sincroniza con `child_progress`.

## 1. Variables de Supabase en Vercel

En **Vercel → Project → Settings → Environment Variables** agrega:

- `SUPABASE_URL` = `https://TU-PROYECTO.supabase.co`
- `SUPABASE_PUBLISHABLE_KEY` = `sb_publishable_...`
- `SUPABASE_SECRET_KEY` = `sb_secret_...`

La `SUPABASE_PUBLISHABLE_KEY` se entrega al navegador y trabaja junto con RLS.

La `SUPABASE_SECRET_KEY` es privada y se usa solamente en las funciones de Vercel para asociar y actualizar las suscripciones de Mercado Pago. **Nunca la pongas en `app.js`, `index.html` ni GitHub.**

Si tu proyecto todavía usa las claves antiguas, el backend acepta `SUPABASE_SERVICE_ROLE_KEY` como respaldo, pero para proyectos nuevos es preferible `SUPABASE_SECRET_KEY`.

## 2. OpenAI

Conserva:

- `OPENAI_API_KEY`
- `OPENAI_MODEL` (opcional)

Esta versión no reemplaza `api/tutor.js`; conserva el que ya existe en tu repositorio.

## 3. Mercado Pago

Agrega o conserva:

- `MERCADOPAGO_ACCESS_TOKEN`
- `SUBSCRIPTION_AMOUNT` = por ejemplo `24900`
- `SUBSCRIPTION_CURRENCY` = `COP`
- `SUBSCRIPTION_REASON` = `La Expedición - Plan familiar mensual`
- `SUBSCRIPTIONS_ENABLED` = `true`
- `APP_URL` = URL pública exacta del proyecto, por ejemplo `https://la-expedicion.vercel.app`

## 4. Qué archivos subir

Reemplaza/agrega:

- `index.html`
- `styles.css`
- `app.js`
- `package.json`
- `api/_supabase-server.js`
- `api/public-config.js`
- `api/subscription-config.js`
- `api/subscription-create.js`
- `api/subscription-status.js`
- `api/subscription-webhook.js`

Mantén en el repositorio tus archivos existentes:

- `api/tutor.js`
- `api/health.js`

## 5. Flujo nuevo

1. El adulto crea una cuenta con correo y contraseña.
2. Supabase Auth crea el usuario.
3. La app crea o recupera el perfil del niño en `children`.
4. La app compara `localStorage` con `child_progress`.
5. Si este dispositivo tiene el progreso antiguo y la nube está vacía, lo migra automáticamente a Supabase.
6. Si Supabase tiene progreso de otro dispositivo, lo descarga y recarga la app.
7. El adulto activa la suscripción mensual.
8. `/api/subscription-create` exige una sesión válida de Supabase antes de crear el `preapproval` en Mercado Pago.
9. La suscripción queda asociada al `parent_id` en `subscriptions`.
10. `/api/subscription-status` vuelve a consultar Mercado Pago y actualiza Supabase.
11. Si el estado es `authorized`, se desbloquea La Expedición.

## 6. Webhook

Configura en Mercado Pago:

`https://TU-DOMINIO/api/subscription-webhook`

El endpoint guarda las notificaciones en `subscription_events`. Cuando la notificación corresponde a un `preapproval`, también intenta refrescar el estado de `subscriptions`.

## 7. Confirmación de correo

Supabase puede exigir confirmación de email. Si está habilitada, al crear la cuenta la app mostrará que el adulto debe abrir el correo y confirmar el enlace antes de iniciar sesión.

En Supabase revisa **Authentication → URL Configuration** y deja como Site URL la URL de producción de Vercel.

## 8. Prueba rápida

Después de subir los archivos y hacer Redeploy:

1. Abre `/api/public-config`.
2. Debes ver `supabase.configured: true`.
3. Si ya agregaste la Secret key, `subscription.serverDatabaseConfigured` debe ser `true`.
4. Crea una cuenta de prueba.
5. Confirma el correo si Supabase lo solicita.
6. Inicia sesión.
7. Verifica en Supabase que aparezca el adulto en `parent_profiles` y el niño en `children`.
8. Entra con el modo de adulto `123456` si todavía no quieres pagar.
9. Haz una misión y espera un par de segundos.
10. Revisa `child_progress`: los campos `atlas_state`, `notebook_state` y `academy_state` deben empezar a actualizarse.

## 9. Importante sobre el progreso previo de Emiliano

Las claves antiguas siguen siendo:

- `emilianoGameStateV2`
- `emilianoNotebookV1`
- `emilianoAcademyV1`

No se renombraron para evitar perder el progreso ya existente. La primera cuenta que se use en ese dispositivo puede migrar ese progreso a su perfil en Supabase.

## 10. Siguiente mejora recomendada

El frontend ya exige cuenta y suscripción, pero `api/tutor.js` no venía dentro de los archivos originales que recibimos. Antes de producción conviene modificar ese endpoint para que también valide el token de Supabase y la suscripción activa antes de consumir OpenAI.
