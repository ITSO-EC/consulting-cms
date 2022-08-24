<script setup>
import { reactive, computed, defineProps } from 'vue'
const props = defineProps({
    first: {
        type: Boolean,
        default: false
    }
}
)
const style = reactive({
  first: '-mt-[60px] pt-0 -pb-6 -mb-6',
  others: '' 
})

// a computed ref
const getStyle = computed(() => {
  return props.first? style.first : style.others
})
</script>

<template>
    <!-- El primer FullScreen Div en cada View necesita usar -mt-0 pt-0 si el header es sticky -->
    <div :class="getStyle" class="min-h-screen">
        
        <slot/>
        
    </div>
</template>
