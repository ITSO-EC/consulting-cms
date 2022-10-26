<script setup>
import PostsTable from "@/components/PostsTable.vue"
definePageMeta({
    layout: "consulting",
    middleware: 'auth'
  })
</script>
<template>
    <div class="h-auto pb-16">
        <PostsTable summarized/>
    </div>
</template>
    