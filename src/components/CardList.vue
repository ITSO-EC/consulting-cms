<template>
    
      <div class="flex flex-col justify-center items-center">
        
        <h1 class="uppercase mt-8 font-extrabold my-4 text-2xl">
            <slot name="list-title"></slot>
        </h1>
        <div
          class="
            w-5/6
            h-5/6
            mx-auto
            grid grid-cols-3
            place-content-center
            gap-8
            pb-8
          "
        >

          <div
            class="
              justify-self-end
              flex
              justify-center
              items-center
              overflow-hidden
            "
          >
            <router-link class="" to="/about">
              <img
                src="https://source.unsplash.com/400x400/?businesses"
                class="object-cover"
                alt=""
              />
            </router-link>
          </div>
          <div
            class="
              justify-self-center
              flex
              justify-center
              items-center
              overflow-hidden
            "
          >
            <router-link class="" to="/about">
              <img
                src="https://source.unsplash.com/400x400/?businesses"
                class="object-cover"
                alt=""
              />
            </router-link>
          </div>
          <div
            class="
              justify-self-start
              flex
              justify-center
              items-center
              overflow-hidden
            "
          >
            <router-link class="" to="/about">
              <img
                src="https://source.unsplash.com/400x400/?businesses"
                class="object-cover"
                alt=""
              />
            </router-link>
          </div>
        </div>
      </div>
</template>