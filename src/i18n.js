import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en.json';
import hi from './locales/hi.json';

const resources = {
    en: {translation:en},
    hi: {translation:hi}
};

const userLang = navigator.language.splice(0,2);

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: resources[userLang]?userLang:'en', // default language english
        fallbackLng:'en',
        interpolation:{escapeValue:false}
    });

export default i18next;