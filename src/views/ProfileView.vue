<script setup>
import FullScreenDiv from "@/components/FullScreenDiv.vue";
import UserInfoCard from "@/components/UserInfoCard.vue";
import UserInfoForm from "@/components/UserInfoForm.vue";
import {ref} from 'vue';
const editting = ref(true);


</script>
<template>
  <FullScreenDiv first class="grid grid-cols-12 pt-12 pb-10 bg-gray-200">
    <div class="col-start-2 col-span-10 lg:col-start-2 lg:col-span-3 bg-white shadow-xl sm:px-8 ">
      
      <h1 class="text-3xl font-bold w-fit text-left my-8 sm:my-12 mx-8 sm:mx-0 md:ml-12 lg:ml-0">Mi perfil</h1>
      <UserInfoCard :class="``" :disabled="editting"></UserInfoCard>
    </div>

    <div class=" col-start-2 col-span-10 lg:col-start-5 lg:col-span-7 bg-white md:border-l md:border-slate-300">
      
      <UserInfoForm :class="`p-4`" :disabled="editting" @editting-prof="editting=!editting"></UserInfoForm>
    </div>
  </FullScreenDiv>
</template>
