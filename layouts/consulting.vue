<script setup>
import TheFooter from "@/components/TheFooter";
import TheNavBar from "@/components/TheNavBar";

import GenericPageHeader from "@/components/GenericPageHeader.vue";
import ConsultingBreadcrumbs from "@/components/ConsultingBreadcrumbs.vue";

import ConsultingSidebar from "@/components/ConsultingSidebar.vue";
const {views, selectedView, loadViews, getViewById} = useViews();
const {categories, selectedCategory,loadCategories, getCategoryById} = useCategories();

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

<template>
  <div :key="$route.fullPath + views?.length + categories?.length">
    <header class="sticky top-0 z-50">
      <TheNavBar>
        <template #links>
          <slot name="links" />
        </template>
      </TheNavBar>
    </header>

    <GenericPageHeader  class="shadow"></GenericPageHeader>
   
    <main v-bind="$attrs" class="relative flex min-h-screen  z-10" >
      <ConsultingSidebar />
      <div class="w-full lg:w-4/5" >
         
        <ConsultingBreadcrumbs class="mx-auto w-full sm:w-5/6"/>      

        <slot />
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