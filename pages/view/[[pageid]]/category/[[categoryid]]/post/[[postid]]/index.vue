<script setup>
const {posts, selectedPost, loading, error, initializeQueriedPosts, selectPostById} = useQueryPosts();
//import PostsTable from "@/components/PostsTable.vue"
const $route = useRoute();
definePageMeta({
    layout: "consulting",
})
 
selectPostById($route.params.postid)

</script>
<template>
    <div :key="loading" class="h-auto pb-16 w-full mx-auto">
       
        <p class="text-center">{{selectedPost}} </p>
        
    </div>
</template>
    