# Publicación con GitHub Pages

## Configuración prevista

El laboratorio visual se publica directamente desde:

- Rama: `main`
- Carpeta: `/ (root)`
- Archivo de entrada: `index.html`

## Pasos después de fusionar la Fase 1

1. Entrar al repositorio en GitHub.
2. Abrir **Settings**.
3. En el menú lateral, abrir **Pages**.
4. En **Build and deployment**, seleccionar **Deploy from a branch**.
5. Elegir la rama `main`.
6. Elegir la carpeta `/ (root)`.
7. Presionar **Save**.
8. Esperar a que GitHub complete el despliegue.
9. Abrir la URL indicada por GitHub Pages.

URL prevista:

`https://joseargz8658.github.io/metodologia-proyectos-software/`

## Privacidad

El repositorio puede mantenerse privado si el plan de GitHub permite Pages para repositorios privados. La disponibilidad pública o restringida del sitio depende de las opciones admitidas por el plan y la cuenta. No se debe incluir información sensible en los archivos publicados.

## Diagnóstico rápido

Si aparece un error 404:

- Confirmar que `index.html` existe en la raíz de `main`.
- Confirmar que Pages apunta a `main` y `/ (root)`.
- Revisar la sección **Actions** por errores de despliegue.
- Abrir la URL exacta, respetando el nombre del repositorio.
- Esperar unos minutos después del primer despliegue antes de volver a probar.
