<script setup>
import { getCurrentInstance } from "vue";

const app = getCurrentInstance();
const secondaryColor = app.appContext.config.globalProperties.secondaryColor;
const blankColor = app.appContext.config.globalProperties.blankColor;
</script>
<script>
export default {
  props: ['pageInfo']
}
</script>
<template>
  <div
    class="relative w-[85vw] mx-4 sm:mx-0 sm:w-96 h-80 
    md:w-80 md:h-72
    lg:w-full lg:h-72
    border border-gray-100 hover:scale-105 duration-300 rounded-sm overflow-hidden shadow-2xl"
  >
    <div class="absolute w-full h-full rounded-t-sm brightness-50">
      <img
        src="https://source.unsplash.com/400x400/?businesses"
        class="
          w-full
          h-full
          object-cover
        "
        alt="Card Image"
      />
    </div>
    <div class="absolute bottom-0 grid grid-cols-1 h-1/3 p-4">
      <span class="w-full text-left text-2xl font-semibold truncate" :class="`text-[${blankColor}]`">{{pageInfo?.name}}</span>
      <router-link :class="`text-[${secondaryColor}] text-lg w-full text-left`" :to="`/page/${pageInfo?.id}`" replace>Ver más ►</router-link>
    </div>
  </div>
</template>