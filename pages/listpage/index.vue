<script setup>
import ViewCard from "@/components/ViewCard.vue";

const {views, error, loading, results, page, loadViews} = useViews();

watch(views, ()=> {
}
)

onMounted(()=>{
    loadViews();
    
})

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

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-8">
        <ViewCard v-for="page in views" :key="page.id" :pageInfo="page"></ViewCard>
          
      </div>

    </div>
  </div>
</template>
