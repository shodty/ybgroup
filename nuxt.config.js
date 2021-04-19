
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Build configuration
  */
  build: {
    analyze: false,
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  /*
  server: {
    host: '0.0.0.0',
    port: 8080
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/bus',
    '~/plugins/global.js',
    {
      src: '~plugins/vue-slider-component.js',
      ssr: false
    },
    '~/plugins/vue-tooltip.js'
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
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /** shopify: {

     * Your shopify domain

    domain: 'yellow-brick-group.myshopify.com',

     * Your shopify storefront access token

    storefrontAccessToken: 'c457b61d335473bcc75ab81d94827259',

     * This will be larger than the optimized version, as it will contain all fields that are available in the
     * Storefront API. (https://help.shopify.com/en/api/custom-storefronts/storefront-api/reference)
     * This should only be used when you need to add custom queries to supplement the JS Buy SDK queries.

    unoptimized: false
  }, */
  env: {
  }
}
