import { storeToRefs } from 'pinia';
import { useCategoriesStore } from '~~/stores/categoriesStore'

const BASE_API='https://itso.ga/v1/'
const useCategories = () => {
    const categoriesStore = useCategoriesStore();
    
    
    const {categories, selectedCategory,error, loading, results, page} = storeToRefs(categoriesStore);
    
    const initializeAllCategories = async () => categoriesStore.loadCategories(await $fetch(BASE_API+'categories'));
    
    const initializeCategories = async (id: string) => categoriesStore.loadCategories(await $fetch(BASE_API+'categories?byPage='+id));
    const getCategoryById = (id: string) => categoriesStore.getCategoryById(id);
    const retriveCategoryById = (id:string) => {
        categoriesStore.getCategoryById(id)
        return selectedCategory.value;
    }
    return {
        // Properties
        categories,
        selectedCategory,
        error,
        loading,
        results,
        page,

        //methods
        retriveCategoryById,
        initializeAllCategories,
        initializeCategories,
        getCategoryById 

    }
}
export default useCategories;
