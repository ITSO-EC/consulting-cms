<template>
  <div>
    <FullScreenDiv first class="home bg-blue-500 grid relative"> 
      <img
        alt="Vue logo"
        :class="`bg-blue-400 backdrop-contrast-50`"
        class="w-full h-[100vh] object-cover"
        src="../assets/images/BusinessPicFinal.png"
      />
      <div class="absolute flex flex-col justify-center items-center inset-0 gap-4 ">
        <h1 class="text-white text-4xl font-bold">AÑOS DE EXPERIENCIA</h1>
        <h1 class="text-white text-4xl ">Al alcance de todos, siempre</h1>
        <SecondaryButton class="mt-4">
          <router-link to="/search" class="px-12 inline-block w-full">Buscar</router-link>
        </SecondaryButton>
      </div>
    </FullScreenDiv>
    
    <div class="mt-6 h-auto lg:h-[60vh] my-auto pt-0 flex flex-col justify-center">
      <CardList>
        <template #list-title>Últimas Publicaciones</template>
      </CardList>  
    </div>
    <div class="bg-white overflow-hidden h-[60vh] pt-0 flex flex-col justify-center">
         <img
        alt="Banner de Consulting"
        class="w-[100vw] object-cover"
        src="../assets/images/speedDiv.png"
      />
    </div>
    <FullScreenDiv class="h-auto pt-0 flex flex-col justify-center">
      <CardList>
        <template #list-title>Las ultimas noticias</template>
      </CardList>  
    </FullScreenDiv>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import FullScreenDiv from "@/components/FullScreenDiv.vue";
import CardList from '@/components/CardList.vue';
import SecondaryButton from "@/components/SecondaryButton.vue"

export default {
  name: "HomeView",
  components: {
    //HelloWorld,
    FullScreenDiv,
    CardList,
    SecondaryButton
  },
};
</script>
