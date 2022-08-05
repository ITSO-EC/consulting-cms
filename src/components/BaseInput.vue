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
  
    <input
      class="
        rounded
        bg-blue-200
        w-full
        p-2
        text-black text-sm
        leading-tight
        focus:outline-none focus:bg-white
      "
      v-bind="$attrs"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      ref="input"
    />
</template>

