import { storeToRefs } from 'pinia';
import { useViewsStore } from '~~/stores/viewsStore'

const useViews = () => {
    const viewsStore = useViewsStore();
    
    
    const {views, selectedView ,error, loading, results, page} = storeToRefs(viewsStore);

    const initializeViews = async () => viewsStore.loadViews(await $fetch('/api/views'));
    const getViewById = (id) => viewsStore.getViewById(id);
    return {
        // Properties
        views,
        selectedView,
        error,
        loading,
        results,
        page,

        //methods
        initializeViews,
        getViewById 

    }
}
export default useViews;
