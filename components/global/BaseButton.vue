<template>
    <button :class="$style.baseButton">
        <slot />
    </button>    
</template>
<style module>
    .baseButton {
       @apply rounded border px-4 py-1 hover:scale-105 duration-300;
    }
    

</style>