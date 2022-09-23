<script setup>
import TheFooter from "~~/components/TheFooter";
import TheNavBar from "~~/components/TheNavBar";

import GenericPageHeader from "~~/components/GenericPageHeader.vue";
import ConsultingBreadcrumbs from "~~/components/ConsultingBreadcrumbs.vue";
import ConsultingSidebar from "~~/components/ConsultingSidebar.vue";

const firstVisit = ref(true);
const {views, selectedView,loading,initializeViews, getViewById} = useViews();
const {initializeCategories, getCategoryById} = useCategories();
const {posts, initializeQueriedPosts, selectPostById} = useQueryPosts();

const $route = useRoute();
const $router = useRouter();
watch(views, async () => {
    //Selecciona vista si la tiene
    getViewById($route.params.pageid)
    if(selectedView.value.status) $router.push('/');

    //Inicializa categorias si se puede luego de obtener vistas
    await initializeCategories($route.params.pageid)
    firstVisit.value = false;
    if($route.params.categoryid) getCategoryById($route.params.categoryid)

    //Inicializando posts si se puede
    if($route.params.postid && $route.params.categoryid)
    {
      initializeQueriedPosts($route.params.categoryid)
      .then(()=> selectPostById($route.params.postid))
      .then(()=>console.log(posts))
    }
  },
 
);

//Fuerza la carga de vistas siempre que se actualiza la pagina
initializeViews();
onMounted(()=>{
  //Se mueve al inicio y carga las categorias si se puede
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

    <GenericPageHeader  :class="`shadow animate__animated animate__fadeIn ${firstVisit? 'animate__delay-1s' : '' }`"></GenericPageHeader>
   
    <main v-bind="$attrs" class="relative flex min-h-screen  z-10 overflow-x-hidden" >
      <ConsultingSidebar :class="`animate__animated animate__fadeInLeft ${firstVisit? 'animate__delay-2s animate__slower' : '' }`" v-if="$route.params.pageid" :key="$route.params.pageid"/> 
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