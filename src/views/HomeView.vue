<template>
  <div>
    <FullScreenDiv first class="home bg-red-400 grid ">
      <img
        alt="Vue logo"
        class="w-full h-[100vh] object-cover"
        src="https://source.unsplash.com/1600x900/?landscapes"
      />
   
    </FullScreenDiv>
    
    <FullScreenDiv class="mt-6 h-auto my-auto pt-0 flex flex-col justify-center">
      <CardList>
        <template #list-title>Los ultimos posts</template>
      </CardList>  
    </FullScreenDiv>
    <FullScreenDiv class="bg-blue-50 h-auto pt-0 flex flex-col justify-center">
      <CardList>
        <template #list-title>Los ultimos organos emisores</template>
      </CardList>  
    </FullScreenDiv>
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

export default {
  name: "HomeView",
  components: {
    //HelloWorld,
    FullScreenDiv,
    CardList
  },
};
</script>
