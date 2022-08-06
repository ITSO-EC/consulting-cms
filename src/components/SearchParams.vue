<template>
  <div class="grid grid-cols-3 w-5/6 mx-auto gap-x-8 gap-y-2 pt-12 pb-12 border-b border-b-gray-300">
    <div class="flex items-center gap-4">
      <label for="type" class="text-left w-1/3">Tipo:</label>
      <BaseInput
        id="type"
        name="type"
      ></BaseInput>
    </div>
    
    <div class="flex items-center gap-4">
      <label for="norm" class="text-left w-1/3">Norma:</label>
      <BaseInput
        id="norm"
        name="norm"
      ></BaseInput>
    </div>

    <div class="flex items-center gap-4">
      <label for="ronumber" class="text-left w-1/3">R.O.#:</label>
      <BaseInput
        id="ronumber"
        name="ronumber"
      ></BaseInput>
    </div>
    
    <div class="flex items-center gap-4">
      <label for="emisor" class="text-left w-1/3">Órgano Emisor:</label>
      <BaseInput
        id="emisor"
        name="emisor"
      ></BaseInput>
    </div>
    
    <div class="flex items-center gap-4">
      <label for="number" class="text-left w-1/3">Número:</label>
      <BaseInput
        id="number"
        name="number"
      ></BaseInput>
    </div>
    
    <div class="flex items-center gap-4">
      <label for="reformtype" class="text-left w-1/3">Tipo de Reforma:</label>
      <BaseInput
        id="reformtype"
        name="reformtype"
      ></BaseInput>
    </div>
    
    <div class="flex items-center gap-4">
      <p  class="text-left">Fecha de publicación</p>
      </div>
    
    <div class="flex items-center gap-4">
      <label for="fromdate" class="text-left w-1/3">Desde:</label>
      <BaseInput
        id="fromdate"
        name="fromdate"
      ></BaseInput>
    </div>
    <div class="flex items-center gap-4">
      <label for="todate" class="text-left w-1/3">Hasta:</label>
      <BaseInput
        id="todate"
        name="todate"
      ></BaseInput>
    </div>

  </div>
</template>