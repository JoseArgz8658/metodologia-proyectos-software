# Guía Firebase

## Alcance

Aplica a proyectos que utilicen Authentication, Firestore, Storage, Cloud Functions, Hosting u otros servicios Firebase.

## Principios

- Diseñar reglas de seguridad antes de publicar datos.
- Aplicar mínimo privilegio.
- Separar ambientes de desarrollo, pruebas y producción.
- No confiar en validaciones exclusivas del cliente.
- Documentar estructura de colecciones, índices y rutas de Storage.
- Estimar costes según lecturas, escrituras, almacenamiento y transferencia.

## Authentication

- Definir proveedores permitidos.
- Gestionar roles mediante datos confiables.
- No usar el correo visible como autorización.
- Contemplar revocación, cierre de sesión y cuentas deshabilitadas.

## Firestore

- Diseñar consultas antes de fijar el modelo.
- Evitar documentos ilimitados o colecciones sin estrategia de paginación.
- Definir estados, fechas y propiedad de los registros.
- Validar tipos y campos obligatorios en reglas.
- Preparar estrategia de migración para cambios incompatibles.

## Storage

- Definir rutas por recurso y propietario.
- Validar autenticación, tamaño y metadatos cuando corresponda.
- Guardar referencias persistentes, no depender de nombres visuales.
- Eliminar archivos huérfanos mediante procesos controlados.

## Validación mínima

- Emuladores o ambiente de prueba.
- Casos permitidos y denegados para cada regla.
- Prueba con usuario anónimo, autenticado, propietario y administrador.
- Verificación de CORS cuando exista cliente web.
- Revisión de cuotas, alertas de presupuesto y recuperación.

## Evidencias

Guardar reglas versionadas, estructura de datos, índices, resultados de prueba, decisiones de autorización y procedimiento de respaldo o exportación.
