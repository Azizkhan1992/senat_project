export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'senat_project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '~/styles/styles.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/fontawesome.js',
    // { src: '~/plugins/aos', mode: 'client' },
    '~/plugins/aos.client.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      {
        code: 'uz',
        name: 'O\'zbek'
      },
      {
        code: 'uzc',
        name: 'Ўзбек'
      },
      {
        code: 'ru',
        name: 'Русский'
      }
    ],
    defaultLocale: 'uzc',
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
        uz: require('./locales/uz.json'),
        uzc: require('./locales/uzc.json'),
        ru: require('./locales/ru.json'),
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
