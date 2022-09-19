<script setup>
import { defineProps } from "vue";
import SecondaryButton from "@/components/SecondaryButton.vue"
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
      grid grid-cols-6
      lg:w-full 
      py-4
      place-content-center
    "
  >
    <div class="col-span-6 2xl:col-span-2 pl-8 sm:pl-0 md:pl-12 lg:pl-0  flex flex-col items-start  justify-center">
      <div class="relative">
        <BaseButton @click="deleteFile" v-if="selectedFile != null && !disabled" class="absolute right-0 px-0 border-none">
          <BaseIcon
            
            name="trash"
            rounded
            :class="`bg-blankColor p-1`"
            
          ></BaseIcon>
        </BaseButton>
        
        <div
          :class="selectedFile ? '' : `bg-secondaryColor bg-opacity-10 p-2`"
          class="rounded-full overflow-hidden w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]"
        >
          <BaseIcon
            v-if="!selectedFile"
            name="user"
            :class="`text-$primaryColor`"
            size="h-full w-full"
            rounded
          ></BaseIcon>
          <img v-else :src="selectedFile" alt="Foto" class="object-cover" />
        </div>
      </div>

      <form class="hidden" ref="form" action="">
        <input ref="fileInput" type="file" @input="onSelectedFile" />
      </form>
      <SecondaryButton
        @click="pickFile"
        :class="selectedFile !=null ? 'hidden' : 'my-4'"
      >
        {{ disabled ? "Cambiar Foto" : "Subir Foto" }}
      </SecondaryButton>
    </div>

    <div class="col-span-6 2xl:col-span-4 px-8 sm:px-0 md:px-12 lg:px-0 flex flex-col justify-center items-center">
      <div v-if="!disabled" :class="`border border-primaryColor bg-secondaryColor bg-opacity-10 text-primary px-3 py-2 mt-2 rounded self-start 2xl:self-end flex items-center`">
        
          <BaseIcon class="inline-block px-4"   :name="'info'"/>
            <span class="text-sm text-left">
              Límite máximo de tamaño:<span class="font-bold"> 1 MB</span>
            </span>
       
      </div>

      <BaseLabel class="mt-4 w-full text-left 2xl:text-right text-md sm:text-sm">Membresía disponible hasta:</BaseLabel>
      <BaseLabel class="w-full text-left 2xl:text-right text-md sm:text-sm">dd/mm/aa</BaseLabel>

    </div>
  </div>
</template>