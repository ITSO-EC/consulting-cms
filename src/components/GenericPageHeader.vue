<script setup>
import FullScreenDiv from "@/components/FullScreenDiv.vue";
</script>
<template>
  <div class="h-[50vh] relative flex justify-center -mt-16">
    <div class="absolute bottom-0 mx-auto backdrop-blur-xl rounded-t bg-blue-100/60 w-fit flex flex-col gap-4 px-8 py-4 text-left z-10">
      <div>
        <h1 class="text-white text-center text-4xl mb-2">
          Marco Legal Teorico (Titulo)
        </h1>
        <h2 class="text-blue-600 text-center text-xl mb-2">
          ¡Actualizado a diario! (Subtitulo)
        </h2>
      </div>

      <div class="justify-self-end text-center">
        <p>
        <span class="font-bold">Últ. act.:</span>
        dd/mm/aa</p>
      </div>
      
    </div>
    <div class="absolute w-full overflow-hidden z-0">
      <img
        src="https://source.unsplash.com/1600x900/?business"
        class="object-cover w-full h-[50vh] brightness-75"
        alt=""
      />
    </div>
  </div>
</template>
