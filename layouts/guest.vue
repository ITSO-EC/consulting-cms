<script setup>
    import TheFooter from "@/components/TheFooter";
</script>
<template>
    <div :key="$route.fullPath">
        <main class="relative min-h-screen -mb-10 pb-10  z-10 " >
            <slot />
        </main>
        <TheFooter class="relative bottom-0 z-50"></TheFooter>
    </div>
</template>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', Helvetica, sans-serif;
    }
    a {
        text-decoration: none;
    }
</style>