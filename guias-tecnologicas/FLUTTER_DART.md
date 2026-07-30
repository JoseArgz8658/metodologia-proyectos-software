# Guía Flutter y Dart

## Cuándo utilizarlo

Flutter es adecuado cuando se busca compartir una base de código entre plataformas, mantener una identidad visual consistente y controlar la interfaz con precisión. Debe evaluarse por separado la viabilidad de cada plataforma objetivo.

## Base recomendada

- Versiones de Flutter y Dart fijadas y documentadas.
- Análisis estático activo y sin errores antes de fusionar.
- Arquitectura por funcionalidades y responsabilidades.
- Estado separado de la presentación.
- Navegación centralizada.
- Dependencias encapsuladas detrás de interfaces.
- Configuración por ambientes sin secretos en el repositorio.

## Capas sugeridas

- `presentation`: pantallas, widgets y controladores de interfaz.
- `domain`: entidades, casos de uso y contratos.
- `data`: repositorios, fuentes de datos y modelos externos.
- `core` o `shared`: utilidades transversales justificadas.

No es obligatorio usar todas las capas en proyectos pequeños, pero sí evitar que widgets conozcan directamente detalles de Firebase, HTTP o almacenamiento.

## Reglas de implementación

- Widgets pequeños y con responsabilidad clara.
- Preferir composición sobre herencia.
- Estados de carga, vacío, error y éxito definidos.
- Evitar lógica de negocio dentro de `build`.
- No acceder a servicios globales desde cualquier archivo.
- Modelos inmutables cuando sea razonable.
- Errores tipados y mensajes de usuario separados.
- Responsive validado con anchos reales, no solo un emulador.

## Calidad mínima

- `flutter analyze` sin errores.
- Pruebas unitarias para reglas de negocio.
- Pruebas de widgets para flujos críticos.
- Pruebas manuales en dispositivos objetivo.
- Build release antes del cierre de una fase de entrega.
- Revisión de permisos, firma, versión y tamaño del artefacto.

## Evidencias

Registrar versión del SDK, plataformas probadas, comandos ejecutados, resultados, capturas relevantes y limitaciones conocidas.
