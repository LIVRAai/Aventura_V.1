# La Expedición v12 — arquitectura de navegación

## Objetivo

La v12 simplifica la experiencia para que el niño siempre entienda tres cosas:

1. dónde está;
2. qué está aprendiendo;
3. cómo volver al nivel anterior.

La navegación deja de organizarse por funciones (`Inicio / Atlas / Academia / Ajustes`) y pasa a una jerarquía de aprendizaje:

**Inicio → Matemáticas → Etapa → Actividad**

## Cambios principales

### 1. Se elimina el menú inferior global

Atlas, Academia y Ajustes ya no compiten como destinos principales.

### 2. Inicio responde “¿qué hago ahora?”

El elemento principal es **Continuar donde quedaste**. La app calcula el punto actual y lleva al niño a la actividad adecuada.

### 3. Matemáticas se convierte en una página de materia

Dentro de Matemáticas aparece el camino de División:

- Etapa 1 — **Atlas Animal**: comprender.
- Etapa 2 — **Academia de División con NOVA**: ejecutar y automatizar.

La Academia se desbloquea al completar el Atlas, salvo en modo de pruebas.

### 4. Navegación contextual dentro del contenido

Al entrar al Atlas o a la Academia desaparece la navegación global. Solo quedan controles relevantes para la actividad y un botón claro para volver al nivel anterior.

### 5. Perfil y ajustes dejan de ser una sección de aprendizaje

Se accede desde **Perfil** en Inicio o Matemáticas. Ahí permanecen:

- sonido;
- cuenta familiar;
- suscripción;
- modo de pruebas;
- reinicio de progreso.

### 6. Menos redundancia visual

La interfaz usa una base más calmada y reserva los colores intensos para contenido y estados:

- cian: ubicación y navegación;
- amarillo: acción principal;
- violeta: NOVA;
- verde: completado;
- azul marino: estructura.

## Qué no cambia

- Mercado Pago productivo CardForm + CardToken.
- Supabase.
- OpenAI / NOVA.
- 36 misiones del Atlas.
- 8 rutas de la Academia.
- División escrita en cuaderno.
- Diagnóstico de habilidades.
- Progreso local y sincronizado.
- Modo de pruebas.
