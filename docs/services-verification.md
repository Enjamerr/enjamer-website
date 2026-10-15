# Servicios de inicio

Alcance aprobado: implementar desde los cinco servicios del prototipo consultado
en esta conversación y documentar las diferencias con el documento original.
Se conservan títulos, introducción, descripciones excepto SaaS y enlaces
`/servicios#tab-*`. SaaS utiliza la descripción exacta y aparece primero.

## Reutilización

- `ServiceCard` recibe título, descripción, icono, ilustración, botón, enlace,
  acento, número y variante. SaaS utiliza `featured`.
- Se importa el `TextContent` existente sin modificarlo, con `htmlTag="h2"`,
  `mainId`, `fontFamily="Inter"` y `paragraphPosition="right"`.
- Cristal y botones toman los degradados, borde, desenfoque de 24 px y sombras
  del menú inspeccionado en `origin/jestradaatenjamer-navbar` (9845800).
- Se utilizan SVG locales de estilo lineal; no hay biblioteca de iconos en este
  checkout y no se añaden dependencias.
- Se integra Servicios debajo del encabezado sin modificar otras secciones.

## Diferencias y pendientes

- El menú disponible no contiene la animación de desplazamiento de fondo
  descrita. Los botones reproducen sus degradados y sombras; la animación exacta
  queda pendiente de recibir su implementación.
- El prototipo consultado contiene una ventana de código, no una vista previa
  web. Se conserva esa ilustración según el alcance aprobado.
- No existen páginas de destino implementadas en esta rama. Se conservan los
  enlaces del prototipo, pero falta verificar la navegación al integrar las rutas.
- El degradado superior conecta con el fondo declarado del encabezado `#111820`.
  No hay sección siguiente: verificar la unión inferior al integrarla.
- Validar los acentos por servicio con el manual visual cuando esté disponible.
- Falta revisión visual en navegador de escritorio, tablet y móvil: tacto,
  contraste, desbordamiento y transiciones entre secciones.
- El Issue #10 no se pudo leer con la herramienta web en la inspección previa;
  se verificó la API real de `TextContent` en el código local.
- No hay script de pruebas automatizadas en `package.json`.

## Validación ejecutada

- `npm.cmd run build`: correcto.
- `npm.cmd run lint -- --max-warnings=0`: correcto.
- Archivos de esta tarea formateados con Prettier.
- `npm.cmd run format:check`: falla en 26 archivos previos ajenos a la tarea.
- `git diff --check`: correcto.
- No se ejecutaron pruebas de navegador.
