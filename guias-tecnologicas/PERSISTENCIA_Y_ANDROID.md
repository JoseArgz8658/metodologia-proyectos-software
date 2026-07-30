# Guía de persistencia local y Android

## Persistencia local

### Criterios de elección

- Volumen y complejidad de los datos.
- Necesidad de consultas, relaciones o índices.
- Datos temporales frente a datos críticos.
- Requisitos offline y sincronización.
- Cifrado y sensibilidad.
- Estrategia de migración.

### Reglas

- No usar preferencias simples como base de datos.
- Versionar esquemas y probar migraciones.
- Definir propiedad, caducidad y limpieza de datos.
- Evitar duplicar la fuente de verdad sin estrategia de sincronización.
- Manejar conflictos y reintentos cuando exista modo offline.
- No almacenar tokens o secretos sin protección adecuada.

## Android móvil

- Revisar permisos mínimos y justificación.
- Probar diferentes tamaños, densidades y versiones soportadas.
- Validar navegación atrás, restauración de estado y rotación si aplica.
- Verificar icono, nombre, package id, versión y firma.
- Probar instalación, actualización y desinstalación.
- Generar y conservar artefactos release trazables.

## Android TV

- Navegación completa con control remoto.
- Foco siempre visible y orden predecible.
- Objetivos grandes y separación adecuada.
- No depender de gestos táctiles.
- Validar botón atrás, inicio y retorno desde instaladores.
- Usar banner e iconos apropiados para launcher TV.
- Probar en resolución, distancia de visualización y hardware real.

## Evidencias

Registrar dispositivos, versiones Android, flujos probados, migraciones, permisos, firma, artefactos, capturas móvil/TV y limitaciones conocidas.
