
<template>
  <!-- Mover esta tabla a un componente -->
  <div class="w-auto sm:w-5/6 mx-2 sm:px-0 sm:mx-auto shadow-xl rounded-sm border border-gray-200">
    <div class="grid grid-cols-6 w-full">
      <div class="col-span-1 flex flex-col items-center justify-center gap-2 m-4">
        <span class="font-bold h-1/3">Órgano Emisor</span>
        <img src="../assets/logos/sriLogo.png" class="h-24 w-24" alt="SRILogo" />
  
      </div>  
      <div class="col-span-4">
        <div class="grid grid-cols-4 p-4">
          <span :class="`text-[${primaryColor}] col-span-4 font-bold text-left`">Reforma en la declaracion de IVA</span>
          <span :class="`text-[${primaryColor}] font-bold text-left`">R.O.:</span>
          <span class="text-justify">9123</span>
          <span :class="`text-[${primaryColor}] font-bold text-left`">Fecha:</span>
          <span class="text-justify">20/04/2020</span>
          <span :class="`text-[${primaryColor}] font-bold text-left`">Tipo:</span>
          <span class="text-justify">Suplemento</span>
          <span :class="`text-[${primaryColor}] font-bold text-left`">Norma:</span>
          <span class="text-justify">Ejemplo</span>
          <span :class="`text-[${primaryColor}] font-bold text-left`">No.Norma:</span>
          <span class="text-justify">543</span>
        </div>
      </div>
      <div class="col-span-1  flex flex-col items-center justify-center gap-2 m-4">
        <span class="font-bold h-1/3">Descargar PDF</span>
        <BaseIcon :size="'h-24'" class="cursor-pointer" :name="'file'" />
      </div>
    </div>
    <div class="col-span-6 h-40 text-left mx-4 py-4 border-t border-gray-200">
      <span :class="`text-[${primaryColor}] font-bold text-left`">Descripción:</span>
      Esta es mi descripcion
    </div>
    <div class="col-span-6 h-10 p-2 text-left mx-4 border-t border-gray-200">
      <span :class="`text-[${primaryColor}] font-bold text-left`">Referencia:</span>
      Esta es mi descripcion
    </div>
      
      
  </div>
</template>