<script setup>
import FullScreenDiv from "@/components/FullScreenDiv.vue";
</script>
<template>
  <FullScreenDiv class="h-[50vh] flex">
    <div class="w-1/3 flex flex-col gap-12 p-8 text-left">
      <div>
        <h1 class="text-blue-500 text-4xl mb-2">
          Marco Legal Teorico (Titulo)
        </h1>
        <h2 class="text-gray-500 text-xl mb-2">
          ¡Actualizado a diario! (Subtitulo)
        </h2>
      </div>

      <div class="justify-self-end">
        <p>
        <span class="font-bold">Fecha de creación:</span>
        dd/mm/aa</p>
        <p>
        <span class="font-bold">Fecha de última actualización:</span>
        dd/mm/aa</p>
      </div>
      
    </div>
    <div class="w-2/3 overflow-hidden">
      <img
        src="https://source.unsplash.com/1600x900/?business"
        class="object-cover w-full h-[50vh]"
        alt=""
      />
    </div>
  </FullScreenDiv>
</template>
