import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_Sas95dKE.mjs';
import 'kleur/colors';
import 'clsx';
import { l as localizeContent, d as deepeningSections, g as getLocaleConfig, $ as $$Layout, a as getStaticLanguagePaths } from '../../chunks/Layout_D5Rntgej.mjs';
import { $ as $$PageBanner } from '../../chunks/PageBanner_BZ0iF0gi.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://ods-2030-videos.github.io");
const $$DeepeningSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DeepeningSection;
  const { locale } = Astro2.props;
  const localizedDeepeningSections = localizeContent(deepeningSections, locale);
  return renderTemplate`${maybeRenderHead()}<section class="section shell"> <div class="section-heading"> <h2>${locale.sections.deepeningTitle}</h2> <p>${locale.sections.deepeningLead}</p> </div> <div class="accordion-list"> ${localizedDeepeningSections.map((section) => renderTemplate`<details class="accordion card"${addAttribute(section.id === "5", "open")}> <summary> <div class="accordion__title"> <strong> ${locale.labels.goalPrefix} ${section.id} · ${section.title} </strong> <span> ${section.subtopics ? `${section.subtopics.length} ${locale.labels.subtopics}` : `${section.items.length} ${locale.labels.documentedResources}`} </span> </div> </summary> <div class="accordion__body"> ${section.subtopics ? section.subtopics.map((subtopic) => renderTemplate`<div class="subtopic-block"> <h3>${subtopic.title}</h3> <div class="resource-grid"> ${subtopic.items.map((item) => renderTemplate`<article class="resource-card"> <div class="tag-list"> <span class="tag">${item.difficulty}</span> <span class="tag">${item.time}</span> </div> <h3>${item.title}</h3> <p>${item.summary}</p> <p class="resource-card__actions"> <a class="action-link"${addAttribute(item.url, "href")} target="_blank" rel="noreferrer"> ${locale.labels.resourceLink} </a> </p> </article>`)} </div> </div>`) : renderTemplate`<div class="resource-grid"> ${section.items.map((item) => renderTemplate`<article class="resource-card"> <div class="tag-list"> <span class="tag">${item.difficulty}</span> <span class="tag">${item.time}</span> </div> <h3>${item.title}</h3> <p>${item.summary}</p> <p class="resource-card__actions"> <a class="action-link"${addAttribute(item.url, "href")} target="_blank" rel="noreferrer"> ${locale.labels.resourceLink} </a> </p> </article>`)} </div>`} </div> </details>`)} </div> </section>`;
}, "/home/bdescalzo/EHU/PK/P2.3/espacioTrabajoWeb/web-ods/src/components/DeepeningSection.astro", void 0);

const $$Astro = createAstro("https://ods-2030-videos.github.io");
function getStaticPaths() {
  return getStaticLanguagePaths();
}
const $$Deepening = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Deepening;
  const lang = Astro2.params.lang;
  const locale = getLocaleConfig(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": locale.htmlLang, "title": `${locale.sections.deepeningTitle} | ${locale.siteTitle}`, "description": locale.sections.deepeningLead, "assetBase": "../../", "footer": locale.footer }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageBanner", $$PageBanner, { "locale": locale, "lang": lang, "activePage": "deepening" })} ${renderComponent($$result2, "DeepeningSection", $$DeepeningSection, { "locale": locale })} ` })}`;
}, "/home/bdescalzo/EHU/PK/P2.3/espacioTrabajoWeb/web-ods/src/pages/[lang]/deepening.astro", void 0);

const $$file = "/home/bdescalzo/EHU/PK/P2.3/espacioTrabajoWeb/web-ods/src/pages/[lang]/deepening.astro";
const $$url = "/web-ods/[lang]/deepening";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Deepening,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
