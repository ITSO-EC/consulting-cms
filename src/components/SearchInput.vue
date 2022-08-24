<script setup>
import { getCurrentInstance } from "vue";

const app = getCurrentInstance();
const secondaryColor = app.appContext.config.globalProperties.secondaryColor;
const blankColor = app.appContext.config.globalProperties.blankColor;
</script>
<template>
        
        <!-- <BaseInput class="bg-gray-200 focus:bg-gray-50" :placeholder="'Ingrese aqui lo que quiera buscar'" /> -->
        <div class="w-full">
            <label class="sr-only">Search </label>
            <div class="relative z-50">
              <button type="submit" id="searchsubmit" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                
                <BaseIcon :size="'h-[20px] w-[20px]'" :class="`text-blue-500`" name="search"/>
        
              </button>
              <BaseInput :class="`bg-gray-50 focus:bg-${blankColor} pl-10`" :placeholder="'Buscar'" /></div>
          </div>
  
</template>
