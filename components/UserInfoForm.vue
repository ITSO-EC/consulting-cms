<script setup>
import ActionButton from "@/components/ActionButton.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
const ws_switch = ref("No");
const new_switch = ref("No");
const live_switch = ref("No");

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
        phone: "0958443811",
        ws_notifications: "Si",
        change_notifications: "Si",
        live_notifications: "No",
      };
    },
  },
});

onMounted(() => {
  ws_switch.value = props.user?.ws_notifications;
  new_switch.value = props.user?.change_notifications;
  live_switch.value = props.user?.live_notifications;
});
</script>
<template>
  <div class="flex flex-col md:mx-12 px-8">
    <h1 class="text-2xl font-bold w-full text-left my-4 sm:my-8 sm:mb-6">
      Información de contacto
    </h1>

    <form action="w-full">
      <BaseLabel for="user" class="text-left mt-2">Usuario:</BaseLabel>
      <BaseInput
        id="user"
        name="user"
        :aria-disabled="disabled"
        :disabled="disabled"
        :modelValue="disabled ? props.user.username : ''"
      ></BaseInput>

      <BaseLabel for="name" class="text-left mt-2">Nombre:</BaseLabel>
      <BaseInput
        id="name"
        name="name"
        :aria-disabled="disabled"
        :disabled="disabled"
        :modelValue="disabled ? props.user.name : ''"
      ></BaseInput>

      <BaseLabel for="email" class="text-left mt-2">Correo:</BaseLabel>
      <BaseInput
        id="email"
        name="email"
        :aria-disabled="disabled"
        :disabled="disabled"
        :modelValue="disabled ? props.user.email : ''"
      ></BaseInput>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
        <div class="flex flex-col">
          <BaseLabel for="city_id" class="text-left mt-2">Cédula:</BaseLabel>
          <BaseInput
            id="city_id"
            name="city_id"
            :aria-disabled="disabled"
            :disabled="disabled"
            :modelValue="disabled ? props.user.city_id : ''"
          ></BaseInput>
        </div>
        <div class="flex flex-col">
          <BaseLabel for="phone" class="text-left mt-2">No.Celular:</BaseLabel>
          <BaseInput
            id="phone"
            name="phone"
            :aria-disabled="disabled"
            :disabled="disabled"
            :modelValue="disabled ? props.user.phone : ''"
          ></BaseInput>
        </div>
      </div>

      <h1 class="text-2xl font-bold w-full text-left my-4 sm:my-8">
        Notificaciones
      </h1>
      <div class="flex items-center justify-between">
        <span class="w-full text-left my-1 text-xs md:text-base"
          >Notificarme cuando se realicen cambios en la plataforma</span
        >
        <div class="form-switch">
          <input
            :disabled="disabled"
            type="checkbox"
            id="toggle"
            class="sr-only"
            v-model="ws_switch"
            true-value="Si"
            false-value="No"
          />
          <label class="bg-slate-400 w-[45px]" for="toggle">
            <span class="bg-white shadow-sm" aria-hidden="true"></span>
            <span class="sr-only">Toggle</span>
          </label>
        </div>
        <div class="text-sm text-slate-400 italic ml-2">{{ ws_switch }}</div>
      </div>

      <div class="flex items-center justify-between">
        <span class="w-full text-left my-1 text-xs md:text-base"
          >Notificarme cuando se realicen cambios en la plataforma</span
        >
        <div class="form-switch">
          <input
            :disabled="disabled"
            type="checkbox"
            id="toggle2"
            class="sr-only"
            v-model="new_switch"
            true-value="Si"
            false-value="No"
          />
          <label class="bg-slate-400 w-[45px]" for="toggle2">
            <span class="bg-white shadow-sm" aria-hidden="true"></span>
            <span class="sr-only">Toggle</span>
          </label>
        </div>
        <div class="text-sm text-slate-400 italic ml-2">{{ new_switch }}</div>
      </div>

      <div class="flex items-center justify-between">
        <span class="w-full text-left my-1 text-xs md:text-base"
          >Notificarme cuando se realicen cambios en la plataforma</span
        >
        <div class="form-switch">
          <input
            :disabled="disabled"
            type="checkbox"
            id="toggle3"
            class="sr-only"
            v-model="live_switch"
            true-value="Si"
            false-value="No"
          />
          <label class="bg-slate-400 w-[45px]" for="toggle3">
            <span class="bg-white shadow-sm" aria-hidden="true"></span>
            <span class="sr-only">Toggle</span>
          </label>
        </div>
        <div class="text-sm text-slate-400 italic ml-2">{{ live_switch }}</div>
      </div>
    </form>

    <div
      class="
        flex
        items-center
        mt-16
        pt-4
        
        w-full
        justify-between
        sm:gap-4 sm:justify-end
        
      "
    >
      <SecondaryButton class="w-fit px-[1px] sm:px-2 text-sm sm:text-base">
        <router-link to="reset-password">Cambiar Clave</router-link>
      </SecondaryButton>

      <ActionButton
        class="w-fit px-1 sm:px-2 justify-self-end text-sm sm:text-base"
        @click="$emit('editting-prof')"
      >
        {{ disabled ? "Editar" : "Guardar" }}
      </ActionButton>
    </div>
  </div>
</template>