# La Expedición · Revisión UX V14

## Objetivo

La navegación queda organizada con una sola jerarquía para el niño:

`Inicio → Matemáticas → Etapa → Actividad`

Los controles de cuenta, plan y revisión para adultos no compiten con esa jerarquía.

## Problemas corregidos

### 1. Salida real del acceso de revisión

Antes, el acceso privado guardaba `expeditionOwnerDemoSession` en `sessionStorage`, pero cerrar sesión no eliminaba ese valor. Al recargar, la app volvía a entrar automáticamente en revisión y no permitía regresar de forma limpia a Crear cuenta / Iniciar sesión.

Ahora:
- entrar por la clave de adultos activa una sesión de revisión temporal;
- la revisión protege el progreso automáticamente;
- aparece una barra exclusiva para adultos en cualquier pantalla;
- `Volver al acceso` elimina la sesión de revisión, cierra cualquier sesión familiar y regresa al acceso inicial;
- funciona incluso estando dentro de una misión o una ruta de Academia.

### 2. Modo de pruebas sin callejón sin salida

Al abrir una misión directamente, el panel de pruebas se cerraba y la salida quedaba escondida varios niveles atrás.

Ahora, durante una revisión aparecen siempre:
- `Inicio`;
- `Panel`;
- `Salir de pruebas` / `Volver al acceso`.

La barra solo existe para adultos y nunca aparece en la experiencia normal del niño.

### 3. Perfil infantil pendiente

La pantalla `¿Quién va a explorar?` no tenía forma de volver al acceso si se había iniciado con la cuenta equivocada.

Se agregó `Usar otra cuenta`.

### 4. Separación adulto / niño

En modo de revisión el Perfil ya no muestra controles irrelevantes como si existiera una suscripción familiar real. La interfaz comunica que se trata de una sesión temporal y ofrece una salida clara.

### 5. Mensajes de error

Los errores visibles de autenticación y creación de perfil ya no muestran textos crudos del proveedor. Se traducen a mensajes comprensibles para una familia.

## Navegación final

### Familia

`Acceso → Perfil del niño → Plan → Inicio`

Todas las pantallas intermedias tienen una salida:
- Perfil del niño → `Usar otra cuenta`;
- Plan → `Cerrar sesión`.

### Niño

`Inicio → Matemáticas → Atlas / Academia → Actividad`

- Inicio prioriza `Seguir tu aventura`.
- Matemáticas muestra las etapas.
- Atlas vuelve a Matemáticas.
- Academia vuelve a Matemáticas.
- Una ruta de Academia vuelve a Academia.
- Las herramientas secundarias se abren como modales y no crean rutas paralelas.

### Adulto que revisa

`Acceso → Revisar la app → Inicio`

Desde cualquier punto aparece una barra de revisión con:
- Inicio;
- Panel;
- Volver al acceso.

El avance real no se guarda durante esta sesión.

## Responsive

Se agregó una capa responsive final para:

### PC
- contenido centrado hasta 980 px;
- tarjetas con aire suficiente;
- modales hasta 720/920 px según contenido;
- navegación jerárquica en una sola fila cuando hay espacio.

### Tablet
- conserva tarjetas amplias y controles táctiles;
- mantiene tres materias cuando el ancho lo permite;
- modales ajustados a `100dvh`;
- encabezados no colapsan por textos largos.

### Celular
- inputs a 16 px para evitar zoom automático en iOS;
- modales se comportan como panel inferior;
- formulario de pago pasa a una columna;
- encabezado de actividades se reorganiza en dos filas;
- botones táctiles de mínimo 44 px;
- barra de revisión usa dos filas y no tapa la navegación.

### Pantallas pequeñas / horizontal
- el acceso deja de centrarse verticalmente si no cabe;
- los modales usan hasta 96dvh;
- se reducen elementos decorativos antes que contenido funcional.

## Componentes técnicos conservados

No se modificó la lógica pedagógica ni el modelo comercial:
- 36 misiones del Atlas;
- Academia de División y sus 8 rutas;
- NOVA;
- progreso local + nube;
- Supabase Auth;
- Mercado Pago productivo;
- webhooks;
- CardForm;
- modo de prueba con PIN.
