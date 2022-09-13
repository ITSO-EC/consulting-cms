<script setup>
  import DocumentHomeCard from "@/components/DocumentHomeCard.vue"
  import axios from 'axios';
  import {onMounted, ref} from 'vue';

  const posts = ref([]);
  const loading = ref(true);

  const API = 'https://api-consulting-crm.herokuapp.com/v1/';
  const getPosts= () => {
      axios.get(API+'posts?limit=2')
      .then((res)=> {
        posts.value = res.data.results
        loading.value = false

      })
      .catch((err)=>{
        this.loading = false
        console.log(err)
      })
    }

    onMounted(() => {
      getPosts();
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
            grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2
            place-content-center
            gap-8
            pb-8
          "
        >

          <DocumentHomeCard class="justify-self-end" :post="posts[0]"></DocumentHomeCard>
          
<!--         
          <DocumentHomeCard class="justify-self-center"></DocumentHomeCard> -->
          <DocumentHomeCard class="justify-self-start" :post="posts[1]"></DocumentHomeCard>
        </div>
      </div>
</template>