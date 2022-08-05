<script setup>
import SearchInput from "@/components/SearchInput.vue";
import { defineProps } from "vue";
defineProps({});
</script>

<template>
  <div class="w-full h-20 flex">
    <div class="h-full w-1/5">
        <img src="https://acorpconsulting.com/images/headers/logo_consulting.png" class="h-20" alt="">
    </div>
    <div class="w-full h-20 pt-4 grid grid-rows-2">
      <SearchInput class="w-2/3 2xl:w-5/6"></SearchInput>
      <nav class="-mt-6">
        <slot name="links" />
      </nav>
    </div>
  </div>
</template>

<style>
</style>