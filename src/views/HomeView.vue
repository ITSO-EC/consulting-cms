<template>
  <div>
    <FullScreenDiv first class="home bg-blue-500 grid relative"> 
      <img
        alt="Vue logo"
        :class="`brightness-75 bg-blue-400 backdrop-contrast-50`"
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
    
    <div class="mt-6 h-auto  mx-auto pt-0 flex flex-col justify-center">
      <CardList class="py-12">
        <template #list-title>Últimas Publicaciones</template>
      </CardList>  
    </div>
    <div class="relative bg-white overflow-hidden min-h-[50vh] h-auto pt-0 flex flex-col justify-center">
      <img
        alt="Banner de Consulting"
        class="absolute w-[100vw] min-h-[50vh] object-cover"
        src="../assets/images/speedDiv.png"
      />
      <div class="hidden absolute inset-y-0 left-0 w-1/2 md:flex flex-col justify-center">
        <img src="../assets/images/support.png" class="mx-auto w-fit h-1/2" alt="Icono de soporte">
      </div>
      <div class="absolute inset-y-0 w-full md:right-0 md:w-1/2  flex flex-col gap-4 justify-center text-center md:text-left">
        <h1 class="text-2xl sm:text-4xl font-bold">
          Atención Inmediata
        </h1>
        <ul>
          <li>Notificaciones en tiempo real por Whatsapp</li>
          <li>La información más relevante de la industria</li>  
          <li>El mejor proveedor de información del mercado</li>
        </ul>
        <PrimaryButton class="w-fit px-8 mx-auto md:mx-0">Suscribirse</PrimaryButton>
      </div>
    </div>
    <FullScreenDiv class="h-auto pt-0 flex flex-col justify-center">
      <PageCardList>
        <template #list-title>
            <div>
              <h1>
                Últimas Vistas
              </h1>
              <h2 class="text-gray-500 text-sm">Estas son las últimas vistas actualizadas por nuestro equipo</h2>
            </div>
        </template>
      </PageCardList>  
    </FullScreenDiv>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import FullScreenDiv from "@/components/FullScreenDiv.vue";
import CardList from '@/components/CardList.vue';
import PageCardList from '@/components/PageCardList.vue';
import SecondaryButton from "@/components/SecondaryButton.vue"
import PrimaryButton from "@/components/ActionButton.vue"

export default {
  name: "HomeView",
  components: {
    //HelloWorld,
    FullScreenDiv,
    CardList,
    PageCardList,
    SecondaryButton,
    PrimaryButton
  },
};
</script>
