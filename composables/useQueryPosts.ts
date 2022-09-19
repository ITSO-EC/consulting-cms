import { storeToRefs } from 'pinia';
import { useQueryPostsStore } from '~~/stores/queryPostsStore'

const useQueryPosts = () => {
    const queryPostsStore = useQueryPostsStore();
    
    const {posts, selectedPost, error, loading, results, page} = storeToRefs(queryPostsStore);

    const initializeAllPosts = async()=>{
        queryPostsStore.loadPosts(await $fetch('/api/posts'))
    };
    const initializeQueriedPosts = async(id: string)=>{
        queryPostsStore.loadPosts(await $fetch('/api/posts?byCategory='+id))
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
        initializeQueriedPosts,
        selectPostById

    }
}
export default useQueryPosts;
