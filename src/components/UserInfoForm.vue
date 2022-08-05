<script setup>
import { defineProps } from "vue";

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
      };
    },
  },
});
</script>
<template>
  <div class="flex flex-col mx-12 bg-cyan-50 p-8 border border-blue-300">
    <label for="user" class="text-left">Usuario:</label>
    <BaseInput
      id="user"
      name="user"
      :aria-disabled="disabled"
      :disabled="disabled"
      :modelValue="disabled ? user.username : ''"
    ></BaseInput>

    <label for="name" class="text-left">Nombre:</label>
    <BaseInput
      id="name"
      name="name"
      :aria-disabled="disabled"
      :disabled="disabled"
      :modelValue="disabled ? user.name : ''"
    ></BaseInput>

    <label for="email" class="text-left">Correo:</label>
    <BaseInput
      id="email"
      name="email"
      :aria-disabled="disabled"
      :disabled="disabled"
      :modelValue="disabled ? user.email : ''"
    ></BaseInput>

    <label for="password" class="text-left" v-if="!disabled">Clave:</label>
    <BaseInput
      id="password"
      name="password"
      :type="'password'"
      v-if="!disabled"
    ></BaseInput>
    <label for="confirm" class="text-left" v-if="!disabled"
      >Confirmar Clave:</label
    >
    <BaseInput
      id="confirm"
      name="confirm"
      :type="'password'"
      v-if="!disabled"
    ></BaseInput>
    <div class="grid grid-cols-2 gap-8">
      <div class="flex flex-col">
        <label for="city_id" class="text-left">Cédula:</label>
        <BaseInput
          id="city_id"
          name="city_id"
          :aria-disabled="disabled"
          :disabled="disabled"
          :modelValue="disabled ? user.city_id : ''"
        ></BaseInput>
      </div>
      <div class="flex flex-col">
        <label for="phone" class="text-left">Teléfono:</label>
        <BaseInput
          id="phone"
          name="phone"
          :aria-disabled="disabled"
          :disabled="disabled"
          :modelValue="disabled ? user.phone : ''"
        ></BaseInput>
      </div>
    </div>

    <BaseButton class="w-fit mt-8 border border-gray-400 bg-gray-200 px-4 py-1">
      Editar Perfil
    </BaseButton>
  </div>
</template>