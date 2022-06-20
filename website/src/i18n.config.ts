import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

if (ELECTRON) {
  const common_cn = require('../public/locales/cn/common.json');
  const translation_cn = require('../public/locales/cn/translation.json');
  const html_formatter_cn = require('../public/locales/cn/html-formatter.json');
  const js_beautifier_cn = require('../public/locales/cn/js-beautifier.json');
  const simplified_traditional_chinese_cn = require('../public/locales/cn/simplified-traditional-chinese.json');
  const standard_chinese_characters_cn = require('../public/locales/cn/standard-chinese-characters.json');
  const svg_optimizer_cn = require('../public/locales/cn/svg-optimizer.json');

  const common = require('../public/locales/en/common.json');
  const translation = require('../public/locales/en/translation.json');
  const html_formatter = require('../public/locales/en/html-formatter.json');
  const js_beautifier = require('../public/locales/en/js-beautifier.json');
  const simplified_traditional_chinese = require('../public/locales/en/simplified-traditional-chinese.json');
  const standard_chinese_characters = require('../public/locales/en/standard-chinese-characters.json');
  const svg_optimizer = require('../public/locales/en/svg-optimizer.json');

  const resources = {
    cn: {
      common: common_cn,
      translation: translation_cn,
      'html-formatter': html_formatter_cn,
      'js-beautifier': js_beautifier_cn,
      'simplified-traditional-chinese': simplified_traditional_chinese_cn,
      'standard-chinese-characters': standard_chinese_characters_cn,
      'svg-optimizer': svg_optimizer_cn,
    },
    en: {
      common,
      translation,
      'html-formatter': html_formatter,
      'js-beautifier': js_beautifier,
      'simplified-traditional-chinese': simplified_traditional_chinese,
      'standard-chinese-characters': standard_chinese_characters,
      'svg-optimizer': svg_optimizer,
    },
  };
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
      // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
      // if you're using a language detector, do not define the lng option
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });
} else {
  const loadPath = LOADPATH;
  const debug = DEBUG;
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      // lng: 'en', // if you're using a language detector, do not define the lng option
      fallbackLng: 'en', // use en if detected lng is not available
      debug: debug === 'development',
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
      backend: {
        loadPath: `${loadPath}/locales/{{lng}}/{{ns}}.json`,
      },
    });
}

export default i18n;
