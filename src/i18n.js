import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

const resources = {
  tr: {
    translation: {
      "Welcome to React": "React'e Hoşgeldiniz"
    }
  },
  en: {
    translation: {
      "Welcome to React": "Welcome to React"
    }
  }
}

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    resources
  })

export default i18n;