<script setup>
import TheFooter from "@/components/TheFooter";
import TheNavBar from "@/components/TheNavBar";

</script>

<template>
  <header class="sticky top-0 z-50">
    <TheNavBar>
      <template #links>
        <slot name="links" />
      </template>
    </TheNavBar>
  </header>
  <main v-bind="$attrs" class="relative min-h-screen -mb-6  z-10">
    <slot name="body" />
  </main>

  <TheFooter class="relative bottom-0 z-50"></TheFooter>
</template>

<script>
export default {
  inheritAttrs: false,
}
</script>

<style>
</style>