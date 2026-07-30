# Catálogo de componentes

Este documento define el comportamiento esperado de los componentes base. El laboratorio visual de `index.html` funciona como referencia ejecutable.

## Botones

Variantes iniciales:

- Principal: acción prioritaria de una pantalla.
- Secundario: acción alternativa.
- Ghost o texto: acción de baja jerarquía.
- Peligro: operación destructiva.
- Deshabilitado: acción temporalmente no disponible.

Estados obligatorios:

- Reposo.
- Hover cuando exista puntero.
- Foco visible.
- Presionado.
- Deshabilitado.
- Cargando, pendiente para una iteración posterior.

No deben existir dos acciones principales compitiendo dentro de la misma agrupación.

## Campos de formulario

Cada campo debe incluir:

- Etiqueta visible.
- Control asociado.
- Ayuda cuando sea necesaria.
- Mensaje de error específico.
- Estado de foco visible.
- `aria-invalid` y `aria-describedby` cuando exista error.

El placeholder nunca reemplaza la etiqueta.

## Badges

Los badges representan estados breves:

- Neutral.
- Información.
- Éxito.
- Advertencia.
- Peligro.

No deben utilizarse para textos extensos ni como único mecanismo para comunicar información crítica.

## Alertas

Las alertas presentan mensajes contextuales persistentes. Incluyen título y descripción. Sus variantes iniciales son información, éxito, advertencia y peligro.

## Toast

El toast confirma una acción breve sin interrumpir el flujo. Debe:

- Desaparecer automáticamente.
- Utilizar una región `aria-live`.
- No contener información indispensable que el usuario no pueda recuperar.

## Tablas

Las tablas se reservan para información realmente tabular. En pantallas pequeñas deben conservar columnas y habilitar desplazamiento horizontal en un contenedor identificable.

## Modal

El modal se implementa con `dialog` nativo y debe:

- Tener título accesible.
- Mover el foco al abrirse.
- Conservar el foco dentro del diálogo.
- Cerrar con Escape.
- Entregar una acción para cerrar o cancelar.
- Devolver el foco al elemento que lo abrió.

## Tarjetas

Las tarjetas agrupan información relacionada. No deben convertirse en el contenedor predeterminado de todo el contenido. La elevación y los bordes deben responder a jerarquía.

## Navegación

En escritorio se presenta horizontalmente. En pantallas medianas o pequeñas se transforma en menú desplegable con estado comunicado mediante `aria-expanded`.

## Criterio de incorporación

Un componente entra al sistema cuando:

1. Resuelve un patrón repetido.
2. Tiene estados definidos.
3. Posee reglas responsive.
4. Puede utilizarse con teclado.
5. Está documentado.
6. Tiene al menos un ejemplo ejecutable.