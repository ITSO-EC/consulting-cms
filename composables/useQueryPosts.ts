import { storeToRefs } from 'pinia';
import { useQueryPostsStore } from '~~/stores/queryPostsStore'

const BASE_API='https://itso.ga/v1/'

const useQueryPosts = () => {
    const queryPostsStore = useQueryPostsStore();
    
    const {posts, selectedPost, error, loading, results, page} = storeToRefs(queryPostsStore);

    const initializeAllPosts = async()=>{
        loading.value = true;
        queryPostsStore.loadPosts(await $fetch(BASE_API+'posts'))
        loading.value = false;
    };
    const initializeQueriedPosts = async(id: string)=>{
        loading.value = true;
        queryPostsStore.loadPosts(await $fetch(BASE_API+'posts?byCategory='+id))
        loading.value = false;
    };

    const initializeByQuery = async (query: string) => {
        loading.value = true;
        queryPostsStore.loadPosts(await $fetch(BASE_API+'posts/search/'+query))
        loading.value = false;
    
    };

    const selectPostById = (id: string) => queryPostsStore.getPostById(id);

    return {
        // Properties
        posts,
        selectedPost,
        error,
        loading,
        results,
        page,

        //methods
        initializeAllPosts,
        initializeByQuery,
        initializeQueriedPosts,
        selectPostById

    }
}
export default useQueryPosts;
