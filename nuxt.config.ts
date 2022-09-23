// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
      "meta": [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      "link": [],
      "style": [],
      "script": [{
        src: "https://documentcloud.adobe.com/view-sdk/viewer.js"
      }],
      "noscript": [],
      "charset": "utf-8",
      "viewport": "width=device-width, initial-scale=1"
    },
    build: {
        postcss: {
          postcssOptions: require('./postcss.config.js'),
        },
    },
    
    modules: [
      '@pinia/nuxt',
    ],

    

    css: [
        '@/assets/styles/main.css',
      ],
    
    runtimeConfig: {
        proxyURL:  '',
        baseApiURL:  '',
        
        authApiURL:  '',
        pdfApiKey: ''
        
     
    },
})
