

<template>
  <BaseButton  :class="$style.actionButton"> 
    <slot />
  </BaseButton>
</template>

<style module>
    .actionButton {
        @apply text-blankColor border-secondaryColor bg-primaryColor hover:bg-secondaryColor
    }

</style>