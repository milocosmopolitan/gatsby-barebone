// import i18next, {InitOptions} from 'i18next';

// function initializeI18next(fallbackLng: string, option: InitOptions) {
//   i18next.init({
//     debug: true,
//     defaultNS: 'client',
//     fallbackLng,
//     react: {
//       useSuspense: false,
//     },
//     interpolation: {
//       prefix: '[[__',
//       suffix: '__]]',
//     },
//     ...option,
//   });

//   return i18next;
// }

// // const APP_LOCALE = initializeI18next({})

// export default initializeI18next;
import i18next from 'i18next';

i18next.init({
    fallbackLng: 'en',
    resources: {
        es: {
          translations: require('../locales/translations/es.json')
        },
        en: {
          translations: require('../locales/translations/en.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    react: {
        wait: true,
    },
});

i18next.languages = ['es', 'en'];

export default i18next;
