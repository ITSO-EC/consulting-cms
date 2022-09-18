<script setup>
import MainHero from '~~/components/MainHero.vue'
import usePosts from '~~/composables/usePosts'
const {posts, error, loading, results, page,loadPosts} = usePosts();

onMounted(()=>{
    loadPosts();
})
</script>
<template>
    <div>
        <MainHero></MainHero>
        
       
    </div>
</template>