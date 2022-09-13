<script setup>
import {onMounted, ref} from 'vue';
import {useRoute} from 'vue-router'
import axios from 'axios';
const API = 'https://api-consulting-crm.herokuapp.com/v1/';
const routeInfo = ref({
  page_name: '',
  category_name:'',
  post_name: ''
})

const route = useRoute()
const getPageName = ()=> {
  axios.get(API+'/pages/'+route.params.pageId)
  .then((res)=> {
    console.log(res.data);
    routeInfo.value.page_name = res.data.name

  })
  .catch((err)=>{
    console.log(err)
  })
}
const getCategoryName = ()=> {
  axios.get(API+'/categories/'+route.params.categoryId)
  .then((res)=> {
    console.log(res.data);
    routeInfo.value.category_name = res.data.name;
  })
  .catch((err)=>{
    console.log(err)
  })
}
const getPostName = ()=> {
  axios.get(API+'/posts/'+route.params.postId)
  .then((res)=> {
    console.log(res.data);
    routeInfo.value.post_name = res.data.title;
  })
  .catch((err)=>{
    console.log(err)
    return err;
  })
}
onMounted(()=>{
  if(route.params.pageId == null) return;
    getPageName();
  if(route.params.categoryId == null) return;
   getCategoryName();
  
  if(route.params.postId == null) return;
  getPostName();
  
})
</script>
<template>
     <div class="px-2 sm:px-0 py-6">
          <div class="text-left">
          <!-- Start -->
            <ul class="inline-flex flex-wrap text-sm font-medium">
              <li
                class="
                  after:content-['/']
                  last:after:hidden
                  after:text-slate-400 after:px-2
                "
              >
                <router-link class="text-slate-500 hover:text-indigo-500 inline-flex h-4" to="/listpage">
                    <BaseIcon class="p-0" :size="'h-5 w-5'" :name="'home'"/>
                 
                </router-link>
              </li>
              <li
                 v-if="routeInfo.page_name"
                class="
                  after:content-['/']
                  last:after:hidden
                  after:text-slate-400 after:px-2
                "
              >
                <router-link class="inline-block text-slate-500 hover:text-indigo-500" :to="`/page/${route.params.pageId}`" replace
                  >
                  {{routeInfo.page_name}}</router-link
                >
              </li>
              <li
                
                 v-if="routeInfo.category_name"
                class="
                  after:content-['/']
                  last:after:hidden
                  after:text-slate-400 after:px-2
                "
              >
                <router-link class="inline-block text-slate-500 hover:text-indigo-500" :to="`/page/${route.params.pageId}/category/${route.params.categoryId}`"
                  >{{routeInfo.category_name}}</router-link
                >
              </li>
              <li
                class="
                  after:content-['/']
                  last:after:hidden
                  after:text-slate-400 after:px-2
                "
                
                 v-if="routeInfo.post_name"
              >
                <router-link class="inline-block text-slate-500 hover:text-indigo-500" :to="`/page/${route.params.pageId}/category/${route.params.categoryId}/post/${route.params.postId}`"
                  >{{routeInfo.post_name}}</router-link
                >
              </li>
            </ul>
          <!-- End -->
          </div>
        </div>
</template>