import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// @ts-ignore
const loadPath = LOADPATH;

// @ts-ignore
const debug: 'development' | 'production' = DEBUG;

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

export default i18n;
