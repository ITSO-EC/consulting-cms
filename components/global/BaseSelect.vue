<!-- ${this.disabled? 'bg-white':` -->
<template>
  <div>
    <select id="country" 
    :class="`rounded-t border-b border-b-primaryColor bg-secondaryColor focus:bg-blankColor bg-opacity-10`"
      
    class="shadow form-select text-sm ring-0 outline-none w-full">
        <slot />
    </select>
  </div>
</template>