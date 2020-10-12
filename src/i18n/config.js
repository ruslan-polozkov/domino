import i18next from "i18next"

i18next.init({
  fallbackLng: "ru",
  resources: {
    ru: {
      translations: require("../locales/ru.json"),
    },
    en: {
      translations: require("../locales/en.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
})

i18next.languages = ["ru", "en"]

export default i18next
