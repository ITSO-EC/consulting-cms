import { storeToRefs } from "pinia";
import { useAuthStore } from "~~/stores/authStore";

const AUTH_API = 'https://auth.itso.ga/v1/auth/'

export default async function registerWithEmail( name:string, email:string ,password: string, phone_number: string) {

    const authStore = useAuthStore();
    const {user} = storeToRefs(authStore);
    try {
        const res = await $fetch(AUTH_API+'register', {
            method: 'POST',
            headers:{'Content-type': 'application/json'},
            
            body: {name, email, password}
        }
        );

        if(res) {
            const authStore = useAuthStore();
            user.value = res;
            console.log(authStore.user);
            await useRouter().push('/login')
        }

    } catch (error) {
        console.log('error: '+ error.toString());
    }
}