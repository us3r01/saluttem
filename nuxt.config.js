import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
 head: {
  title: 'Productos para cuidar de ti',
  titleTemplate: '%s - Saluttem',
  htmlAttrs: {
    lang: 'es'
  },
  meta: [ // Each object in this array is its own meta tag
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial scale=1' },
    { name:'theme-color', content:'#5FC7C2'},
    { name:'geo.region' ,content:'MX-PUE'},
    { name:'geo.placename', content:'Puebla'},
    { name:'geo.position', content:'19.001559;-98.202893'},
    { name:'ICBM', content:'19.001559, -98.202893'}
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {rel:'apple-touch-icon', sizes:'57x57', href:'/apple-icon-57x57.png'},
    {rel:'apple-touch-icon', sizes:'60x60', href:'/apple-icon-60x60.png'},
    {rel:'apple-touch-icon', sizes:'72x72', href:'/apple-icon-72x72.png'},
    {rel:'apple-touch-icon', sizes:'76x76', href:'/apple-icon-76x76.png'},
    {rel:'apple-touch-icon', sizes:'114x114', href:'/apple-icon-114x114.png'},
    {rel:'apple-touch-icon', sizes:'120x120', href:'/apple-icon-120x120.png'},
    {rel:'apple-touch-icon', sizes:'144x144', href:'/apple-icon-144x144.png'},
    {rel:'apple-touch-icon', sizes:'152x152', href:'/apple-icon-152x152.png'},
    {rel:'apple-touch-icon', sizes:'180x180', href:'/apple-icon-180x180.png'},
    {rel:'icon" type="imag/png', sizes:'192x192',  href:'/android-icon-192x192.png'},
    {rel:'icon" type="imag/png', sizes:'32x32', href:'/favicon-32x32.png'},
    {rel:'icon" type="imag/png', sizes:'96x96', href:'/favicon-96x96.png'},
    {rel:'icon" type="imag/png', sizes:'16x16', href:'/favicon-16x16.png'},
    { rel: 'canonical', href: 'https://www.saluttem.com' }
  ]
},
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~plugins/components.js',
    '~/plugins/jsonld'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-148575242-2'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey:  process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          databaseURL: process.env.DATA_URL,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.BUCKET,
          messagingSenderId: process.env.MESSAGE_ID,
          appId: process.env.APP_ID,
          measurementId: process.env.MEASURE_ID
        },
        services: {

          firestore: true,
          functions: {
            location: 'us-central1', // Default
            emulatorPort: 12345
          },
          storage: true,
          realtimeDb: true,
          performance: true,
          analytics: true,
          remoteConfig: {
            settings: {
              fetchTimeoutMillis: 60000, // Default
              minimumFetchIntervalMillis: 43200000 // Default
            },
            defaultConfig: {
              welcome_message: "Welcome"
            }
          },
          messaging: {
            createServiceWorker: true
          }
      }
      }
    ],
    '@nuxtjs/sitemap'
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
 robots: {
  UserAgent: '*',
  Disallow: '/',
  Sitemap: 'http://saluttem.com/sitemap.xml'
},
 sitemap: {
  hostname: 'https://saluttem.com',
  gzip: true,
  exclude: [
    ''
  ],
  routes: [
    '/',
    '/acercade',
    '/allproducts',
    '/contacto'
  ]
},
vuetify: {
  customVariables: ['~/assets/variables.scss'],
  treeShake: true,
  theme: {
    light: true,
    themes: {
      dark: {
        primary: colors.blue,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      },
      light: {
        primary: colors.blue,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
    }
  }
},

vue: {
  config: {
    productionTip: false,
    devtools: true
  }
},

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
