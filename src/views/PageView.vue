<script setup>
import FullScreenDiv from "@/components/FullScreenDiv.vue";
import GenericPageHeader from "@/components/GenericPageHeader.vue";
import CardList from "@/components/CardList.vue";
</script>
<template>
  <div class="h-auto">
    <GenericPageHeader class="shadow"></GenericPageHeader>
    <FullScreenDiv
      class="h-[50vh] mx-auto bg-gray-100 flex justify-center pb-4"
    >
      <CardList class="">
        <template #list-title>Las últimas publicaciones de la vista</template>
      </CardList>
    </FullScreenDiv>
    <FullScreenDiv class="min-h-[50vh] h-auto py-24">
      <ul class="grid grid-cols-3 border mx-auto w-5/6">
        <li class="border">
          <a href="page/category" class="text-blue-600 hover:underline">Categoria N</a>
        </li>
        
        <li class="border">
          <a href="page/category" class="text-blue-600 hover:underline">Categoria N</a>
        </li>
        <li class="border">
          <a href="page/category" class="text-blue-600 hover:underline">Categoria N</a>
        </li>
        <li class="border">
          <a href="page/category" class="text-blue-600 hover:underline">Categoria N</a>
        </li>
        <li class="border">
          <a href="page/category" class="text-blue-600 hover:underline">Categoria N</a>
        </li>
        <li class="border">
          <a href="page/category" class="text-blue-600 hover:underline">Categoria N</a>
        </li>
        <li class="border">
          <a href="page/category" class="text-blue-600 hover:underline">Categoria N</a>
        </li>
        <li class="border">
          <a href="page/category" class="text-blue-600 hover:underline">Categoria N</a>
        </li>
      </ul>
    </FullScreenDiv>
  </div>
</template>
