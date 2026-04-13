import {
  deepeningSections,
  locales,
  odsCatalog,
  quiz,
  supportedLanguages,
  videoSections,
} from '../data/siteData.js';

const extraCopy = {
  es: {
    navHome: 'Inicio',
    homeTitle: 'Apartados principales',
    homeLead: '',
    labels: {
      openSection: 'Abrir página',
      coveredGoals: 'ODS cubiertos',
      publicAndPlannedVideos: 'vídeos públicos y previstos',
      questionBank: 'preguntas en banco ODS 5',
      deepeningResources: 'recursos de profundización',
      documentedVideos: 'vídeos documentados',
      subtopics: 'subtemas',
      documentedResources: 'recursos documentados',
      noFailedQuestions: 'No hay preguntas falladas en este intento.',
      mainNavigation: 'Secciones principales',
      languageSwitch: 'Cambio de idioma',
    },
  },
  en: {
    navHome: 'Home',
    homeTitle: 'Main sections',
    homeLead: '',
    labels: {
      openSection: 'Open page',
      coveredGoals: 'covered SDGs',
      publicAndPlannedVideos: 'public and planned videos',
      questionBank: 'questions in the SDG 5 bank',
      deepeningResources: 'further-reading resources',
      documentedVideos: 'documented videos',
      subtopics: 'subtopics',
      documentedResources: 'documented resources',
      noFailedQuestions: 'There are no failed questions in this attempt.',
      mainNavigation: 'Main navigation',
      languageSwitch: 'Language switcher',
    },
  },
  eu: {
    navHome: 'Hasiera',
    homeTitle: 'Atal nagusiak',
    homeLead: '',
    labels: {
      openSection: 'Ireki orria',
      coveredGoals: 'landutako GJHak',
      publicAndPlannedVideos: 'bideo publiko eta aurreikusitakoak',
      questionBank: '5. GJHeko bankuko galderak',
      deepeningResources: 'sakontze-baliabideak',
      documentedVideos: 'dokumentatutako bideoak',
      subtopics: 'azpigaiak',
      documentedResources: 'dokumentatutako baliabideak',
      noFailedQuestions: 'Ez dago huts egindako galderarik saiakera honetan.',
      mainNavigation: 'Nabigazio nagusia',
      languageSwitch: 'Hizkuntza-aldaketa',
    },
  },
};

export const pageSlugs = {
  home: '',
  videos: 'videos',
  quiz: 'quiz',
  deepening: 'deepening',
};

export function getStaticLanguagePaths() {
  return supportedLanguages.map((lang) => ({ params: { lang } }));
}

export function getLangFromParams(langParam) {
  return supportedLanguages.includes(langParam) ? langParam : 'es';
}

export function getLocaleConfig(langParam) {
  const lang = getLangFromParams(langParam);
  const locale = locales[lang];
  const extra = extraCopy[lang];

  return {
    ...locale,
    heroNote: '',
    nav: {
      home: extra.navHome,
      ...locale.nav,
    },
    labels: {
      ...locale.labels,
      ...extra.labels,
    },
    home: {
      title: extra.homeTitle,
      lead: extra.homeLead,
    },
  };
}

export function getPageUrl(lang, pageKey) {
  const slug = pageSlugs[pageKey];
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
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
