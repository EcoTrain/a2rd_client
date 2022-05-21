import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import EnLocale from "./locales/en.json";

const DEFAULT_LANGUAGE = "en";
const Languages = ['en', 'de'];

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources: {
      en: EnLocale,
    },
    ns: ["translations"],
    defaultNS: "translations",
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    debug: true,
    whitelist: Languages,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
