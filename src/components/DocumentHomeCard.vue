<script setup>
import { getCurrentInstance } from "vue";

const app = getCurrentInstance();
const primaryColor = app.appContext.config.globalProperties.primaryColor;
const secondaryColor = app.appContext.config.globalProperties.secondaryColor;
const blankColor = app.appContext.config.globalProperties.blankColor;
</script>
<template>
  <div
    class="w-auto mx-4 sm:mx-0 sm:w-96 h-80 
    md:w-80 md:h-72
    lg:w-full lg:h-72
    2xl:h-96 border border-gray-100 hover:scale-105 duration-300 rounded-sm overflow-hidden shadow-2xl"
  >
    <div class="w-full h-2/3 rounded-t-sm overflow-hidden brightness-50">
      <img
        src="https://source.unsplash.com/400x400/?businesses"
        class="
          w-full
          object-cover
        "
        alt="Card Image"
      />
    </div>
    <div class="grid grid-cols-2 h-1/3 p-4">
      <span class="col-span-2 w-full text-left text-2xl font-semibold truncate" :class="`text-[${primaryColor}]`">Reformas de Iva</span>
      <span class="text-sm text-gray-600 h-full truncate text-left">El SRI declaró una reforma importante en la forma en que se requiere hacer bas asda das asdsa</span>
      
      <router-link :class="`text-[${primaryColor}] text-lg w-full text-right pr-4`" to="/page/category">Ver más ►</router-link>
    </div>
  </div>
</template>