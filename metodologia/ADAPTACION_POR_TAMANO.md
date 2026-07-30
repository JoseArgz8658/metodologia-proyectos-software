# Adaptación por tamaño y riesgo

La metodología no debe generar burocracia innecesaria. Se adapta según complejidad, impacto, cantidad de personas, integraciones, datos y criticidad.

## Nivel 1 — Proyecto pequeño

Ejemplos: landing, prototipo, herramienta personal o automatización simple.

- README ampliado como documento central.
- Backlog breve.
- Arquitectura resumida.
- Una rama por cambio relevante.
- Pruebas manuales documentadas.
- Checklist de publicación.

## Nivel 2 — Proyecto estándar

Ejemplos: aplicación móvil, sistema web, API o proyecto académico completo.

- Documentos separados para requisitos, arquitectura y fases.
- ADR para decisiones relevantes.
- Git Flow por funcionalidades.
- Pruebas unitarias y funcionales en áreas críticas.
- Ambientes diferenciados cuando corresponda.
- Changelog, releases y rollback.

## Nivel 3 — Proyecto crítico o de equipo

Ejemplos: datos sensibles, pagos, salud, alta concurrencia, múltiples equipos o dependencia operacional.

- Trazabilidad requisito–implementación–prueba.
- Revisión formal de arquitectura, seguridad y privacidad.
- Matriz de riesgos y responsables.
- CI/CD con controles obligatorios.
- Pruebas automatizadas amplias.
- Observabilidad, respaldo y recuperación.
- Plan de incidentes y continuidad.
- Aprobaciones y evidencia de liberación.

## Criterios para subir de nivel

Aumentar el rigor cuando exista alguno de estos factores:

- Datos personales o sensibles.
- Impacto financiero o contractual.
- Usuarios externos o alta exposición pública.
- Múltiples integraciones.
- Dificultad de reversión.
- Alta disponibilidad.
- Más de una persona o equipo desarrollando.
- Requisitos legales o regulatorios.

Reducir documentos nunca significa eliminar decisiones críticas.
