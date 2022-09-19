import { defineStore, acceptHMRUpdate } from 'pinia';
import { View} from '~~/interfaces/view';

interface ViewsState {
    views: View[];
    selectedView: Object;
    loading: boolean;
    error: String;
    results: number;
    page: number;
}

export const useViewsStore = defineStore({
    id: 'views',
    state: (): ViewsState => ({
        views: [] ,
        selectedView: {},
        error: '',
        loading: false,
        results: 0,
        page:1,
    }),
    getters: {
       
    },
    actions: {
        getViewById(id) {
            this.selectedView = this.views.find((view) =>  view.id === id);
        },
        loadViews(data) {
            try {   
                this.views = data.results;
                this.results = data.totalResults;
                this.page = data.page;
                
            } catch (error) {
                console.error(error)
                this.error = error;
            }
            
            // if(!this.views.length && !this.loading) {
                
            //     this.error = [];
            //     this.loading = true;
            //     $fetch('/api/views')
            //         .then((res)=> {
            //             this.views = res.results;
            //             this.results = res.totalResults;
            //             this.page = res.page ;
            //             this.loading = false;
                       
            //         })
            //         .catch((err)=> {
            //             this.error = err;
            //             this.loading = false;
                        
            //         })
            //}    
        },
        async addView(view: Object): Promise<void> {
            this.loading = true;
            this.views.push(view);
            this.loading = false;
        },
        async deleteView(id: number): Promise<void> {
            this.loading = true;
            this.posts = this.posts.filter((post) => post.id !== id);
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
    import.meta.hot.accept(acceptHMRUpdate(useViewsStore, import.meta.hot));
  }