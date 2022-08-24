<template>
    
      <div class="flex flex-col items-center py-8">
        
        <h1 class="w-full md:w-5/6 text-left md:mt-8 font-bold my-4 text-2xl">
            <slot name="list-title"></slot>
        </h1>
        <div
          class="
            w-auto
            md:w-5/6
            h-auto
            mx-auto
            grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3
            place-content-center
            gap-8
            pb-8
          "
        >

          <div
            class="
              justify-self-start
              flex
              justify-center
              items-center
              
              overflow-hidden
            "
          >
            <router-link class="" to="/page">
              <img
                src="https://source.unsplash.com/400x400/?businesses"
                class="object-cover w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 xl:w-72 xl:h-72"
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
            <router-link class="" to="/page">
              <img
                src="https://source.unsplash.com/400x400/?businesses"
                class="object-cover w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 xl:w-72 xl:h-72"
                alt=""
              />
            </router-link>
          </div>
          <div
            class="
              justify-self-end
              flex
              justify-center
              items-center
              overflow-hidden
            "
          >
            <router-link class="" to="/page">
              <img
                src="https://source.unsplash.com/400x400/?businesses"
                class="object-cover w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 xl:w-72 xl:h-72"
                alt=""
              />
            </router-link>
          </div>
        </div>
      </div>
</template>