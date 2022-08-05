<script setup>
import FullScreenDiv from "@/components/FullScreenDiv.vue";
import UserInfoCard from "@/components/UserInfoCard.vue";
import UserInfoForm from "@/components/UserInfoForm.vue";
</script>
<template>
  <FullScreenDiv first class="grid grid-cols-12 pt-20">
    <div class="col-start-3 col-span-2">
      <UserInfoCard></UserInfoCard>
    </div>

    <div class="col-start-5 col-span-6">
      <UserInfoForm disabled></UserInfoForm>
    </div>
  </FullScreenDiv>
</template>
