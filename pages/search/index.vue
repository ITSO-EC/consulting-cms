<script setup>
import SearchParams from "@/components/SearchParams.vue";
import PostsTable from "@/components/SearchResultsTable.vue";
import FullScreenDiv from "@/components/FullScreenDiv.vue";
import useQueryPosts from '~~/composables/useQueryPosts'

definePageMeta({
    title: 'Búsqueda Avanzada',
    middleware: 'auth'
  })

const postsquery = ref('');
const setquery = (query) => {
    postsquery.value = query;
}

const route = useRoute();
const { posts, loading, initializeAllPosts, initializeByQuery } = useQueryPosts();

initializeAllPosts()


const options = ref([...posts.value]);


watch(
    posts,()=>{
        options.value = [...posts.value];
    }
)
watch(
    postsquery, (val) => {
        if (postsquery.value.length <= 1) {
            initializeAllPosts();
            options.value = [...posts.value];
        }
        else {
            options.value = filterByValue(postsquery.value);

        }
    }
)



const filterByValue = (text) => {
    let array = [...posts.value];
    let sorted = array.filter(o => similarity(o["title"]?.toString(), text?.toString()) > 0.4)


    // o["title"]?.toString().toLowerCase().includes(text?.toString().toLowerCase()));
    return sorted;

}


const similarity = (s1, s2) => {
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    let longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

const editDistance = (s1, s2) => {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    let costs = new Array();
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}
</script>
<template>
    <FullScreenDiv first class="pt-12 pb-12">
        <div class="">
            <SearchParams @query="setquery" />
            <PostsTable :key="posts" :posts="options" :querytext="postsquery" />

        </div>
    </FullScreenDiv>
</template>