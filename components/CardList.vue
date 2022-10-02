<script setup>
  import DocumentHomeCard from "@/components/DocumentHomeCard.vue"
  import useQueryPosts from "~~/composables/useQueryPosts";
  const {posts, initializeAllPosts} = useQueryPosts();
  const {categories, loading,initializeAllCategories,retriveCategoryById} = useCategories();
  const category1 = ref(null);
  const category2 = ref(null);
  const category3 = ref(null);
  initializeAllPosts()
  .then(()=>{
    initializeAllCategories()
      .then(()=> {
       
        category1.value = retriveCategoryById(posts.value[0]?.category)
        category2.value = retriveCategoryById(posts.value[1]?.category)
        category3.value = retriveCategoryById(posts.value[2]?.category)
      })
  })
  
</script>
<template>
      <div :key="posts" class="flex flex-col items-center py-8">
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
            grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3
            place-content-center
            gap-8
            pb-8
          "
          v-if="!loading"
        >

          <DocumentHomeCard class="justify-self-end" :category="category1" :post="posts[0]"></DocumentHomeCard>
          
<!--         
          <DocumentHomeCard class="justify-self-center"></DocumentHomeCard> -->
          <DocumentHomeCard class="justify-self-center" :category="category2" :post="posts[1]"></DocumentHomeCard>
          <DocumentHomeCard class="justify-self-start" :category="category3" :post="posts[2]"></DocumentHomeCard>
        </div>
      </div>
</template>