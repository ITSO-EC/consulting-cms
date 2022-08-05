<script setup>
import FullScreenDiv from "@/components/FullScreenDiv.vue";
</script>
<template>
  <FullScreenDiv first class="grid grid-cols-12 pt-20">
    <div class="col-start-3 col-span-2">
      <div
        class="
          p-8
          flex flex-col
          gap-4
          w-full
          justify-center
          items-center
          bg-cyan-50
          border-blue-300
        "
      >
        <h1 class="">Nombre de persona</h1>
        <h3 class="-mt-4 text-gray-400">@usuario</h3>
        <div class="relative">
          <BaseIcon
            name="trash"
            rounded
            class="absolute bg-white right-0 cursor-pointer"
          ></BaseIcon>
          <div class="rounded-full overflow-hidden">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt="Foto de usuario"
            />
          </div>
        </div>
        <BaseButton class="border border-gray-400 bg-gray-200 px-4 py-1">
          Subir Foto
        </BaseButton>
        <div class="border border-blue-300 bg-blue-100 p-4">
          <span>Límite máximo de tamaño es</span
          ><span class="font-bold"> 1 MB</span>
        </div>
        <p>Membresía disponible hasta:</p>
        <p class="-mt-4">dd/mm/aa</p>
      </div>
    </div>

    <div class="col-start-5 col-span-6">
      <div class="flex flex-col mx-12 bg-cyan-50 p-8 border border-blue-300">
        <label for="name" class="text-left">Nombre:</label>
        <BaseInput id="name" name="name"></BaseInput>
        <label for="user" class="text-left">Usuario:</label>
        <BaseInput id="user" name="user"></BaseInput>
        <label for="password" class="text-left">Clave:</label>
        <BaseInput id="password" name="password" :type="'password'"></BaseInput>
        <label for="confirm" class="text-left">Confirmar Clave:</label>
        <BaseInput id="confirm" name="confirm" :type="'password'"></BaseInput>
        <label for="email" class="text-left">Correo:</label>
        <BaseInput id="email" name="email"></BaseInput>

          
        <BaseButton class="w-fit mt-8 border border-gray-400 bg-gray-200 px-4 py-1">
          Editar Perfil
        </BaseButton>
      </div>
    </div>
  </FullScreenDiv>
</template>
