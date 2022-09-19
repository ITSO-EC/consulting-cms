<script setup>
const loading = ref(true);
const error = ref(false);

const onLoad = () => {
  loading.value = false;
};
const onError = () => {
  loading.value = false;
  error.value = true;
};

</script>
<script>
export default {
  props: {
    post:{
      type: Object,
      default: {}
    }
  },

};
</script>
<template>
  <div
    class="
     max-h-[100%] max-w-[100%] h-full w-[85vw] mx-0 sm:w-96 h-80 
    md:w-80 md:h-72
    lg:w-full lg:h-72
    border border-gray-100 hover:scale-105 duration-300 rounded-sm overflow-hidden shadow-2xl
    "
    :class="`${
      (post != null) & !loading
        ? 'border border-gray-100 '
        : 'border-none animate-pulse'
    }`"
  >
    <div class="w-full h-2/3 rounded-t-sm overflow-hidden brightness-50">
      <img
        :src="'https://source.unsplash.com/400x400/?businesses'"
        class="w-full object-cover"
        :class="`${loading || post==null ||error ? 'hidden' : ''}`"
        @load="onLoad()"
        @error="onError()"
        alt="Card Image"
      />
      <div
        class="w-full h-full object-cover bg-slate-300"
        :class="`${loading || post==null ||error? '' : 'hidden'}`"
      ></div>
    </div>
    <div
      class="grid grid-cols-2 h-1/3 p-4"
      :class="`${(post != null) & !loading ? '' : 'bg-gray-600'}`"
    >
      <span
        class="col-span-2 w-full text-left text-2xl font-semibold truncate"
        :class="`text-primaryColor ${
          !loading && post != null ? '' : 'bg-slate-700 w-3/5'
        }`"
        >{{ post != null && !loading ? post.title : "" }}</span
      >
      <span
        class="text-sm text-gray-600 h-full truncate text-left"
        :class="`${!loading && post != null ? '' : 'bg-slate-700 w-3/5 mt-1'}`"
        >{{ post != null && !loading ? post.content : "" }}</span
      >

      <nuxt-link
        :class="`text-primaryColor text-lg text-right pr-4 ${
          !loading && post != null
            ? 'w-full'
            : 'w-1/3 bg-slate-700 justify-self-end mt-1 pointer-events-none'
        }`"
        :to="`/`">
         <!-- :to="`/page/${category?.page}/category/${category?.id}/post/${post?.id}`" -->
        {{ post != null && !loading ? "Ver más ►" : "" }}</nuxt-link
      >
    </div>
  </div>
</template>