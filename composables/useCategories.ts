import { storeToRefs } from 'pinia';
import { useCategoriesStore } from '~~/stores/categoriesStore'

const useCategories = () => {
    const categoriesStore = useCategoriesStore();
    
    
    const {categories, selectedCategory,error, loading, results, page} = storeToRefs(categoriesStore);

    const loadCategories = () => categoriesStore.loadCategories();
    const getCategoryById = categoriesStore.getCategoryById;
    return {
        // Properties
        categories,
        selectedCategory,
        error,
        loading,
        results,
        page,

        //methods
        loadCategories,
        getCategoryById 

    }
}
export default useCategories;
