# NOVA Design System · Color

## Principio central

La identidad visual de Aprende con NOVA debe mantenerse coherente en landing, app, retos, panel para familias, contenidos y futuras piezas comerciales.

Regla operativa:

- **Morado = NOVA / marca / acción principal.**
- **Color de materia = contexto académico.**
- **Neutros = estructura y lectura.**
- **Colores semánticos = estado.**

El color nunca debe ser la única señal para comunicar un estado. Siempre debe acompañarse de texto, icono o forma.

## Distribución visual recomendada

Como disciplina de diseño, no como fórmula rígida:

- 70% superficies y neutros.
- 20% identidad NOVA.
- 10% color contextual, ilustración o materia.

Esto permite una experiencia infantil y expresiva sin perder claridad ni percepción premium.

## Marca NOVA

| Token | Color | Uso |
|---|---|---|
| `--nova-brand-primary` | `#5B4BFF` | CTA principal, NOVA, elementos activos, progreso global |
| `--nova-brand-primary-hover` | `#3426CF` | Hover, énfasis, fondos oscuros accesibles |
| `--nova-brand-soft` | `#EEECFF` | Fondos, chips y superficies suaves |

El CTA principal no cambia de color por materia. NOVA debe seguir siendo reconocible dentro de Matemáticas, Lenguaje, Ciencias, Sociales e Inglés.

## Materias

| Materia | Vivo | Oscuro accesible | Fondo suave |
|---|---|---|---|
| Matemáticas | `#4F8DF7` | `#2B77C8` | `#EDF3FF` |
| Lenguaje | `#FF7B72` | `#B24A44` | `#FFF0EF` |
| Ciencias | `#42B883` | `#297A59` | `#ECFAF5` |
| Sociales | `#F7BD4B` | `#9B6500` | `#FFF7E7` |
| Inglés | `#2DCBD3` | `#007D8A` | `#EAFDFF` |

### Regla de uso

El color vivo se reserva para ilustración, indicadores, gráficos y acentos. Para texto importante sobre fondo claro se utiliza la variante oscura. En áreas grandes se utiliza el fondo suave.

Ejemplo: una pantalla de Matemáticas puede usar azul en el icono, el chip y el progreso de materia, pero el botón principal sigue siendo morado NOVA.

## Neutros

| Token | Color | Uso |
|---|---|---|
| `--nova-ink` | `#17152A` | Texto principal |
| `--nova-text-secondary` | `#68657B` | Texto secundario |
| `--nova-line` | `#E8E6F3` | Bordes y separadores |
| `--nova-background` | `#F8F7FF` | Fondo general |
| `--nova-surface` | `#FFFFFF` | Tarjetas y superficies |

## Estados semánticos

Los estados no deben reutilizar directamente los colores de materia, aunque compartan familias cromáticas.

| Estado | Color | Fondo |
|---|---|---|
| Correcto / éxito | `#247A4D` | `#EDF8F2` |
| Atención / en progreso | `#8A5A00` | `#FFF6E5` |
| Error / requiere revisión | `#B33A3A` | `#FFF0F0` |
| Información | `#315EBA` | `#EEF3FF` |

Ejemplos correctos:

- `✓ Correcto`
- `! Revisa este paso`
- `→ En progreso`

No usar únicamente un punto verde, amarillo o rojo para transmitir el significado.

## Contraste

- `#5B4BFF` con texto blanco supera 4.5:1 y puede usarse en botones y texto normal.
- Los colores vivos de materia no deben asumir texto blanco automáticamente.
- Las variantes oscuras de las cinco materias se definieron para ofrecer contraste suficiente con blanco en usos de texto normal.
- Amarillo, cian, verde y coral vivos funcionan mejor con texto oscuro cuando se utilizan como fondo.

## Jerarquía cromática

1. NOVA/morado identifica la marca y las acciones primarias.
2. La materia identifica el contexto, no la acción principal.
3. Los neutros sostienen la mayor parte de la interfaz.
4. Los estados semánticos indican resultado o condición.
5. Las ilustraciones pueden ampliar la paleta, pero deben mantener saturación y luminosidad compatibles con la familia NOVA.

## Migración de la app histórica

La app anterior utiliza una paleta espacial oscura propia. No debe recolorearse de golpe porque podría introducir problemas de contraste y romper jerarquías existentes.

La migración se hará por módulo:

1. Home V24.
2. Materias y rutas.
3. Retos.
4. NOVA tutor.
5. Panel familiar.
6. Atlas Animal / laboratorio de división.

Cada pantalla nueva debe usar `design-tokens.css` como fuente de verdad y evitar crear colores hexadecimales nuevos salvo que se incorporen formalmente al sistema.
