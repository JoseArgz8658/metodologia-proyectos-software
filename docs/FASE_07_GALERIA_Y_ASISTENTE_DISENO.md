# Fase 7 — Galería de estilos, catálogo y asistente de diseño

## Objetivo

Transformar el UI Style Lab en una herramienta visual comprensible, donde cada estilo se represente mediante componentes completos, exista un catálogo amplio para explorar alternativas y una experiencia guiada recomiende una dirección de diseño.

## Galería principal

El `index.html` presenta diez demostraciones completas:

- Glassmorphism.
- Claymorphism.
- Minimalismo y neominimalismo.
- Neomorphism.
- Bento UI.
- Neo-Brutalismo.
- Material Design.
- Diseño editorial.
- Retro Web.
- Cyberpunk.

Cada demostración incluye tarjeta, badge, botones, alerta, campo de texto y checkbox aplicando el lenguaje visual correspondiente.

Los contenedores se normalizaron para mantener textos, botones y campos dentro de sus límites, con filas adaptables, `min-width: 0`, ajuste de palabras y apilado móvil.

## Catálogo independiente

`catalogo-estilos.html` funciona como biblioteca rápida de inspiración y selección.

Incluye 18 estilos:

- Los diez estilos destacados del index.
- Dark UI.
- Aurora Gradient.
- Swiss Style.
- Organic UI.
- Luxury.
- Y2K.
- Monochrome.
- Playful UI.

El usuario puede buscar por nombre o concepto y filtrar por personalidad: profesional, amigable, creativa, futurista o centrada en contenido.

## Asistente

`asistente-diseno.html` contiene cinco pasos:

1. Tipo de página.
2. Personalidad deseada.
3. Densidad de información.
4. Prioridad de accesibilidad.
5. Paleta inicial.

Las respuestas alimentan una puntuación por estilo. Al finalizar se presentan tres recomendaciones ordenadas.

La página de prueba ahora incluye:

- Navegación.
- Hero y llamadas a la acción.
- Visual principal.
- Métricas.
- Alerta.
- Tarjetas de características.
- Contenido en dos columnas.
- Etiquetas.
- Gráfico visual.
- Formulario con checkbox.
- Testimonio.
- Footer.

Todos estos componentes heredan el estilo recomendado y la paleta seleccionada.

## Navegación

- Desde `index.html` se accede al catálogo y al asistente.
- Desde el catálogo se puede regresar al laboratorio o abrir el asistente.
- El asistente permite regresar al laboratorio o abrir el catálogo.

## Responsive

La galería, el catálogo, el formulario y la vista previa utilizan cuadrículas adaptables. En móvil las columnas se apilan, los botones se distribuyen correctamente y no debe existir desplazamiento horizontal global.