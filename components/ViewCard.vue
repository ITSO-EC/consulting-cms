<script setup>
import getImage from '~~/composables/useResources';
const props= defineProps({
  pageInfo: {
    type:Object,
    default: null
  }
})

const loadingImg = ref(true);
const error = ref(false);
const router = useRouter();
const { loading } = useViews();
const onLoad = () => {
  loadingImg.value = false;
}
const onError = () => {
  loadingImg.value = false;
  error.value = true;
};
const isCardLoaded = () => {
  return !loadingImg.value && props.pageInfo != null && !loading.value 
}

</script>
<template>
  <div 
    class="relative max-h-[100%] max-w-[100%] h-full w-[85vw] mx-0 sm:w-96 h-80 
    md:w-80 md:h-72
    lg:w-full lg:h-72
    border border-gray-100 hover:scale-105 duration-300 rounded-sm overflow-hidden shadow-2xl"
    :class="`${isCardLoaded() ? '':'animate-pulse'}`"
  >
    <nuxt-link :class="`absolute block w-full h-full text-secondaryColor text-lg text-left ${isCardLoaded()? 'w-full':'w-full mt-1 bg-slate-700 pointer-events-none'}`"
       :to="{ name: 'view-pageid', params: { pageid: pageInfo?.id } }"
       
     >
    <div class="absolute w-full h-full rounded-t-sm brightness-50">
      <img
        v-if="getImage(pageInfo?.image_url)"
        :src="getImage(pageInfo?.image_url)"
        class="
          h-full 
          w-full
          object-cover
        "
        :class="`${loadingImg || pageInfo == null ? 'hidden':''}`"
        @load="onLoad()"
        @error="onError()"
        alt="Card Image"
      />
      <div 
      v-else
      :class="`${loadingImg || pageInfo==null || error? '':'hidden'}`" class="block w-full h-full object-cover bg-slate-300">
      </div>
    </div>
    <div class="absolute bottom-0 grid grid-cols-1 h-1/3 p-4 w-full">
      <span class="w-full text-left text-2xl font-semibold truncate" :class="`text-blankColor ${isCardLoaded()? '':'bg-slate-700'}` ">
        {{isCardLoaded()? pageInfo?.name: ''}}
      </span>
      
       {{isCardLoaded() ? 'Ver más ►':''}}
      
    </div>
    </nuxt-link>
  </div>
</template>