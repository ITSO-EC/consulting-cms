<script>
    import { defineComponent } from "vue";

    export default defineComponent({
    inheritAttrs: false,
    props: {
      modelValue:{
        type:String,
        default:''
      },
      placeholder: {
        type:String,
        default: 'Buscar'
      },
      top: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
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
      :class="`${top ? 'rounded-t':'rounded'} border-b border-b-[${primaryColor}] ${disabled? 'bg-white':`bg-[${secondaryColor}] focus:bg-[${blankColor}] bg-opacity-10`}  `"
      class="
        w-full
        p-2
        text-black text-sm
        leading-tight
        focus:outline-none 
        shadow
      "
      v-bind="$attrs"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      ref="input"
      :disabled="disabled"
    />
</template>

