<script setup>
import ActionButton from "~~/components/ActionButton.vue"
import AppLogo from "~~/components/AppLogo.vue"
import login from "~~/composables/useLogin"
const email = ref("");
const password = ref("");


const postLoginForm = async function () {
  await login( email.value, password.value)
}

definePageMeta({
  layout: "guest",
  
});
</script>
<template>
  <div class="bg-white">

    <div class="relative flex">

      <!-- Content -->
      <div class="w-full md:w-1/2">
        <div class="min-h-screen h-full flex flex-col after:flex-1">

          <div class="flex-1">
            <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
              <!-- Logo -->
              <AppLogo class="brightness-50"/>
            </div>
          </div>          

          <div class="max-w-md mx-auto px-4 py-8">
            <h1 class="text-3xl text-slate-800 font-bold mb-6 w-full text-left">¡Bienvenido de vuelta!🌎</h1>
            <!-- Form -->
            <form @submit.prevent="postLoginForm">
              <div class="space-y-4">
                <div>
                  <BaseLabel class="text-left w-full" for="email">Email Address</BaseLabel>
                  <BaseInput id="email" type="email" v-model="email"/>
                </div>
                <div>
                  <BaseLabel class="text-left w-full" for="password">Password</BaseLabel>
                  <BaseInput id="password" type="password" v-model="password" autoComplete="on" />
                </div>
              </div>
              <div class="flex items-center justify-between mt-6">
                <div class="mr-1">
                  <nuxt-link class="text-sm underline hover:no-underline" to="/reset-password">¿Olvidó su contraseña?</nuxt-link>
                </div>
                <ActionButton type="submit">Ingresar</ActionButton>
             
              </div>
            </form>
            <!-- Footer -->
            <div class="pt-5 mt-6 border-t border-slate-200">
              <div class="text-sm w-full text-left">
                ¿Aún no está suscrito? <nuxt-link class="font-medium text-indigo-500 hover:text-indigo-600" to="/register">
                Suscribirse
                </nuxt-link>
              </div>

              <!-- Warning -->
              <div class="mt-5">
                <div class="bg-red-100 text-red-600 px-3 py-2 rounded flex items-center">
                  <BaseIcon class="inline-block px-4"   :name="'close'"/>
                  <span class="text-sm text-left">
                    La contraseña ingresada no coincide con nuestros registros.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Image -->
      <div class="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2 brightness-75" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-1/3 left-0 -translate-x-1/2 2xl:ml-2 ml-8 hidden lg:block" version="1.0" width="103.000000pt" height="102.000000pt" viewBox="0 0 103.000000 102.000000" preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,102.000000) scale(0.100000,-0.100000)" fill="#0085FF" stroke="none">
          <path d="M522 904 l76 -77 61 54 c44 39 57 55 47 61 -32 18 -135 38 -196 38 l-65 0 77 -76z"/>
          <path d="M696 854 l-57 -66 47 -47 c160 -156 236 -400 179 -566 -14 -39 63 76 85 127 86 200 17 464 -153 585 l-45 33 -56 -66z"/>
          <path d="M142 765 c-60 -91 -76 -147 -76 -270 0 -90 4 -120 23 -167 67 -171 206 -288 371 -312 37 -6 41 -5 25 5 -38 22 -107 94 -127 134 -30 56 -36 173 -13 250 19 67 83 199 127 263 17 24 28 45 26 47 -8 7 -169 85 -176 85 -5 0 -38 -46 -73 -102 l-64 -103 -5 110 -5 110 -33 -50z"/>
          <path d="M502 562 c-62 -130 -85 -222 -80 -317 6 -119 58 -165 186 -165 84 0 126 23 160 90 20 39 23 56 19 130 -5 101 -31 177 -88 252 -40 54 -113 118 -134 118 -6 0 -35 -49 -63 -108z m156 -252 c50 -47 5 -139 -61 -126 -66 13 -90 87 -41 125 34 27 74 27 102 1z m-112 -125 c20 -14 47 -25 60 -25 12 0 36 11 52 25 20 17 42 25 67 25 33 0 36 -2 29 -22 -19 -60 -78 -98 -155 -98 -71 0 -137 42 -154 98 -6 20 -3 22 29 22 21 0 50 -10 72 -25z"/>
          </g>
        </svg>
        <img class="object-cover object-center w-full h-full" src="~~/assets/images/auth-image.jpg" width="760" height="1024" alt="Authentication" />
        <!-- <img class="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block" src="../assets/images/auth-decoration.png" width="218" height="224" alt="Authentication decoration" /> -->
      </div>

    </div>

  </div>
</template>

