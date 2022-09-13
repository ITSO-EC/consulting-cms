<script setup>
import SearchParams from "@/components/SearchParams.vue";
import PostsTable from "@/components/PostsTable.vue";
</script>

<template>
  <div>
    <div class="bg-blue-600 w-full h-20 -mt-20"></div>
    <div class="min-h-[90vh] h-auto mb-10">
      <SearchParams class="" />
      <PostsTable/>
      
    </div>
  </div>
</template>

