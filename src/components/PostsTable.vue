<template>
  <!-- Mover esta tabla a un componente -->
  <div class="w-full sm:w-5/6 sm:mx-auto">
    <p class="text-left my-4">¡Excelente búsqueda! Se han encontrado <span class="font-bold">10</span> resultados.</p>
      
    <table class="w-full bg-white mt-2 sm:my-4 shadow-lg sm:rounded-sm overflow-hidden">
      <thead :class="`bg-[${primaryColor}] shadow-md`">
        <tr :class="`grid grid-cols-8 lg:grid-cols-12 text-[${blankColor}]`" class="font-bold text-left h-12 py-1 px-4">
          <td class="col-span-1 lg:col-span-2">R.O.</td>
          <td class="hidden sm:table-cell col-span-2 lg:col-span-1">FECHA</td>
          <td class="hidden lg:table-cell col-span-2">TIPO DE NORMA</td>
          <td class="hidden lg:table-cell text-center col-span-2">ÓRGANO EMISOR</td>
          <td class="mx-2 sm:mx-0 col-span-6 sm:col-span-4 text-center">TÍTULO</td>
          <td class="col-span-1 text-center">PDF</td>
        </tr>
      </thead>
      <tbody>
        
        <tr :class="`grid grid-cols-8 lg:grid-cols-12 h-12 py-2 px-4`">
          <td class="col-span-1 lg:col-span-2 text-left font-semibold">123</td>

          <td class="hidden sm:table-cell col-span-2 lg:col-span-1 text-left font-semibold">20/12/22</td>

          <td class="hidden lg:table-cell col-span-2 text-left font-semibold">Suplemento</td>
          <td class="hidden lg:flex col-span-2 text-center justify-center items-center font-semibold">
            <img src="../assets/logos/sriLogo.png" class="h-8" alt="SRILogo">
          </td>
          <td class="col-span-6 mx-2 sm:px-0 sm:col-span-4 text-left font-semibold overflow-hidden">
            <span class="truncate"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              nam, fugit minus molestiae obcaecati quia repellat dolorem ab
              laborum maiores perspiciatis ipsam corrupti commodi! Iusto nostrum
              nisi illum harum tenetur.</span
            >
          </td>
          <td class="col-span-1 flex justify-center items-center font-semibold">
            <BaseIcon
              :size="'h-8'"
              class="cursor-pointer"
              :name="'file'"
            ></BaseIcon>
          </td>
        </tr>
        <tr :class="`grid grid-cols-8 lg:grid-cols-12 h-12 py-2 px-4 bg-[${primaryColor}] bg-opacity-20`">
          <td class="col-span-1 lg:col-span-2 text-left font-semibold">123</td>

          <td class="hidden sm:table-cell col-span-2 lg:col-span-1 text-left font-semibold">20/12/22</td>

          <td class="hidden lg:table-cell col-span-2 text-left font-semibold">Suplemento</td>
          <td class="hidden lg:flex col-span-2 justify-center items-center font-semibold">
            
            <img src="../assets/logos/superciasLogo.png" class="h-8" alt="Supercias Logo">
          </td>
          <td class="col-span-6 mx-2 sm:px-0 sm:col-span-4 text-left font-semibold overflow-hidden">
            <span class="truncate"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              nam, fugit minus molestiae obcaecati quia repellat dolorem ab
              laborum maiores perspiciatis ipsam corrupti commodi! Iusto nostrum
              nisi illum harum tenetur.</span
            >
          </td>
          <td class="col-span-1 flex justify-center items-center font-semibold">
            <BaseIcon
              :size="'h-8'"
              class="cursor-pointer"
              :name="'file'"
            ></BaseIcon>
          </td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>