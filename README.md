# Jhon Tajumbina — Portfolio

Personal portfolio of **Jhon Tajumbina**, Software Engineer and Digital Ads Trafficker. A fast,
static, bilingual (ES/EN) site with a dark editorial visual identity. Built with **Astro**,
**Tailwind CSS 4** and strict TypeScript.

> Live site: <https://jhon-tajumbina.vercel.app>

---

## ✨ Features

- **Fully bilingual (ES/EN)** with `/es/` and `/en/` routes, `hreflang`, `og:locale` and a language
  switcher that keeps the current navigation anchor.
- **Sections**: Hero, About, Projects, Career Journey, Certifications, Skills, Contact and a Footer
  with social links.
- **Build-time optimized images** with `astro:assets`: AVIF + WebP, responsive `srcset`/`sizes` and
  art direction (vertical banner on mobile, panoramic on desktop).
- **Contact form** with client-side validation, an anti-spam honeypot and a `mailto` fallback.
- **Accessible modals** (`<dialog>`) to expand projects and view Drive credentials, with
  **lazy-loaded iframes**.
- **Complete SEO**: per-language `<title>`/description, Open Graph + Twitter Cards with a 1200×630
  social card, canonical URLs, a generated `robots.txt` and a `sitemap` with `lastmod`.
- **Accessibility**: visible focus, `aria-expanded`/`aria-controls`, `role="status"`, keyboard
  navigation and support for `prefers-reduced-motion`.
- **Analytics**: Vercel Analytics and Speed Insights.
- **Self-hosted fonts** via the Astro Fonts API (Sora, Space Grotesk, Cinzel).

## 🧱 Stack

| Area      | Technology                                             |
| --------- | ------------------------------------------------------ |
| Framework | [Astro 7](https://astro.build) (static output)         |
| Styling   | [Tailwind CSS 4](https://tailwindcss.com) + custom CSS |
| Typing    | TypeScript (Astro strict config)                       |
| Images    | `astro:assets` (sharp: AVIF/WebP)                      |
| SEO       | `@astrojs/sitemap` + JSON-LD (`schema.org/Person`)     |
| Analytics | `@vercel/analytics` + `@vercel/speed-insights`         |
| Tests     | [Vitest](https://vitest.dev) + jsdom                   |
| Packages  | pnpm                                                   |

## 🚀 Getting started

Requirements: **Node ≥ 22.12** and **pnpm**.

```sh
pnpm install
pnpm dev        # dev server at http://localhost:4321
```

Other commands:

| Command             | Action                                                          |
| ------------------- | --------------------------------------------------------------- |
| `pnpm build`        | `astro check` + production build to `./dist/`                   |
| `pnpm preview`      | Preview the build locally                                       |
| `pnpm check`        | Type-check `.astro`/`.ts` files (0 errors, 0 warnings)          |
| `pnpm test`         | Run the test suite (Vitest)                                     |
| `pnpm test:watch`   | Run tests in watch mode                                         |
| `pnpm lint`         | Lint `.astro`/`.ts` files with ESLint                           |
| `pnpm format`       | Format the project with Prettier                                |
| `pnpm format:check` | Check formatting without writing                                |
| `pnpm og`           | Regenerate `public/og-image.png` (1200×630) from SVG with sharp |

> 💡 The dev server can run in the background and be managed with
> `astro dev --background`, `astro dev stop`, `astro dev status` and `astro dev logs`.

## 📁 Structure

```text
.
├── .github/workflows/ci.yml   # CI: lint, format:check, check, test and build
├── public/                    # Files served as-is (favicons, cv.pdf, og-image.png)
├── scripts/
│   └── generate-og.mjs        # Generates the 1200×630 social card
├── src/
│   ├── assets/                # Source images optimized at build time (astro:assets)
│   ├── components/
│   │   ├── layout/            # BaseHead, Navbar, Footer
│   │   ├── sections/          # Hero, About, Projects, Journey, Certificates, Skills, Contact
│   │   └── ui/                # Icon, BrandIcon, FlagIcon, Modal, SectionHeader, ContactMenu…
│   ├── data/                  # Typed content: personal, projects, journey, certificates, skills
│   ├── i18n/                  # es.json / en.json dictionaries + helpers
│   ├── lib/                   # seo.ts (metadata/OG) and drive.ts (Google Drive utilities)
│   ├── pages/
│   │   ├── [lang]/index.astro # Bilingual page (getStaticPaths → es, en)
│   │   ├── index.astro        # Redirects to /es/
│   │   ├── 404.astro          # Bilingual 404 page
│   │   └── robots.txt.ts      # robots.txt generated at build time
│   ├── scripts/               # Client-side behavior (navbar, modal, reveal, skills, journey)
│   └── styles/global.css      # Tailwind + design tokens + utilities
├── tests/                     # Unit tests (data, i18n, seo, drive and DOM)
├── astro.config.mjs
├── vitest.config.ts
├── eslint.config.js           # ESLint flat config (TS + Astro)
├── .prettierrc.json
└── vercel.json                # Root redirect → /es/, security and cache headers
```

## 🌍 Internationalization

- Languages live in `src/i18n/` (`es.json`, `en.json`). `src/i18n/index.ts` exposes `locales`,
  `t()` and `lang`/`og:locale` helpers.
- The dynamic route `src/pages/[lang]/index.astro` generates one page per language via
  `getStaticPaths`.
- A test checks that **ES and EN have exactly the same keys**, preventing orphaned translations.
- Switching languages keeps the current `#anchor`.

## 🖼️ Content and images

All content is centralized and typed in `src/data/`:

- `personal.ts` — contact details and bios.
- `projects.ts` — projects (imports images from `src/assets`).
- `journey.ts` — professional timeline.
- `certificates.ts` — certificates (with Google Drive links).
- `skills.ts` — skills by category.

To **add an image** (project or banner), place it in `src/assets/`, import it in the matching data
file, and Astro will generate the optimized formats and sizes automatically. `og-image.png` is
regenerated with `pnpm og`.

## ✅ Tests

The suite covers logic without heavy UI:

- `tests/drive.test.ts` — Google Drive link parsing.
- `tests/i18n.test.ts` — locales, `isLocale`, ES/EN key parity.
- `tests/seo.test.ts` — `SITE_URL`, metadata and the Open Graph card.
- `tests/data.test.ts` — integrity of projects, certificates, journey and skills.
- `tests/scripts.test.ts` — DOM behavior of the mobile menu and the skills expander.

```sh
pnpm test
```

## 🚢 Deployment

The site is static and deployed on **Vercel**.

- `vercel.json` redirects `/` → `/es/` and applies security headers (CSP, HSTS, `nosniff`,
  `Referrer-Policy`, `Permissions-Policy`) and cache headers for assets and images.
- The site domain is defined once in `astro.config.mjs` (`site`); the rest of the code reads it from
  `import.meta.env.SITE`, avoiding duplication.
- `robots.txt` and the sitemap are generated at build time.
- `.github/workflows/ci.yml` runs `lint`, `format:check`, `check`, `test` and `build` on every
  push/PR.

To deploy to another static host, just publish the contents of `./dist/`.

## 🎨 Quick customization

- **Colors and tokens**: `src/styles/global.css` (`:root`, `@theme`).
- **Copy and translations**: `src/i18n/es.json` and `src/i18n/en.json`.
- **Personal data and social links**: `src/data/personal.ts`.
- **Domain/SEO**: `astro.config.mjs` and `src/lib/seo.ts`.
