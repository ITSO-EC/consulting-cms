<script setup>
import AppLayout from '@/layouts/AppLayout';
import ConsultingLayout from '@/layouts/ConsultingLayout';
</script>
<template>
  <ConsultingLayout v-if="/^page.*/.test($route.name)">
    <template #body>
      <router-view/>
    </template>
  </ConsultingLayout>

  <AppLayout v-else>
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
