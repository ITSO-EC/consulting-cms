<script setup>
import BaseButton from "@/components/BaseButton.vue"
import { getCurrentInstance } from "vue";

const app = getCurrentInstance();
const primaryColor = app.appContext.config.globalProperties.primaryColor;
const blankColor = app.appContext.config.globalProperties.blankColor;
</script>

<template>
    
    <BaseButton 
    class="hover:bg-gray-200"
    :class="`text-[${primaryColor}] border-[${primaryColor}] bg-[${blankColor}]`">
        <slot />
    </BaseButton>  
</template>