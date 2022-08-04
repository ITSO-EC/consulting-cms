<template>
  <FullScreenDiv class="home pt-0 -mb-0 pb-18 grid grid-rows-2">
    <img
      alt="Vue logo"
      class="w-full h-full object-cover"
      src="https://source.unsplash.com/1600x900/?landscapes"
    />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <div class="w-full h-[52vh] flex items-center bg-red-100 ">
      <div class="w-5/6 h-5/6 my-auto mx-auto grid grid-cols-3 place-content-center gap-8 py-8 ">
      
        
        <div class="justify-self-end flex justify-center items-center overflow-hidden">
          <router-link class="" to="/about">
            <img
              src="https://source.unsplash.com/400x400/?businesses"
              class="object-cover"
              alt=""
            />
          </router-link>
        </div>
        <div class=" justify-self-center flex justify-center items-center overflow-hidden">
          <router-link class="" to="/about">
            <img
              src="https://source.unsplash.com/400x400/?businesses"
              class="object-cover"
              alt=""
            />
          </router-link>
        </div>
        <div class=" justify-self-start flex justify-center items-center overflow-hidden">
          <router-link class="" to="/about">
            <img
              src="https://source.unsplash.com/400x400/?businesses"
              class="object-cover"
              alt=""
            />
          </router-link>
        </div>
      </div>
    </div>
  </FullScreenDiv>

  <FullScreenDiv class="mt-0 bg-red-400"> 
    Hola 1
  </FullScreenDiv>
  <FullScreenDiv class=" bg-blue-400"> 
    Hola 2
  </FullScreenDiv>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import FullScreenDiv from "@/components/FullScreenDiv.vue";

export default {
  name: "HomeView",
  components: {
    //HelloWorld,
    FullScreenDiv,
  },
};
</script>
