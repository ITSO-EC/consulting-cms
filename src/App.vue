<script setup>
import AppLayout from '@/layouts/AppLayout';
import { getCurrentInstance } from "vue";

const app = getCurrentInstance();
//const primaryColor = app.appContext.config.globalProperties.primaryColor;
const blankColor = app.appContext.config.globalProperties.blankColor;

</script>
<template>
  <AppLayout>
    
    <template #links>
      
      <router-link to="/" :class="`block text-[${blankColor}] active:border-b focused:border-b h-12 flex items-center mx-2`">Inicio </router-link> 
      <!-- <router-link to="/login">Login</router-link> |
      <router-link to="/register">Registro</router-link> |
      <router-link to="/search">Busqueda</router-link> | -->
      <router-link to="/page" :class="`block text-[${blankColor}] active:border-b focused:border-b h-12 flex items-center mx-2`"> Contenido </router-link>
      <!-- <router-link to="/profile">Profile</router-link> |
      <router-link to="/orders">Ordenes</router-link> | -->
    </template>
    <template #body>
      
      <router-view/>
      
    </template>

    
  </AppLayout>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  border-bottom: solid #48C4FA 3px
}
</style>
