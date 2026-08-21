# Qué debes hacer

1. Copia estos archivos sobre tu repositorio actual.
2. **No borres** tu `api/tutor.js` ni tu `api/health.js`: no venían en los archivos enviados y esta actualización no los reemplaza.
3. Agrega en Vercel las variables de `CONFIGURA_VERCEL.md`.
4. Haz redeploy.
5. Para revisar sin pagar: **Entrar como adulto → 123456**.

## Qué cambia en la experiencia

`Suscripción → Selector de materias → Matemáticas → Atlas actual → Academia actual`

- Matemáticas funciona con todo lo que ya tenías.
- Lenguaje y Ciencias aparecen como “Próximamente”.
- El nombre visible se personaliza con el nombre del niño.
- El progreso antiguo no se borra.

## Nota de seguridad

El bloqueo comercial del frontend ya funciona contra el estado de la suscripción de Mercado Pago. Para una versión comercial pública, también debes proteger `api/tutor.js` en servidor para que nadie pueda consumir NOVA llamando directamente al endpoint. Para hacer ese último ajuste necesito el archivo `api/tutor.js` actual.
