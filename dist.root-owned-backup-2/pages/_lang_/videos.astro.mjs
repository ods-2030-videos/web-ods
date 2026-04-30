import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_Sas95dKE.mjs';
import 'kleur/colors';
import { $ as $$PageBanner } from '../../chunks/PageBanner_BZ0iF0gi.mjs';
import 'clsx';
import { l as localizeContent, v as videoSections, g as getLocaleConfig, $ as $$Layout, a as getStaticLanguagePaths } from '../../chunks/Layout_D5Rntgej.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://ods-2030-videos.github.io");
const $$VideosSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$VideosSection;
  const { locale } = Astro2.props;
  function extractYouTubeId(url) {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]{11})/);
    return match ? match[1] : null;
  }
  function getAssetUrl(path) {
    const base = "/web-ods/".endsWith("/") ? "/web-ods/" : `${"/web-ods/"}/`;
    const normalizedPath = path.replace(/^\/+/, "");
    return `${base}${normalizedPath}`;
  }
  function getYouTubeEmbedUrl(youtubeId, language) {
    const params = new URLSearchParams({
      rel: "0",
      hl: language || "es"
    });
    return `https://www.youtube-nocookie.com/embed/${youtubeId}?${params.toString()}`;
  }
  const videoGroups = localizeContent(videoSections, locale).map((group) => ({
    ...group,
    videos: group.videos.map((video) => ({
      ...video,
      youtubeId: extractYouTubeId(video.url)
    }))
  }));
  return renderTemplate`${maybeRenderHead()}<section class="section shell"> <div class="section-heading"> <h2>${locale.sections.videosTitle}</h2> <p>${locale.sections.videosLead}</p> </div> <div class="accordion-list"> ${videoGroups.map((group) => renderTemplate`<details class="accordion card"${addAttribute(group.id === "4", "open")}> <summary> <div class="accordion__title"> <strong> ${locale.labels.goalPrefix} ${group.id} · ${group.title} </strong> <span> ${group.planned ? locale.labels.plannedGroup : `${group.videos.length} ${locale.labels.documentedVideos}`} </span> </div> ${group.groupLink && renderTemplate`<a class="summary-link"${addAttribute(group.groupLink, "href")} target="_blank" rel="noreferrer"> ${locale.labels.groupLink} </a>`} </summary> <div class="accordion__body"> ${group.note && renderTemplate`<p class="section-note">${group.note}</p>`} <div class="video-grid"> ${group.videos.map((video) => renderTemplate`<article class="video-card"> <div class="video-card__slot"> <span class="meta-pill">${video.slot}</span> ${group.planned && renderTemplate`<span class="meta-pill">${locale.labels.plannedVideo}</span>`} </div> <h3>${video.title}</h3> ${video.youtubeId && renderTemplate`<div class="video-shell"> <iframe${addAttribute(getYouTubeEmbedUrl(video.youtubeId, locale.htmlLang), "src")}${addAttribute(video.title, "title")} loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div>`} ${video.infographic && renderTemplate`<a class="video-infographic"${addAttribute(getAssetUrl(video.infographic.src), "href")} target="_blank" rel="noreferrer"${addAttribute(video.infographic.alt, "aria-label")}> <img${addAttribute(getAssetUrl(video.infographic.src), "src")}${addAttribute(video.infographic.alt, "alt")} loading="lazy" decoding="async"> </a>`} ${!video.youtubeId && renderTemplate`<p class="section-note"> ${locale.labels.noPublicUrl}. ${locale.labels.plannedNote} </p>`} <dl class="meta-list"> <div class="meta-item"> <dt>${locale.labels.authors}</dt> <dd>${video.authors ?? locale.labels.authorsUnknown}</dd> </div> ${video.subtitles && renderTemplate`<div class="meta-item"> <dt>${locale.labels.subtitles}</dt> <dd>${video.subtitles}</dd> </div>`} ${video.character && renderTemplate`<div class="meta-item"> <dt>${locale.labels.character}</dt> <dd>${video.character}</dd> </div>`} ${video.license && renderTemplate`<div class="meta-item"> <dt>${locale.labels.license}</dt> <dd> <a${addAttribute(video.licenseUrl, "href")} target="_blank" rel="noreferrer"> ${video.license} </a> </dd> </div>`} </dl> ${video.url && renderTemplate`<p class="resource-card__actions"> <a class="action-link"${addAttribute(video.url, "href")} target="_blank" rel="noreferrer"> ${locale.labels.watch} </a> </p>`} </article>`)} </div> </div> </details>`)} </div> </section>`;
}, "/home/bdescalzo/EHU/PK/P2.3/espacioTrabajoWeb/web-ods/src/components/VideosSection.astro", void 0);

const $$Astro = createAstro("https://ods-2030-videos.github.io");
function getStaticPaths() {
  return getStaticLanguagePaths();
}
const $$Videos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Videos;
  const lang = Astro2.params.lang;
  const locale = getLocaleConfig(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": locale.htmlLang, "title": `${locale.sections.videosTitle} | ${locale.siteTitle}`, "description": locale.sections.videosLead, "assetBase": "../../", "footer": locale.footer }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageBanner", $$PageBanner, { "locale": locale, "lang": lang, "activePage": "videos" })} ${renderComponent($$result2, "VideosSection", $$VideosSection, { "locale": locale })} ` })}`;
}, "/home/bdescalzo/EHU/PK/P2.3/espacioTrabajoWeb/web-ods/src/pages/[lang]/videos.astro", void 0);

const $$file = "/home/bdescalzo/EHU/PK/P2.3/espacioTrabajoWeb/web-ods/src/pages/[lang]/videos.astro";
const $$url = "/web-ods/[lang]/videos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Videos,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
