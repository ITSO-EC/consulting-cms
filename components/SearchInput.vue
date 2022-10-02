<script setup>
import SearchDropdown from '~~/components/SearchDropdown';
const props = defineProps({
  summarized: {
    type: Boolean,
    default: false,
  }
})

const {posts, error, loading, results, page , initializeAllPosts, initializeByQuery} = useQueryPosts();
const openDropdown = ref(false);
const searchQuery = ref('');
const searchinput = ref(null);


//Abre el dropdown si hay texto
 watch(searchQuery,()=>{
   if(!searchinput.value)
   { 
     openDropdown.value = false;
   }  
   else { 
     openDropdown.value = true;
   }
 })

 //Cierra si no se hace click en el input
  const clickHandler = ({ target }) => {
    
    if (searchinput === searchinput.value.$refs.input) {
      openDropdown.value = true;
    }
    else {
      openDropdown.value = false
    }

  }
  
  const keyHandler = ({ keyCode }) => {
     if(keyCode === 32 ){
        if(searchQuery.value.length > 0 )
        {
          initializeByQuery(searchQuery.value)
        }
     }
     
     if(searchQuery.value.length < 4) {
        initializeAllPosts();
     }
     
  } 

  //Inicia todos los posts
  initializeAllPosts()
  onMounted(async () => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)  
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })    
   


</script>
<template>
        
        <!-- <BaseInput class="bg-gray-200 focus:bg-gray-50" :placeholder="'Ingrese aqui lo que quiera buscar'" /> -->
        <div class="border-none w-full relative">
            <label class="sr-only">Search </label>
            <div class="relative z-50">
              <button type="submit" id="searchsubmit" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                
                <BaseIcon :size="'h-[20px] w-[20px]'" :class="`text-blue-500`" name="search"/>
              </button>
              <BaseInput ref="searchinput" :top="false" :class="`pl-10`" :placeholder="'Buscar'" v-model="searchQuery"/>
            </div>
            <SearchDropdown v-if="!summarized && !loading" :open="openDropdown" :queryText="searchQuery"></SearchDropdown>
          </div>
  
</template>
