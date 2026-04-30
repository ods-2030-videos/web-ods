import { c as createAstro, a as createComponent, r as renderTemplate, u as unescapeHTML, m as maybeRenderHead, d as renderComponent } from '../../chunks/astro/server_Sas95dKE.mjs';
import 'kleur/colors';
import { $ as $$PageBanner } from '../../chunks/PageBanner_BZ0iF0gi.mjs';
import 'clsx';
import { l as localizeContent, q as quiz, g as getLocaleConfig, $ as $$Layout, a as getStaticLanguagePaths } from '../../chunks/Layout_D5Rntgej.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://ods-2030-videos.github.io");
const $$QuizSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$QuizSection;
  const { locale } = Astro2.props;
  const localizedQuiz = localizeContent(quiz, locale);
  const quizPayload = JSON.stringify({
    questions: localizedQuiz.questions,
    categories: localizedQuiz.categories,
    ui: locale.quizUi,
    labels: locale.labels,
    bankNote: localizedQuiz.bankNote
  });
  return renderTemplate(_a || (_a = __template(["", '<section class="section shell"> <div class="section-heading"> <h2>', "</h2> <p>", '</p> </div> <div class="quiz-layout card"> <div class="accordion__body"> <article class="quiz-card"> <h3>', "</h3> <p>", '</p> <p class="section-note">', '</p> </article> <div class="quiz-controls"> <button class="quiz-button" id="start-quiz" type="button"> ', ' </button> <button class="quiz-button is-secondary" id="shuffle-quiz" type="button"> ', ' </button> <button class="quiz-button is-secondary" id="submit-quiz" type="button"> ', ' </button> </div> <p class="section-note">', '</p> <div id="quiz-panel" class="quiz-panel"></div> <div class="quiz-controls quiz-controls--bottom"> <button class="quiz-button" id="start-quiz-bottom" type="button"> ', ' </button> <button class="quiz-button is-secondary" id="shuffle-quiz-bottom" type="button"> ', ' </button> <button class="quiz-button is-secondary" id="submit-quiz-bottom" type="button"> ', ' </button> </div> <div id="quiz-results" class="quiz-results"></div> </div> </div> <script type="application/json" id="quiz-data">', "<\/script>  </section>"])), maybeRenderHead(), locale.sections.quizTitle, locale.sections.quizLead, locale.labels.sourceMaterial, localizedQuiz.bankNote, locale.labels.quizSource, locale.labels.startQuiz, locale.labels.reshuffleQuiz, locale.labels.submitQuiz, locale.quizUi.selectedModel, locale.labels.startQuiz, locale.labels.reshuffleQuiz, locale.labels.submitQuiz, unescapeHTML(quizPayload));
}, "/home/bdescalzo/EHU/PK/P2.3/espacioTrabajoWeb/web-ods/src/components/QuizSection.astro", void 0);

const $$Astro = createAstro("https://ods-2030-videos.github.io");
function getStaticPaths() {
  return getStaticLanguagePaths();
}
const $$Quiz = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Quiz;
  const lang = Astro2.params.lang;
  const locale = getLocaleConfig(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": locale.htmlLang, "title": `${locale.sections.quizTitle} | ${locale.siteTitle}`, "description": locale.sections.quizLead, "assetBase": "../../", "footer": locale.footer }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageBanner", $$PageBanner, { "locale": locale, "lang": lang, "activePage": "quiz" })} ${renderComponent($$result2, "QuizSection", $$QuizSection, { "locale": locale })} ` })}`;
}, "/home/bdescalzo/EHU/PK/P2.3/espacioTrabajoWeb/web-ods/src/pages/[lang]/quiz.astro", void 0);

const $$file = "/home/bdescalzo/EHU/PK/P2.3/espacioTrabajoWeb/web-ods/src/pages/[lang]/quiz.astro";
const $$url = "/web-ods/[lang]/quiz";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Quiz,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
