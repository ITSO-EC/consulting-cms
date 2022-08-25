
<template>
  <div class="h-[50vh] relative flex justify-center -mt-16">
    <div :class="`bg-[${secondaryColor}] bg-opacity-20`" 
    class="absolute bottom-0 mx-auto backdrop-blur-2xl rounded-t-lg w-fit flex flex-col sm:gap-4 px-2 sm:px-8 py-4 text-left z-10">
      <div>
        <h1 :class="`text-[${blankColor}]`" class="text-center brightness-150 text-2xl sm:text-4xl sm:mb-1">
          Marco Legal Teorico
        </h1>
        <h2
        :class="`text-blue-500 font-semibold`" 
        class=" text-center text-md sm:text-xl sm:mb-2">
          ¡Actualizado a diario!
        </h2>
      </div>

      <div class="justify-self-end text-center">
        <p class="text-black">
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
