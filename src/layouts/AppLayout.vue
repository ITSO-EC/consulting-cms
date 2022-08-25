<script setup>
import TheFooter from "@/components/TheFooter";
import TheNavBar from "@/components/TheNavBar";

</script>

<template>
<div>
  <header class="sticky top-0 z-50">
    <TheNavBar/>
  </header>
  <main v-bind="$attrs" class="relative min-h-screen -mb-6  z-10">
    <slot name="body" />
  </main>

  <TheFooter class="relative bottom-0 z-50"></TheFooter>
</div>
  
</template>

<script>
export default {
  inheritAttrs: false,
}
</script>

<style>
</style>