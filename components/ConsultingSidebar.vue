<script setup>
const showSidebar = ref(false);
const {views, loadViews, getViewById} = useViews();
const {categories, loadCategories, getCategoryById} = useCategories();

const $route = useRoute();
  watch(views, (newViews)=> {
      
      getViewById(newViews, $route.params.categoryid);
    },
    categories, (newCategory)=> {
      
      getCategoryById(newCategory, $route.params.categoryid);
    },
   
  )

  onMounted(()=>{
    loadViews()
    if(views) getViewById(views?.value, $route.params.pageid);
    loadCategories()
    if(categories) getCategoryById(categories?.value, $route.params.categoryid);
    
  })

</script>
<script>
export default {
  inheritAttrs: false,
}
</script>
<template>

      <div class="absolute lg:relative w-full md:w-1/5 p-4 z-10 h-full  md:h-auto">
        <button :class="`${showSidebar? 'hidden':'fixed lg:hidden'}`" class="left-0 my-auto py-6 px-1 bg-gray-200 opacity-100 border-blue-300 rounded-r" @click="showSidebar = true">►</button>
        <aside
            v-bind="$attrs"
           
            :class="`${showSidebar? 'w-[100vw] lg:block h-screen lg:h-full ':'hidden lg:block h-screen lg:h-full '} animate__animated animate__fadeInLeft  absolute border-r-2 border-secondaryColor bg-white -mt-4 -ml-4`"
        >

         
            <ul v-if="categories?.length > 0" class="w-full h-full text-left text-xl font-medium">
              <li class="mb-0">
                <div
                :class="`bg-primaryColor`"
                class="inline-block py-2 px-8 border-b w-full"
                >
                <span class="text-white">Categorias</span>
                </div
                >
              </li>
            
              <li v-for="category in categories" :key="`CategoryLink-${category.id}`">
                  <nuxt-link 
                  class="border-secondaryColor px-8 inline-block py-2 border-b w-full"
                  :to="'/'"
                  @click="showSidebar = false"
                  >{{category?.name}}</nuxt-link>
                  <!-- :to="`${route.params.categoryId?`/page/${route.params.pageId}`:route.params.pageId}/category/${category.id}`" 
                  :replace="route.params.categoryId?true: false" -->
              </li>
              
            </ul>
            <ul v-else class="text-left text-xl font-medium">
              <li class="mb-0">
                <div
                :class="`bg-primaryColor`"
                class="inline-block py-2 px-8 border-b w-full"
                >
                <span class="text-white">Categorias</span>
                </div
                >
            </li>
            
              <li
                  :class="`border-secondaryColor`"
                  class="inline-block py-2 border-b w-full px-8"
                  >No se han registrado categorias en esta vista</li
                  >
              
            </ul>
         
        </aside>
      </div>
</template>