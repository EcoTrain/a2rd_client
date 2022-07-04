import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import EnLocale from "./locales/en.json";
import RuLocale from "./locales/ru.json";

const DEFAULT_LANGUAGE = "en";
export let lngSelectOptions = { en: "English" };
let Languages = Object.keys(lngSelectOptions);
let resources = {
  en: EnLocale,
};

if (window.location.host.includes(".ru")) {
  Languages.push("ru");
  resources["ru"] = RuLocale;
  lngSelectOptions["ru"] = "Русский";
}

const options = {
  order: ["querystring", "navigator", "htmlTag"],
  lookupQuerystring: "lng",
};

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources: resources,
    detection: options,
    // lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    ns: ["shared"],
    defaultNS: "shared",
    debug: process.env.NODE_ENV == "development",
    whitelist: Languages,
    useCookie: false,
    lngSelectOptions: lngSelectOptions,
  });

export default i18n;
