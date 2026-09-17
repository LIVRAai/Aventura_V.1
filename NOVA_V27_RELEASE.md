# NOVA V27 · Visual-first

V27 cambia el modelo de enseñanza infantil de NOVA: la interfaz deja de usar una animación genérica por materia y pasa a elegir una experiencia visual según la **habilidad cognitiva** del tema y del reto.

## Principio rector

Si un concepto puede mostrarse, manipularse o vivirse, NOVA no lo explica primero con un párrafo. La secuencia es:

**situación visual → acción → consecuencia → concepto**

## Cambios principales

- Nuevo motor `app-v27.js` con clasificación por habilidad.
- Más de 30 rutas visuales de habilidad para Matemáticas, Lenguaje, Ciencias, Sociales e Inglés.
- Escenas específicas para ubicación espacial, valor posicional, fracciones, operaciones, patrones, medición, geometría y datos.
- Escenas específicas para secuencias, gramática, fonética, inferencia y argumentación.
- Procesos animados para ciencias, mapas y líneas de tiempo para sociales, y habitaciones/acciones interactivas para inglés.
- Reducción fuerte del texto explicativo en superficies infantiles. Las pantallas de adulto, autenticación y pago no cambian.
- V26 permanece debajo como capa reversible, pero sus escenas se ocultan cuando V27 está activa.
- Soporte de `prefers-reduced-motion` preservado.

## Regla de calidad

Una escena V27 debe responder afirmativamente a estas preguntas:

1. ¿El movimiento representa el concepto que se está aprendiendo?
2. ¿La acción del niño provoca una consecuencia visual relacionada con ese concepto?
3. ¿El concepto aparece como conclusión y no como párrafo previo?
4. ¿La escena usa poco texto y evita movimiento decorativo innecesario?
