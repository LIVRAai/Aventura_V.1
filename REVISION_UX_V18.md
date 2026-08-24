# Revisión UX V18 · Acceso y sesión

## Problema 1: formulario visualmente desplazado

La tarjeta de acceso podía medir ~760 px mientras el formulario se limitaba a ~520 px y quedaba alineado a la izquierda. V18 centra marca, explicación, pestañas, formulario y acciones auxiliares sobre un mismo eje de 560 px.

## Problema 2: una cuenta paga veía el checkout al iniciar sesión

La versión anterior mostraba `subscriberView` antes de consultar el estado real del plan. V18 cambia el orden:

1. Autenticación.
2. Pantalla neutra “Preparando tu aventura…”.
3. Carga de perfil y progreso.
4. Verificación de `/api/subscription-status`.
5. Si hay acceso: entrada directa a La Expedición.
6. Si el servidor confirma que no hay acceso: se muestra activación del plan.

Un fallo de red o de verificación devuelve un estado independiente (`null`) y nunca se interpreta como “sin suscripción”.

## Responsive

- Escritorio amplio (>= 1100 px): checkout en dos columnas.
- Laptop / tablet horizontal (900–1099 px): checkout en una columna centrada.
- Tablet vertical y móvil: composición fluida de una columna con controles táctiles.

## Seguridad UX

La pantalla de pago solo se presenta cuando el backend ha confirmado que el usuario necesita pagar. Esto reduce el riesgo de confusión y de intentos de doble cobro.
