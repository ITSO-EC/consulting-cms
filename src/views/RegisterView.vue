<script setup>
import FullScreenDiv from "@/components/FullScreenDiv.vue";
import UserInfoCard from "@/components/UserInfoCard.vue";
import UserInfoForm from "@/components/UserInfoForm.vue";
</script>
<template>
  <FullScreenDiv first class="grid grid-cols-12  pt-12 pb-6 ">
    <div class="my-8 col-start-2 col-span-10 lg:col-start-3 lg:col-span-2">
      <UserInfoCard ></UserInfoCard>
    </div>

    <div class="my-8 col-start-2 col-span-10 lg:col-start-5 lg:col-span-6">
      <UserInfoForm ></UserInfoForm>
    </div>
  </FullScreenDiv>
</template>
