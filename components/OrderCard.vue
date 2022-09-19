<template>
  <div class="grid grid-cols-2 w-5/6 mx-auto border-b gap-y-8 py-12">
    <div class="col-span-2 text-left flex">
      <span class="inline font-bold w-36">ID Universal:</span>
      <p>b64f9b3e-1521-11ed-861d-0242ac120002</p>
    </div>
    <div class="text-left">
      <span class="inline font-bold w-36">Emisor:</span>
      <p>Clint Barton</p>
    </div>
    <div class="text-left">
      <span class="inline font-bold w-36">Membresía Solicitada:</span>
      <p>Premium</p>
    </div>
    <div class="text-left">
      <span class="inline font-bold w-36">Fecha de creación:</span>
      <p>15/08/22</p>
    </div>
    <div class="text-left">
      <span class="inline font-bold w-36">Fecha de resolución:</span>
      <p>15/09/2022</p>
    </div>

    <div class="text-left">
      <span class="inline font-bold w-36">Asunto:</span>
      <p>Solicito una membresía</p>
    </div>
    <div class="text-left">
      
        <span class="inline font-bold w-36">Fecha de anulación:</span>
        
              <p>
--/--/----
      </p>
    </div>
    <div class="col-span-2 text-left">
      <textarea
        class="w-full border py-4 border-gray-700 rounded"
        disabled
        aria-disabled="true"
        placeholder="Aqui va un texto epico"
        aria-placeholder="Aqui va un texto epico"
      >
        Aqui está mi texto épico q me ganó el respeto del barrio.
      </textarea>
    </div>

    <div class="text-left">
        <span class="inline font-bold w-36">Archivo adjunto:</span>
      <p>

        <button
          href="#"
          class="inline font-bold py-2 mr-4 text-blue-500 hover:underline"
        >
          Archivo.pdf
        </button>
      </p>
    </div>
    <div class="text-left">
      <span class="inline font-bold w-36">Estado:</span>
        <p
          class="
            w-fit
            rounded-full
            text-green-800
            bg-green-100
            border border-green-600
            -ml-2
            px-2
            py-1
          "
          >Resuelto</p
        >
    </div>
  </div>
</template>