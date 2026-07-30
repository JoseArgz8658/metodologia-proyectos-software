# Fase 4 — Plantillas reutilizables

## Objetivo

Convertir la metodología definida en las fases anteriores en artefactos copiables y adaptables para iniciar proyectos reales con rapidez, consistencia y trazabilidad.

## Alcance

Esta fase incorporará plantillas listas para reutilizar en proyectos pequeños, estándar y críticos.

### Plantillas de proyecto

- README inicial.
- Brief de proyecto.
- Alcance y exclusiones.
- Requisitos funcionales y no funcionales.
- Roadmap.
- Plan por fases.
- Registro de riesgos.
- Registro de decisiones técnicas.
- Checklist de inicio, entrega y cierre.

### Plantillas de GitHub

- Pull request.
- Reporte de errores.
- Solicitud de funcionalidad.
- Configuración de issues.
- Convenciones de ramas y commits.

### Plantillas de arquitectura y calidad

- Documento de arquitectura.
- ADR.
- Plan de pruebas.
- Matriz de trazabilidad.
- Plan de despliegue y rollback.
- Registro de versiones y changelog.

### Kits por tamaño de proyecto

- Kit mínimo para proyectos pequeños.
- Kit estándar para aplicaciones profesionales.
- Kit ampliado para proyectos críticos o colaborativos.

## Principios

1. Cada plantilla debe indicar cuándo usarla.
2. Los campos editables deben ser evidentes.
3. Ninguna plantilla debe depender de una tecnología específica, salvo las variantes expresamente identificadas.
4. Deben poder copiarse sin arrastrar documentación interna de este repositorio.
5. Cada kit debe evitar documentación innecesaria para su nivel de complejidad.

## Estructura prevista

```text
templates/
├── README.md
├── project/
├── github/
├── architecture/
├── quality/
├── delivery/
└── kits/
```

## Criterios de aceptación

- Existe un catálogo documentado de plantillas.
- Cada archivo incluye instrucciones de uso y campos para completar.
- Hay kits diferenciados por tamaño de proyecto.
- Las plantillas de GitHub pueden copiarse directamente a `.github/`.
- Las plantillas no contienen información específica de AppNest ni de otros repositorios.
- Se incluye un procedimiento para iniciar un proyecto nuevo usando el kit correspondiente.
- La fase cuenta con checklist, plan de pruebas, resumen y PR propio.
