# Git Flow oficial

## Ramas permanentes

- `main`: estado estable, revisado y publicable.

No se desarrolla directamente en `main`.

## Ramas temporales

- `feature/<fase-o-funcionalidad>`: nuevas capacidades.
- `fix/<problema>`: correcciones no urgentes.
- `hotfix/<problema-critico>`: correcciones urgentes sobre producción.
- `docs/<tema>`: documentación independiente.
- `refactor/<tema>`: cambios internos sin alterar comportamiento esperado.

## Flujo obligatorio

1. Actualizar `main`.
2. Crear una rama desde `main`.
3. Implementar cambios relacionados con un único objetivo.
4. Crear commits pequeños y explicativos.
5. Ejecutar pruebas y actualizar documentación.
6. Abrir pull request hacia `main`.
7. Revisar alcance, diff, riesgos y evidencia.
8. Fusionar cuando se cumpla Definition of Done.
9. Eliminar la rama temporal cuando ya no sea necesaria.

## Convención de commits

Formato recomendado:

`tipo: descripción imperativa y concreta`

Tipos frecuentes:

- `feat`: nueva funcionalidad.
- `fix`: corrección.
- `docs`: documentación.
- `style`: presentación sin cambio lógico.
- `refactor`: reestructuración interna.
- `test`: pruebas.
- `chore`: mantenimiento.
- `ci`: automatización.

Ejemplos:

- `feat: agregar descarga por versión`
- `fix: corregir navegación con control remoto`
- `docs: documentar estrategia de despliegue`

## Pull request mínimo

Debe indicar:

- Objetivo.
- Alcance incluido y excluido.
- Archivos o áreas relevantes.
- Pruebas realizadas.
- Evidencia visual cuando aplica.
- Riesgos, migraciones o compatibilidad.
- Pasos posteriores.

## Reglas de seguridad

- Nunca subir secretos, contraseñas o archivos de credenciales.
- No mezclar formateos masivos con cambios funcionales.
- No fusionar código bloqueado o sin evidencia.
- Los hotfix deben documentarse y reintegrarse al flujo normal.
