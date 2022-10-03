import { defineStore, acceptHMRUpdate } from 'pinia';
import { Post } from '~~/interfaces/post';
import { generateID, sleep } from '~~/utils'

interface PostsState {
    posts: Post[];
    selectedPost: Object;
    loading: boolean;
    error: String;
    results: number;
    page: number;
}

export const useQueryPostsStore = defineStore({
    id: 'queryposts',
    state: (): PostsState => ({
        posts: [] ,
        selectedPost: {},
        error: '',
        loading: false,
        results: 0,
        page:1,
    }),
    getters: {},
    actions: {
        getPostById(id: string) {
            this.selectedPost = this.posts?.find((post) => post.id == id);
            
        },
        loadPosts(data) {
            try {
                this.posts = data.results;
                this.results = data.totalResults;

                this.posts = this.posts.filter(result => result.status=='aprobado II');
                this.page = data.page;
           } catch (error) {
                this.error = error;
                console.error(error);
           }
        },
        async addPost(post: Object): Promise<void> {
            this.loading = true;
            this.posts.push({id: generateID(), ...post});
            await sleep(1000);
            this.loading = false;
        },
        async deletePost(id: number): Promise<void> {
            this.loading = true;
            this.posts = this.posts.filter((post) => post.id !== id);
            await sleep(1000);
            this.loading = false;
        },
        async updatePost(id: number): Promise<void> {
            // this.loading = true;
            // const post = this.posts.find((post) => post.id === id);

            // if (post) {
            //     post.done = !post.done;
            // }

            // await sleep(1000);
            // this.loading = false;
        },
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useQueryPostsStore, import.meta.hot));
  }