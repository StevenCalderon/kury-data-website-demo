# Guía del Equipo - Kurydata Website

> **Nota:** Este archivo es de uso interno. No se sube al repositorio.

---

## Tabla de Contenidos

1. [¿Qué es Astro?](#qué-es-astro)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Cómo funcionan los archivos .astro](#cómo-funcionan-los-archivos-astro)
4. [CSS Modules](#css-modules)
5. [Variables CSS](#variables-css)
6. [Secciones a Desarrollar](#secciones-a-desarrollar)
7. [Cómo crear una sección](#cómo-crear-una-sección)
8. [Asignación de Tareas](#asignación-de-tareas)
9. [Comandos](#comandos)

---

## ¿Qué es Astro?

Astro es un framework para crear sitios web estáticos. Lo elegimos porque:

- **Carga rápida** — No envía JavaScript innecesario al navegador
- **Buen SEO** — Genera HTML estático que Google indexa fácilmente
- **Componentes** — Podemos reutilizar código (Header, Footer, Buttons)
- **Fácil de aprender** — La sintaxis es muy similar a HTML

---

## Estructura del Proyecto

```
src/
├── components/
│   ├── layout/                    # Componentes de estructura
│   │   ├── Header/
│   │   │   ├── Header.astro
│   │   │   └── Header.module.css
│   │   └── Footer/
│   │       ├── Footer.astro
│   │       └── Footer.module.css
│   │
│   ├── sections/                  # Secciones de la landing
│   │   ├── Hero/
│   │   ├── TrustedBy/
│   │   ├── Services/
│   │   ├── ValueProposition/
│   │   ├── Industries/
│   │   ├── TechStack/
│   │   ├── Stats/
│   │   └── Contact/
│   │
│   └── ui/                        # Componentes pequeños reutilizables
│       ├── Button/
│       └── IndustryBadge/
│
├── layouts/
│   └── MainLayout.astro           # Plantilla base (incluye Header y Footer)
│
├── pages/
│   └── index.astro                # Página principal
│
├── styles/
│   └── global.css                 # Variables CSS globales
│
└── public/
    └── images/                    # Imágenes, logos, iconos
```

### ¿Dónde pongo cada cosa?

| Si necesitas... | Créalo en... |
|-----------------|--------------|
| Una sección nueva de la landing | `src/components/sections/NombreSeccion/` |
| Un componente reutilizable (botón, card, badge) | `src/components/ui/NombreComponente/` |
| Imágenes, logos, iconos | `public/images/` |
| Modificar colores o espaciados globales | `src/styles/global.css` |

---

## Cómo funcionan los archivos .astro

Un archivo `.astro` tiene 3 partes:

```astro
---
// 1. FRONTMATTER (JavaScript)
// Aquí van imports y lógica
import styles from './MiComponente.module.css';
import Button from '../../ui/Button/Button.astro';

const items = ['Uno', 'Dos', 'Tres'];
---

<!-- 2. TEMPLATE (HTML) -->
<section class={styles.section}>
  <h1 class={styles.title}>Hola Mundo</h1>
  
  {items.map(item => (
    <p>{item}</p>
  ))}
  
  <Button href="/contact">Contactar</Button>
</section>

<!-- 3. ESTILOS (opcional, solo si no usas CSS Module) -->
<style>
  /* Estilos scoped */
</style>
```

### Puntos clave

- El frontmatter (`---`) es opcional
- Las llaves `{}` insertan JavaScript en el HTML
- Usamos CSS Modules para los estilos (archivo separado)

---

## CSS Modules

Usamos CSS Modules para evitar colisiones de nombres entre componentes.

### Estructura

```
MiComponente/
├── MiComponente.astro
└── MiComponente.module.css    ← Nota el ".module.css"
```

### En el CSS

```css
/* MiComponente.module.css */
.section {
  padding: var(--spacing-24) var(--spacing-6);
}

.title {
  font-size: var(--font-size-4xl);
  color: var(--color-white);
}
```

### En el componente

```astro
---
import styles from './MiComponente.module.css';
---

<section class={styles.section}>
  <h1 class={styles.title}>Título</h1>
</section>
```

### ¿Qué pasa en el navegador?

Las clases se transforman automáticamente para ser únicas:

```html
<!-- Tu código -->
<section class={styles.section}>

<!-- En el navegador -->
<section class="section_x7k2m">
```

Esto significa que puedes usar `.title` en varios componentes sin que colisionen.

---

## Variables CSS

Todas las variables están en `src/styles/global.css`. Úsalas siempre.

### Colores

```css
var(--color-primary-500)    /* #3b82f6 - Azul principal */
var(--color-primary-600)    /* #2563eb - Azul botones */
var(--color-primary-700)    /* #1d4ed8 - Azul hover */

var(--color-dark-800)       /* #1e293b - Fondo claro */
var(--color-dark-900)       /* #0f172a - Fondo medio */
var(--color-dark-950)       /* #020617 - Fondo oscuro */

var(--color-gray-400)       /* #9ca3af - Texto secundario */
var(--color-white)          /* #ffffff - Texto principal */
```

### Espaciado

```css
var(--spacing-1)     /* 0.25rem (4px) */
var(--spacing-2)     /* 0.5rem (8px) */
var(--spacing-4)     /* 1rem (16px) */
var(--spacing-6)     /* 1.5rem (24px) */
var(--spacing-8)     /* 2rem (32px) */
var(--spacing-12)    /* 3rem (48px) */
var(--spacing-24)    /* 6rem (96px) */
```

### Tipografía

```css
var(--font-size-sm)      /* 0.875rem */
var(--font-size-base)    /* 1rem */
var(--font-size-lg)      /* 1.125rem */
var(--font-size-xl)      /* 1.25rem */
var(--font-size-2xl)     /* 1.5rem */
var(--font-size-4xl)     /* 2.25rem */
var(--font-size-6xl)     /* 3.75rem */

var(--font-weight-normal)     /* 400 */
var(--font-weight-medium)     /* 500 */
var(--font-weight-semibold)   /* 600 */
var(--font-weight-bold)       /* 700 */
```

### Layout

```css
var(--max-width)         /* 80rem - Ancho máximo del contenido */
var(--header-height)     /* 4rem - Altura del header */
var(--border-radius)     /* 0.5rem - Bordes redondeados */
```

---

## Secciones a Desarrollar

| # | Componente | Descripción | Estado |
|---|------------|-------------|--------|
| 1 | `Hero` | Título principal + botones CTA | ✅ |
| 2 | `TrustedBy` | Logos de empresas cliente | 🔴 |
| 3 | `Services` | 4 tarjetas de servicios | 🔴 |
| 4 | `ValueProposition` | Métricas (72%) + mockup de app | 🔴 |
| 5 | `Industries` | Lista de industrias con badges | ✅ |
| 6 | `TechStack` | Tecnologías y filtros | 🔴 |
| 7 | `Stats` | Métricas (+500K, <200ms, 24/7) | 🔴 |
| 8 | `Contact` | Formulario de contacto | 🔴 |

---

## Cómo crear una sección

### Paso 1: Crear la carpeta y archivos

```bash
mkdir src/components/sections/TrustedBy
```

Crear dos archivos:
- `TrustedBy.astro`
- `TrustedBy.module.css`

### Paso 2: Escribir el CSS

```css
/* TrustedBy.module.css */
.section {
  padding: var(--spacing-24) var(--spacing-6);
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
}

.title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  text-align: center;
  color: var(--color-white);
}

/* Responsive */
@media (min-width: 768px) {
  .title {
    font-size: var(--font-size-5xl);
  }
}
```

### Paso 3: Escribir el componente

```astro
---
import styles from './TrustedBy.module.css';
---

<section class={styles.section}>
  <div class={styles.container}>
    <h2 class={styles.title}>
      Empowering the Vision of Global Leaders
    </h2>
    <!-- Más contenido aquí -->
  </div>
</section>
```

### Paso 4: Verificar en el navegador

El componente ya está importado en `index.astro`. Solo guarda los cambios y revisa en `http://localhost:4321`

---

## Asignación de Tareas

| Dev | Sección | Estado |
|-----|---------|--------|
| — | Hero | 🟢 Completado |
| — | Industries | 🟢 Completado |
| Dev 1 | TrustedBy | 🔴 Pendiente |
| Dev 2 | Services | 🔴 Pendiente |
| Dev 3 | ValueProposition | 🔴 Pendiente |
| Dev 4 | TechStack | 🔴 Pendiente |
| Dev 5 | Stats | 🔴 Pendiente |
| Dev 6 | Contact | 🔴 Pendiente |

**Estados:**
- 🔴 Pendiente
- 🟡 En progreso
- 🟢 Completado

---

## Comandos

```bash
# Instalar dependencias (solo la primera vez)
npm install

# Iniciar servidor de desarrollo
npm run dev
# → http://localhost:4321

# Crear build de producción
npm run build

# Previsualizar build
npm run preview
```

---

## Recursos

- [Documentación de Astro](https://docs.astro.build/es/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Guía de Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Guía de Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
