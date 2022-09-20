<script setup>
    import TheNavBar from "@/components/TheNavBar";
    import TheFooter from "@/components/TheFooter";
    const {views, initializeViews} = useViews();
    
    onMounted(()=>{

        initializeViews();
    })
    
</script>
<template>
    <div :key="$route.fullPath">
        <header class="sticky top-0 z-50">
            <TheNavBar/>
        </header>
        <main class="relative min-h-screen -mb-10 pb-10  z-10 -mt-[44px] sm:-mt-[56px] lg:-mt-[60-px] pt-[44px] sm:pt-[56px] lg:pt-[60-px]" >
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