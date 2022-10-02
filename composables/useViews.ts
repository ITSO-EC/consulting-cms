import { storeToRefs } from 'pinia';
import { useViewsStore } from '~~/stores/viewsStore'

const useViews = () => {
    const viewsStore = useViewsStore();
    
    const BASE_API='https://itso.ga/v1/'
    
    const {views, selectedView ,error, loading, results, page} = storeToRefs(viewsStore);
    //'/api/views'
    const initializeViews = async () => {
        viewsStore.toggleLoading(true);
        viewsStore.loadViews(await $fetch(BASE_API+'pages'))
        viewsStore.toggleLoading(false);
    };
    const getViewById = (id:string) => viewsStore.getViewById(id);

    const retrieveViewById = (id:string) => {
        viewsStore.getViewById(id)
        return selectedView.value;
    }
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
        retrieveViewById,
        getViewById 

    }
}
export default useViews;
