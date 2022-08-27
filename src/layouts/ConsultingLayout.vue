<script setup>
import TheFooter from "@/components/TheFooter";
import TheNavBar from "@/components/TheNavBar";
import GenericPageHeader from "@/components/GenericPageHeader.vue";
import ConsultingBreadcrumbs from "@/components/ConsultingBreadcrumbs.vue";
import {onMounted, ref} from 'vue';
import {useRoute} from 'vue-router'
import axios from 'axios';
const API = 'https://api-consulting-crm.herokuapp.com/v1/';
const routeInfo = ref({
  page: {},
  categories:{},
  posts: {}
})

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
    console.log("categories");
    routeInfo.value.categories = res.data.results;
    
    console.log(routeInfo.value.categories)
  })
  .catch((err)=>{
    console.log(err)
  })
}
// const getPostName = ()=> {
//   axios.get(API+'/posts/'+route.params.postId)
//   .then((res)=> {
//     console.log(res.data);
//     routeInfo.value.post_name = res.data.title;
//   })
//   .catch((err)=>{
//     console.log(err)
//     return err;
//   })
// }
onMounted(()=>{
  if(route.params.pageId == null) return;
    getPage();
    getCategories();
  
  // if(route.params.postId == null) return;
  // getPostName();
  
})
</script>

<template>
  <div>
    <header class="sticky top-0 z-50">
      <TheNavBar>
        <template #links>
          <slot name="links" />
        </template>
      </TheNavBar>
    </header>

    <GenericPageHeader class="shadow"></GenericPageHeader>
   
    <main v-bind="$attrs" class="relative flex min-h-screen  z-10">

      <aside
        class="w-1/5 p-4"
        :class="`hidden md:block border-r-2 border-[${secondaryColor}]`"
      >
        <ul class="text-left text-xl font-medium">
          <li>
            <router-link v-for="category in routeInfo.categories" :key="`CategoryLink-${category.id}`"
              :class="`border-[${secondaryColor}]`"
              class="inline-block py-2 border-b w-full"
              :to="`${route.params.categoryId?`/page/${route.params.pageId}`:route.params.pageId}/category/${category.id}`" 
              :replace="route.params.categoryId?true: false"
              >{{category.name}}</router-link
            >
          </li>
          
        </ul>
      </aside>
      <div class="w-full md:w-4/5" :key="$route.fullPath">
         
        <ConsultingBreadcrumbs class="mx-auto w-full sm:w-5/6"/>      

        <slot name="body" />
      </div>
    </main>

    <TheFooter class="relative bottom-0 z-50"></TheFooter>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<style>
</style>