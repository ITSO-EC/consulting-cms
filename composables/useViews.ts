import { storeToRefs } from 'pinia';
import { useViewsStore } from '~~/stores/viewsStore'

const useViews = () => {
    const viewsStore = useViewsStore();
    
    
    const {views, selectedView ,error, loading, results, page} = storeToRefs(viewsStore);

    const loadViews = () => viewsStore.loadViews();
    const getViewById = viewsStore.getViewById;
    return {
        // Properties
        views,
        selectedView,
        error,
        loading,
        results,
        page,

        //methods
        loadViews,
        getViewById 

    }
}
export default useViews;
