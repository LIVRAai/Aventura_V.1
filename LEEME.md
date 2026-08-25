# Aprende con NOVA

Producto de **NOVA Educación** para refuerzo escolar personalizado de niños de 1.º a 5.º.

## Experiencia actual

- Cuenta familiar y perfil infantil.
- Matemáticas como primera materia estructurada.
- Progreso por habilidades.
- NOVA como profe de refuerzo dentro de las actividades.
- Módulo principal **Pregúntale a NOVA** para consultar directamente dudas o tareas de cualquier materia, sin escoger una categoría antes.
- Plan familiar con Mercado Pago, consulta de estado y cancelación de renovación.
- Progreso local + sincronización con Supabase.

## Importante

El módulo **Pregúntale a NOVA** reutiliza `/api/tutor` con un modo general. No modifica la lógica de cobros, suscripciones, cancelación, progreso ni las actividades de Matemáticas.

## Despliegue

Reemplaza la versión anterior por esta carpeta y haz un redeploy en Vercel.

No requiere nuevas variables de entorno ni nuevas tablas.


## V20.1 · continuidad del tutor

- La conversación de **Pregúntale a NOVA** se conserva durante la sesión del navegador.
- Cambiar de pestaña o un recargado accidental ya no debe borrar la conversación.
- Los eventos repetidos de autenticación al recuperar el foco no reconstruyen la app si es el mismo usuario con acceso vigente.
- La conversación temporal se elimina al cerrar sesión para no mezclarla con otra cuenta.


## V21 · primaria 1.º a 5.º

La experiencia principal ahora se organiza por grado y por cinco materias: Matemáticas, Lenguaje, Ciencias, Sociales e Inglés. Cada materia incluye una ruta inicial de seis aprendizajes clave por grado.

El laboratorio de división existente se conserva completo como entrenamiento intensivo, con el mismo progreso, almacenamiento e integraciones. También se conserva **Pregúntale a NOVA** como tutor libre para cualquier materia.

Esta versión no modifica archivos de `/api`, variables de entorno, Supabase, Mercado Pago, webhooks ni la estructura de sincronización existente. El grado y la actividad curricular se guardan únicamente como preferencias locales del navegador para evitar cambios de esquema.

## V21.1 · precio centralizado

El precio visible del plan ya no está escrito manualmente en la interfaz. La UI y el checkout leen `SUBSCRIPTION_AMOUNT` desde Vercel a través de la configuración pública del servidor.

Para cambiar el precio:
1. cambia `SUBSCRIPTION_AMOUNT` en Vercel;
2. haz un redeploy;
3. la nueva tarifa aparecerá automáticamente en la experiencia de compra.

Las suscripciones ya creadas mantienen su monto contractual actual.
