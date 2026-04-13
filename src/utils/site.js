import {
  deepeningSections,
  locales,
  odsCatalog,
  quiz,
  supportedLanguages,
  videoSections,
} from '../data/siteData.js';

export const pageSlugs = {
  home: '',
  videos: 'videos',
  quiz: 'quiz',
  deepening: 'deepening',
};

function withBase(path = '') {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const normalizedPath = path.replace(/^\/+/, '');

  return normalizedPath ? `${base}${normalizedPath}` : base;
}

export function getStaticLanguagePaths() {
  return supportedLanguages.map((lang) => ({ params: { lang } }));
}

export function getLangFromParams(langParam) {
  return supportedLanguages.includes(langParam) ? langParam : 'es';
}

export function getLocaleConfig(langParam) {
  const lang = getLangFromParams(langParam);
  const locale = locales[lang];

  return {
    ...locale,
    heroNote: '',
  };
}

export function getPageUrl(lang, pageKey) {
  const slug = pageSlugs[pageKey];
  return withBase(slug ? `${lang}/${slug}/` : `${lang}/`);
}

export function buildLanguageLinks(pageKey) {
  return supportedLanguages.map((code) => ({
    code,
    label: locales[code].localeLabel,
    href: getPageUrl(code, pageKey),
  }));
}

export function getHomeCards(locale, lang) {
  return [
    {
      key: 'videos',
      eyebrow: locale.nav.videos,
      title: locale.sections.videosTitle,
      lead: locale.sections.videosLead,
      href: getPageUrl(lang, 'videos'),
    },
    {
      key: 'quiz',
      eyebrow: locale.nav.quiz,
      title: locale.sections.quizTitle,
      lead: locale.sections.quizLead,
      href: getPageUrl(lang, 'quiz'),
    },
    {
      key: 'deepening',
      eyebrow: locale.nav.deepening,
      title: locale.sections.deepeningTitle,
      lead: locale.sections.deepeningLead,
      href: getPageUrl(lang, 'deepening'),
    },
  ];
}

export const siteMetrics = {
  coveredGoals: odsCatalog.length,
  totalVideos: videoSections.reduce((total, group) => total + group.videos.length, 0),
  questionBank: quiz.questions.length,
  deepeningResources: deepeningSections.reduce((total, section) => {
    if (section.subtopics) {
      return total + section.subtopics.reduce(
        (sectionTotal, subtopic) => sectionTotal + subtopic.items.length,
        0,
      );
    }

    return total + section.items.length;
  }, 0),
};
