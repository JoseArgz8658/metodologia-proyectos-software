# Plan de pruebas — Fase 2

## 1. Escritorio

- Abrir la página en un ancho aproximado de 1366 px.
- Confirmar navegación horizontal y secciones alineadas.
- Verificar tarjetas, tabla, modal y toast.
- Cambiar entre tema claro y oscuro.
- Recargar y confirmar que el tema elegido persiste.

## 2. Móvil

- Probar anchos de 320 px, 375 px y 430 px.
- Abrir y cerrar el menú móvil.
- Seleccionar un enlace y confirmar que el menú se cierra.
- Verificar que no exista desbordamiento horizontal general.
- Confirmar que la tabla tenga desplazamiento propio.

## 3. Tablet

- Probar aproximadamente 768 px.
- Confirmar que las grillas pasen a una columna.
- Revisar que botones y campos mantengan tamaño táctil adecuado.

## 4. Pantalla grande o TV

- Probar 1920 px o superior.
- Verificar aumento de controles y legibilidad.
- Navegar mediante teclado usando Tab, Shift+Tab, Enter, Espacio y Escape.

## 5. Accesibilidad

- Activar el enlace "Saltar al contenido principal" mediante Tab.
- Confirmar que todos los controles tengan foco visible.
- Abrir el modal con teclado y cerrarlo con Escape.
- Revisar que el botón de menú publique su estado expandido.
- Confirmar que los errores de formulario tengan texto descriptivo.
- Probar zoom del navegador al 200 %.
- Activar reducción de movimiento en el sistema operativo y comprobar que las transiciones se desactiven.

## 6. Interacciones

- Botón principal: debe mostrar un toast.
- Modal: debe abrir, cancelar, cerrar y confirmar.
- Confirmación del modal: debe cerrar y mostrar un toast.
- Clic sobre el fondo del modal: debe cerrarlo.
- Cambio de tamaño desde móvil a escritorio: debe cerrar el menú móvil abierto.

## Criterio de aprobación

La fase puede fusionarse cuando no existan errores funcionales, pérdida de contenido, controles inaccesibles por teclado ni desbordamientos fuera de los contenedores previstos.