# NOVA V24.4 · Unificación de experiencias históricas

## Objetivo

Eliminar las “islas visuales” que todavía hacían que Atlas Animal, Academia de División y el Cuaderno parecieran productos distintos dentro de Aprende con NOVA.

V24.4 no cambia contenido pedagógico, progreso, Mercado Pago, Supabase ni reglas de negocio. La migración se implementa como capas CSS reversibles sobre V24.3.1.

## Principio

**Morado = NOVA y acción primaria.**  
**Color de materia = contexto.**  
**Neutros = estructura.**  
**Success / warning / info / error = estado.**

Un estado nunca depende únicamente del color.

## Atlas Animal

Se migran:

- intro de aventura;
- encabezado y navegación;
- mundo actual;
- tarjeta de misión;
- progreso;
- banco de criaturas y zonas;
- respuestas;
- Pista / Preguntar a NOVA / Comprobar;
- recompensa;
- final de recorrido;
- mapa y bestiario;
- tutor contextual.

La aventura conserva animales, historia y personalidad, pero ya no depende del fondo azul oscuro para ser legible.

### Interacciones

- normal: blanco + ink;
- hover: superficie neutra clara;
- seleccionado: brand-soft + brand-primary-hover;
- CTA: brand-primary + blanco;
- completado/recompensa: success-soft + success.

## Academia de División

Se mantienen las cuatro condiciones reales del motor:

- `new` → neutral;
- `progress` → info;
- `reinforce` → warning;
- `strong` → success.

La etiqueta textual se conserva siempre; el color es apoyo y no el único indicador.

Se migran:

- bienvenida;
- progreso global;
- grupos de habilidades;
- rutas;
- reporte de habilidades;
- cabecera de práctica;
- explicación de NOVA;
- elecciones;
- diagramas y múltiplos;
- campos numéricos;
- feedback;
- CTA de continuidad.

## Cuaderno / procedimiento escrito

Se migran:

- cabecera de habilidad;
- hero del ejercicio;
- guía DIVIDO → MULTIPLICO → RESTO → BAJO → REPITO;
- papel/procedimiento;
- estados de cada paso;
- diario de operación;
- tarjeta NOVA;
- microprocedimiento;
- inputs;
- ayuda;
- chat;
- cierre de división.

Estados de procedimiento:

- pendiente → neutral;
- activo → brand-soft;
- terminado → success-soft.

## Shell de aprendizaje

Cuando `body.content-focus` está activo, la página completa usa `--nova-background`. Esto evita el defecto visual de una experiencia clara montada encima del fondo oscuro histórico.

El modo de revisión para adultos también usa el mismo shell y reserva el rojo semántico para salir de la revisión.

## Accesibilidad e interacción

- botones deshabilitados no usan opacidad como mecanismo principal;
- foco visible: anillo `--nova-focus-ring`;
- selección no equivale a respuesta correcta;
- hover y active fijan texto y superficie de forma conjunta;
- reduced motion desactiva animaciones no esenciales;
- controles mantienen tamaño táctil suficiente.

## Arquitectura

Capas nuevas:

- `nova-legacy-learning-v24-4.css`: migración visual de Atlas, Academia y Cuaderno;
- `nova-legacy-states-v24-4.css`: estados semánticos, disabled, foco y tutor contextual;
- `nova-legacy-shell-v24-4.css`: fondo y chrome global de vistas históricas.

No se elimina `styles-legacy.css`; se mantiene como rollback y fuente de estructura histórica.

## Auditoría

Ejecutar:

```bash
npm run audit:contrast
npm run audit:ui
```

`audit:contrast` valida combinaciones críticas del Design System.  
`audit:ui` confirma que las capas V24.4, estados obligatorios, foco, disabled, reduced-motion y shell están presentes.

## Criterio de certificación V24.4

El pack se considera listo cuando:

1. Home → Matemáticas → Atlas no presenta salto a tema oscuro.
2. Atlas → mapa/bestiario → misión conserva legibilidad y retorno.
3. Atlas → Academia no cambia el lenguaje de botones o estados.
4. Academia distingue nuevo/en progreso/reforzar/fuerte sin depender solo del color.
5. Cuaderno conserva la secuencia pedagógica y los estados de procedimiento.
6. Tutor contextual mantiene la misma identidad de NOVA.
7. Desktop y mobile no presentan texto blanco sobre superficies claras ni opacidades que reduzcan legibilidad.
8. Build y rutas permanecen estables.
