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

createApp(App)
    .use(router)
    .component('BaseIcon',BaseIcon)
    .component('BaseButton',BaseButton)
    .component('BaseInput', BaseInput)
    .component('BaseModal', BaseModal)
    .component('BaseToast', BaseToast)
.mount('#app')
