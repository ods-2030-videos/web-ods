import configuredLanguages from './content/supportedLanguages.json';
import odsCatalog from './content/odsCatalog.json';
import videoSections from './content/videoSections.json';
import quiz from './content/quiz.json';
import deepeningSections from './content/deepeningSections.json';

const localeModules = import.meta.glob('./content/locales/*.json', { eager: true });

export const locales = Object.entries(localeModules).reduce((accumulator, [path, module]) => {
  const match = path.match(/\/([^/]+)\.json$/);

  if (!match) {
    return accumulator;
  }

  accumulator[match[1]] = module.default ?? module;
  return accumulator;
}, {});

const discoveredLanguages = Object.keys(locales);

export const supportedLanguages = [
  ...configuredLanguages.filter((lang) => lang in locales),
  ...discoveredLanguages.filter((lang) => !configuredLanguages.includes(lang)),
];

export { deepeningSections, odsCatalog, quiz, videoSections };
