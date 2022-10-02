import { storeToRefs } from 'pinia';
import { useCategoriesStore } from '~~/stores/categoriesStore'

const BASE_API='https://itso.ga/v1/'
const useCategories = () => {
    const categoriesStore = useCategoriesStore();
    
    
    const {categories, selectedCategory,error, loading, results, page} = storeToRefs(categoriesStore);
    
    const initializeAllCategories = async () => categoriesStore.loadCategories(await $fetch(BASE_API+'categories'));
    
    const initializeCategories = async (id: string) => categoriesStore.loadCategories(await $fetch(BASE_API+'categories?byPage='+id));
    
    const getCategoryById = (id: string) => categoriesStore.getCategoryById(id);
    
    const retriveCategoryById = async (id:string) => {
        loading.value = true;
        let cat = await $fetch(BASE_API+'categories/'+id)
        loading.value = false;
        return cat;
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
