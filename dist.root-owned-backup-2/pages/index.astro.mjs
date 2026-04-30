import { a as createComponent, b as addAttribute, e as renderHead, r as renderTemplate } from '../chunks/astro/server_Sas95dKE.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const target = "./es/";
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="refresh"${addAttribute(`0; url=${target}`, "content")}><title>Redirigiendo…</title>${renderHead()}</head> <body> <p>
Redirigiendo a <a${addAttribute(target, "href")}>${target}</a>.
</p> </body></html>`;
}, "/home/bdescalzo/EHU/PK/P2.3/espacioTrabajoWeb/web-ods/src/pages/index.astro", void 0);

const $$file = "/home/bdescalzo/EHU/PK/P2.3/espacioTrabajoWeb/web-ods/src/pages/index.astro";
const $$url = "/web-ods";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
