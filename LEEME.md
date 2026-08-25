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


## V22 · Aprender jugando

Cada uno de los aprendizajes de 1.º a 5.º tiene ahora una ronda interactiva de 5 retos.

- 5 materias: Matemáticas, Lenguaje, Ciencias, Sociales e Inglés.
- 5 retos por tema, con opciones, pistas, explicación inmediata y puntuación.
- Hasta 3 estrellas según el resultado y mejor marca guardada localmente por perfil infantil.
- Los temas siguen ofreciendo conversación directa con NOVA para explicación y refuerzo.
- El Laboratorio de división anterior se conserva como entrenamiento intensivo dentro de los temas de división.
- No se modificaron bases de datos, Supabase, Mercado Pago, webhooks, autenticación ni endpoints de API.

El progreso nuevo de los juegos se guarda en `localStorage` con una clave independiente, precisamente para no cambiar el esquema actual de Supabase en esta versión.


## V23 · Ruta escolar y práctica profunda

- El niño selecciona un grado de 1.º a 5.º y su navegación queda enfocada en ese grado.
- No puede saltar a otro grado mientras no complete el grado activo.
- El siguiente grado se habilita cuando domina todos los aprendizajes del grado actual.
- El adulto puede ajustar el grado manualmente desde el panel de progreso/perfil familiar.
- Cada aprendizaje tiene una ronda de 20 retos distribuidos en cuatro etapas: Entiendo, Practico, Explico y Demuestro.
- Un aprendizaje se considera dominado con al menos 80% (16/20) en una ronda completa.
- Los temas del grado permanecen disponibles para que la familia refuerce lo que el colegio esté trabajando en ese momento; no se bloquean entre sí.
- Se muestran bloques orientativos del año escolar sin asumir que todos los colegios enseñan los temas en el mismo orden.
- No se modificaron tablas, Supabase, Mercado Pago, autenticación, webhooks, variables de entorno ni archivos de `/api`.
