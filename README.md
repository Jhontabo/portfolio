# Jhon Tajumbina — Portafolio

Portafolio personal de **Jhon Tajumbina**, Software Engineer y Digital Trafficker Ads. Un sitio
estático, bilingüe (ES/EN), rápido y con una identidad visual editorial oscura. Construido con
**Astro**, **Tailwind CSS 4** y tipos estrictos de TypeScript.

> Sitio en producción: <https://jhon-tajumbina.vercel.app>

---

## ✨ Características

- **Bilingüe real (ES/EN)** con rutas `/es/` y `/en/`, `hreflang`, `og:locale` y selector de idioma
  que conserva el ancla de navegación.
- **Secciones**: Hero, Sobre mí, Proyectos, Ruta profesional, Certificaciones, Habilidades,
  Contacto y Footer con redes sociales.
- **Imágenes optimizadas en build** con `astro:assets`: AVIF + WebP, `srcset`/`sizes` responsivos y
  art direction (banner vertical en móvil, panorámico en desktop).
- **Formulario de contacto** con validación en cliente, honeypot antispam y fallback a `mailto`.
- **Modales accesibles** (`<dialog>`) para ampliar proyectos y ver credenciales de Drive con
  **lazy-load de iframes**.
- **SEO completo**: `<title>`/description por idioma, Open Graph + Twitter Cards con tarjeta
  social 1200×630, canonical, `robots.txt` generado y `sitemap` con `lastmod`.
- **Accesibilidad**: foco visible, `aria-expanded`/`aria-controls`, `role="status"`, navegación por
  teclado y respeto por `prefers-reduced-motion`.
- **Analítica**: Vercel Analytics y Speed Insights.
- **Tipografías self-hosted** vía la Fonts API de Astro (Sora, Space Grotesk, Cinzel).

## 🧱 Stack

| Área            | Tecnología                                             |
| --------------- | ------------------------------------------------------ |
| Framework       | [Astro 7](https://astro.build) (output estático)       |
| Estilos         | [Tailwind CSS 4](https://tailwindcss.com) + CSS propio |
| Tipado          | TypeScript (config strict de Astro)                    |
| Imágenes        | `astro:assets` (sharp: AVIF/WebP)                      |
| SEO             | `@astrojs/sitemap` + JSON-LD (`schema.org/Person`)     |
| Analítica       | `@vercel/analytics` + `@vercel/speed-insights`         |
| Tests           | [Vitest](https://vitest.dev) + jsdom                   |
| Paquetes        | pnpm                                                   |

## 🚀 Empezar

Requisitos: **Node ≥ 22.12** y **pnpm**.

```sh
pnpm install
pnpm dev        # servidor de desarrollo en http://localhost:4321
```

Otros comandos:

| Comando             | Acción                                                        |
| ------------------- | ------------------------------------------------------------- |
| `pnpm build`        | `astro check` + build de producción en `./dist/`              |
| `pnpm preview`      | Previsualiza el build localmente                              |
| `pnpm check`        | Type-check de `.astro`/`.ts` (0 errores, 0 warnings)          |
| `pnpm test`         | Ejecuta la suite de tests (Vitest)                            |
| `pnpm test:watch`   | Tests en modo watch                                           |
| `pnpm og`           | Regenera `public/og-image.png` (1200×630) desde SVG con sharp |

> 💡 El servidor de desarrollo se puede lanzar en segundo plano y gestionar con
> `astro dev --background`, `astro dev stop`, `astro dev status` y `astro dev logs`.

## 📁 Estructura

```text
.
├── public/                    # Archivos servidos tal cual (favicons, cv.pdf, og-image.png)
├── scripts/
│   └── generate-og.mjs        # Genera la tarjeta social 1200×630
├── src/
│   ├── assets/                # Imágenes fuente optimizadas en build (astro:assets)
│   ├── components/
│   │   ├── layout/            # BaseHead, Navbar, Footer
│   │   ├── sections/          # Hero, About, Projects, Journey, Certificates, Skills, Contact
│   │   └── ui/                # Icon, BrandIcon, FlagIcon, Modal, SectionHeader, ContactMenu…
│   ├── data/                  # Contenido tipado: personal, projects, journey, certificates, skills
│   ├── i18n/                  # Diccionarios es.json / en.json + helpers
│   ├── lib/                   # seo.ts (metadatos/OG) y drive.ts (utilidades de Google Drive)
│   ├── pages/
│   │   ├── [lang]/index.astro # Página bilingüe (getStaticPaths → es, en)
│   │   ├── index.astro        # Redirecciones a /es/
│   │   ├── 404.astro          # Página 404 bilingüe
│   │   └── robots.txt.ts      # robots.txt generado en build
│   ├── scripts/               # Comportamiento en cliente (navbar, modal, reveal, skills, journey)
│   └── styles/global.css      # Tailwind + tokens de diseño + utilidades
├── tests/                     # Tests unitarios (datos, i18n, seo, drive y DOM)
├── astro.config.mjs
├── vitest.config.ts
└── vercel.json                # Redirect raíz → /es/ y cabeceras de caché
```

## 🌍 Internacionalización

- Los idiomas viven en `src/i18n/` (`es.json`, `en.json`). `src/i18n/index.ts` expone `locales`,
  `t()` y ayudantes de `lang`/`og:locale`.
- La ruta dinámica `src/pages/[lang]/index.astro` genera una página por idioma vía `getStaticPaths`.
- Un test verifica que **ES y EN tengan exactamente las mismas claves**, evitando traducciones
  huérfanas.
- Al cambiar de idioma se conserva el `#ancla` actual.

## 🖼️ Contenido e imágenes

Todo el contenido está centralizado y tipado en `src/data/`:

- `personal.ts` — datos de contacto y biografías.
- `projects.ts` — proyectos (importa las imágenes desde `src/assets`).
- `journey.ts` — línea de tiempo profesional.
- `certificates.ts` — certificados (con enlaces a Google Drive).
- `skills.ts` — habilidades por categoría.

Para **añadir una imagen** (proyecto o banner), colócala en `src/assets/`, impórtala en el archivo de
datos correspondiente y Astro generará automáticamente los formatos y tamaños optimizados. El
`og-image.png` se regenera con `pnpm og`.

## ✅ Tests

La suite cubre la lógica sin UI pesada:

- `tests/drive.test.ts` — parseo de enlaces de Google Drive.
- `tests/i18n.test.ts` — locales, `isLocale`, paridad de claves ES/EN.
- `tests/seo.test.ts` — `SITE_URL`, metadatos y tarjeta Open Graph.
- `tests/data.test.ts` — integridad de proyectos, certificados, ruta y skills.
- `tests/scripts.test.ts` — comportamiento DOM del menú móvil y del expand de skills.

```sh
pnpm test
```

## 🚢 Despliegue

El sitio es estático y se despliega en **Vercel**.

- `vercel.json` redirige `/` → `/es/` y define cabeceras de caché para assets e imágenes.
- El dominio del sitio se define una sola vez en `astro.config.mjs` (`site`); el resto del código lo
  lee desde `import.meta.env.SITE`, evitando duplicaciones.
- `robots.txt` y el sitemap se generan en el build.

Para desplegar en otro host estático, basta con publicar el contenido de `./dist/`.

## 🎨 Personalización rápida

- **Colores y tokens**: `src/styles/global.css` (`:root`, `@theme`).
- **Textos y traducciones**: `src/i18n/es.json` y `src/i18n/en.json`.
- **Datos personales y enlaces sociales**: `src/data/personal.ts`.
- **Dominio/SEO**: `astro.config.mjs` y `src/lib/seo.ts`.
