<script setup>
import TheFooter from "@/components/TheFooter";
import TheNavBar from "@/components/TheNavBar";
import GenericPageHeader from "@/components/GenericPageHeader.vue";
import ConsultingBreadcrumbs from "@/components/ConsultingBreadcrumbs.vue";
</script>

<template>
  <div>
    <header class="sticky top-0 z-50">
      <TheNavBar>
        <template #links>
          <slot name="links" />
        </template>
      </TheNavBar>
    </header>

    <GenericPageHeader class="shadow"></GenericPageHeader>
   
    <main v-bind="$attrs" class="relative flex min-h-screen  z-10">

      <aside
        class="w-1/5 p-4"
        :class="`hidden md:block border-r-2 border-[${secondaryColor}]`"
      >
        <ul class="text-left text-xl font-medium">
          <li>
            <router-link
              :class="`border-[${secondaryColor}]`"
              class="inline-block py-2 border-b w-full"
              to="/page/category"
              >Categoría 1</router-link
            >
          </li>
          <li>
            <router-link
              :class="`border-[${secondaryColor}]`"
              class="inline-block py-2 border-b w-full"
              to="/page/category"
              >Categoría 2</router-link
            >
          </li>
          <li>
            <router-link
              :class="`border-[${secondaryColor}]`"
              class="inline-block py-2 border-b w-full"
              to="/page/category"
              >Categoría 3</router-link
            >
          </li>
          <li>
            <router-link
              :class="`border-[${secondaryColor}]`"
              class="inline-block py-2 border-b w-full"
              to="/page/category"
              >Categoría 4</router-link
            >
          </li>
        </ul>
      </aside>
      <div class="w-full md:w-4/5">
         
        <ConsultingBreadcrumbs class="mx-auto w-full sm:w-5/6"/>      

        <slot name="body" />
      </div>
    </main>

    <TheFooter class="relative bottom-0 z-50"></TheFooter>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<style>
</style>