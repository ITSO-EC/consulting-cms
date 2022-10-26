<script setup>
import useAuth from "~~/composables/useAuth";
import FullScreenDiv from "~~/components/FullScreenDiv.vue";
import UserInfoCard from "~~/components/UserInfoCard.vue";
import UserInfoForm from "~~/components/UserInfoForm.vue";
const editting = ref(true);
const { user } = useAuth()


definePageMeta({
    title: 'Perfil',
    middleware: 'auth'
  })
</script>
<template>
  <div class="grid grid-cols-12  bg-gray-200 h-auto min-h-screen -mb-10 pb-10 -mt-[44px] sm:-mt-[56px] lg:-mt-[60-px] pt-[44px] sm:pt-[56px] lg:pt-[60-px]">
    <div class="col-start-2 col-span-10 lg:col-start-2 lg:col-span-3 bg-white shadow-xl sm:px-8 ">
      
      <h1 class="text-3xl font-bold w-fit text-left my-8 sm:my-12 mx-8 sm:mx-0 md:ml-12 lg:ml-0">Mi perfil</h1>
      <UserInfoCard :class="``" :disabled="editting"></UserInfoCard>
    </div>

    <div class=" col-start-2 col-span-10 lg:col-start-5 lg:col-span-7 bg-white md:border-l md:border-slate-300">
      
      <UserInfoForm :class="`p-4`" :disabled="editting" :user="user" @editting-prof="editting=!editting"></UserInfoForm>
    </div>
  </div>
</template>
