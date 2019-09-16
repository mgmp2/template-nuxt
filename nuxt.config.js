import hooks from './plugins/hooks'
const pkg = require('./package')

require('dotenv').config()

export default {
  mode: 'universal',
  router: {
    base: '/vidafree'
  },
  hooks: hooks(this),
  /*
  ** Headers of the page
  */
  head: {
    title: 'Vida Free',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'keywords', name: 'keywords', content: 'seguros, seguro de vida free ' },
      { hid: 'author', name: 'author', content: 'Interseguro | Vida Cash' },
      { hid: 'copyright', name: 'copyright', content: 'Interseguro Viajes' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/interseguro.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['@/assets/css/main.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/bootstrap.js',
    { src: '~/plugins/vuePageTransition.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    'vue-sweetalert2/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
 axios: {
  // See https://github.com/nuxt-community/axios-module#options
  baseURL: process.env.API_BASE_URL,
  browserBaseURL: process.env.API_BASE_URL,
  credentials: false
},
  /*
  ** Build configuration
  */
  build: {
    vendor: ['moment'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        // config.module.rules.push({
        //   test: /\.(vue)$/,
        //     loader: 'babel-loader',
        //     include: /(node_modules\/Stretch.vue)/
        // })
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|pdf)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.module.rules.push(
          {
          test: /\.(pdf|docx)$/,
          use: [ { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: './assets/images/' }} ] 
          }
        )
      }
    }
  },
  env: {
    environment: process.env.ENVIRONMENT,
    baseURL: process.env.API_BASE_URL,
    culqiPK: process.env.CULQI_PK,
    culqiURL: process.env.CULQI_URL,
    payULOGIN: process.env.PAYU_LOGIN,
    payUKEY: process.env.PAYU_KEY
  }
}
