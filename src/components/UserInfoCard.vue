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
</template>