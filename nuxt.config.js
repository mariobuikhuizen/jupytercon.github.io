
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500|IBM+Plex+Sans:400,500,600,700&display=swap" },
    ]
  },
  pageTransition: "page",
  router: {
    trailingSlash: true
  },
  server: {
    // host: '0.0.0.0'
    host: 'localhost'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
      '~assets/scss/app.scss',
      '~assets/scss/custom.sass',
      '~assets/scss/menubar.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // '@nuxtjs/pwa',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, { isClient }) {
    },
    // extractCSS: true,
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       styles: {
    //         name: 'styles',
    //         test: /\.(css|vue)$/,
    //         chunks: 'all',
    //         enforce: true
    //       }
    //     },
    //   }
    // },
    splitChunks: {
      pages: false,
      vendor: false,
      commons: false,
      runtime: false,
      layouts: false
    },
  }
}
