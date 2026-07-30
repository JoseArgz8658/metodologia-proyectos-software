# Design tokens

Los design tokens son decisiones visuales expresadas como nombres reutilizables. Los componentes deben consumir tokens semánticos y no valores aislados.

## 1. Colores

### Tokens principales

- `--color-primary`: acciones principales, enlaces destacados y foco de marca.
- `--color-primary-strong`: contraste reforzado y elementos de alta prioridad.
- `--color-primary-soft`: fondos suaves vinculados a la acción principal.
- `--color-accent`: apoyo visual y estados positivos secundarios.
- `--color-background`: fondo general de la aplicación.
- `--color-surface`: tarjetas, paneles y superficies elevadas.
- `--color-surface-muted`: agrupaciones y fondos secundarios.
- `--color-text`: contenido principal.
- `--color-text-muted`: ayuda, metadatos y contenido secundario.
- `--color-border`: divisores, bordes y contornos.

### Tokens de estado

- `--color-info`
- `--color-success`
- `--color-warning`
- `--color-danger`

Los estados no deben comunicarse únicamente por color. Deben acompañarse con texto, icono o etiqueta.

## 2. Espaciado

La escala base utiliza múltiplos de 4 px:

| Token | Valor |
|---|---:|
| `--space-1` | 4 px |
| `--space-2` | 8 px |
| `--space-3` | 12 px |
| `--space-4` | 16 px |
| `--space-5` | 20 px |
| `--space-6` | 24 px |
| `--space-8` | 32 px |
| `--space-10` | 40 px |
| `--space-12` | 48 px |
| `--space-16` | 64 px |
| `--space-20` | 80 px |

Regla: usar el token más cercano antes de introducir una medida nueva.

## 3. Bordes

- `--radius-sm`: controles pequeños, inputs y botones.
- `--radius-md`: tarjetas y paneles.
- `--radius-lg`: contenedores destacados.
- `--radius-pill`: badges y elementos completamente redondeados.

## 4. Elevación

- `--shadow-1`: separación leve.
- `--shadow-2`: panel flotante o navegación móvil.
- `--shadow-3`: modal, tarjeta principal o elemento destacado.

La elevación debe comunicar jerarquía, no decoración arbitraria.

## 5. Movimiento

- `--duration-fast`: respuestas pequeñas e inmediatas.
- `--duration-normal`: transiciones comunes.
- `--ease-standard`: curva general del sistema.

Toda animación debe respetar `prefers-reduced-motion`.

## 6. Temas

Los componentes no deben definir colores específicos para tema claro u oscuro. El cambio se resuelve redefiniendo los tokens bajo `html[data-theme="dark"]`.

## 7. Portabilidad

Al trasladar el sistema a Flutter, los tokens deberán convertirse en clases o extensiones de tema equivalentes, manteniendo el mismo nombre semántico siempre que sea posible.