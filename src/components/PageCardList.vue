<script setup>
  import ViewCard from "@/components/ViewCard.vue"
</script>
<template>
      <div class="flex flex-col items-center py-8">
        <div class="w-full md:w-5/6 lg:w-2/3 lg:grid gap-8 lg:grid-cols-2">
          <h1 class="w-full px-4 sm:px-0 sm:text-center lg:text-left md:mt-8 lg:justify-self-end font-bold my-4 text-2xl">
            <slot name="list-title"></slot>
          </h1>
        </div>
        
        <div
          class="
            w-auto
            md:w-5/6
            lg:w-2/3
            h-auto
            mx-auto
            grid grid-rows-4 lg:grid-rows-1 lg:grid-cols-2
            place-content-center
            gap-8
            pb-8
          "
        >

          <ViewCard class="justify-self-end"></ViewCard>
          
<!--         
          <ViewCard class="justify-self-center"></ViewCard> -->
          <ViewCard class="justify-self-start"></ViewCard>
          <ViewCard class="justify-self-end"></ViewCard>
          
<!--         
          <ViewCard class="justify-self-center"></ViewCard> -->
          <ViewCard class="justify-self-start"></ViewCard>
        </div>
      </div>
</template>