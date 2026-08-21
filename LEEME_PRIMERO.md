# La Expedición v9

## Ya incluye

- Cuenta familiar con Supabase Auth.
- Perfil del niño en `children`.
- Sincronización de Atlas, cuaderno y Academia con `child_progress`.
- Migración automática del progreso histórico de `localStorage` cuando la nube está vacía.
- Suscripción de Mercado Pago asociada al usuario autenticado.
- Registro de webhooks en `subscription_events`.
- Selector de materias preparado para crecer.
- Modo interno `123456` conservado.

## Antes de desplegar

Asegúrate de tener en Vercel:

`SUPABASE_URL`

`SUPABASE_PUBLISHABLE_KEY`

`SUPABASE_SECRET_KEY`

`MERCADOPAGO_ACCESS_TOKEN`

`OPENAI_API_KEY`

Además de las variables de precio y `APP_URL` descritas en `CONFIGURA_VERCEL.md`.

## No reemplaces por accidente

Si tu repositorio ya tiene `api/tutor.js` y `api/health.js`, consérvalos. Este paquete no los incluye porque no fueron suministrados en el código base.
