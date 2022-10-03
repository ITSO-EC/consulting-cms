<script setup>
import getImage from "~~/composables/useResources"
import sriLogo from "~~/assets/logos/sriLogo.png"
import supercias from "~~/assets/logos/supercias.png"
import iess from "~~/assets/logos/iess.png"
import ministeriotrab from "~~/assets/logos/ministeriotrab.png"

const {retriveCategoryById} = useCategories();

const config = useRuntimeConfig();
const category = ref('...')
const props = defineProps ({
    summarized: {
      type: Boolean,
      default: false,
    },
    numid: {
      type: Number,
      default: 0
    },
    post: {
      type:Object,
      default: {}
    }
  }
);

 retriveCategoryById(props.post.category)
 .then((res)=>{
  category.value = res
 })

const download = (url) => {
  const a = document.createElement('a')
  a.href = url
  
  document.body.appendChild(a)

  a.download = url.split('/').pop()
  a.click()
  document.body.removeChild(a)
}

const convertDate = (date) => {
  const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic", "Error"
  ];

  date = new Date(date)
  let dd = date.getDate(); 
  let mm = date.getMonth();
  let yyyy = date.getFullYear(); 
  if(dd<10){dd='0'+dd} 
  return date = dd+'-'+monthNames[mm]+'-'+yyyy
}

const getLogo = (url) =>  {
  switch(url) {
    case 'www.sri.gob.ec':
      return sriLogo;
    case 'www.supercias.gob.ec':
      return supercias;
    case 'www.trabajo.gob.ec':
      return ministeriotrab;
    case 'www.iess.gob.ec':
      return iess;
     
  }
}

</script>

<template>
 <tr v-if="!summarized" 
 :class="category =='...'? 'hidden':''"
 class="grid grid-cols-8 lg:grid-cols-12 text-left h-12 py-1 px-4">  
 
  <td class="col-span-1  text-left font-semibold">
           
           <nuxt-link 
          
           :to="`/view/${category?.page}/category/${category?.id}/post/${post.id}`" 
           
             class="inline-block w-full pt-3">{{post.ro}} </nuxt-link>
         </td>

         <td  class="hidden sm:table-cell col-span-2 text-center font-semibold">
           
            <nuxt-link 
           
            :to="`/view/${category?.page}/category/${category?.id}/post/${post.id}`" 
            class="inline-block w-full pt-3">
           
            {{convertDate(post.createdAt)}}</nuxt-link>
          </td>

         <td  class="hidden lg:table-cell col-span-2 text-center font-semibold ">
         
           <nuxt-link 
          
           :to="`/view/${category?.page}/category/${category?.id}/post/${post.id}`" 
           class="inline-block w-full pt-3">
           {{post.type_reform}}</nuxt-link>
         </td>
        
         <td  :class="summarized? 'hidden':'col-span-6 sm:col-span-4'" class="mx-2 sm:px-0 text-center font-semibold overflow-hidden">
           <nuxt-link 
          
           :to="`/view/${category?.page}/category/${category?.id}/post/${post.id}`"
           class="inline-block w-full pt-3"
             >{{post.title}}</nuxt-link>
         </td>
         
         <td  :class="summarized? 'col-span-1 sm:col-span-4 flex justify-center posts-center lg:col-span-2':'hidden lg:flex lg:justify-center lg:posts-center col-span-2'" class="text-center font-semibold">
           <a :href="`https://${post.reference}`" target="_blank" rel="noopener noreferrer">
             
             <img v-if="post.reference == 'www.sri.gob.ec'" :src="sriLogo" class="h-8" alt="Logo">
             <img v-if="post.reference == 'www.supercias.gob.ec'" :src="supercias" class="h-8" alt="Logo">
             <img v-if="post.reference == 'www.trabajo.gob.ec'" :src="ministeriotrab" class="h-8" alt="Logo">
             <img v-if="post.reference == 'www.iess.gob.ec'" :src="iess" class="h-8" alt="Logo">
           </a>
         </td>

         <td  class="col-span-1 flex justify-center posts-center font-semibold">
      
             <BaseIcon v-if="post.file_url"
             @click="download(getImage(post.file_url))"
             :size="'h-8'"
             class="cursor-pointer"
             :name="'file'"
           >
           </BaseIcon>
         

           <BaseIcon v-else :name="'close'"></BaseIcon>
           
         </td>
 </tr>
 <tr v-else class="grid grid-cols-3 sm:grid-cols-8 text-left h-12 py-1 px-4">
 
    <td class="col-span-1  text-left font-semibold">
           
           <nuxt-link 
          
           :to="`/view/${$route.params.pageid}/category/${$route.params.categoryid}/post/${post.id}`" 
           
             class="inline-block w-full pt-3">{{post.ro}} </nuxt-link>
         </td>

         <td  class="hidden sm:table-cell col-span-2 text-center font-semibold">
           
            <nuxt-link 
           
            :to="`/view/${$route.params.pageid}/category/${$route.params.categoryid}/post/${post.id}`" 
            class="inline-block w-full pt-3">
           
            {{convertDate(post.createdAt)}}</nuxt-link>
          </td>

         <td  class="hidden lg:table-cell col-span-2 text-center font-semibold ">
         
           <nuxt-link 
          
           :to="`/view/${$route.params.pageid}/category/${$route.params.categoryid}/post/${post.id}`" 
           class="inline-block w-full pt-3">
           {{post.type_reform}}</nuxt-link>
         </td>
        
         <td  :class="summarized? 'hidden':'col-span-6 sm:col-span-4'" class="mx-2 sm:px-0 text-center font-semibold overflow-hidden">
           <nuxt-link 
          
           :to="`/view/${$route.params.pageid}/category/${$route.params.categoryid}/post/${post.id}`"
           class="inline-block w-full pt-3"
             >{{post.title}}</nuxt-link
           >
         </td>
         
         <td  :class="summarized? 'col-span-1 sm:col-span-4 flex justify-center posts-center lg:col-span-2':'hidden lg:flex lg:justify-center lg:posts-center col-span-2'" class="text-center font-semibold">
           <a :href="`https://${post.reference}`" target="_blank" rel="noopener noreferrer">
            <img v-if="post.reference == 'www.sri.gob.ec'" :src="sriLogo" class="h-8" alt="Logo">
             <img v-if="post.reference == 'www.supercias.gob.ec'" :src="supercias" class="h-8" alt="Logo">
             <img v-if="post.reference == 'www.trabajo.gob.ec'" :src="ministeriotrab" class="h-8" alt="Logo">
             <img v-if="post.reference == 'www.iess.gob.ec'" :src="iess" class="h-8" alt="Logo">
           
            </a>
           <!-- Corregir para que venga de referencia -->
         </td>

         <td  class="col-span-1 flex justify-center posts-center font-semibold">
      
             <BaseIcon v-if="post.file_url"
             @click="download(getImage(post.file_url))"
             :size="'h-8'"
             class="cursor-pointer"
             :name="'file'"
           >
           </BaseIcon>
         

           <BaseIcon v-else :name="'close'"></BaseIcon>
           
         </td>
 </tr>
</template>