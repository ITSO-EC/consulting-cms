<script setup>
import SearchParams from "@/components/SearchParams.vue";
import PostsTable from "@/components/PostsTable.vue";
</script>

<template>
  <div>
    <div class="bg-blue-600 w-full h-16 -mt-16"></div>
    <div class="min-h-[90vh] h-auto mb-16">
      <SearchParams class="" />
      <PostsTable/>
      
    </div>
  </div>
</template>

