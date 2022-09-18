<script setup>
const config = useRuntimeConfig();
</script>

<template>
  <BaseButton
    :class="$style.secondaryButton"
     >
    
    <slot />
  </BaseButton>
</template>

<style module>
    .secondaryButton {
      @apply hover:bg-gray-200 text-primaryColor border-primaryColor bg-blankColor;
    }
  

</style>