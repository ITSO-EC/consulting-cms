<script setup>
import BaseButton from "@/components/BaseButton.vue"
import { getCurrentInstance } from "vue";

const app = getCurrentInstance();
const primaryColor = app.appContext.config.globalProperties.primaryColor;
const blankColor = app.appContext.config.globalProperties.blankColor;
</script>

<template>
    
    <BaseButton 
    
    :class="`text-[${blankColor}] border-[${secondaryColor}] bg-[${primaryColor}] hover:bg-[${secondaryColor}]`">
        <slot />
    </BaseButton>  
</template>