# NOVA UX System · V24.3

Este documento es la regla de coherencia funcional y de contenido de Aprende con NOVA. Complementa `NOVA_DESIGN_SYSTEM.md`.

## 1. Modelo mental del producto

La experiencia debe poder explicarse siempre con la misma secuencia:

**Descubro → pruebo → obtengo una primera lectura → creo mi ruta → practico → demuestro dominio → la familia entiende el progreso.**

Ninguna pantalla debe inventar una etapa distinta para expresar la misma acción.

## 2. Vocabulario oficial

| Término | Significado |
|---|---|
| **Ruta** | Recorrido de aprendizaje asociado al grado del niño. |
| **Misión** | Próxima actividad recomendada por NOVA. |
| **Reto** | Pregunta o interacción individual dentro de una misión. |
| **Primera lectura** | Resultado orientativo de las 3 misiones gratuitas. No se presenta como examen ni diagnóstico clínico. |
| **Refuerzo** | Práctica adicional sobre una habilidad que todavía no alcanza dominio. |
| **Dominio** | Habilidad demostrada según la regla pedagógica del producto. |
| **Progreso** | Evidencia observada de práctica y dominio; no una calificación escolar. |
| **Plan familiar** | Suscripción que habilita continuidad, progreso y acompañamiento. |

No usar sinónimos que creen conceptos paralelos cuando ya existe un término oficial.

## 3. Voz de NOVA

NOVA guía, pregunta, explica y acompaña. No regaña, no ridiculiza, no promete resultados garantizados y no hace la tarea por el niño.

Patrones preferidos:
- `Casi. Miremos una pista.`
- `Probemos otra estrategia.`
- `¿Qué dato te parece importante aquí?`
- `Eso es. Ya encontraste el primer paso.`

Evitar:
- `Incorrecto.`
- `Fallaste.`
- `Respuesta equivocada.`
- lenguaje técnico innecesario sobre IA, modelos o sistemas.

## 4. Voz para familias

Debe ser clara, verificable y accionable.

Priorizar:
- qué practicó;
- qué logró demostrar;
- qué necesita reforzar;
- qué recomienda NOVA como siguiente acción.

Evitar convertir métricas internas en afirmaciones escolares que NOVA no puede verificar.

## 5. Jerarquía de acciones

En cada vista debe existir como máximo **una acción primaria dominante**.

- Primaria: morado NOVA.
- Secundaria: superficie blanca + borde neutro.
- Terciaria/textual: sin competir visualmente con la primaria.
- Acción destructiva: estado semántico de error y confirmación explícita.

El color de materia nunca reemplaza el morado de la acción primaria.

## 6. Formularios

Todos los formularios deben:
- usar etiqueta visible;
- mantener controles de al menos 44 px táctiles;
- mostrar foco visible;
- preservar lo escrito ante errores recuperables;
- describir el error cerca del campo o en un estado global claro;
- deshabilitar una acción solo cuando exista una razón funcional visible.

## 7. Estados

### Carga
Explicar qué está pasando con lenguaje de usuario. Ejemplo: `Preparando tu espacio de aprendizaje…`.

### Éxito
Confirmar qué ocurrió y cuál es el siguiente paso.

### Error recuperable
Explicar qué no fue posible y ofrecer una acción concreta: reintentar, volver o corregir.

### Vacío
No mostrar una superficie muerta. Explicar qué falta para generar información.

## 8. Modales

Todos los modales deben compartir comportamiento:
- bloquear scroll del fondo;
- mover foco al modal al abrir;
- permitir `Escape` cuando exista un control de cierre;
- permitir clic en backdrop cuando el modal sea descartable;
- devolver el foco al elemento de origen al cerrar;
- usar superficie, radio, borde y sombra del sistema NOVA.

La capa `nova-ui.js` implementa este comportamiento sin reemplazar la lógica de negocio del modal.

## 9. Movimiento

El movimiento informa, no decora.

- Hover/foco: rápido, 140–220 ms.
- Cambios de estado: ~220 ms.
- Transiciones de escena: hasta 360 ms.
- Respetar `prefers-reduced-motion`.
- No usar animaciones infinitas en superficies de lectura salvo que tengan función clara.

## 10. Superficies certificadas en V24.3

La coherencia compartida se aplica a:
- landing comercial;
- prueba gratuita;
- acceso y creación de cuenta;
- activación/pago;
- Home `Hoy con NOVA`;
- panel familiar V2;
- modales que utilizan la estructura `.modal` / `.modal-card`;
- botones, inputs, foco y estados semánticos comunes.

## 11. Regla para desarrollo futuro

Antes de crear un color, radio, sombra, botón, input, modal, chip o comportamiento nuevo, comprobar primero si existe un token o patrón en:

1. `design-tokens.css`
2. `nova-ui.css`
3. `NOVA_DESIGN_SYSTEM.md`
4. `NOVA_UX_SYSTEM.md`

Si no existe, se incorpora al sistema antes de usarlo en una pantalla aislada.

## 12. Checklist de certificación

Una pantalla no se considera terminada hasta confirmar:

- [ ] usa tokens NOVA, no colores arbitrarios;
- [ ] tiene una sola acción primaria dominante;
- [ ] botones/inputs respetan tamaño, radio y foco del sistema;
- [ ] color de materia solo comunica contexto académico;
- [ ] estados no dependen únicamente del color;
- [ ] terminología coincide con el vocabulario oficial;
- [ ] mensajes indican siguiente acción;
- [ ] mobile mantiene controles táctiles cómodos;
- [ ] `prefers-reduced-motion` está respetado;
- [ ] modales cumplen foco, Escape y retorno de foco;
- [ ] no presenta estimaciones como hechos medidos;
- [ ] no rompe auth, pagos, progreso ni tutor.
