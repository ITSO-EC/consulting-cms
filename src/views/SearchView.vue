<script setup>
import SearchParams from "@/components/SearchParams.vue";
import PostsTable from "@/components/PostsTable.vue";

import FullScreenDiv from "@/components/FullScreenDiv.vue";
</script>

<template>
  <FullScreenDiv first class="pt-12 pb-12">
    <div class="">
      <SearchParams class="" />
      <PostsTable/>
      
    </div>
  </FullScreenDiv>
</template>

