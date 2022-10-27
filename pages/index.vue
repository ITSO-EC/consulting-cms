<script setup>
import MainHero from '~~/components/MainHero.vue'
import usePosts from '~~/composables/usePosts'
import ActionButton from "~~/components/ActionButton.vue"
import PageCardList from '~~/components/PageCardList.vue';

const {posts, error, loading, results, page,loadPosts} = usePosts();

const acc = useCookie('access_token')
const refr = useCookie('refresh_token')
onMounted(()=>{
    loadPosts();
})

definePageMeta({
  layout: "home",
});
</script>
<template>
    <div>
        
        <MainHero @readyhero="toggleLoader()"></MainHero>
         
        <!-- <div class="mt-6 h-auto  mx-auto pt-0 flex flex-col justify-center">
            <CardList class="py-12">
                <template #list-title>Últimas Publicaciones</template>
            </CardList>  
        </div>  -->
        <div>
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
        </div> 
       
        <div class="relative bg-white overflow-hidden min-h-[60vh] md:min-h-[50vh] h-auto pt-0 -py-8 flex flex-col justify-center">
            <img
                alt="Banner de Consulting"
                class="absolute w-[100vw] min-h-[60vh] md:min-h-[50vh] object-cover"
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
                <ActionButton class="w-fit px-8 mx-auto md:mx-0"> <nuxt-link to="/register">Suscribirse</nuxt-link> </ActionButton>
            </div>
        </div>
        
     

    </div>
</template>