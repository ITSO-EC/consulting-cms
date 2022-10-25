<script setup>
import getImage from "~~/composables/useResources"
import sriLogo from "~~/assets/logos/sriLogo.png"
import supercias from "~~/assets/logos/supercias.png"
import iess from "~~/assets/logos/iess.png"
import ministeriotrab from "~~/assets/logos/ministeriotrab.png"


const {selectedPost, loading, error} = useQueryPosts();
const config = useRuntimeConfig();
const download = (url) => {
  const a = document.createElement('a')
  a.href = url
  
  document.body.appendChild(a)

  a.download = url.split('/').pop()
  a.click()
  document.body.removeChild(a)
}

const convertDate = (date) => {
  const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic", "Error"
  ];

  date = new Date(date)
  let dd = date.getDate(); 
  let mm = date.getMonth();
  let yyyy = date.getFullYear(); 
  if(dd<10){dd='0'+dd} 
  return date = dd+'-'+ monthNames[mm]+ '-'+ yyyy;
}


const getLogo = (url) =>  {
  switch(url) {
    case 'www.sri.gob.ec':
      return 'assets/logos/sriLogo.png'
    case 'www.supercias.gob.ec':
      return 'assets/logos/supercias.png'
    case 'www.trabajo.gob.ec':
      return 'assets/logos/ministeriotrab.png'
    case 'www.iess.gob.ec':
      return 'assets/logos/iess.png'
     
  }
}


</script>
<template>
  <!-- Mover esta tabla a un componente -->
  <div class="w-auto sm:w-5/6 mx-2 sm:px-0 sm:mx-auto shadow-xl rounded-sm border border-gray-200">
    <div class="grid grid-cols-12 w-full">
      <div class="col-span-12 sm:col-span-3 lg:col-span-2 flex flex-col items-center justify-center gap-2 m-4">
        <span class="font-bold h-1/3">Órgano Emisor</span>
        <a :href="`https://${selectedPost?.reference}`" target="_blank" rel="noopener noreferrer">
          <img v-if="selectedPost?.reference == 'www.sri.gob.ec'" :src="sriLogo" class="h-24" alt="Logo">
             <img v-if="selectedPost?.reference == 'www.supercias.gob.ec'" :src="supercias" class="h-24" alt="Logo">
             <img v-if="selectedPost?.reference == 'www.trabajo.gob.ec'" :src="ministeriotrab" class="h-24" alt="Logo">
             <img v-if="selectedPost?.reference == 'www.iess.gob.ec'" :src="iess" class="h-24" alt="Logo">
          
        </a>
      </div>  
      <div class="col-span-12 sm:col-span-6 lg:col-span-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 p-4">
          <span :class="`text-primaryColor col-span-2 lg:col-span-4 font-bold text-left`">{{selectedPost?.title}}</span>
          <span :class="`text-primaryColor font-bold text-left`">R.O.:</span>
          <span class="text-justify">{{selectedPost?.ro}}</span>
          <span :class="`text-primaryColor font-bold text-left`">Fecha:</span>
          <span class="text-justify">{{convertDate(selectedPost?.createdAt)}}</span>
          <span :class="`text-primaryColor font-bold text-left`">Tipo R.O.:</span>
          <span class="text-justify">{{selectedPost?.legal_regulation}}</span>
          <span :class="`text-primaryColor font-bold text-left`">Tipo de Norma:</span>
          <span class="text-justify">{{selectedPost?.type_reform}}</span>
          <span :class="`text-primaryColor font-bold text-left`">No.Norma:</span>
          <span class="text-justify">{{selectedPost?.number}}</span>
        </div>
      </div>
      <div v-if="selectedPost?.file_url" class="col-span-12 sm:col-span-3 lg:col-span-2  flex flex-col items-center justify-center gap-2 m-4">
        <h1 class="font-bold h-1/3">Descargar PDF</h1>
        <BaseIcon :size="'h-24'" class="cursor-pointer" @click="download(getImage(selectedPost?.file_url))" :name="'file'" />
      </div>
      <div v-else class="col-span-12 sm:col-span-3 lg:col-span-2  flex flex-col items-center justify-center gap-2 m-4">
        <h1 class="font-bold h-1/3">No PDF</h1>
        </div>
      
    </div>
    <div class="col-span-12 min-h-40 h-auto px-2 text-left mx-4 py-4 border-t border-gray-200">
      <span :class="`text-primaryColor font-bold text-left`">Descripción:</span>
      {{selectedPost?.content}}
    </div>
    <!-- <div class="col-span-12 h-10 p-2 text-left mx-4 border-t text-xs sm:text-sm border-gray-200">
      <span :class="`text-primaryColor font-bold text-left text-md`">Referencia:</span>
      {{selectedPost?.reference}}
    </div> -->
    
      
  </div>
</template>