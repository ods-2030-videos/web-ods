import { c as createAstro, a as createComponent, m as maybeRenderHead, d as renderComponent, r as renderTemplate } from './astro/server_Sas95dKE.mjs';
import 'kleur/colors';
import { b as $$SiteHeader } from './Layout_D5Rntgej.mjs';

const $$Astro = createAstro("https://ods-2030-videos.github.io");
const $$PageBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageBanner;
  const { locale, lang, activePage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main class="hero shell"> <div class="page-banner card"> ${renderComponent($$result, "SiteHeader", $$SiteHeader, { "locale": locale, "lang": lang, "activePage": activePage })} </div> </main>`;
}, "/home/bdescalzo/EHU/PK/P2.3/espacioTrabajoWeb/web-ods/src/components/PageBanner.astro", void 0);

export { $$PageBanner as $ };
