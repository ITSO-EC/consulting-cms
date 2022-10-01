<script setup>
import getImage from '~~/composables/useResources';

const {selectedView} = useViews();

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
</script>
<template>
  <div class="h-[50vh] relative flex justify-center -mt-16" >
    <div :class="`bg-secondaryColor bg-opacity-20`" 
    class="absolute bottom-0 mx-auto backdrop-blur-2xl rounded-t-lg w-fit flex flex-col md:gap-4 px-2 md:px-8 py-4 text-left z-10">
      <div>
        <h1 v-if="selectedView?.name" :class="`text-blankColor`" class="text-center brightness-150 text-2xl md:text-4xl md:mb-1">
          {{selectedView.name}}
        </h1>
        <h2
        :class="`text-blue-500 font-semibold`" 
        class=" text-center text-md md:text-xl pt-3">
      
          ¡Actualizado a diario!
        </h2>
      </div>

      <div class="justify-self-start text-center">
        <p class="text-black" v-if="selectedView?.name">
        <span class="font-bold">Últ. act.:</span>
        {{convertDate(selectedView.updatedAt)}}</p>
      </div>
      
    </div>
    <div class="absolute w-full overflow-hidden z-0">
      <img
        :src="getImage(selectedView.image_url)"
        class="object-cover w-full h-[50vh] brightness-75"
        alt=""
        @load="$emit('readyheader')"
      />
    </div>
  </div>
</template>
