import { storeToRefs } from "pinia";
import { useAuthStore } from "~~/stores/authStore";
const AUTH_API = 'https://auth.itso.ga/v1/auth/'

export default async function login (email:string, password:string) {
    const authStore = useAuthStore();
    const {user} = storeToRefs(authStore);
    const auth = useState('auth')
    try {
        const res = await $fetch(AUTH_API+'login', {
            method: 'POST',
            headers:{'Content-type': 'application/json'},
            body: { email, password }
        });
       
        if(res) {
            authStore.login(res.user);

            const acc_date = new Date(res.tokens.access.expires)
            const refr_date = new Date(res.tokens.refresh.expires)

            const user_id = useCookie('user_id', {
                expires: acc_date,
            })
            const access_token = useCookie('access_token', {
                expires: acc_date,
                httpOnly: false
            })
            const refresh_token = useCookie('refresh_token', {
                expires: refr_date,
                httpOnly: false
            })
            access_token.value = res.tokens.access.token
            refresh_token.value = res.tokens.refresh.token
            user_id.value = res.user.id
            
            auth.value = true;
            await useRouter().push('/')
        }

    } catch (error) {
        
        console.log('error: '+ error);
    }
}