<script setup>
import SearchInput from "@/components/SearchInput.vue";
import PrimaryButton from "@/components/ActionButton.vue"
import SecondaryButton from "@/components/SecondaryButton.vue"

import AppLogo from "@/components/AppLogo.vue";
import NavDropdown from "@/components/NavDropdown.vue"

const scrolled = ref(false);

const handleScroll = () => {
  if (window.scrollY > 0){
        scrolled.value=true;
      }
      else{
        scrolled.value=false;
      }
      
    
}

onMounted(()=>{
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(()=>{
  window.removeEventListener('scroll', handleScroll);
})

</script>

<template>
  <nav :class="(scrolled || !/^index*/.test($route.name))? `bg-primaryColor shadow-lg` : `bg-none  border-gray-200 `" class="transition duration-300 px-4 lg:px-6 py-2">
            <div class="grid grid-cols-2 lg:grid-cols-4 items-center mx-auto max-w-screen-xl">
                <AppLogo/>
                <div class="flex items-center lg:order-2  justify-self-end">
                    <nuxt-link to="/login" :class="`text-blankColor hover:bg-opacity-20 hover:bg-secondaryColor`" 
                    class="hidden sm:block text-sm text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Login</nuxt-link>
                    <nuxt-link to="/register">
                      <PrimaryButton
                      v-if="!scrolled" class="hidden sm:block text-sm focus:ring-2 focus:ring-blue-300 font-medium px-4 mr-2 focus:outline-none"
                      >Suscribirse</PrimaryButton>
                      <SecondaryButton
                      v-else  class="hidden sm:block text-sm focus:ring-2 focus:ring-blue-300 font-medium px-4 mr-2 focus:outline-none"
                      >Suscribirse</SecondaryButton>
                      
                    </nuxt-link>
                  
                    <NavDropdown class="lg:hidden"/>

                </div>
                <div class="hidden items-center w-full lg:flex lg:w-auto lg:order-1  col-span-2" id="mobile-menu-2">
                  <SearchInput  :class="`bg-blankColor bg-opacity-100 focus:bg-white rounded ${(/^search*/.test($route.name))? 'hidden':''}`"></SearchInput>
                </div>
            </div>
  </nav>
 
</template>
<script>

</script>
<style>
</style>