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
          class="font-medium text-sm text-indigo-500 divide-y divide-slate-200"
          @focusin="dropdownOpen = true"
          @focusout="dropdownOpen = false"
        >

          <SearchDropdownItem
            v-for="option in options"
            :key="option._id"
            :post="option"
            @click="dropdownOpen = false"
         
          />
                   
        </div>

        <div
          v-else
          ref="dropdown"
          class="font-medium text-sm text-slate-600 divide-y divide-slate-200"
          @focusin="dropdownOpen = true"
          @focusout="dropdownOpen = false"
        >

          <span
    
            class="flex items-center justify-between w-full py-2 font-medium px-3"
            @click="selected = option.id; dropdownOpen = false"
          >
            <span>Busca otros temas de interés</span>
          </span>          
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import SearchDropdownItem from '~~/components/SearchDropdownItem.vue';
export default {
  name: 'DropdownFull',
  components: {
    SearchDropdownItem
  },  
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
    const { views } = useViews();
    const {posts, error, loading, results, page , loadPosts, initializeAllPosts, initializeByQuery} = useQueryPosts();
    const {retriveCategoryById} = useCategories();

    const dropdownOpen = ref(false)
    const trigger = ref(null)
    const dropdown = ref(null)    
    const selected = ref(0)

    const options = ref([...posts.value]);
    const queryText = ref('');

    watch(
      props, (val)=> {
        dropdownOpen.value = val.open;
        queryText.value = val.queryText;
        if(!queryText.value) {
          options.value = [...posts.value];
        }
        else{
          options.value = filterByValue(queryText.value);
        
        }
        
        //if(trigger && val) trigger.click();
      }
    )

    const filterByValue = (text) => {
      let array = [...posts.value];  
      let sorted =  array.filter(o => similarity(o["title"]?.toString(), text?.toString()) > 0.05)
        
        
        // o["title"]?.toString().toLowerCase().includes(text?.toString().toLowerCase()));
        return sorted;
      
    }


    const similarity = (s1, s2) => {
      let longer = s1;
      let shorter = s2;
      if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
      }
      let longerLength = longer.length;
      if (longerLength == 0) {
        return 1.0;
      }
      return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
    }

    const editDistance = (s1, s2) => {
      s1 = s1.toLowerCase();
      s2 = s2.toLowerCase();

      let costs = new Array();
      for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
          if (i == 0)
            costs[j] = j;
          else {
            if (j > 0) {
              let newValue = costs[j - 1];
              if (s1.charAt(i - 1) != s2.charAt(j - 1))
                newValue = Math.min(Math.min(newValue, lastValue),
                  costs[j]) + 1;
              costs[j - 1] = lastValue;
              lastValue = newValue;
            }
          }
        }
        if (i > 0)
          costs[s2.length] = lastValue;
      }
      return costs[s2.length];
    }

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
      retriveCategoryById
    }
  },

}
</script>