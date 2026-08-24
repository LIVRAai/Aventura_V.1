# La Expedición v12 — navegación jerárquica

Esta versión conserva la integración productiva de Mercado Pago y toda la lógica educativa existente. El cambio se concentra en la arquitectura de información y navegación.

## Nueva regla de navegación

**Inicio → Materia → Etapa → Actividad**

### Inicio

- muestra un único botón principal: **Continuar donde quedaste**;
- muestra las materias disponibles;
- Perfil es secundario.

### Matemáticas

Presenta el camino de División como una secuencia:

1. **Atlas Animal** — comprender la división mediante 36 misiones;
2. **Academia de División con NOVA** — ejecutar el algoritmo, practicar habilidades y automatizar.

### Dentro de una actividad

No existe menú global. El niño ve únicamente la actividad, las ayudas pertinentes y un regreso claro al nivel anterior.

## Mercado Pago

Se conserva el flujo productivo de v10/v11:

**MercadoPago.js CardForm → CardToken → `/preapproval` con `status: authorized`.**

No vuelvas al flujo `pending → checkout externo`.

## Antes de desplegar

No hace falta modificar Supabase ni crear tablas nuevas. Conserva las variables de producción descritas en `CONFIGURA_VERCEL.md`.

Consulta `REVISION_V12.md` para el detalle de UX.
