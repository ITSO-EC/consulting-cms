import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

// base components
import BaseIcon from '@/components/BaseIcon.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'

createApp(App)
    .use(router)
    .component('BaseIcon',BaseIcon)
    .component('BaseButton',BaseButton)
    .component('BaseInput', BaseInput)
.mount('#app')
