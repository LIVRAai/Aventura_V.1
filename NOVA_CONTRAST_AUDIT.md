# NOVA · Auditoría de contraste e interacción V24.3.1

## Objetivo

Garantizar que los controles de Aprende con NOVA mantengan legibilidad y significado en todos sus estados: normal, hover, active, focus, selected, disabled, success, warning y error.

La auditoría no evalúa únicamente colores aislados. También revisa la cascada CSS, porque una regla legacy puede cambiar el fondo durante una interacción sin cambiar el color del texto.

## Criterios operativos

- Texto normal: objetivo mínimo 4.5:1.
- Componentes, límites y foco: objetivo mínimo 3:1 cuando aplica.
- NOVA usa 4.5:1 como piso interno para texto de controles aunque el texto sea visualmente grande.
- Los estados no dependen únicamente del color.
- Hover y active nunca pueden cambiar solo el fondo si existe riesgo de heredar un color de texto de otra capa.
- Los controles deshabilitados se mantienen legibles; no se depende de bajar opacidad para comunicar el estado.

## Hallazgos corregidos

### 1. Selector de grado heredado

El estado `next-grade` usaba texto verde muy claro y fondo verde translúcido, diseñado originalmente para una superficie oscura. En las nuevas superficies claras podía perder legibilidad.

Corrección:
- estado normal: blanco + `--nova-ink`;
- activo: `--nova-brand-soft` + `--nova-brand-primary-hover`;
- siguiente grado: `--nova-state-success-soft` + `--nova-state-success`;
- bloqueado/deshabilitado: colores propios, sin opacidad reducida.

### 2. Cancelación del plan

El hover legacy de `plan-cancel-link` forzaba texto blanco. Después de migrar el modal a blanco, ese estado podía volver invisible la etiqueta.

Corrección:
- acción de cancelación: rojo semántico sobre fondo claro;
- hover/active: fondo rojo suave + texto rojo;
- `Conservar mi plan`: CTA morado con texto blanco;
- `Sí, cancelar renovación`: acción destructiva secundaria, no un segundo CTA dominante.

### 3. Modal de Plan familiar

El modal conservaba textos pastel, cyan y blanco pensados para un fondo azul oscuro. V24.3 había aclarado el contenedor, por lo que varias combinaciones quedaban frágiles.

Corrección:
- encabezados y valores: `--nova-ink`;
- textos secundarios: `--nova-text-secondary`;
- estado activo: success + success-soft;
- superficies internas: blanco/background + bordes NOVA.

### 4. Variantes strong de materias

La variante anterior de Matemáticas `#2B77C8` sobre `#EDF3FF` alcanzaba aproximadamente 4.12:1, insuficiente para texto normal.

Se oscurecieron las variantes strong para dar margen en fondos blancos y soft:

| Materia | Strong V24.3.1 | Contraste aproximado sobre soft |
|---|---|---:|
| Matemáticas | `#2364AD` | 5.39:1 |
| Lenguaje | `#A8443E` | 5.32:1 |
| Ciencias | `#24714F` | 5.51:1 |
| Sociales | `#8B5A00` | 5.54:1 |
| Inglés | `#006F7A` | 5.62:1 |

### 5. Colores vivos de materia + blanco

No son combinaciones válidas para texto normal:

| Fondo vivo | Blanco aproximado |
|---|---:|
| Matemáticas `#4F8DF7` | 3.24:1 |
| Lenguaje `#FF7B72` | 2.52:1 |
| Ciencias `#42B883` | 2.50:1 |
| Sociales `#F7BD4B` | 1.70:1 |
| Inglés `#2DCBD3` | 1.98:1 |

Regla: los colores vivos se reservan para acento, ilustración y progreso. Si una superficie usa un color vivo, el texto debe ser oscuro. Para chips y texto contextual se usa `soft + strong`.

### 6. Foco visible

El anillo anterior utilizaba morado con 30% de opacidad. Su contraste final dependía del fondo y podía verse demasiado débil.

Corrección:
- `--nova-focus-ring: #3426CF`;
- outline sólido de 3 px;
- offset de 3 px.

### 7. Disabled

Varias reglas legacy reducían controles a `opacity: .42` o `.55`. Esto mezcla texto y fondo con la superficie que hay debajo y hace impredecible el contraste.

Corrección:
- `--nova-disabled-background: #EEECF4`;
- `--nova-disabled-text: #5F5A70`;
- contraste aproximado: 5.64:1;
- opacity 1 para los controles V24 normalizados.

### 8. CTA principal

Se fija explícitamente el color de texto en cada estado para impedir que una regla heredada lo cambie:

| Estado | Fondo | Texto | Contraste aprox. |
|---|---|---|---:|
| Normal | `#5B4BFF` | blanco | 5.39:1 |
| Hover / active | `#3426CF` | blanco | 9.04:1 |
| Disabled | `#EEECF4` | `#5F5A70` | 5.64:1 |

### 9. Texto secundario dentro de botones

El CTA de pago tenía su línea secundaria con `opacity: .72`. Sobre el morado principal, el contraste efectivo se reducía aproximadamente de 5.39:1 a 3.57:1.

Corrección:
- el texto interno del CTA mantiene `opacity: 1`;
- la jerarquía se expresa con tamaño y peso, no reduciendo contraste.

### 10. Etiquetas del tutor

Las etiquetas pequeñas de los mensajes heredaban `opacity: .72`. Sobre fondos `brand-soft` y `math-soft` podían caer alrededor de 4.3–4.4:1.

Corrección:
- en la superficie clara de Pregúntale a NOVA se fuerza opacidad completa;
- las superficies oscuras históricas conservan su tratamiento hasta que se migren como módulo.

### 11. Panel familiar

Los estados `mastered`, `progress`, `reinforce` y `not-started` utilizaban texto pastel pensado para una superficie oscura. Sobre blanco resultaban insuficientes.

Corrección:
- dominado → success / success-soft;
- en progreso → warning / warning-soft;
- reforzar → info / info-soft;
- no iniciado → disabled-text / disabled-background.

### 12. Landing y microtexto

Se detectaron etiquetas de 9–11 px con grises entre ~2.6 y 3.5:1 sobre blanco. También el CTA final usaba un gradiente cuyo extremo más claro dejaba incluso el blanco cerca del límite.

Corrección:
- microtexto funcional pasa a `--nova-text-secondary`;
- badge semanal usa warning semántico;
- CTA final usa gradiente `brand-primary-hover → brand-primary`;
- textos dentro del CTA final son blancos;
- checks de confianza usan success semántico, no el verde vivo de Ciencias.

## Regla de implementación

Todo control nuevo debe definir como una unidad:

1. background;
2. color;
3. border;
4. hover;
5. active;
6. focus-visible;
7. disabled, cuando exista;
8. selected/semantic state, cuando exista.

No se acepta un hover que cambie únicamente `background` cuando el color del texto provenga de otra capa CSS.

Tampoco se acepta reducir la opacidad del texto de un control como mecanismo principal de jerarquía.

## Auditoría automatizada

Ejecutar:

```bash
npm run audit:contrast
```

El script `scripts/contrast-audit.mjs` lee `design-tokens.css`, calcula luminancia relativa y falla si una combinación crítica cae por debajo del mínimo definido.

## Alcance pendiente

Las experiencias históricas oscuras de Atlas/Academia conservan su identidad actual mientras se migran por módulo. Sus controles no deben mezclarse parcialmente con superficies claras: cada módulo debe migrarse como una unidad visual para evitar estados híbridos.
