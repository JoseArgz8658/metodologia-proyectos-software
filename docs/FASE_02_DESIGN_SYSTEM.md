# Fase 2 — Design System

## Objetivo

Convertir el laboratorio visual inicial en un sistema de diseño reutilizable, documentado y preparado para trasladarse posteriormente a proyectos web, Flutter y Android TV.

## Alcance

La fase definirá y demostrará:

- Colores primarios, secundarios, neutros y semánticos.
- Temas claro y oscuro.
- Escala tipográfica.
- Sistema de espaciado.
- Radios de borde.
- Sombras y elevaciones.
- Tamaños mínimos de interacción.
- Estados de componentes: normal, hover, focus, active, disabled y loading.
- Botones, campos, selectores, tarjetas, alertas, badges, tablas, navegación y modales.
- Reglas responsive para móvil, tablet, escritorio y TV.
- Principios básicos de accesibilidad.

## Estructura prevista

```text
design-system/
├── README.md
├── tokens/
│   ├── colors.css
│   ├── typography.css
│   ├── spacing.css
│   ├── radius.css
│   ├── shadows.css
│   └── motion.css
├── components/
│   ├── buttons.css
│   ├── forms.css
│   ├── cards.css
│   ├── feedback.css
│   ├── navigation.css
│   └── data-display.css
└── guidelines/
    ├── accessibility.md
    ├── responsive.md
    └── naming.md
```

## Criterios de aceptación

- Los tokens no deben depender de un proyecto específico.
- Los componentes deben utilizar tokens en vez de valores arbitrarios repetidos.
- El laboratorio debe mostrar visualmente todos los estados importantes.
- El modo oscuro debe conservar contraste y jerarquía.
- La navegación por teclado debe ser visible.
- La interfaz debe funcionar desde 320 px de ancho.
- Deben quedar documentadas equivalencias futuras para Flutter.

## Estrategia de implementación

1. Separar tokens globales del CSS actual.
2. Crear componentes reutilizables por categoría.
3. Ampliar el laboratorio visual.
4. Incorporar controles para inspeccionar estados y temas.
5. Validar responsive, teclado y contraste.
6. Documentar decisiones y equivalencias multiplataforma.

## Fuera de alcance

- Construcción de una aplicación productiva.
- Copiar componentes directamente desde AppNest u otros repositorios.
- Definir la identidad visual definitiva de todos los proyectos futuros.
- Crear todavía las plantillas completas de Flutter o Firebase.

## Estado

En desarrollo sobre la rama `feature/fase-02-design-system`.
