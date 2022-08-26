<script setup>
  import PostCard from "@/components/PostCard.vue";
  //import VuePdfEmbed from 'vue-pdf-embed'
</script>
<template>
  <div class="h-auto pb-16">
    
    <PostCard/>

    <h1>File:</h1>
    <iframe 
    class="border border-gray-200 shadow-xl max-w-screen w-[95vw] sm:w-5/6 min-h-[100vh] h-fit mx-2 sm:mx-auto"  
    :src="'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'" />
    <!-- <VuePdfEmbed 
    class="border border-gray-200 shadow-xl max-w-screen sm:w-5/6 mx-2 sm:mx-auto" 
    :page="1" 
    :source="'../../Proyecto.pdf'" /> -->
  </div>
</template>
