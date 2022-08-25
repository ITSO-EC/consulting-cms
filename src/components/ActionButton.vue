<script setup>
import BaseButton from "@/components/BaseButton.vue";
</script>

<template>
  <BaseButton
    :class="`text-[${blankColor}] border-[${secondaryColor}] bg-[${primaryColor}] hover:bg-[${secondaryColor}]`"
  >
    <slot />
  </BaseButton>
</template>