# La Expedición · V17

Versión productiva basada en V16 Premium, ahora con **gestión autoservicio del plan familiar**.

## Qué agrega

- `Perfil → Plan familiar → Administrar` abre un panel de suscripción claro para el adulto.
- El adulto puede cancelar la **renovación mensual** sin salir de La Expedición.
- La cancelación se ejecuta en el backend autenticado mediante la API de Suscripciones de Mercado Pago.
- Si existe un periodo ya pagado, el acceso continúa hasta la fecha de la siguiente renovación que tenía registrada la suscripción antes de cancelarla.
- Una suscripción cancelada no genera nuevos cobros recurrentes.
- El estado se mantiene sincronizado por `/api/subscription-status` y por el webhook.
- Se evita crear otra suscripción mientras todavía exista una activa o una cancelada con acceso pagado vigente.

## No cambia

- CardForm / tokenización de tarjeta.
- Supabase y las tablas existentes.
- NOVA y `/api/tutor`.
- Progreso local + nube.
- Contenido pedagógico.
- Arquitectura responsive y capa visual premium de V16.

## Despliegue

Reemplaza la versión anterior por esta carpeta y haz redeploy en Vercel.

**No requiere nuevas variables de entorno ni nuevas tablas.**
