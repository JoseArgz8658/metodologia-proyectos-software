# Guía CI/CD con GitHub Actions

## Objetivo

Automatizar validaciones repetibles y reducir entregas defectuosas sin ocultar el control humano necesario.

## Pipeline mínimo

1. Instalar versiones fijadas de herramientas.
2. Restaurar dependencias de forma reproducible.
3. Ejecutar formato y análisis estático.
4. Ejecutar pruebas automatizadas.
5. Construir el artefacto.
6. Publicar evidencias o artefactos cuando corresponda.

## Reglas

- Los workflows deben estar versionados.
- Usar permisos mínimos para `GITHUB_TOKEN`.
- Guardar secretos solamente en mecanismos seguros de GitHub.
- Fijar versiones de acciones; evitar referencias ambiguas.
- Separar validación de PR y despliegue.
- Proteger ambientes productivos con aprobación cuando el riesgo lo requiera.
- Evitar desplegar desde ramas no autorizadas.
- Definir concurrencia para impedir despliegues superpuestos.
- Conservar logs y artefactos durante un periodo definido.

## Estrategia de despliegue

- Desarrollo: automatización rápida y datos no productivos.
- Staging: validación equivalente a producción.
- Producción: aprobación, versión identificable y rollback preparado.

## Fallos

Todo fallo debe indicar claramente el paso, comando, evidencia y acción recomendada. No deben ignorarse pruebas inestables; deben repararse o aislarse con una decisión documentada.

## Evidencias

Conservar ejecución exitosa, SHA, versión, artefacto, ambiente, aprobador, fecha, resultado de smoke test y procedimiento de rollback.
