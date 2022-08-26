<script setup>
import SearchInput from "@/components/SearchInput.vue";
import PrimaryButton from "@/components/ActionButton.vue"
import SecondaryButton from "@/components/SecondaryButton.vue"
import { getCurrentInstance } from "vue";

import AppLogo from "@/components/AppLogo.vue";

const app = getCurrentInstance();
const primaryColor = app.appContext.config.globalProperties.primaryColor;
const secondaryColor = app.appContext.config.globalProperties.secondaryColor;
const blankColor = app.appContext.config.globalProperties.blankColor;
</script>

<template>
  <nav :class="(scrolled || /^profile*/.test($route.name))? `bg-[${primaryColor}] shadow-lg` : `bg-none  border-gray-200 `" class="transition duration-300 px-4 lg:px-6 py-2.5">
            <div class="grid grid-cols-2 lg:grid-cols-4 items-center mx-auto max-w-screen-xl">
                <AppLogo/>
                <div class="flex items-center lg:order-2  justify-self-end">
                    <a href="/login" :class="`text-[${blankColor}] hover:bg-opacity-20 hover:bg-[${secondaryColor}]`" 
                    class="hidden sm:block text-sm text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Login</a>
                    <a href="/register">
                      <PrimaryButton
                      v-if="!scrolled" class="hidden sm:block text-sm focus:ring-2 focus:ring-blue-300 font-medium px-4 mr-2 focus:outline-none"
                      >Suscribirse</PrimaryButton>
                      <SecondaryButton
                      v-else  class="hidden sm:block text-sm focus:ring-2 focus:ring-blue-300 font-medium px-4 mr-2 focus:outline-none"
                      >Suscribirse</SecondaryButton>
                      
                    </a>
                    <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Abrir menú de navegación</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="hidden items-center w-full lg:flex lg:w-auto lg:order-1  col-span-2" id="mobile-menu-2">
                  <SearchInput  :class="`bg-[${blankColor}] bg-opacity-100 focus:bg-white rounded`"></SearchInput>
                </div>
            </div>
  </nav>
  <!-- <div class="w-full h-12 flex z-40 items-center shadow-lg" :class="`bg-[${primaryColor}]`">
    <div class="h-full w-1/5 flex items-center m-4">
      <h1 :class="`text-2xl text-[${blankColor}] font-bold`">CONSULTING</h1>
    </div>
    <nav class="flex items-center w-1/5">
      <slot name="links" />
    </nav>
    <SearchInput class="w-1/5 2xl:w-2/5"></SearchInput>
    <div class="flex w-1/5 m-4 gap-8 h-full justify-center items-center">
      
      <button class="focus:outline-none focus:bg-white focus:bg-opacity-40 p-1 rounded-md">
          <BaseIcon :name="'cart'" :class="`bg-[${secondaryColor}] hover:bg-opacity-60 active:bg-opacity-40 focus:bg-opacity-60 border border-[2px] border-[${blankColor}] text-[${blankColor}]`" class="rounded-full  p-1"></BaseIcon>
      </button>
      <button class="focus:outline-none focus:bg-white focus:bg-opacity-40 p-1 rounded-md">
        <BaseIcon :name="'user'" class="bg-white rounded-full p-1"></BaseIcon>
      </button>
    </div>
  </div> -->
</template>
<script>
export default {
  data () {
    return {
      scrolled: false,
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