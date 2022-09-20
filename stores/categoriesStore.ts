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
        
    },
    actions: {
        getCategoryById(id: string) {
            this.selectedCategory = this.categories?.find((category) => category._id == id);
            
        },
        loadCategories(data) {
           try {
                this.categories = data.results;
                this.results = data.totalResults;
                this.page = data.page;
           } catch (error) {
                this.error = error;
                console.error(error);
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
            this.categories = this.categories.filter((category) => category._id !== id);
            await sleep(1000);
            this.loading = false;
        },
        async updateCategory(id: number): Promise<void> {
            // this.loading = true;
            // const category = this.categories.find((category) => category._id === id);

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