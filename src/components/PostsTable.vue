<script>
import { defineComponent } from 'vue'
import axios from 'axios';

const API = 'https://api-consulting-crm.herokuapp.com/v1/';
export default defineComponent({
  props: {
    summarized: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      postData : {},
      categories: {},
      totalResults: 0,
      loading: true,
    }
  },

  methods: {
    getPostsByCategory() {
      axios.get(API+'posts?byCategory='+this.$route.params.categoryId)
      .then((res)=> {
        //console.log(res.data);
        this.postData = res.data.results
        this.loading = false

      })
      .catch((err)=>{
        this.loading = false
        console.log(err)
      })
    },
    getPosts() {
      axios.get(API+'posts')
      .then((res)=> {
        //console.log(res.data);
        this.postData = res.data.results
        this.totalResults = res.data.totalResults
        for(let itemId in this.postData) {
          
          this.getCategoryById(this.postData[itemId].category);
        }

        this.loading = false

      })
      .catch((err)=>{
        this.loading = false
        console.log(err)
      })
    },
    getCategoryById(id) {
      axios.get(API+'categories/'+id)
      .then((res)=> {
        //console.log(res.data);
        this.categories[id]= res.data.page
        console.log('categories',Object.keys(this.categories))
        
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },

  mounted() {
    if(this.$props.summarized)
      this.getPostsByCategory();
    else 
      this.getPosts();
  }

})
</script>

<template>
  <div class="h-full w-full sm:w-5/6 px-2 sm:px-0 sm:mx-auto">
    <p  v-if="!loading && postData.length > 0" :class="summarized? 'hidden': ''" class="text-left my-4 mx-2 sm:mx-0">¡Excelente búsqueda! Se han encontrado 
      <span class="font-bold">{{totalResults}}</span> resultados.</p>
      
    <table v-if="!loading && postData.length > 0" class="w-full bg-white mt-2 sm:my-4 shadow-lg sm:rounded-sm overflow-hidden">
      <thead :class="`bg-[${primaryColor}] shadow-md`">
        <tr :class="`grid ${summarized? 'grid-cols-3 sm:grid-cols-8' : 'grid-cols-8 lg:grid-cols-12'} text-[${blankColor}]`" class="font-bold text-left h-12 py-1 px-4">
          <td class="col-span-1 lg:col-span-2">R.O.</td>
          <td class="hidden sm:table-cell col-span-2 lg:col-span-1">FECHA</td>
          <td class="hidden lg:table-cell col-span-2">TIPO DE NORMA</td>
          <td :class="summarized? 'col-span-1 sm:col-span-4 lg:col-span-2':'hidden lg:table-cell col-span-2'" class="text-center">ÓRGANO EMISOR</td>
          <td :class="summarized ? 'hidden':'col-span-6 sm:col-span-4'" class="mx-2 sm:mx-0 text-center">TÍTULO</td>
          <td class="col-span-1 text-center">PDF</td>
        </tr>
      </thead>
      <tbody>
       
                
        <tr v-for="(item, numid) in postData" :key="numid" :class="`grid ${summarized? 'grid-cols-3 sm:grid-cols-8' : 'grid-cols-8 lg:grid-cols-12'} ${numid % 2 ? `bg-opacity-20 bg-[${primaryColor}]` :  `` } h-12 py-2 px-4`">
          
          <td class="col-span-1 lg:col-span-2 text-left font-semibold">
            <router-link 
            :to=" summarized ? `/page/${this.$route.params.pageId}/category/${this.$route.params.categoryId}/post/${item.id}` 
              : `/page/${categories[item.category]}/category/${item.category}/post/${item.id}`"
              class="inline-block w-full">{{item.ro}}</router-link>
          </td>

          <td class="hidden sm:table-cell col-span-2 lg:col-span-1 text-left font-semibold">
            <router-link :to="
               summarized ? `/page/${this.$route.params.pageId}/category/${this.$route.params.categoryId}/post/${item.id}` 
              : `/page/${categories[item.category]}/category/${item.category}/post/${item.id}`" class="inline-block w-full">
             20/12/22</router-link>
           </td>

          <td class="hidden lg:table-cell col-span-2 text-left font-semibold">
            <router-link 
            :to="summarized ? `/page/${this.$route.params.pageId}/category/${this.$route.params.categoryId}/post/${item.id}` 
              : `/page/${categories[item.category]}/category/${item.category}/post/${item.id}`"
            class="inline-block w-full">
            {{item.type_reform}}</router-link>
            </td>
          <td :class="summarized? 'col-span-1 sm:col-span-4 flex lg:col-span-2':'hidden lg:flex col-span-2'" class="text-center justify-center items-center font-semibold">
            <img src="../assets/logos/sriLogo.png" class="h-8" alt="SRILogo">
          </td>
          <td :class="summarized? 'hidden':'col-span-6 sm:col-span-4'" class="mx-2 sm:px-0text-left font-semibold overflow-hidden">
            <span class="truncate"
              >{{item.title}}</span
            >
          </td>
          <td class="col-span-1 flex justify-center items-center font-semibold">
            <BaseIcon
              :size="'h-8'"
              class="cursor-pointer"
              :name="'file'"
            ></BaseIcon>
          </td>
        </tr>
    
      </tbody>
    </table>
    <div v-else-if="loading" class="flex flex-col gap-4 py-12 justify-center items-center inset-0">
          <svg class="animate-spin inline-block h-24 w-24 mt-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg> 
         <span class="text-xl font-bold w-72"> Obteniendo información </span>
    </div>
    <div v-else class="flex flex-col gap-4 py-12 justify-center items-center inset-0">
          
        <img class="w-44" src="../assets/images/empty.png" alt="Avion de papel">
         <span class="text-xl font-bold w-72">Aún no existen registros para esta categoria en el servidor.</span>
    </div>
  </div>
</template>