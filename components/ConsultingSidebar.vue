<script setup>
  const showSidebar = ref(true);
  const $route = useRoute();
  const {selectedView} = useViews();
  const {categories} = useCategories();
  
  onMounted(()=>{
    if($route.params.categoryid)
      showSidebar.value = false;
    else 
      showSidebar.value = true;
  })
  </script>
  <script>
  export default {
    inheritAttrs: false,
  }
  </script>
  <template>
  
        <div class="absolute lg:relative w-auto md:w-1/5 z-10 h-full  md:h-auto">
          <button :class="`${showSidebar? 'hidden':'fixed lg:hidden'}`" class="left-0 my-auto py-6 px-1 bg-gray-200 opacity-100 border-blue-300 rounded-r" @click="showSidebar = true">►</button>
          <aside
              v-bind="$attrs"
             
              :class="`${showSidebar? 'w-screen lg:block h-screen lg:h-full ':'hidden lg:block h-screen lg:h-full '} absolute border-x-2 border-secondaryColor bg-white text-center`"
          >
  
           
              <ul v-if="categories?.length > 0" class="w-full min-w-[20vw] h-full text-left text-xl font-medium">
                <li class="mb-0">
                  <div
                  :class="`${showSidebar? 'text-center':'text-left'}`"
                  class="bg-primaryColor inline-block py-2 px-8 border-b w-full"
                  >
                  <span class="text-white">Categorias</span>
                  </div
                  >
                </li>
              
                <li v-for="category in categories" :key="`CategoryLink-${category._id}`">
                    <nuxt-link 
                    v-if="selectedView?._id"
                    :class="`${showSidebar? 'text-center':'text-left'} ${category?._id == $route.params?.categoryid? 'text-primaryColor font-bold':''}`"
                    class="border-secondaryColor px-8 inline-block py-2 border-b w-full hover:text-slate-500"
                    :to="{ name: 'view-pageid-category-categoryid', params: {pageid: `${selectedView?._id}`, categoryid: `${category?._id}`}}"
                    @click="showSidebar = false"
                    
                    >{{category?.name}}</nuxt-link>
                    <!-- :to="`${route.params.categoryId?`/page/${route.params.pageId}`:route.params.pageId}/category/${category._id}`" 
                    :replace="route.params.categoryId?true: false" -->
                </li>
                
              </ul>
              <ul v-else class="text-left text-xl font-medium">
                <li class="mb-0">
                  <div
                  
                  :class="`${showSidebar? 'text-center':'text-left'}`"
                  class="inline-block py-2 px-8 border-b w-full bg-primaryColor"
                  >
                  <span class="text-white">Categorias</span>
                  </div
                  >
              </li>
              
                <li
                
                  :class="`${showSidebar? 'text-center':'text-left'}`"
                  class="inline-block py-2 border-b w-full px-8 border-secondaryColor"
                  >No se han registrado categorias en esta vista</li>
                
              </ul>
           
          </aside>
        </div>
  </template>