<script>
    import { defineComponent } from "vue";

    export default defineComponent({
    inheritAttrs: false,
    props: ["modelValue", "placeholder"],

    emits: ["update:modelValue"],
    
    methods: {
        focus() {
            this.$refs.input.focus();
        },
    },
    });
</script>

<template>
  <div
    class="
      group
      relative
      border border-black
      rounded-md
      overflow-hidden
      bg-gray-200
      focus-within:bg-white
      focus-within:border-none
      focus-within:ring-1
      focus-within:ring-blue-900
      focus-within:ring-opacity-80
    "
  >
    <input
      class="
        bg-gray-50
        appearance-none
        w-full
        py-2
        px-2
        text-black text-sm
        leading-tight
        focus:outline-none focus:bg-white
      "

      :placeholder="placeholder"
      :req="req"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      ref="input"
    />
  </div>
</template>

