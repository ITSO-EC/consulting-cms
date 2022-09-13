<script setup>
import SearchInput from "@/components/SearchInput.vue";
import PrimaryButton from "@/components/ActionButton.vue"
import SecondaryButton from "@/components/SecondaryButton.vue"
import { getCurrentInstance } from "vue";

import AppLogo from "@/components/AppLogo.vue";
import NavDropdown from "@/components/NavDropdown.vue"

const app = getCurrentInstance();
const primaryColor = app.appContext.config.globalProperties.primaryColor;
const secondaryColor = app.appContext.config.globalProperties.secondaryColor;
const blankColor = app.appContext.config.globalProperties.blankColor;
</script>

<template>
  <nav :class="(scrolled || /^profile*/.test($route.name)|| /^search*/.test($route.name)|| /^orders*/.test($route.name)|| /^list.page*/.test($route.name))? `bg-[${primaryColor}] shadow-lg` : `bg-none  border-gray-200 `" class="transition duration-300 px-4 lg:px-6 py-2.5">
            <div class="grid grid-cols-2 lg:grid-cols-4 items-center mx-auto max-w-screen-xl">
                <AppLogo/>
                <div class="flex items-center lg:order-2  justify-self-end">
                    <router-link to="/login" :class="`text-[${blankColor}] hover:bg-opacity-20 hover:bg-[${secondaryColor}]`" 
                    class="hidden sm:block text-sm text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Login</router-link>
                    <router-link to="/register">
                      <PrimaryButton
                      v-if="!scrolled" class="hidden sm:block text-sm focus:ring-2 focus:ring-blue-300 font-medium px-4 mr-2 focus:outline-none"
                      >Suscribirse</PrimaryButton>
                      <SecondaryButton
                      v-else  class="hidden sm:block text-sm focus:ring-2 focus:ring-blue-300 font-medium px-4 mr-2 focus:outline-none"
                      >Suscribirse</SecondaryButton>
                      
                    </router-link>
                  
                    <NavDropdown class="lg:hidden"/>

                </div>
                <div class="hidden items-center w-full lg:flex lg:w-auto lg:order-1  col-span-2" id="mobile-menu-2">
                  <SearchInput  :class="`bg-[${blankColor}] bg-opacity-100 focus:bg-white rounded`"></SearchInput>
                </div>
            </div>
  </nav>
 
</template>
<script>
export default {
  data () {
    return {
      scrolled: true,
    }
  },
   created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 0){
        this.scrolled=true;
      }
      else{
        this.scrolled=false;
      }
      
    }
  }
}
</script>
<style>
</style>