<script setup>
import TheFooter from "~~/components/TheFooter";
import TheNavBar from "~~/components/TheNavBar";

import GenericPageHeader from "~~/components/GenericPageHeader.vue";
import ConsultingBreadcrumbs from "~~/components/ConsultingBreadcrumbs.vue";
import ConsultingSidebar from "~~/components/ConsultingSidebar.vue";

const firstVisit = ref(true);
const {views, selectedView,loading,initializeViews, getViewById} = useViews();
const {initializeCategories, getCategoryById} = useCategories();

const $route = useRoute();
const $router = useRouter();
watch(views, async () => {
    getViewById($route.params.pageid)
    if(selectedView.value.status !='visible') $router.push('/');
    await initializeCategories($route.params.pageid)
    firstVisit.value = false;
    if($route.params.categoryid) getCategoryById($route.params.categoryid)
  },
 
);

initializeViews();
onMounted(()=>{
  window.scrollTo(0,0);

  if($route.params.categoryid) getCategoryById($route.params.categoryid)
})

</script>

<template>
  <div>
    <header class="sticky top-0 z-50">
      <TheNavBar>
        <template #links>
          <slot name="links" />
        </template>
      </TheNavBar>
    </header>

    <GenericPageHeader  class="shadow animate__animated animate__fadeIn animate__delay-1s "></GenericPageHeader>
   
    <main v-bind="$attrs" class="relative flex min-h-screen  z-10 overflow-x-hidden" >
      <ConsultingSidebar :class="`animate__animated animate__fadeInLeft ${firstVisit? 'animate__delay-2s' : '' }`" v-if="$route.params.pageid" :key="$route.params.pageid"/> 
      <div class="w-full lg:w-4/5 animate__animated animate__fadeIn" :class="`${firstVisit ? 'animate__delay-4s': ''}`"  :key="$route.fullPath">
         
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