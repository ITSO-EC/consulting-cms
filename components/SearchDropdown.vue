<template>
  <div class="absolute bg-primaryColor inline-flex w-full">
    <button
      ref="trigger"
      class="fixed invisible pointer-events-none w-full justify-between border-none min-w-44 text-white hover:text-slate-200"
      aria-label="Select date range"
      aria-haspopup="true"
      @click.prevent="dropdownOpen = !dropdownOpen"
      :aria-expanded="dropdownOpen"
    >
      <span class="sr-only">Abrir menú de navegación</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-out duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="dropdownOpen" class="absolute w-full z-50 top-full bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-4">
        <div
          v-if="options?.length > 0"
          ref="dropdown"
          class="font-medium text-sm text-slate-600 divide-y divide-slate-200"
          @focusin="dropdownOpen = true"
          @focusout="dropdownOpen = false"
        >

          <nuxt-link
            v-for="option in options"
            :key="option.id"
            class="flex items-center justify-between w-full hover:bg-slate-50 py-2 font-medium px-3 cursor-pointer"
            :class="option.id === selected && 'text-indigo-500'"
            @click="selected = option.id; dropdownOpen = false"
            :to="'/'"
          >
            <span>{{option.title}}</span>
            <!-- <svg class="shrink-0 ml-2 fill-current text-indigo-400" :class="option.id !== selected && 'invisible'" width="12" height="9" viewBox="0 0 12 9">
              <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
            </svg> -->
          </nuxt-link>          
        </div>

        <div
          v-else
          ref="dropdown"
          class="font-medium text-sm text-slate-600 divide-y divide-slate-200"
          @focusin="dropdownOpen = true"
          @focusout="dropdownOpen = false"
        >

          <span
    
            class="flex items-center text-indigo-500 justify-between w-full py-2 font-medium px-3"
            @click="selected = option.id; dropdownOpen = false"
          >
            <span>No se ha encontrado un resultado</span>
          </span>          
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'DropdownFull',
  props: {  
    open: {
      type: Boolean,
      default: false,
    }, 
    queryText: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const {posts, error, loading, results, page , loadPosts} = usePosts();
    const dropdownOpen = ref(false)
    const trigger = ref(null)
    const dropdown = ref(null)    
    const selected = ref(0)
    const base = posts;

    const options = ref([...base.value]);
    const queryText = ref('');
    watch(
      props, (val)=> {
        dropdownOpen.value = val.open;
        queryText.value = val.queryText;

        options.value = filterByValue(options.value, queryText.value);
        //if(trigger && val) trigger.click();
      }
    )


    const filterByValue = (array,text) => {
      
      array = [...base.value];
      let sorted =  array?.filter(o =>
       o["title"]?.toString().toLowerCase().includes(text?.toString().toLowerCase()));
      return sorted;
    }


    // //   // close on click outside
    //  const clickHandler = ({ target }) => {
    //    if (!dropdownOpen.value || dropdown.value.contains(target) || trigger?.value.contains(target)) return
    //    dropdownOpen.value = false
    //  }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen.value || keyCode !== 27) return
      dropdownOpen.value = false
    }

    onMounted(() => {
      //document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      //document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })    
    
    return {
      dropdownOpen,
      trigger,
      dropdown,
      selected,
      options,
    }
  },

}
</script>