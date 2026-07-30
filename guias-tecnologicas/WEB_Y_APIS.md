# Guía de aplicaciones web y APIs REST

## Aplicaciones web

### Base mínima

- HTML semántico y accesible.
- Diseño responsive desde 320 px.
- Recursos optimizados y carga diferida cuando corresponda.
- Variables de entorno separadas de secretos.
- Manejo explícito de carga, error, vacío y ausencia de conexión.
- Compatibilidad definida para navegadores objetivo.

### Calidad

- Sin scroll horizontal global accidental.
- Navegación completa mediante teclado.
- Contraste, etiquetas y foco visibles.
- Metadatos, favicon y SEO básico cuando el contenido sea público.
- Revisión de rendimiento, caché y tamaño de recursos.

## APIs REST

### Diseño

- Recursos y rutas consistentes.
- Métodos HTTP usados según intención.
- Versionado cuando existan consumidores externos.
- Contratos de entrada y salida documentados.
- Códigos de estado coherentes.
- Paginación, filtros y orden definidos.
- Idempotencia en operaciones que lo requieran.

### Seguridad

- Autenticación y autorización separadas.
- Validación de todos los datos de entrada.
- Límites de tamaño, frecuencia y tiempo de ejecución.
- Secretos fuera del código.
- Registros sin credenciales ni datos sensibles.
- CORS restringido a los orígenes necesarios.

### Operación

- Trazabilidad mediante identificador de solicitud.
- Logs estructurados.
- Métricas de latencia, errores y disponibilidad.
- Estrategia de compatibilidad y retiro de versiones.
- Procedimiento de rollback.

## Evidencias

Registrar matriz de navegadores, auditorías responsive y accesibilidad, contrato de API, colección de pruebas, respuestas de error, límites y resultados de rendimiento.
