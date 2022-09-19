<script setup>



const props = defineProps({
  show: {
    type: Boolean,
    default: true,
  },
  
});


const emit = defineEmits(["close"]);
const close = () => {
    emit("close");
};


</script>
<template>
  <div
    :class="props.show? '':'hidden'"
    class="
      flex
      items-center
      p-4
      w-full
      max-w-xs
      text-gray-500
      bg-white
      rounded-lg
      shadow
      dark:text-gray-400 dark:bg-gray-800
    "
  >
    <div
      class="
        inline-flex
        flex-shrink-0
        justify-center
        items-center
        w-8
        h-8
        text-blue-500
        bg-blue-100
        rounded-lg
        dark:bg-blue-800 dark:text-blue-200
      "
    >
        <BaseIcon name="user"></BaseIcon>
    </div>
    <div class="ml-3 text-sm font-normal">
        <slot></slot>
    </div>
    <button
      type="button"
      @click="close"
      class="
        outline-none
        border-none
        ml-auto
        -mx-1.5
        -my-1.5
        bg-white
        text-gray-400
        hover:text-gray-900
        rounded-lg
        focus:ring-2 focus:ring-gray-300
        p-1.5
        hover:bg-gray-100
        inline-flex
        
        dark:text-gray-500
        dark:hover:text-white
        dark:bg-gray-800
        dark:hover:bg-gray-700
      "
      aria-label="Close"
    >
      <BaseIcon name="close"></BaseIcon>
    </button>
  </div>
</template>