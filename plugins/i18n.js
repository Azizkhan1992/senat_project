import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'uz',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    switchLocalePath: '/:lang/:route',
    setLocaleCookie: true,
    getLocaleCookie: 'i18n_loc',
    vueI18n: {
      fallbackLocale: 'uz',
      messages: {
        uz: require('~/locales/uz.json'),
        uzc: require('~/locales/uzc.json'),
        ru: require('~/locales/ru.json'),
      },
    },
    // messages: {
    //   'ru': require('~/locales/ru.json'),
    //   'uz': require('~/locales/uz.json'),
    //   'uzc': require('~/locales/uzc.json')
    // }
  });

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }

    return `/${app.i18n.locale}/${link}`;
  }
}