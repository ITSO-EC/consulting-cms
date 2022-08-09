<script setup>
</script>
<template>
  <div class="h-[60vh] flex flex-col">
    
    <div class="relative w-full overflow-hidden ">
      <img
        src="https://source.unsplash.com/1600x900/?faded"
        class="object-cover w-full h-[50vh] "
        alt=""
      />
      <div class="absolute inset-y-0 inset-x-0  flex flex-col justify-center items-center  bg-white/60 p-4 rounded mx-auto backdrop-blur-sm">
        <h1 class="text-indigo-800 font-extrabold text-4xl">
          Marco Legal Teorico (Titulo)
        </h1>
        <h2 class="text-gray-800 font-bold text-2xl ">
          Categoría N (Subtitulo)
        </h2>
      </div>
        
    </div>
    <div class="w-5/6 mx-auto flex flex-col gap-12 p-8 text-left">
      

      <div class="justify-self-end">
        <p>
        <span class="font-bold">Fecha de creación:</span>
        dd/mm/aa</p>
        <p>
        <span class="font-bold">Fecha de última actualización:</span>
        dd/mm/aa</p>
      </div>
      
    </div>
  </div>
</template>
