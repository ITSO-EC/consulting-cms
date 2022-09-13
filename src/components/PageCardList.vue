<script setup>
  import ViewCard from "@/components/ViewCard.vue"
import {onMounted, ref} from 'vue';
import axios from 'axios';
const API = 'https://api-consulting-crm.herokuapp.com/v1/';
const pages = ref([])

const getPage = ()=> {
  axios.get(API+'pages?limit=4')
  .then((res)=> {
    //console.log(res.data);
    pages.value = res.data.results
    console.log(pages.value);

  })
  .catch((err)=>{
    console.log(err)
  })
}
onMounted(()=>{
    getPage();
})

</script>
<template>
      <div class="flex flex-col items-center py-8">
        <div class="w-full md:w-5/6 lg:w-2/3 lg:grid gap-8 lg:grid-cols-2">
          <h1 class="w-full px-4 sm:px-0 sm:text-center lg:text-left md:mt-8 lg:justify-self-end font-bold my-4 text-2xl">
            <slot name="list-title"></slot>
          </h1>
        </div>
        
        <div
          class="
            w-auto
            md:w-5/6
            lg:w-2/3
            h-auto
            mx-auto
            grid grid-rows-4 lg:grid-rows-1 lg:grid-cols-2
            place-content-center
            gap-8
            pb-8
          "
        >

          <ViewCard class="justify-self-end" :pageInfo="pages[0]"></ViewCard>
          
<!--         
          <ViewCard class="justify-self-center"></ViewCard> -->
          <ViewCard class="justify-self-start" :pageInfo="pages[1]"></ViewCard>
          <ViewCard class="justify-self-end" :pageInfo="pages[2]"></ViewCard>
          
<!--         
          <ViewCard class="justify-self-center"></ViewCard> -->
          <ViewCard class="justify-self-start" :pageInfo="pages[3]"></ViewCard>
        </div>
      </div>
</template>