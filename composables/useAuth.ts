import { storeToRefs } from 'pinia';
import { useAuthStore } from '~~/stores/authStore'

const useAuth = () => {
    const authStore = useAuthStore();
    const { user } = storeToRefs(authStore);
    
     return {
        // Properties
        user

    }
}
export default useAuth;
