# Kurydata Landing Page - Organización del Trabajo

## Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── Header/
│   │   │   ├── Header.astro
│   │   │   └── Header.module.css
│   │   └── Footer/
│   │       ├── Footer.astro
│   │       └── Footer.module.css
│   │
│   ├── sections/
│   │   ├── Hero/              ✅ Ejemplo creado
│   │   │   ├── Hero.astro
│   │   │   └── Hero.module.css
│   │   ├── TrustedBy/         ← Crear
│   │   ├── Services/          ← Crear
│   │   ├── ValueProposition/  ← Crear
│   │   ├── Industries/        ← Crear
│   │   ├── TechStack/         ← Crear
│   │   ├── Stats/             ← Crear
│   │   └── Contact/           ← Crear
│   │
│   └── ui/
│       └── Button/
│           ├── Button.astro
│           └── Button.module.css
│
├── layouts/
│   └── MainLayout.astro
│
├── pages/
│   └── index.astro
│
└── styles/
    └── global.css          ← Variables CSS
```

---

## Secciones a Desarrollar

| # | Componente | Descripción |
|---|------------|-------------|
| 1 | `Hero` | Título principal + botones CTA ✅ |
| 2 | `TrustedBy` | Logos de clientes |
| 3 | `Services` | 4 tarjetas de servicios |
| 4 | `ValueProposition` | Métricas (72%) + mockup |
| 5 | `Industries` | Lista de industrias |
| 6 | `TechStack` | Tecnologías usadas |
| 7 | `Stats` | Métricas (+500K, 24/7) |
| 8 | `Contact` | Formulario de contacto |

---

## Cómo crear una nueva sección

### 1. Crear la carpeta y archivos

```bash
mkdir src/components/sections/TrustedBy
touch src/components/sections/TrustedBy/TrustedBy.astro
touch src/components/sections/TrustedBy/TrustedBy.module.css
```

### 2. Estructura del CSS Module

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
  /* estilos... */
}
```

### 3. Estructura del componente Astro

```astro
---
import styles from './TrustedBy.module.css';
---

<section class={styles.section}>
  <div class={styles.container}>
    <h2 class={styles.title}>Empowering the Vision of Global Leaders</h2>
    <!-- contenido -->
  </div>
</section>
```

### 4. Importar en index.astro

```astro
---
import TrustedBy from '../components/sections/TrustedBy/TrustedBy.astro';
---

<MainLayout>
  <Hero />
  <TrustedBy />
  <!-- más secciones... -->
</MainLayout>
```

---

## Variables CSS disponibles

Ver `src/styles/global.css` para la lista completa.

```css
/* Colores */
var(--color-primary-500)   /* Azul principal */
var(--color-dark-950)      /* Fondo oscuro */
var(--color-gray-400)      /* Texto secundario */

/* Espaciado */
var(--spacing-4)           /* 1rem */
var(--spacing-6)           /* 1.5rem */
var(--spacing-24)          /* 6rem */

/* Tipografía */
var(--font-size-lg)        /* 1.125rem */
var(--font-size-4xl)       /* 2.25rem */
var(--font-weight-bold)    /* 700 */
```

---

## Asignación de Tareas

| Dev | Sección | Estado |
|-----|---------|--------|
| - | Hero | 🟢 |
| Dev 1 | TrustedBy | 🔴 |
| Dev 2 | Services | 🔴 |
| Dev 3 | ValueProposition | 🔴 |
| Dev 4 | Industries | 🔴 |
| Dev 5 | TechStack | 🔴 |
| Dev 6 | Stats | 🔴 |
| Dev 7 | Contact | 🔴 |

🔴 Pendiente | 🟡 En progreso | 🟢 Completado

---

## Comandos

```bash
npm install      # Instalar dependencias
npm run dev      # Iniciar servidor (localhost:4321)
```
