<script setup>
import AppLayout from '@/layouts/AppLayout';
import ConsultingLayout from '@/layouts/ConsultingLayout';
</script>
<template>
  <ConsultingLayout v-if="/^page.*/.test($route.name)">
    <template #body>
      <router-view :key="$route.fullPath"/>
    </template>
  </ConsultingLayout>
    <div v-else-if="/^auth.*/.test($route.name)">
      <router-view :key="$route.fullPath"/>
    </div>
      
  <AppLayout v-else>
    <template #body>
      <router-view :key="$route.fullPath"/>
    </template>
  </AppLayout>
 
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
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

/* nav a.router-link-exact-active {
  border-bottom: solid #48C4FA 3px
} */
</style>
