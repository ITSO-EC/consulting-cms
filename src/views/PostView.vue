<script setup>
  import PostCard from "@/components/PostCard.vue";
  import MobilePdfViewer from "@/components/MobilePdfViewer.vue"
</script>
<template>
  <div class="h-auto pb-16">
    
    <PostCard/>
    <br>
    <iframe 
    class="hidden md:block border border-gray-200 shadow-xl max-w-screen w-[95vw] sm:w-5/6 min-h-[100vh] h-fit mx-2 sm:mx-auto"  
    :src="'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'" />
    
    <!-- Requiere un proxy, estoy usando uno clonado y hosteado en heroku -->
    <MobilePdfViewer class="md:hidden"/>
  </div>
</template>
