import i18next from "i18next"

i18next
  .init({
  whitelist: ['en', 'ru'],
  fallbackLng: ['en'],
  // fallbackLng: "en",
  detection: {
    order: ['path'],
    lookupFromPathIndex: 0,
    checkWhitelist: true
  },
  resources: {
    ru: {
      translations: require("../locales/ru/ru.json"),
    },
    en: {
      translations: require("../locales/en/en.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false,
    formatSeparator: '.'
  },
  react: {
    wait: true,
  },
})

i18next.languages = ["ru", "en"]

export default i18next
