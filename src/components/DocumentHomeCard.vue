<script setup>
import { getCurrentInstance } from "vue";
import {  ref } from "vue";

const loading = ref(true);
const error = ref(false);

const app = getCurrentInstance();
const primaryColor = app.appContext.config.globalProperties.primaryColor;
const onLoad = () => {
  loading.value = false;
};
const onError = () => {
  loading.value = false;
  error.value = true;
};

</script>
<script>
import axios from "axios";

const API = 'https://api-consulting-crm.herokuapp.com/v1/';
export default {
  props: ["post"],
  data() {
    return{
      category: {}
    }
  },
  methods: {
    getCategoryById(id) {
    axios
    .get(API + "categories/" + id)
    .then((res) => {
      this.category = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  }
  },
  watch:  {
    post(newPost){
      this.getCategoryById(newPost.category)
      }
  }
};
</script>
<template>
  <div
    class="
      w-auto
      mx-4
      sm:mx-0 sm:w-96
      h-80
      md:w-80 md:h-72
      lg:w-full lg:h-72
      2xl:h-96
      hover:scale-105
      duration-300
      rounded-sm
      overflow-hidden
      shadow-2xl
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
        :class="`${loading && !error ? 'hidden' : ''}`"
        @load="onLoad()"
        @error="onError()"
        alt="Card Image"
      />
      <div
        class="w-full h-full object-cover bg-slate-300"
        :class="`${loading || error? '' : 'hidden'}`"
      ></div>
    </div>
    <div
      class="grid grid-cols-2 h-1/3 p-4"
      :class="`${(post != null) & !loading ? '' : 'bg-gray-600'}`"
    >
      <span
        class="col-span-2 w-full text-left text-2xl font-semibold truncate"
        :class="`text-[${primaryColor}] ${
          !loading && post != null ? '' : 'bg-slate-700 w-3/5'
        }`"
        >{{ post != null && !loading ? post.title : "" }}</span
      >
      <span
        class="text-sm text-gray-600 h-full truncate text-left"
        :class="`${!loading && post != null ? '' : 'bg-slate-700 w-3/5 mt-1'}`"
        >{{ post != null && !loading ? post.content : "" }}</span
      >

      <router-link
        :class="`text-[${primaryColor}] text-lg text-right pr-4 ${
          !loading && post != null && category != null
            ? 'w-full'
            : 'w-1/3 bg-slate-700 justify-self-end mt-1 pointer-events-none'
        }`"
        :to="`/page/${category?.page}/category/${category?.id}/post/${post?.id}`"
        >{{ post != null && !loading ? "Ver más ►" : "" }}</router-link
      >
    </div>
  </div>
</template>