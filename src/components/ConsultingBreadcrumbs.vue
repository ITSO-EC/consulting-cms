<template>
     <div class="px-6 py-6">
          <div class="text-left">
          <!-- Start -->
            <ul class="inline-flex flex-wrap text-sm font-medium">
              <li
                class="
                  after:content-['/']
                  last:after:hidden
                  after:text-slate-400 after:px-2
                "
              >
                <router-link class="text-slate-500 hover:text-indigo-500 inline-flex h-4" to="/">
                    <BaseIcon class="p-0" :size="'h-5 w-5'" :name="'home'"/>
                 
                </router-link>
              </li>
              <li
                class="
                  after:content-['/']
                  last:after:hidden
                  after:text-slate-400 after:px-2
                "
              >
                <router-link class="inline-block text-slate-500 hover:text-indigo-500" to="/page"
                  >MLT</router-link
                >
              </li>
              <li
                class="
                  after:content-['/']
                  last:after:hidden
                  after:text-slate-400 after:px-2
                "
              >
                <router-link class="inline-block text-slate-500 hover:text-indigo-500" to="/page/category"
                  >Categoria 1</router-link
                >
              </li>
            </ul>
          <!-- End -->
          </div>
        </div>
</template>