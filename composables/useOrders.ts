import { storeToRefs } from 'pinia';

import { Order } from '../interfaces/order';
import { useOrdersStore } from '../stores/ordersStore';

const BASE_API='https://itso.ga/v1/'

const useOrders = () => {
    const ordersStore = useOrdersStore();
    
    
    const {orders, selectedOrder,error, loading, results, page, pages} = storeToRefs(ordersStore);


    const initializeAllOrders = async (page:number=1) => {
      loading.value = true;
      ordersStore.loadOrders(await $fetch(BASE_API+'orders?page='+page));  
      loading.value = false;
    }
    const retrieveOrdersByUser = async (userid:string) => {
      return await $fetch(BASE_API+'orders?user='+ userid +'&limit=100') 
    }

    const nextPage = async (actualpage:number) => {
      await initializeAllOrders(actualpage+1);
    }
    const prevPage = async (actualpage:number) => {
      await initializeAllOrders(actualpage-1);
    }
  
    const getOrderById = (id: string) => ordersStore.getOrderById(id);
    
    
    // const createOrder = async (payload:Order) => {
    //   loading.value = true;
      
    //   try {
    //     await axios.post(BASE_API+'orders',{...payload},
    //     {
    //       headers: {
    //         'Content-type':'multipart/form-data'
    //       }
    //     })
    //     loading.value = false;
    //     initializeAllOrders(page.value)
    //   }
    //   catch(err) {
       
    //     error.value = err;
    //     loading.value = false;
    //   }
      
    // };

  
    return {
        // Properties
        orders,
        selectedOrder,
        error,
        loading,
        results,
        page,
        pages,

        //methods
        //createOrder,
        nextPage,
        prevPage,
        retrieveOrdersByUser,
        initializeAllOrders,
        getOrderById 
    }
}
export default useOrders;

