import { defineStore, acceptHMRUpdate } from 'pinia';
import { Category } from '~~/interfaces/category';
import { generateID, sleep } from '~~/utils'

interface CategoriesState {
    categories: Category[];
    selectedCategory: {};
    loading: boolean;
    error: String;
    results: number;
    page: number;
}

export const useCategoriesStore = defineStore({
    id: 'categories',
    state: (): CategoriesState => ({
        categories: [] ,
        selectedCategory: {},
        error: '',
        loading: false,
        results: 0,
        page:1,
    }),
    getters: {
        getCategoryById(state) {
            return (array,id) => {  
                state.selectedCategory = array?.find((category) => {
                  
                    return category.id == id
                });
               
                
            }
        }
    },
    actions: {
        async loadCategories(): Promise<void> {
            if(!this.categories.length && !this.loading) {
                this.error = [];
                this.loading = true;
                $fetch('/api/categories')
                    
                    .then((res)=> {
                        this.categories = res.results;
                        this.results = res.totalResults;
                        this.page = res.page;
                        this.loading = false;
                    })
                    .catch((err)=> {
                        this.error = err;
                        this.loading = false;
                        
                    })
            }    
        },
        async addCategory(category: Object): Promise<void> {
            this.loading = true;
            this.categories.push({id: generateID(), ...category});
            await sleep(1000);
            this.loading = false;
        },
        async deleteCategory(id: number): Promise<void> {
            this.loading = true;
            this.categories = this.categories.filter((category) => category.id !== id);
            await sleep(1000);
            this.loading = false;
        },
        async updateCategory(id: number): Promise<void> {
            // this.loading = true;
            // const category = this.categories.find((category) => category.id === id);

            // if (category) {
            //     category.done = !category.done;
            // }

            // await sleep(1000);
            // this.loading = false;
        },
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCategoriesStore, import.meta.hot));
  }