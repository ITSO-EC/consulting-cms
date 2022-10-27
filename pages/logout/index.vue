<script setup>
import { onMounted } from "vue";
import ActionButton from "~~/components/ActionButton.vue"
import AppLogo from "~~/components/AppLogo.vue"
import useAuth from '~~/composables/useAuth'
const {user} = useAuth()

definePageMeta({
  layout: "guest",
});

onMounted(async ()=> {
 

  const at = useCookie('access_token')
  at.value = null
  
  const rt = useCookie('refresh_token')
  rt.value = null

  const uid = useCookie('user')
  uid.value = null

  user.value = null

  const auth = useState('auth')
  auth.value = false

  
  useRouter().push('/login')
})
</script>
<template>
  <div class="bg-white">
  </div>
</template>

