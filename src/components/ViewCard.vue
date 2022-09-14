<script setup>
import { getCurrentInstance } from "vue";
import {ref} from 'vue'

const loading = ref(true);
const error = ref(false);

const app = getCurrentInstance();
const secondaryColor = app.appContext.config.globalProperties.secondaryColor;
const blankColor = app.appContext.config.globalProperties.blankColor;
const onLoad = () => {
  loading.value = false;
}
const onError = () => {
  loading.value = false;
  error.value = true;
};
</script>
<script>
export default {
  props: ['pageInfo']
}
</script>
<template>
  <div
    class="relative max-h-[100%] max-w-[100%] h-full w-[85vw] mx-0 sm:w-96 h-80 
    md:w-80 md:h-72
    lg:w-full lg:h-72
    border border-gray-100 hover:scale-105 duration-300 rounded-sm overflow-hidden shadow-2xl"
    :class="`${!loading && pageInfo != null? '':'animate-pulse'}`"
  >
    <div class="absolute w-full h-full rounded-t-sm brightness-50">
      <img
        
        src="https://source.unsplash.com/400x400/?businesses"
        class="
          h-full 
          w-full
          object-cover
        "
        :class="`${loading || pageInfo == null ? 'hidden':''}`"
        @load="onLoad()"
        @error="onError()"
        alt="Card Image"
      />
      <div :class="`${loading || pageInfo==null || error? '':'hidden'}`" class="block w-full h-full object-cover bg-slate-300"></div>
    </div>
    <div class="absolute bottom-0 grid grid-cols-1 h-1/3 p-4 w-full">
      <span class="w-full text-left text-2xl font-semibold truncate" :class="`text-[${blankColor}] ${!loading && pageInfo != null? '':'bg-slate-700'}` ">{{!loading && pageInfo != null? pageInfo.name: ''}}</span>
      <router-link :class="`text-[${secondaryColor}] text-lg text-left ${!loading && pageInfo != null? 'w-full':'w-1/2 mt-1 bg-slate-700 pointer-events-none'}`"
       :to="`/page/${pageInfo?.id}`"
        @click="$window.scrollTo(0,0)"
      replace>
       {{!loading && pageInfo != null?'Ver más ►':''}}
       </router-link>
    </div>
  </div>
</template>