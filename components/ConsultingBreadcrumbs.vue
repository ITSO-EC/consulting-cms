<script setup>
const {selectedView} = useViews();
const {selectedCategory, getCategoryById} = useCategories();
const {selectedPost, loading, error} = useQueryPosts();

const $route = useRoute();

onMounted(()=>{
  if($route.params.categoryid) getCategoryById($route.params.categoryid)
  else selectedCategory.value = "";
})

</script>
<template>
     <div :key="$route.fullPath" class="px-2 sm:px-0 py-6">
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
                <nuxt-link class="text-slate-500 hover:text-indigo-500 inline-flex h-4" to="/listpage">
                    <BaseIcon class="p-0" :size="'h-5 w-5'" :name="'home'"/>
                </nuxt-link>
              </li>
              <li
                class="
                  after:content-['/']
                  last:after:hidden
                  after:text-slate-400 after:px-2
                "
              >
                <nuxt-link v-if="selectedView?.name" class="inline-block text-slate-500 hover:text-indigo-500" :to="`/view/${selectedView?._id}`">
                  {{selectedView?.name}}</nuxt-link> 
                
              </li>
              <li
                
                class="
                  after:content-['/']
                  last:after:hidden
                  after:text-slate-400 after:px-2
                "
              >
                 <nuxt-link  v-if="selectedCategory?.name"  class="inline-block text-slate-500 hover:text-indigo-500" :to="`/view/${selectedView?._id}/category/${selectedCategory?._id}`"
                  >
                {{selectedCategory?.name}}</nuxt-link>
                
              </li>
              <li
                class="
                  after:content-['/']
                  last:after:hidden
                  after:text-slate-400 after:px-2
                "
                
                 v-if="selectedPost?.title"
              >
                <nuxt-link class="inline-block text-slate-500 hover:text-indigo-500" :to="`/view/${selectedView?._id}/category/${selectedCategory?._id}/post/${selectedPost?._id}`"
                  > {{selectedPost?.title}} </nuxt-link>
              </li>
            </ul>
          <!-- End -->
          </div>
        </div>
</template>