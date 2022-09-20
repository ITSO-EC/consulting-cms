// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  
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
       
        primaryColor:  '',
        secondaryColor: '',
        thirdColor:  '', 
        blankColor:  '',  
     
    },
})
