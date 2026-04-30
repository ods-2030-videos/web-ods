import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderTemplate, d as renderComponent, b as addAttribute } from '../chunks/astro/server_Sas95dKE.mjs';
import 'kleur/colors';
import 'clsx';
import { l as localizeContent, o as odsCatalog, g as getLocaleConfig, c as getHomeCards, $ as $$Layout, a as getStaticLanguagePaths, s as siteMetrics, b as $$SiteHeader } from '../chunks/Layout_D5Rntgej.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://ods-2030-videos.github.io");
const $$OverviewSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$OverviewSection;
  const { locale } = Astro2.props;
  const localizedOdsCatalog = localizeContent(odsCatalog, locale);
  return renderTemplate`${maybeRenderHead()}<section class="section shell"> <div class="section-heading"> <h2>${locale.sections.overviewTitle}</h2> <p>${locale.sections.overviewLead}</p> </div> <div class="ods-grid"> ${localizedOdsCatalog.map((ods) => renderTemplate`<article class="ods-card card"> <strong>${ods.id}</strong> <span>${ods.name}</span> </article>`)} </div> </section>`;
}, "/home/bdescalzo/EHU/PK/P2.3/espacioTrabajoWeb/web-ods/src/components/OverviewSection.astro", void 0);

const $$Astro = createAstro("https://ods-2030-videos.github.io");
function getStaticPaths() {
  return getStaticLanguagePaths();
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = Astro2.params.lang;
  const locale = getLocaleConfig(lang);
  const cards = getHomeCards(locale, lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": locale.htmlLang, "title": locale.siteTitle, "description": locale.seoDescription, "assetBase": "../", "footer": locale.footer }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="hero shell"> <div class="hero__frame card"> ${renderComponent($$result2, "SiteHeader", $$SiteHeader, { "locale": locale, "lang": lang, "activePage": "home" })} <div class="hero__content"> <span class="eyebrow">${locale.heroEyebrow}</span> <h1 class="hero__title">${locale.heroTitle}</h1> <p class="hero__lead">${locale.heroLead}</p> ${locale.heroNote && renderTemplate`<p class="hero__note">${locale.heroNote}</p>`} <div class="stats"${addAttribute(locale.home.title, "aria-label")}> <div class="stat"> <strong>${siteMetrics.coveredGoals}</strong> <span>${locale.labels.coveredGoals}</span> </div> <div class="stat"> <strong>${siteMetrics.totalVideos}</strong> <span>${locale.labels.publicAndPlannedVideos}</span> </div> <div class="stat"> <strong>${siteMetrics.questionBank}</strong> <span>${locale.labels.questionBank}</span> </div> <div class="stat"> <strong>${siteMetrics.deepeningResources}</strong> <span>${locale.labels.deepeningResources}</span> </div> </div> </div> </div> </main> <section class="section shell"> <div class="section-heading"> <h2>${locale.home.title}</h2> ${locale.home.lead && renderTemplate`<p>${locale.home.lead}</p>`} </div> <div class="page-grid"> ${cards.map((card) => renderTemplate`<article class="page-card card"> <span class="eyebrow">${card.eyebrow}</span> <h3>${card.title}</h3> <p>${card.lead}</p> <p class="page-card__actions"> <a class="action-link"${addAttribute(card.href, "href")}> ${locale.labels.openSection} </a> </p> </article>`)} </div> </section> ${renderComponent($$result2, "OverviewSection", $$OverviewSection, { "locale": locale })} ` })}`;
}, "/home/bdescalzo/EHU/PK/P2.3/espacioTrabajoWeb/web-ods/src/pages/[lang]/index.astro", void 0);

const $$file = "/home/bdescalzo/EHU/PK/P2.3/espacioTrabajoWeb/web-ods/src/pages/[lang]/index.astro";
const $$url = "/web-ods/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
