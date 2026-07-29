# Fase 1 — Fundación del repositorio y laboratorio visual

## Objetivo

Establecer una base técnica y documental mínima, comprensible y ampliable para construir una metodología personal de proyectos de software.

## Alcance

Esta fase incorpora:

- Sitio estático compatible con GitHub Pages.
- Design tokens iniciales mediante variables CSS.
- Componentes visuales base.
- Diseño responsive para móvil, tablet y escritorio.
- Tema claro y oscuro persistente.
- Primer modelo de flujo metodológico.
- Documentación para publicación y validación.

## Archivos principales

- `index.html`: estructura semántica del laboratorio.
- `style.css`: variables, componentes, estados y responsive.
- `script.js`: preferencia y persistencia del tema.
- `docs/GITHUB_PAGES.md`: configuración de publicación.
- `docs/ROADMAP.md`: fases planificadas.

## Criterios de aceptación

- [x] El sitio abre directamente desde `index.html`.
- [x] No depende de frameworks ni procesos de compilación.
- [x] Funciona en pantallas pequeñas y grandes.
- [x] Permite alternar entre tema claro y oscuro.
- [x] Conserva la preferencia de tema en el navegador.
- [x] Incluye fundamentos, componentes y flujo inicial.
- [ ] La rama es fusionada a `main`.
- [ ] GitHub Pages queda habilitado desde `main` y `/root`.
- [ ] La URL publicada es validada visualmente.

## Validación manual sugerida

1. Abrir `index.html` en un navegador.
2. Revisar navegación por anclas.
3. Alternar el tema y recargar la página.
4. Probar anchos aproximados de 360 px, 768 px y 1440 px.
5. Verificar botones, campos, alertas y contraste.
6. Fusionar el pull request solamente después de la revisión.

## Decisiones

- Se usa HTML, CSS y JavaScript nativos para reducir dependencias.
- GitHub Pages publicará desde la raíz del repositorio.
- Las variables CSS serán el origen inicial del futuro Design System.
- Cada ampliación importante deberá realizarse en una rama y fase propia.
