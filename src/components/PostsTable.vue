<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    summarized: {
      type: Boolean,
      default: false,
    }
  }
})
</script>

<template>
  <!-- Mover esta tabla a un componente -->
  <div class="w-full sm:w-5/6 px-2 sm:px-0 sm:mx-auto">
    <p :class="summarized? 'hidden': ''" class="text-left my-4 mx-2 sm:mx-0">¡Excelente búsqueda! Se han encontrado <span class="font-bold">10</span> resultados.</p>
      
    <table class="w-full bg-white mt-2 sm:my-4 shadow-lg sm:rounded-sm overflow-hidden">
      <thead :class="`bg-[${primaryColor}] shadow-md`">
        <tr :class="`grid ${summarized? 'grid-cols-3 sm:grid-cols-8' : 'grid-cols-8 lg:grid-cols-12'} text-[${blankColor}]`" class="font-bold text-left h-12 py-1 px-4">
          <td class="col-span-1 lg:col-span-2">R.O.</td>
          <td class="hidden sm:table-cell col-span-2 lg:col-span-1">FECHA</td>
          <td class="hidden lg:table-cell col-span-2">TIPO DE NORMA</td>
          <td :class="summarized? 'col-span-1 sm:col-span-4 lg:col-span-2':'hidden lg:table-cell col-span-2'" class="text-center">ÓRGANO EMISOR</td>
          <td :class="summarized ? 'hidden':'col-span-6 sm:col-span-4'" class="mx-2 sm:mx-0 text-center">TÍTULO</td>
          <td class="col-span-1 text-center">PDF</td>
        </tr>
      </thead>
      <tbody>
       
                
        <tr :class="`grid ${summarized? 'grid-cols-3 sm:grid-cols-8' : 'grid-cols-8 lg:grid-cols-12'} h-12 py-2 px-4`">
          
          <td class="col-span-1 lg:col-span-2 text-left font-semibold">
            <router-link to="/page/category/post" class="inline-block w-full">123</router-link>
          </td>

          <td class="hidden sm:table-cell col-span-2 lg:col-span-1 text-left font-semibold">20/12/22</td>

          <td class="hidden lg:table-cell col-span-2 text-left font-semibold">Suplemento</td>
          <td :class="summarized? 'col-span-1 sm:col-span-4 flex lg:col-span-2':'hidden lg:flex col-span-2'" class="text-center justify-center items-center font-semibold">
            <img src="../assets/logos/sriLogo.png" class="h-8" alt="SRILogo">
          </td>
          <td :class="summarized? 'hidden':'col-span-6 sm:col-span-4'" class="mx-2 sm:px-0text-left font-semibold overflow-hidden">
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
                 
        <tr :class="`grid ${summarized? 'grid-cols-3 sm:grid-cols-8' : 'grid-cols-8 lg:grid-cols-12'} h-12 py-2 px-4 bg-[${primaryColor}] bg-opacity-20`">
          <td class="col-span-1 lg:col-span-2 text-left font-semibold">123</td>

          <td class="hidden sm:table-cell col-span-2 lg:col-span-1 text-left font-semibold">20/12/22</td>

          <td class="hidden lg:table-cell col-span-2 text-left font-semibold">Suplemento</td>
          <td :class="summarized? 'col-span-1 sm:col-span-4 flex lg:col-span-2':'hidden lg:flex col-span-2'" class="text-center justify-center items-center font-semibold">
            <img src="../assets/logos/sriLogo.png" class="h-8" alt="SRILogo">
          </td>
          <td :class="summarized? 'hidden':'col-span-6 sm:col-span-4'" class="mx-2 sm:px-0text-left font-semibold overflow-hidden">
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
                 
        <tr :class="`grid ${summarized? 'grid-cols-3 sm:grid-cols-8' : 'grid-cols-8 lg:grid-cols-12'} h-12 py-2 px-4`">
          <td class="col-span-1 lg:col-span-2 text-left font-semibold">123</td>

          <td class="hidden sm:table-cell col-span-2 lg:col-span-1 text-left font-semibold">20/12/22</td>

          <td class="hidden lg:table-cell col-span-2 text-left font-semibold">Suplemento</td>
          <td :class="summarized? 'col-span-1 sm:col-span-4 flex lg:col-span-2':'hidden lg:flex col-span-2'" class="text-center justify-center items-center font-semibold">
            <img src="../assets/logos/sriLogo.png" class="h-8" alt="SRILogo">
          </td>
          <td :class="summarized? 'hidden':'col-span-6 sm:col-span-4'" class="mx-2 sm:px-0text-left font-semibold overflow-hidden">
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
                 
        <tr :class="`grid ${summarized? 'grid-cols-3 sm:grid-cols-8' : 'grid-cols-8 lg:grid-cols-12'} h-12 py-2 px-4 bg-[${primaryColor}] bg-opacity-20`">
          <td class="col-span-1 lg:col-span-2 text-left font-semibold">123</td>

          <td class="hidden sm:table-cell col-span-2 lg:col-span-1 text-left font-semibold">20/12/22</td>

          <td class="hidden lg:table-cell col-span-2 text-left font-semibold">Suplemento</td>
          <td :class="summarized? 'col-span-1 sm:col-span-4 flex lg:col-span-2':'hidden lg:flex col-span-2'" class="text-center justify-center items-center font-semibold">
            <img src="../assets/logos/sriLogo.png" class="h-8" alt="SRILogo">
          </td>
          <td :class="summarized? 'hidden':'col-span-6 sm:col-span-4'" class="mx-2 sm:px-0text-left font-semibold overflow-hidden">
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