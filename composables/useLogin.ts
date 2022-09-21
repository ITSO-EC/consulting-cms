import { storeToRefs } from "pinia";
import { useAuthStore } from "~~/stores/authStore";

const AUTH_API = 'https://auth.itso.ga/v1/auth/'

export default async function login (email:string, password:string) {
    const authStore = useAuthStore();
    const {user} = storeToRefs(authStore);
    try {
        const res = await $fetch(AUTH_API+'login', {
            method: 'POST',
            headers:{'Content-type': 'application/json'},
            //credentials: 'include',
            //mode: 'no-cors',
            body: { email, password }
        });
        if(res) {
            authStore.login(res.user);
            await useRouter().push('/')
        }

    } catch (error) {
        
        console.log('error: '+ error);
    }
}