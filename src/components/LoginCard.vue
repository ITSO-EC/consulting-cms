<template>
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
    <div class="rounded-full overflow-hidden">
      <img
        src="https://acorpconsulting.com/images/headers/logo_consulting.png"
        alt="Logo empresa"
      />
    </div>
    <div class="flex flex-col">
      <label for="username" class="text-left" v-if="!disabled">Usuario:</label>
      <BaseInput id="username" name="username"></BaseInput>
      <label for="password" class="text-left" v-if="!disabled">Clave:</label>
      <BaseInput id="password" name="password" :type="'password'"></BaseInput>

      <div class="flex h-6 my-2" v-if="!disabled">
        <span
          ><BaseInput :class="'w-4 mr-4'" :type="'checkbox'"></BaseInput
          >Recuérdame</span
        >
      </div>
    </div>
    <BaseButton class="w-fit self-center border border-gray-400 bg-gray-200 px-4 py-1">Logonear</BaseButton>
    <a class="">¿Olvidaste tu contraseña?</a>
    <span class="inline-block">¿No tienes cuenta? <a href="" class="inline-block">Regístrate</a></span>
  </div>
</template>