<script setup>
import SearchParams from "@/components/SearchParams.vue";
</script>

<template>
  <div>
    <div class="bg-blue-600 w-full h-16 -mt-16"></div>
    <div class="min-h-[90vh] h-auto ">
      <SearchParams class="" />
      <div class="grid grid-cols-12 w-5/6 mx-auto">
        <table class="col-span-12 bg-white mt-4 sm:my-8 sm:my-8 shadow-lg">
          <thead :class="`bg-[${primaryColor}] shadow-md`">
            <tr :class="`text-[${blankColor}]`" class="font-bold text-left h-12">
              <td>RO#</td>
              <td class="hidden sm:table-cell">FECHA</td>
              <td class="text-center sm:text-left sm:pl-12">TIPO DE NORMA</td>
              <td class="text-center">ÓRGANO EMISOR</td>
              <td class="hidden sm:table-cell text-right">DESCRIPCIÓN</td>
              <td class="hidden sm:table-cell text-right">PDF</td>
            </tr>
          </thead>
          <tbody>
            <tr :class="`h-12`">
              <td class="text-left pl-[6px] font-semibold">
                123
              </td>

              <td class="hidden sm:table-cell text-left font-semibold">
                20/12/22
              </td>

              <td class="text-center font-semibold">
                Suplemento
              </td>
              <td>
                SRI
              </td>
              <td
                class="
                  hidden
                  sm:flex
                  flex-col
                  h-12 w-12
                  items-end
                  overflow-hidden
                  justify-center
                  pr-4 
                  
                "
              >
              <span class="truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam, fugit minus molestiae obcaecati quia repellat dolorem ab laborum maiores perspiciatis ipsam corrupti commodi! Iusto nostrum nisi illum harum tenetur.</span>
             </td>
              <td
              >
                <BaseIcon :size="'h-10'" class="cursor-pointer" :name="'file'"></BaseIcon>
              </td>
            </tr>
            <tr :class="`h-12 bg-[${secondaryColor}] bg-opacity-40`">
              <td class="text-left pl-[6px] font-semibold">
                123
              </td>

              <td class="hidden sm:table-cell text-left font-semibold">
                20/12/22
              </td>

              <td class="text-center font-semibold">
                Suplemento
              </td>
              <td>
                SRI
              </td>
              <td
                class="
                  hidden
                  sm:flex
                  flex-col
                  h-12 w-12
                  items-end
                  overflow-hidden
                  justify-center
                  pr-4 
                  
                "
              >
              <span class="truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nam, fugit minus molestiae obcaecati quia repellat dolorem ab laborum maiores perspiciatis ipsam corrupti commodi! Iusto nostrum nisi illum harum tenetur.</span>
             </td>
              <td
              >
                <BaseIcon :size="'h-10'" class="cursor-pointer" :name="'file'"></BaseIcon>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

