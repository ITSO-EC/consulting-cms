<script setup>
const {selectedPost, loading, error} = useQueryPosts();

</script>
<template>
  <!-- Mover esta tabla a un componente -->
  <div class="w-auto sm:w-5/6 mx-2 sm:px-0 sm:mx-auto shadow-xl rounded-sm border border-gray-200">
    <div class="grid grid-cols-12 w-full">
      <div class="col-span-12 sm:col-span-3 lg:col-span-2 flex flex-col items-center justify-center gap-2 m-4">
        <span class="font-bold h-1/3">Órgano Emisor</span>
        <img src="~~/assets/logos/sriLogo.png" class="h-24 w-24" alt="SRILogo" />
  
      </div>  
      <div class="col-span-12 sm:col-span-6 lg:col-span-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 p-4">
          <span :class="`text-primaryColor col-span-2 lg:col-span-4 font-bold text-left`">{{selectedPost?.title}}</span>
          <span :class="`text-primaryColor font-bold text-left`">R.O.:</span>
          <span class="text-justify">{{selectedPost?.ro}}</span>
          <span :class="`text-primaryColor font-bold text-left`">Fecha:</span>
          <span class="text-justify">{{selectedPost?.createdAt}}</span>
          <span :class="`text-primaryColor font-bold text-left`">Tipo:</span>
          <span class="text-justify">{{selectedPost?.type}}</span>
          <span :class="`text-primaryColor font-bold text-left`">Norma:</span>
          <span class="text-justify">{{selectedPost?.type_reform}}</span>
          <span :class="`text-primaryColor font-bold text-left`">No.Norma:</span>
          <span class="text-justify">{{selectedPost?.number}}</span>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-3 lg:col-span-2  flex flex-col items-center justify-center gap-2 m-4">
        <span class="font-bold h-1/3">Descargar PDF</span>
        <BaseIcon :size="'h-24'" class="cursor-pointer" :name="'file'" />
      </div>
    </div>
    <div class="col-span-12 min-h-40 h-auto px-2 text-left mx-4 py-4 border-t border-gray-200">
      <span :class="`text-primaryColor font-bold text-left`">Descripción:</span>
      {{selectedPost?.content}}
    </div>
    <div class="col-span-12 h-10 p-2 text-left mx-4 border-t text-xs sm:text-sm border-gray-200">
      <span :class="`text-primaryColor font-bold text-left text-md`">Referencia:</span>
      {{selectedPost?.reference}}
    </div>
    
      
  </div>
</template>