<script setup>
import FullScreenDiv from "@/components/FullScreenDiv.vue"
import OrderCard from "@/components/OrderCard.vue"
</script>

<template>
  <div>
    <FullScreenDiv class="h-auto py-12 bg-white">
      <div class="flex py-12 border-b justify-between mx-auto w-5/6 ">
        <h1 class="text-5xl text-blue-500 text-left">Órdenes </h1>
        <BaseButton class="">Crear Orden</BaseButton>
      </div>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
    </FullScreenDiv>
    
      
  
  </div>
  
</template>