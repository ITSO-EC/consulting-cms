<template>
  <div>
    <FullScreenDiv first class="home pb-18 grid grid-rows-2">
      <img
        alt="Vue logo"
        class="w-full h-full object-cover"
        src="https://source.unsplash.com/1600x900/?landscapes"
      />
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <CardList>
        <template #list-title>Los ultimos posts</template>
      </CardList>
    </FullScreenDiv>

    <FullScreenDiv class="mt-6 bg-blue-50">
      <CardList>
        <template #list-title>Los ultimos organos emisores</template>
      </CardList>  
    </FullScreenDiv>
    <FullScreenDiv class=" ">
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
