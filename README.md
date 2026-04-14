# Sitio Astro

Web estática en Astro preparada para desplegarse en GitHub Pages y editarse con Pages CMS.


## Desarrollo

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Contenido editable

El contenido visible de la web está separado en JSON dentro de `src/data/content/`:

- `locales/es.json`, `locales/en.json`, `locales/eu.json`: textos por idioma.
- `odsCatalog.json`: catálogo de ODS.
- `videoSections.json`: bloques de vídeos.
- `quiz.json`: banco de preguntas y categorías.
- `deepeningSections.json`: recursos de profundización.

La app sigue consumiendo estos datos desde `src/data/siteData.js`, que ahora actúa solo como agregador.

## Pages CMS

La configuración está en `.pages.yml`.

Con Pages CMS el cliente no edita JSON manualmente: entra en la interfaz web de Pages CMS, modifica formularios y eso genera commits en el repositorio.

### Qué puede editar

- Textos de la interfaz en los 3 idiomas.
- Listado de ODS.
- Vídeos y metadatos.
- Banco de preguntas del quiz.
- Recursos de profundización.

### Qué no hace

- No cambia el diseño ni la estructura de componentes.
- No añade backend.
- No publica instantáneamente: guarda en GitHub y después se redepliega GitHub Pages.

## Deploy en GitHub Pages

El workflow está en `.github/workflows/deploy.yml`.

Cada push a `main`:

1. instala dependencias,
2. compila Astro,
3. publica en GitHub Pages.

## Pasos manuales pendientes en GitHub

1. Subir estos cambios al repositorio.
2. En GitHub, ir a `Settings > Pages`.
3. En `Source`, seleccionar `GitHub Actions`.
4. Comprobar que el repo público final coincide con `base: '/pagina_astro/'` en `astro.config.mjs`.
   Si el nombre real del repo no es `pagina_astro`, hay que cambiar ese `base`.
5. Entrar en Pages CMS y conectar el repositorio con la GitHub App de Pages CMS.
6. 

## Nota sobre subidas de archivos

La configuración de Pages CMS apunta a `public/uploads` como carpeta de medios. Aunque esta web ahora mismo trabaja sobre todo con enlaces externos, esa ruta queda reservada para futuras imágenes o documentos y se creará en el repositorio cuando subáis el primer archivo desde el CMS.
