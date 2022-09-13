<script setup>
import ViewCard from "@/components/ViewCard.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
const API = "https://api-consulting-crm.herokuapp.com/v1/";
const pages = ref({});

const getPage = () => {
  axios
    .get(API + "pages?limit=8")
    .then((res) => {
      //console.log(res.data);
      pages.value = res.data;
      console.log(pages.value);
    })
    .catch((err) => {
      console.log(err);
    });
};
onMounted(() => {
  getPage();
});
</script>
<template>
  <div
    first
    class="
      min-h-[103vh]
      sm:min-h-[101vh]
      lg:min-h-[100.5vh]
      h-auto
      -mt-16
      pt-16
      -mb-10
      pb-10
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
        <ViewCard v-for="page in pages.results" :key="page.id" :pageInfo="page"></ViewCard>
          
      </div>

    </div>
  </div>
</template>
