<script setup>
import TheFooter from "@/components/TheFooter";
import TheNavBar from "@/components/TheNavBar";

</script>

<template>
  <header class="sticky top-0 bg-none">
    <TheNavBar>
      <template #links>
        <slot name="links" />
      </template>
    </TheNavBar>
  </header>
  <main v-bind="$attrs" class="static min-h-screen -mb-6 -mt-20">
    <slot name="body" />
  </main>

  <TheFooter class="static bottom-0"></TheFooter>
</template>

<script>
export default {
  inheritAttrs: false,
}
</script>

<style>
</style>