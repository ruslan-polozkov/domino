import i18next from "i18next"
// import LanguageDetector from 'i18next-browser-languagedetector'

// i18next.on('languageChanged', function (lng) {
//   // if the language we switched to is the default language we need to remove the /en from URL
//   if (lng === i18next.options.fallbackLng[0]) {
//     if (window.location.pathname.includes('/' + i18next.options.fallbackLng[0])) {
//       const newUrl = window.location.pathname.replace('/' + i18next.options.fallbackLng[0], '')
//       window.location.replace(newUrl)
//     }
//   }
// })

i18next
  // .use(LanguageDetector)
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
