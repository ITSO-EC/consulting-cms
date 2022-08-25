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
      :class="`${top ? 'rounded-t':'rounded'} border-b border-b-[${primaryColor}] bg-[${secondaryColor}] focus:bg-[${blankColor}] bg-opacity-10`"
      class="
        w-full
        p-2
        text-black text-sm
        leading-tight
        focus:outline-none 
      "
      v-bind="$attrs"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      ref="input"
    />
</template>

