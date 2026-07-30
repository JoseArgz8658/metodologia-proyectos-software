# Ciclo de vida oficial

Cada etapa tiene entradas, actividades, salidas y una puerta de control. No todas deben durar lo mismo, pero ninguna decisión crítica debe quedar implícita.

## 1. Inicio y contexto

**Entrada:** idea, necesidad u oportunidad.

**Actividades:** definir problema, patrocinador, usuarios, propósito, restricciones y éxito esperado.

**Salida:** brief inicial y decisión de continuar, reformular o descartar.

**Puerta:** el problema está descrito sin depender de una solución predeterminada.

## 2. Descubrimiento

Investigar usuarios, procesos actuales, alternativas, dependencias, datos y restricciones reales.

**Salida:** hallazgos, hipótesis, mapa de actores y riesgos iniciales.

**Puerta:** existe evidencia suficiente para formular requisitos.

## 3. Requisitos y alcance

Definir requisitos funcionales, no funcionales, reglas de negocio, exclusiones y criterios de aceptación.

**Salida:** backlog inicial priorizado y alcance de la primera entrega.

**Puerta:** cada elemento prioritario es comprensible, verificable y estimable.

## 4. Arquitectura y riesgos

Seleccionar tecnologías, estructura, integraciones, almacenamiento, seguridad, observabilidad y estrategia de despliegue.

**Salida:** diagrama de contexto, decisiones ADR y registro de riesgos.

**Puerta:** los riesgos críticos tienen respuesta y la solución puede evolucionar sin bloquear la primera entrega.

## 5. Diseño UI/UX

Construir flujos, wireframes, prototipos, estados, responsive y accesibilidad.

**Salida:** prototipo validado y especificaciones visuales suficientes.

**Puerta:** los flujos críticos pueden recorrerse y sus estados están definidos.

## 6. Planificación por fases

Dividir el proyecto en incrementos demostrables con objetivo, alcance, dependencias, criterios de aceptación y pruebas.

**Salida:** roadmap y plan de la fase activa.

**Puerta:** la siguiente fase puede ejecutarse sin decisiones críticas pendientes.

## 7. Preparación técnica

Crear repositorio, ramas, estructura, entornos, configuración, secretos, reglas y automatizaciones mínimas.

**Salida:** proyecto ejecutable y base preparada.

**Puerta:** cualquier integrante autorizado puede levantar el proyecto siguiendo la documentación.

## 8. Construcción incremental

Implementar por ramas pequeñas, commits explicativos, pruebas frecuentes y PR revisables.

**Salida:** incremento funcional integrado.

**Puerta:** cumple Definition of Done y no deja deuda crítica oculta.

## 9. Validación y pruebas

Ejecutar pruebas funcionales, técnicas, visuales, de accesibilidad, seguridad y regresión según el riesgo.

**Salida:** evidencia de pruebas, defectos conocidos y decisión de liberación.

**Puerta:** los defectos bloqueantes están resueltos y los restantes están aceptados explícitamente.

## 10. Entrega y despliegue

Versionar, preparar release notes, respaldos, rollback, despliegue y verificación posterior.

**Salida:** versión publicada y verificable.

**Puerta:** el sistema funciona en el entorno objetivo y existe capacidad de recuperación.

## 11. Operación y mantenimiento

Observar fallos, rendimiento, costos, seguridad, feedback y evolución del producto.

**Salida:** backlog de mantenimiento y mejoras priorizadas.

## 12. Cierre y aprendizaje

Cerrar alcance, archivar decisiones, registrar métricas, deuda, lecciones aprendidas y próximos pasos.

**Salida:** informe de cierre y conocimiento reutilizable.
