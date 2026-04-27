# Repository Guidelines

## Project Structure & Module Organization

This repository is an Astro static site deployed to GitHub Pages. Source files live in `src/`: pages are in `src/pages/`, shared components in `src/components/`, the root layout in `src/layouts/Layout.astro`, global CSS in `src/styles/global.css`, and URL/language helpers in `src/utils/site.js`.

Editable site content is JSON under `src/data/content/`. Locale text is in `locales/`; ODS catalog entries, videos, quiz data, and deepening resources have separate JSON files. `src/data/siteData.js` aggregates this content. Static assets belong in `public/`; generated output goes to `dist/`.

## Build, Test, and Development Commands

- `npm install`: install dependencies. Node `>=20.3.0` is required.
- `npm run dev`: start the Astro development server for local editing.
- `npm run build`: build the static site into `dist/`.
- `npm run preview`: preview the production build locally.
- `npm run astro -- <command>`: run Astro CLI commands directly.

There is no dedicated test script in `package.json`; use `npm run build` as the baseline validation before committing.

## Coding Style & Naming Conventions

Use ES modules and keep Astro frontmatter concise. Follow the existing two-space indentation in `.astro`, `.js`, `.json`, and CSS files. Components use PascalCase filenames such as `SiteHeader.astro`; utilities and data files use lower camel case such as `siteData.js`.

Keep content changes in JSON valid and structured consistently with neighboring entries. Prefer semantic class names in CSS and reuse the existing custom properties in `src/styles/global.css` instead of introducing one-off colors or spacing values.

## Testing Guidelines

No automated test framework is currently configured. For code or content changes, run `npm run build` and verify affected language routes, for example `/es/`, `/en/videos/`, or `/eu/quiz/`, with `npm run preview`. When editing quiz or locale JSON, check all languages listed in `src/data/content/supportedLanguages.json`.

## Commit & Pull Request Guidelines

Recent history uses short, imperative subjects such as `Update README.md`, plus occasional scoped messages like `content(delete): src/data/content/locales/eu.json`. Keep subjects concise and describe the changed area first when useful, for example `content: update quiz questions`.

Pull requests should include a brief summary, the validation command run, and screenshots or preview links for visual changes. Link related issues when available. Mention any Pages CMS schema/content implications if `.pages.yml` or files under `src/data/content/` change.

## Security & Configuration Tips

Do not commit secrets or CMS credentials. Keep `astro.config.mjs` `site` and `base` aligned with the GitHub Pages repository path before deployment.
