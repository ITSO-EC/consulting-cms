<script setup>
  const showSidebar = ref(true);
  
  const {selectedView} = useViews();
  const {categories} = useCategories();
  
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
             
              :class="`${showSidebar? 'w-[100vw] lg:block h-screen lg:h-full ':'hidden lg:block h-screen lg:h-full '} animate__animated animate__fadeInLeft  absolute border-r-2 border-secondaryColor bg-white -mt-4 -ml-4 text-center`"
          >
  
           
              <ul v-if="categories?.length > 0" class="w-full h-full text-left text-xl font-medium">
                <li class="mb-0">
                  <div
                  :class="`${showSidebar? 'text-center':'text-left'}`"
                  class="bg-primaryColor inline-block py-2 px-8 border-b w-full"
                  >
                  <span class="text-white">Categorias</span>
                  </div
                  >
                </li>
              
                <li v-for="category in categories" :key="`CategoryLink-${category.id}`">
                    <nuxt-link 
                    v-if="selectedView?.id"
                    :class="`${showSidebar? 'text-center':'text-left'}`"
                    class="border-secondaryColor px-8 inline-block py-2 border-b w-full"
                    :to="{ name: 'view-pageid-category-categoryid', params: {pageid: `${selectedView?.id}`, categoryid: `${category?.id}`}}"
                    @click="showSidebar = false"
                    
                    >{{category?.name}}</nuxt-link>
                    <!-- :to="`${route.params.categoryId?`/page/${route.params.pageId}`:route.params.pageId}/category/${category.id}`" 
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