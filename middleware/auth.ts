import { storeToRefs } from "pinia";
import { useAuthStore } from "~~/stores/authStore";
export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useState('auth')
    const authStore = useAuthStore();
    const {user} = storeToRefs(authStore);
    
    const usercookie = useCookie('user').value
    
    if(usercookie) {
      auth.value = true;
      user.value = usercookie;

    }
    if (!auth.value) {
      return navigateTo('/login')
    }
  })