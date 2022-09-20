<script setup>
import ViewCard from "@/components/ViewCard.vue";

const {views, loading, error, results, page} = useViews();


</script>
<template>
  <div
    class="
      min-h-screen
      -mt-20 pt-20 
      grid grid-cols-12
      bg-gray-200
    "
  >
    <div
      class="
        col-start-2 col-span-10
        bg-white
        md:border-l md:border-slate-300
        pt-4
        sm:pt-12
      "
    >
      <h1 class="text-3xl font-bold w-fit text-left mx-8">Vistas</h1>
      <p class="text-xl font-bold w-fit text-left mx-8">
        Por favor seleccione una vista para consultar
      </p>

      <div v-if="!loading && !error" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-8">
        <ViewCard v-for="page in views" :key="page._id" :class="page.status =='visible'? '':'hidden'" :pageInfo="page"></ViewCard>
          
      </div>
      
      <div v-else-if="loading" class="flex flex-col gap-4 py-12 justify-center items-center inset-0">
            <svg class="animate-spin inline-block h-24 w-24 mt-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg> 
        
      </div>
      <div v-else>
        <span>Ha ocurrido un error</span>
      </div>

    </div>
  </div>
</template>
