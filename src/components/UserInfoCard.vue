<script setup>
import { ref, computed, defineProps } from "vue";

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Object,
    default() {
      return {
        name: "Megan",
        username: "@straycat",
        password: "asdga;s313123nsand@#@!mkd231k321",
        email: "cat@gmail.com",
        city_id: "0915867430",
        phone: "2314758",
        image: "https://source.unsplash.com/100x100/?portrait",
      };
    },
  },
});

// a computed ref
const getStyle = computed(() => {
  return props.disabled ? "" : "hidden";
});

let selectedFile = ref(props.disabled ? props.user.image : null);
let fileInput = ref(null);

function onSelectedFile() {
  let file = fileInput.value.files;
  if (!selectedFile.value) {
    let reader = new FileReader();
    reader.onload = (e) => {
      selectedFile.value = e.target.result;
    };
    reader.readAsDataURL(file[0]);
  }
}

function pickFile() {
  fileInput.value.click();
}

const form = ref(null);

function deleteFile() {
  selectedFile.value = null;
  form.value.reset();
}
</script>

<template>
  <div
    class="
      p-8
      flex flex-col
      gap-4
      md:mx-12
      lg:w-full 
      justify-center
      items-center
      bg-cyan-50
      border
      border-blue-300
    "
  >
    <h1 :class="getStyle">{{user.name}}</h1>
    <h3 :class="getStyle" class="-mt-4 text-gray-400">{{user.username}}</h3>
    <div class="relative">
      <BaseIcon
        v-if="selectedFile != null"
        name="trash"
        rounded
        class="absolute bg-white right-0 cursor-pointer"
        @click="deleteFile"
      ></BaseIcon>
      <div
        :class="selectedFile ? '' : 'bg-gray-100 p-2'"
        class="rounded-full overflow-hidden w-[100px] h-[100px]"
      >
        <BaseIcon
          v-if="!selectedFile"
          name="user"
          size="h-full w-full"
          rounded
        ></BaseIcon>
        <img v-else :src="selectedFile" alt="Foto" class="object-cover" />
      </div>
    </div>

    <form class="hidden" ref="form" action="">
      <input ref="fileInput" type="file" @input="onSelectedFile" />
    </form>
    <BaseButton
      @click="pickFile"
      class="border border-gray-400 bg-gray-200 px-4 py-1"
      :class="selectedFile !=null ? 'hidden' : ''"
    >
      {{ disabled ? "Cambiar Foto" : "Subir Foto" }}
    </BaseButton>
    <div class="border border-blue-300 bg-blue-100 p-4">
      <span>Límite máximo de tamaño es</span
      ><span class="font-bold"> 1 MB</span>
    </div>
    <p>Membresía disponible hasta:</p>
    <p class="-mt-4">dd/mm/aa</p>
  </div>
</template>