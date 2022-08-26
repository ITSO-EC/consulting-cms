<script setup>
  import PostCard from "@/components/PostCard.vue";
  //import VuePdfEmbed from 'vue-pdf-embed'
</script>
<template>
  <div class="h-auto pb-16">
    
    <PostCard/>

    <h1>File:</h1>
    <iframe 
    class="border border-gray-200 shadow-xl max-w-screen w-[96.5vw] sm:w-5/6 min-h-[100vh] h-fit mx-2 sm:mx-auto"  
    :src="'http://www.africau.edu/images/default/sample.pdf'" />
    <!-- <VuePdfEmbed 
    class="border border-gray-200 shadow-xl max-w-screen sm:w-5/6 mx-2 sm:mx-auto" 
    :page="1" 
    :source="'../../Proyecto.pdf'" /> -->
  </div>
</template>
