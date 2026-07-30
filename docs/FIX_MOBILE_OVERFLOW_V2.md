# Corrección móvil de desbordamiento horizontal v2

## Problema

En algunos navegadores móviles la página seguía permitiendo desplazamiento lateral después de la primera corrección responsive.

## Causas cubiertas

- Cálculos basados en `100vw` que pueden superar el ancho útil del documento.
- Elementos flex y grid con tamaño mínimo implícito.
- Cabecera con marca, menú y selector de tema compitiendo por espacio.
- Controles nativos que conservan un ancho mínimo interno.
- Tabla con `min-width` propagando su tamaño al contenedor.

## Cambios

- Cabecera móvil convertida a una cuadrícula de tres columnas controladas.
- Padding de cabecera y pie calculado con `100%` en lugar de `100vw`.
- Contención de ancho para hijos directos de cuadrículas y filas flexibles.
- Controles con `min-width: 0` y `max-width: 100%`.
- Tabla aislada mediante `contain: inline-size` y scroll interno.
- Ancho explícito y limitado para secciones y tarjetas móviles.
- Bloqueo compatible de desbordamiento horizontal en `html` y `body`.

## Prueba recomendada

1. Abrir GitHub Pages desde un teléfono.
2. Recargar ignorando la caché o abrir en una pestaña privada.
3. Deslizar lateralmente desde distintas secciones.
4. Confirmar que solamente la tabla pueda desplazarse horizontalmente dentro de su propio contenedor.
5. Probar el menú móvil y los controles del UI Style Lab.
