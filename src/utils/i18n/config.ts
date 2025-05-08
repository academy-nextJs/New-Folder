import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources , ns } from "./locales/index"


i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    ns,
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;