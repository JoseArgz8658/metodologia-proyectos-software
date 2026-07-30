# Accesibilidad del Design System

La accesibilidad no se agrega al final del proyecto. Forma parte de la definición de cada componente.

## Reglas mínimas

1. Todo contenido interactivo debe funcionar con teclado.
2. El foco debe ser visible y distinguible.
3. Las etiquetas deben describir claramente la acción o el campo.
4. El color no puede ser el único medio para comunicar un estado.
5. La estructura HTML debe utilizar elementos semánticos antes de agregar roles personalizados.
6. Las animaciones deben respetar `prefers-reduced-motion`.
7. El diseño debe soportar aumento de texto y pantallas pequeñas sin pérdida de información.

## Navegación por teclado

Orden esperado:

1. Enlace para saltar al contenido.
2. Marca o enlace de inicio.
3. Menú principal.
4. Selector de tema.
5. Contenido de la página en orden visual.

No se deben utilizar valores positivos de `tabindex`.

## Foco

Todos los controles interactivos deben mostrar un indicador de foco con contraste suficiente. No debe eliminarse `outline` sin reemplazarlo por una alternativa equivalente o superior.

## Formularios

- Cada control debe tener una etiqueta visible.
- Los errores deben explicar cómo corregir el valor.
- `aria-invalid="true"` identifica un campo inválido.
- `aria-describedby` vincula el control con la explicación del error.
- El placeholder se utiliza solo como ejemplo, nunca como nombre del campo.

## Modal

El laboratorio utiliza `dialog` nativo porque entrega manejo de foco, cierre mediante Escape y semántica adecuada. El modal debe conservar un título vinculado mediante `aria-labelledby`.

## Navegación móvil

El botón del menú debe publicar su estado mediante `aria-expanded` y señalar el elemento controlado mediante `aria-controls`.

## Mensajes dinámicos

Las confirmaciones breves utilizan una región con `role="status"` y `aria-live="polite"`. Los mensajes críticos que requieran acción no deben desaparecer automáticamente.

## Movimiento

Cuando el sistema operativo indique preferencia por movimiento reducido:

- Se desactivan animaciones decorativas.
- Se eliminan transiciones no indispensables.
- El desplazamiento suave deja de ser obligatorio.

## Validación recomendada

Antes de aprobar una fase visual:

- Recorrer la página usando únicamente Tab, Shift+Tab, Enter, Espacio y Escape.
- Probar tema claro y oscuro.
- Revisar el contenido con zoom del navegador al 200 %.
- Revisar anchos aproximados de 320 px, 768 px, 1024 px y 1920 px.
- Ejecutar una herramienta automática como Lighthouse, sin considerarla reemplazo de la revisión manual.

## Objetivo futuro

En fases posteriores se incorporará una matriz de pruebas de accesibilidad por componente y equivalencias específicas para Flutter, Android móvil y Android TV.