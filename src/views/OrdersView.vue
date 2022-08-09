<script setup>
import FullScreenDiv from "@/components/FullScreenDiv.vue"
import OrderCard from "@/components/OrderCard.vue"
import { ref } from 'vue'
let openModal = ref(false);
function toggleModal() {
  openModal.value = !openModal.value;
}

let openToast = ref(true);
function toggleToast() {
  openToast.value = !openToast.value;
}
</script>

<template>
  <div>
    <FullScreenDiv class="h-auto py-12 bg-white">
      
      <BaseToast class="fixed top-20 z-50" :show="openToast" @close="toggleToast">
        Set Yourself Free Or Not
      </BaseToast>
      <div class="flex py-12 border-b justify-between mx-auto w-5/6 ">
        <h1 class="text-5xl text-blue-500 text-left">Órdenes </h1>
        
        <BaseButton class="" @click="toggleModal">Crear Orden</BaseButton>
      </div>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>

    </FullScreenDiv>

    <BaseModal :show="openModal" :closeable="true" @close="toggleModal">
      
      <template #title>Este es mi legendario titulo </template>
      <div class="grid grid-cols-6">
        Hola
        MMundo
      </div>
    </BaseModal>
      
  
  </div>
  
</template>