# La Expedición · V18.1

Corrección puntual de la pantalla de acceso.

## Causa encontrada
El bloque CSS agregado en V18 quedó escrito con secuencias literales `\\n` en lugar de saltos de línea reales. El navegador ignoraba esas reglas, por eso el formulario seguía pegado al lado izquierdo aunque la intención de V18 era centrarlo.

## Corrección
- Se restauraron los saltos de línea reales del bloque V18.
- Se añadió una regla final explícita de centrado para marca, texto, tabs, formulario, divisor y acceso de revisión.
- Se conserva el comportamiento responsive en móvil y tablet.
- No se modifica la lógica de suscripciones, pagos, cancelación, Supabase, NOVA ni progreso.
