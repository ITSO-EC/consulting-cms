<script setup>
import sriLogo from "~~/assets/logos/sriLogo.png"
import supercias from "~~/assets/logos/supercias.png"
import iess from "~~/assets/logos/iess.png"
import ministeriotrab from "~~/assets/logos/ministeriotrab.png"
import PostsTableItem from "~~/components/PostsTableItem.vue"
import useQueryPosts from '~~/composables/useQueryPosts'

const route = useRoute();
const { loading} = useQueryPosts();

const props = defineProps(['posts'])

</script>

<template>
  <div class="h-full w-full sm:w-5/6 px-2 sm:px-0 sm:mx-auto">
    
 
    <p  v-if="!loading && posts.length > 0" class="text-left my-4 mx-2 sm:mx-0">¡Excelente búsqueda! Se han encontrado 
      <span class="font-bold">{{posts.length}}</span> resultados.</p>
      
    <table v-if="!loading && posts.length > 0" class="w-full bg-white mt-2 sm:my-4 shadow-lg sm:rounded-sm overflow-hidden">
      <thead :class="`bg-primaryColor shadow-md`">
        <tr :class="`grid grid-cols-8 lg:grid-cols-12 text-blankColor`" class="font-bold text-left h-12 py-1 px-4">
          <td class="col-span-1 ">R.O.</td>
          <td class="hidden sm:table-cell col-span-2 text-center">FECHA</td>
          <td class="hidden lg:table-cell col-span-2 text-center">TIPO DE NORMA</td>
          <td class="col-span-6 sm:col-span-4 mx-2 sm:mx-0 text-center">NOMBRE NORMA</td>
          
          <td class="hidden lg:table-cell col-span-2 text-center">ÓRGANO EMISOR</td>
          <td class="col-span-1 text-center">PDF</td>
        </tr>
      </thead>
      <tbody>
       
                
        <PostsTableItem v-for="(item, numid) in posts" :key="item.id" 
    
        :summarized="false"
        :numid="numid"
        :post="item"
        />
          
       
    
      </tbody>
    </table>
    <div v-else-if="loading" class="flex flex-col gap-4 py-12 justify-center items-center inset-0">
          <svg class="animate-spin inline-block h-24 w-24 mt-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg> 
         <span class="text-xl font-bold w-full text-center">Obteniendo información</span>
    </div>
    <div v-else class="flex flex-col gap-4 py-12 justify-center items-center inset-0">
          
        <img class="w-44" src="../assets/images/empty.png" alt="Avion de papel">
         <span class="text-xl font-bold w-72">Aún no existen registros para esta categoria en el servidor.</span>
    </div>
  </div>
</template>