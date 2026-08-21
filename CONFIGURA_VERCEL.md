# La Expedición — versión 8.0 · Suscripción mensual

Esta versión conserva el Atlas, las 36 misiones, la Academia de División, NOVA, el modo de pruebas y las claves antiguas de `localStorage` para no borrar el progreso existente.

## Qué se agregó

- Pantalla de acceso familiar antes de entrar al juego.
- Nombre del niño configurable para personalizar la experiencia.
- Suscripción mensual con Mercado Pago.
- Verificación del estado de la suscripción contra la API de Mercado Pago.
- Acceso interno para adultos con la misma clave de pruebas `123456`.
- Estado de la suscripción dentro de Configuración.
- Precio configurable desde Vercel, sin editar el frontend.

## Archivos del repositorio

Mantén tus archivos actuales y agrega/reemplaza estos:

- `index.html`
- `styles.css`
- `app.js`
- `package.json`
- `api/subscription-config.js`
- `api/subscription-create.js`
- `api/subscription-status.js`
- `api/subscription-webhook.js`
- `api/tutor.js` **se conserva el que ya tienes**
- `api/health.js` **se conserva el que ya tienes**

## Variables de entorno en Vercel

En **Project → Settings → Environment Variables** agrega:

### OpenAI

- `OPENAI_API_KEY` = tu clave actual.
- `OPENAI_MODEL` = opcional, conserva el valor actual si ya lo usas.

### Mercado Pago

- `MERCADOPAGO_ACCESS_TOKEN` = Access Token de producción de tu aplicación de Mercado Pago.
- `SUBSCRIPTION_AMOUNT` = valor mensual en pesos, por ejemplo `24900`.
- `SUBSCRIPTION_CURRENCY` = `COP`.
- `SUBSCRIPTION_REASON` = por ejemplo `La Expedición - Plan familiar mensual`.
- `SUBSCRIPTIONS_ENABLED` = `true`.
- `APP_URL` = URL pública exacta de Vercel, por ejemplo `https://tu-dominio.vercel.app`.

**Nunca pongas `MERCADOPAGO_ACCESS_TOKEN` ni `OPENAI_API_KEY` dentro de `app.js`, `index.html` o GitHub.**

## Flujo de pago

1. El adulto escribe su correo y el nombre del niño.
2. El navegador llama a `/api/subscription-create`.
3. Vercel crea una suscripción `pending` en Mercado Pago con periodicidad mensual.
4. La API devuelve `init_point` y la app redirige al checkout de Mercado Pago.
5. Mercado Pago devuelve al usuario a `APP_URL/?subscription=return`.
6. La app consulta `/api/subscription-status`.
7. Si Mercado Pago devuelve `status: authorized`, se desbloquea La Expedición.
8. En aperturas posteriores se vuelve a consultar el estado; si está pausada o cancelada, no se concede el acceso normal.

## Configurar Webhook en Mercado Pago

Puedes registrar esta URL en el panel de notificaciones de tu integración:

`https://TU-DOMINIO/api/subscription-webhook`

Activa, como mínimo, eventos relacionados con suscripciones (`subscription_preapproval`) y pagos autorizados de suscripción (`subscription_authorized_payment`).

En esta primera versión el webhook solo recibe y registra el evento. El acceso se valida consultando directamente a Mercado Pago, por lo que no depende del webhook para funcionar.

## Modo de pruebas del dueño

Antes de pagar aparece **🧪 Entrar como adulto**.

- Clave: `123456`.
- El bypass vive solo en `sessionStorage`: al cerrar completamente la sesión del navegador desaparece.
- No cambia el estado real de Mercado Pago.
- Dentro del juego se conserva el Modo de pruebas existente para saltar misiones sin alterar el progreso.

## Importante para convertirlo en producto completo

Esta versión está pensada como MVP con pocos cambios estructurales. El progreso sigue guardándose localmente en el dispositivo, igual que en la versión actual.

Para la siguiente fase comercial conviene agregar Supabase o una base similar para:

- cuentas reales del adulto;
- recuperar acceso desde otro dispositivo;
- guardar progreso del niño en la nube;
- asociar la suscripción a un usuario autenticado;
- almacenar eventos del webhook;
- proteger `/api/tutor` del consumo directo por usuarios no suscritos.

No se modificó `api/tutor.js` porque no venía incluido entre los archivos enviados. El frontend queda bloqueado, pero para producción también se debe validar la suscripción dentro de ese endpoint para impedir llamadas directas a NOVA.

## Prueba rápida

1. Sube los archivos al repositorio.
2. Configura las variables de entorno.
3. Haz Redeploy en Vercel.
4. Abre `/api/subscription-config` y comprueba que `paymentConfigured` sea `true`.
5. Abre la app.
6. Para revisar el juego sin cobrar, usa **Entrar como adulto → 123456**.
7. Para probar el flujo real, usa un correo válido y completa el checkout de Mercado Pago.

## Compatibilidad con el progreso anterior

Las claves antiguas (`emilianoGameStateV2`, `emilianoNotebookV1`, `emilianoAcademyV1`, etc.) se mantienen intencionalmente. Esto evita que una actualización borre el avance que ya existe en la tablet.
