export default function ({ $axios, i18n }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
      headers: {
        common: {
          'Accept-Language': i18n.defaultLocale,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    });

    // Set baseURL to something different
    api.setBaseURL(process.env.BASE_URL)
  
    // Inject to context as $api
    inject('api', api)
  }