<script setup>
import PostCard from '~~/components/PostCard.vue';
import getImage from '~~/composables/useResources';
const {posts, selectedPost, loading, error, initializeQueriedPosts, selectPostById} = useQueryPosts();
//import PostsTable from "@/components/PostsTable.vue"
const $route = useRoute();
definePageMeta({
    layout: "consulting",
})
const config = useRuntimeConfig()

onMounted(()=> {
    document.addEventListener("adobe_dc_view_sdk.ready", function()
{
    var adobeDCView = new AdobeDC.View({clientId: config?.pdfApiKey, divId: "adobe-dc-view"});
    adobeDCView.previewFile(
    {
          content:   {location: {url: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf"}},
          metaData: {fileName: "Bodea Brochure.pdf"}
    });
}); 
})
selectPostById($route.params.postid)

</script>
<template>
    <div :key="loading" class="h-auto pb-16 w-full mx-auto">
       
        
        <div  v-if="!loading">
            <p class="text-center">{{selectedPost}} </p>
            <PostCard></PostCard>
            <div v-if="selectedPost?.file_url" class="pt-12">
                {{getImage(selectedPost?.file_url)}}
 
                <div id="adobe-dc-view" class="h-12 bg-blue-300"></div>
                <p class="text-center">Hay Archivo!</p>
            </div>
            <div v-else="selectedPost.file_url">
                <p class="text-center">No hay archivo</p>
            </div>
        </div>  
       
        <div v-else-if="loading" class="flex flex-col gap-4 py-12 justify-center items-center inset-0">
          <svg class="animate-spin inline-block h-24 w-24 mt-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg> 
         <span class="text-xl font-bold w-full text-center">Obteniendo información</span>
        </div>
        
    </div>

</template>

    