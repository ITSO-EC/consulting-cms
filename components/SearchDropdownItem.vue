<template>
    <nuxt-link
            class="flex items-center  w-full hover:bg-slate-50 py-2 font-medium px-3 cursor-pointer"
            :class="category=='...'? 'hidden':''"
            :to="`/view/${category.page}/category/${category.id}/post/${post.id}`"
          >
            <span class="text-slate-600 mr-2">{{`${category.name?category.name : '...'}`}}</span> /
            <span class="ml-2">{{post.title}}</span>
            <span class="justify-self-end text-slate-400 ml-auto"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
  
            </span>
          </nuxt-link> 
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    default: {}
  }
})
const category = ref('...');
const { loading , retriveCategoryById } = useCategories();

retriveCategoryById(props.post.category)
.then((res)=>{
  category.value = res
})
.catch((err)=>console.error(err))

</script>