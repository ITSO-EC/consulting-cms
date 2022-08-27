<template>
  <div>
    <select id="country" 
    :class="`rounded-t border-b border-b-[${primaryColor}] ${disabled? 'bg-white':`bg-[${secondaryColor}] focus:bg-[${blankColor}] bg-opacity-10`}  `"
      
    class="form-select text-sm ring-0 outline-none w-full">
        <slot />
    </select>
  </div>
</template>