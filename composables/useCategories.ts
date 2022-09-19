import { storeToRefs } from 'pinia';
import { useCategoriesStore } from '~~/stores/categoriesStore'

const useCategories = () => {
    const categoriesStore = useCategoriesStore();
    
    
    const {categories, selectedCategory,error, loading, results, page} = storeToRefs(categoriesStore);

    const initializeCategories = async (id: string) => categoriesStore.loadCategories(await $fetch('/api/categories?byPage='+id));
    const getCategoryById = (id: string) => categoriesStore.getCategoryById(id);
    return {
        // Properties
        categories,
        selectedCategory,
        error,
        loading,
        results,
        page,

        //methods
        initializeCategories,
        getCategoryById 

    }
}
export default useCategories;
