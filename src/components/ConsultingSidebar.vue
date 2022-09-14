<script setup>
import {onMounted, ref,} from 'vue';
import {useRoute} from 'vue-router'
import axios from 'axios';
const API = 'https://api-consulting-crm.herokuapp.com/v1/';
const routeInfo = ref({
  page: {},
  categories:{},
  posts: {}
})
const showSidebar = ref(false);

const route = useRoute()
const getPage = ()=> {
  axios.get(API+'pages/'+route.params.pageId)
  .then((res)=> {
    //console.log(res.data);
    routeInfo.value.page = res.data

  })
  .catch((err)=>{
    console.log(err)
  })
}

const getCategories = ()=> {
  axios.get(API+'categories?byPage='+route.params.pageId)
  .then((res)=> {
    routeInfo.value.categories = res.data.results;
    
  })
  .catch((err)=>{
    console.log(err)
  })
}

onMounted(()=>{
  if(route.params.pageId == null) return;
    getPage();
    getCategories();
  
  
})
</script>
<script>
export default {
  inheritAttrs: false,
}
</script>
<template>

        <!-- <button class="md:hidden fixed left-0 my-auto py-6 px-1 bg-gray-200 opacity-100 border-blue-300 rounded-r" @click="showSidebar = true">►</button>
         -->
        <aside
            v-bind="$attrs"
            class="w-full md:w-1/5 p-4 z-10"
            :class="`${showSidebar? 'md:block ':'hidden md:block '} absolute h-full md:static md:h-auto border-r-2 border-[${secondaryColor}] bg-white`"
        >
            
            <ul class="text-left text-xl font-medium">
            <li class="-m-4 mb-0">
                <div
                :class="`bg-[${primaryColor}]`"
                class="inline-block py-2 border-b w-full p-4 h-16 flex items-center"
                >
                <span class="text-white">Categorias</span>
                </div
                >
            </li>
            
            </ul>
            <ul v-if="routeInfo.categories?.length > 0" class="text-left text-xl font-medium">
            <li v-for="category in routeInfo.categories" :key="`CategoryLink-${category.id}`">
                <router-link 
                :class="`border-[${secondaryColor}]`"
                class="animate__animated animate__fadeInLeft inline-block py-2 border-b w-full"
                :to="`${route.params.categoryId?`/page/${route.params.pageId}`:route.params.pageId}/category/${category.id}`" 
                :replace="route.params.categoryId?true: false"
                @click="showSidebar = false"
                >{{category.name}}</router-link
                >
            </li>
            
            </ul>
            <ul v-else class="text-left text-xl font-medium">
              <li
                  :class="`border-[${secondaryColor}]`"
                  class="animate__animated animate__fadeInLeft inline-block py-2 border-b w-full"
                  >No se han registrado categorias en esta vista</li
                  >
              
            </ul>
        </aside>
</template>