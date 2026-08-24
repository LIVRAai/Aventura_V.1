# La Expedición · V18

Versión productiva enfocada en **acceso familiar y experiencia de inicio de sesión**.

## Cambios de esta versión

- El formulario de acceso queda centrado dentro de la tarjeta en PC, tablet y celular.
- Después de iniciar sesión aparece una transición neutra: **“Preparando tu aventura…”**.
- La pantalla de pago **no se muestra** hasta que `/api/subscription-status` confirme que la cuenta no tiene acceso vigente.
- Una cuenta con plan activo —incluido acceso vigente con renovación desactivada— entra directamente a La Expedición.
- Si el estado del plan no se puede verificar por un problema temporal, la app **no ofrece pagar**. Muestra “Intentar de nuevo” para evitar posibles dobles cobros.
- Después de crear un perfil infantil también se verifica primero el acceso antes de presentar el checkout.
- El checkout de dos columnas se reserva para escritorios amplios; laptops y tablets horizontales usan una columna centrada para evitar recortes.
- Se eliminaron mensajes intermedios como “cuenta y progreso listos” del recorrido normal.
- Se agregó favicon propio y se retiró el archivo público de previsualización de desarrollo.

## No cambia

- Mercado Pago / CardForm.
- Cancelación de renovación implementada en V17.1.
- Supabase y tablas actuales.
- Webhooks.
- NOVA y `/api/tutor`.
- Progreso local + nube.
- Contenido pedagógico.

## Despliegue

Reemplaza la versión anterior por esta carpeta y haz un redeploy en Vercel.

**No requiere nuevas variables de entorno ni nuevas tablas.**
