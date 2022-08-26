<script setup>
import AppLogo from "@/components/AppLogo.vue"
import ActionButton from "@/components/ActionButton.vue"
</script>
<template>
  <main class="bg-white">

    <div class="relative flex">

      <!-- Content -->
      <div class="w-full md:w-1/2">
        <div class="min-h-screen h-full flex flex-col after:flex-1">

          <div class="flex-1">
            <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
              <!-- Logo -->
              <AppLogo />
            </div>
          </div>          

          <div class="max-w-md mx-auto px-4 py-8">
            <h1 class="text-3xl w-full text-left text-slate-800 font-bold mb-6">Recupere su contraseña </h1>
            <!-- Form -->
            <form>
              <div class="space-y-4">
                
                <div>
                  <BaseLabel class="text-left w-full" for="email">Correo <span class="text-rose-500">*</span></BaseLabel>
                  <BaseInput id="email"  type="email" />
                </div>
               
              </div>
              <div class="flex w-full items-center justify-end mt-6">
               
                <router-link class="ml-3 whitespace-nowrap" to="/">
                <ActionButton>
                  Enviar Link
                </ActionButton>
                
                </router-link>
              </div>
            </form>
          </div>

        </div>
      </div>

      <!-- Image -->
      <div class="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2 " aria-hidden="true">
         <svg xmlns="http://www.w3.org/2000/svg" class="z-10 brightness-100 absolute top-1/3 left-0 -translate-x-1/2 2xl:ml-2 ml-8 hidden lg:block" version="1.0" width="103.000000pt" height="102.000000pt" viewBox="0 0 103.000000 102.000000" preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,102.000000) scale(0.100000,-0.100000)" fill="#0085FF" stroke="none">
          <path d="M522 904 l76 -77 61 54 c44 39 57 55 47 61 -32 18 -135 38 -196 38 l-65 0 77 -76z"/>
          <path d="M696 854 l-57 -66 47 -47 c160 -156 236 -400 179 -566 -14 -39 63 76 85 127 86 200 17 464 -153 585 l-45 33 -56 -66z"/>
          <path d="M142 765 c-60 -91 -76 -147 -76 -270 0 -90 4 -120 23 -167 67 -171 206 -288 371 -312 37 -6 41 -5 25 5 -38 22 -107 94 -127 134 -30 56 -36 173 -13 250 19 67 83 199 127 263 17 24 28 45 26 47 -8 7 -169 85 -176 85 -5 0 -38 -46 -73 -102 l-64 -103 -5 110 -5 110 -33 -50z"/>
          <path d="M502 562 c-62 -130 -85 -222 -80 -317 6 -119 58 -165 186 -165 84 0 126 23 160 90 20 39 23 56 19 130 -5 101 -31 177 -88 252 -40 54 -113 118 -134 118 -6 0 -35 -49 -63 -108z m156 -252 c50 -47 5 -139 -61 -126 -66 13 -90 87 -41 125 34 27 74 27 102 1z m-112 -125 c20 -14 47 -25 60 -25 12 0 36 11 52 25 20 17 42 25 67 25 33 0 36 -2 29 -22 -19 -60 -78 -98 -155 -98 -71 0 -137 42 -154 98 -6 20 -3 22 29 22 21 0 50 -10 72 -25z"/>
          </g>
        </svg>
        <img class="object-cover object-center w-full h-full z-0 brightness-75" src="../assets/images/auth-image.jpg" width="760" height="1024" alt="Authentication" />
        <!-- <img class="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block" src="../assets/images/auth-decoration.png" width="218" height="224" alt="Authentication decoration" /> -->
      </div>

    </div>

  </main>
</template>

<script>

export default {
  name: 'SignUp',
}
</script>