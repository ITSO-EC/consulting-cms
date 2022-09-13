<script setup>
import UserInfoCard from "@/components/UserInfoCard.vue";
import ActionButton from "@/components/ActionButton.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";

import OrderCard from "@/components/OrderCard.vue"
import { ref } from 'vue'
let openModal = ref(false);
function toggleModal() {
  openModal.value = !openModal.value;
}

let openToast = ref(false);
function toggleToast() {
  openToast.value = !openToast.value;
}


</script>
<template>

  <div first class="min-h-[103vh] sm:min-h-[101vh] lg:min-h-[100.5vh] h-auto -mt-16 pt-16 -mb-10 pb-10 grid grid-cols-12 bg-gray-200">
    <BaseToast class="fixed top-16 animate__animated animate__fadeInLeft z-50" :show="openToast" @close="toggleToast">
        Orden Creada con éxito
      </BaseToast>
    <div class="col-start-2 col-span-10 lg:col-start-2 lg:col-span-3 bg-white shadow-xl sm:px-8 ">
      
      <h1 class="text-3xl font-bold w-fit text-left my-8 sm:my-12 mx-8 sm:mx-0 md:ml-12 lg:ml-0">Mis órdenes</h1>
      <UserInfoCard :class="``" :disabled="true"></UserInfoCard>
      <span class="text-left inline-block w-full">
        <ActionButton class="lg:hidden mx-8 sm:mx-0 md:ml-12 mb-8" @click="toggleModal">
          Crear Orden</ActionButton>
      </span>
    </div>

    <div class=" col-start-2 col-span-10 lg:col-start-5 lg:col-span-7 bg-white md:border-l md:border-slate-300 pt-4 sm:pt-12">
      <div class="flex justify-between  w-5/6 mx-auto">
        <SecondaryButton class="hidden lg:block ">
          <router-link to="/">Volver</router-link>
          </SecondaryButton>
           <ActionButton class="hidden lg:block " @click="toggleModal">
          Crear Orden</ActionButton>
      </div>
      


      <OrderCard/>

     </div>
     <BaseModal :show="openModal" :closeable="true" @close="toggleModal">
      
      <template #title>Formulario de crear orden </template>
      <div class="grid grid-cols-6 w-full px-8 my-4">
        Aqui se registran los datos de una orden
        
      </div>
      <div class="w-full px-8 flex justify-between my-4">
        <SecondaryButton>Cancelar</SecondaryButton>
        <ActionButton @click="toggleModal(); toggleToast()">Aceptar</ActionButton>
      </div>
        
    </BaseModal>
  </div>
  
</template>
