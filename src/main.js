import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

// base components
import BaseIcon from '@/components/BaseIcon.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseModal from '@/components/BaseModal.vue'
import BaseToast from '@/components/BaseToast.vue'
const app = createApp(App); 

    app.use(router)
    app.component('BaseIcon',BaseIcon)
    app.component('BaseButton',BaseButton)
    app.component('BaseInput', BaseInput)
    app.component('BaseModal', BaseModal)
    app.component('BaseToast', BaseToast)
    app.config.globalProperties.primaryColor='#0085FF'
    app.config.globalProperties.secondaryColor='#48C4FA'
    app.config.globalProperties.thirdColor='#2FC0AF'
    app.config.globalProperties.blankColor='#FBF6F6'
    
    app.mount('#app')
