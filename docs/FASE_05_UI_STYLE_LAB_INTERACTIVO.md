# Fase 5 — UI Style Lab interactivo y responsive

## Objetivo

Corregir el desbordamiento horizontal del laboratorio visual en dispositivos móviles y permitir modificar decisiones visuales directamente desde la interfaz.

## Cambios realizados

- Contención del ancho en `html`, `body`, cuadrículas, tarjetas y contenido interno.
- Eliminación del desplazamiento horizontal global.
- Desplazamiento horizontal aislado únicamente dentro de tablas que lo requieran.
- Ajustes de tipografía y botones para pantallas pequeñas.
- Panel de controles visuales para densidad, radios, sombras y color principal.
- Selector de variante para el botón de demostración.
- Persistencia de preferencias mediante `localStorage`.
- Acción para restablecer el laboratorio.
- Conservación del tema claro y oscuro, menú móvil, modal y toast.

## Archivos modificados

- `index.html`
- `script.js`
- `lab.css`

## Pruebas recomendadas

1. Abrir GitHub Pages desde un teléfono.
2. Confirmar que la página no se desplaza lateralmente.
3. Comprobar que la tabla conserva su propio desplazamiento horizontal.
4. Cambiar densidad, bordes, sombras y color principal.
5. Recargar la página y confirmar que las preferencias permanecen.
6. Presionar **Restablecer** y verificar los valores iniciales.
7. Probar tema claro y oscuro.
8. Probar menú móvil, modal y toast.
