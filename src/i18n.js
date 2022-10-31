import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const DEFAULT_LANGUAGE = "en";
export let lngSelectOptions = {en: "English"};

const initLocales = async () => {
  const {default: EnLocale} = await import("./locales/en.json");
  let Languages = Object.keys(lngSelectOptions);
  let resources = {
    en: EnLocale,
  };
  if (window.location.host.includes(".ru")) {
    const {default: RuLocale} = await import("./locales/ru.json");
    Languages.push("ru");
    resources["ru"] = RuLocale;
    lngSelectOptions["ru"] = "Русский";
  }

  const options = {
    order: ["querystring", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
  };

  return i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources: resources,
      detection: options,
      // lng: DEFAULT_LANGUAGE,
      fallbackLng: DEFAULT_LANGUAGE,
      ns: ["shared"],
      defaultNS: "shared",
      fallbackNS: "shared",
      debug: process.env.NODE_ENV == "development",
      whitelist: Languages,
      useCookie: false,
      lngSelectOptions: lngSelectOptions,
    });
};
initLocales();

export default i18n;
