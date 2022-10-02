<script setup>
import SearchInput from "@/components/SearchInput.vue";
const emit = defineEmits(['query']);

const binquery = (query) => {
  
  emit('query', query)
}

</script>
<template>
  <div :class="`border-b border-b-primaryColor`" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full sm:w-5/6 mx-auto px-4 sm:px-0 gap-x-8 gap-y-2 pt-6 pb-12">
    
    <SearchInput @queryparam="binquery" summarized class="col-span-1 sm:col-span-2 lg:col-span-3 my-2" :class="`border-b border-b-primaryColor`"/>
    

    <div class="flex items-center gap-4">
      <label for="number" class="text-left  w-1/3">No. Norma:</label>
      <BaseInput
        id="number"
        name="number"
      ></BaseInput>
    </div>
    
    
    <div class="flex items-center gap-4">
      <label for="ronumber" class="text-left  w-1/3">No. R.O.:</label>
      <BaseInput
        id="ronumber"
        name="ronumber"
      ></BaseInput>
    </div>
    
    <div class="flex items-center gap-4">
      <label for="emisor" class="text-left  w-1/3">Órgano Emisor:</label>
      <BaseSelect
        id="emisor"
        name="emisor"
        class="w-full"
      >
        <option>SRI</option>
        <option>Supercias</option>
        <option>Superbancos</option>
      </BaseSelect>
    </div>
    <div class="flex items-center gap-4">
      <label for="type" class="text-left  w-1/3">Tipo de Norma:</label>
      <BaseSelect
        id="type"
        name="type"
        class="w-full "
      >
        <option>Suplemento</option>
        <option>Ley</option>
        <option>Reforma</option>
      </BaseSelect>
    </div>
    
    
    <div class="flex items-center gap-4">
      <label for="reformtype" class="text-left  w-1/3">Tipo de R.O.:</label>
      <BaseSelect
        id="reformtype"
        name="reformtype"
        class="w-full"
      >
        <option>Primer Suplemento</option>
        <option>Segundo Suplemento</option>
        <option>Tercer Suplemento</option>
      </BaseSelect>
    </div>
    
    <div></div>

    <div class="flex items-center gap-4">
      <label for="fromdate" class="text-left  w-1/3">Fecha Desde:</label>
      <BaseInput
        id="fromdate"
        name="fromdate"
        type="date"
      ></BaseInput>
    </div>
    <div class="flex items-center gap-4">
      <label for="todate" class="text-left  w-1/3">Fecha Hasta:</label>
      <BaseInput
        id="todate"
        name="todate"
        type="date"
      ></BaseInput>
    </div>

  </div>
</template>