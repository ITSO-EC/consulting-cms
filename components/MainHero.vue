<script setup>
    import SecondaryButton from '~~/components/SecondaryButton.vue';
   
</script>

<template>
    <section :class="$style.heroContainer">
      <img
        alt="Imagen del hero"
        :class="$style.heroImage"
        src="../assets/images/BusinessPicFinal.png"
       
      />
      
      <div :class="$style.content">
        
        <h1 :class="$style.bigtitle">28 AÑOS</h1>
        <h1 :class="$style.title">DE EXPERIENCIA</h1>
        <h1 :class="$style.subtitle">Al alcance de todos ¡Siempre!</h1>
        <SecondaryButton>
          <nuxt-link to="/search" :class="$style.inlineButton">Buscar</nuxt-link>
        </SecondaryButton>
      </div>
    </section>
</template>

<style module>
    .heroImage{
        background-color: aqua;
        backdrop-filter: contrast(.5);
        filter: brightness(.75);
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute; 
    }
    .content{
        position: relative;
    }

    .title {
        font-weight: 700;
        font-size: 2.25rem; /* 36px */
        line-height: 2.5rem; /* 40px */
        margin-bottom: 1rem;
        color: antiquewhite;
    }
    .bigtitle {
        font-weight: 700;
        font-size: 3rem; /* 36px */
        line-height: 3.25rem; /* 40px */
        margin-bottom: 1rem;
        color: antiquewhite;
    }

    .subtitle {

        font-weight: 500;
        font-size: 2.25rem; /* 36px */
        line-height: 2.5rem; /* 40px */
        margin-bottom: 2rem;
        
        color: antiquewhite;
     }

    .heroContainer {
        overflow: hidden;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        text-align: center;
        row-gap: 1rem;
    }
    .inlineButton { 
        display: inline-block;
        padding: 0.25rem 3rem;
        font-size: 1rem; /* 36px */
        line-height: 1.25rem; /* 40px */
        color: inherit;
        text-decoration: inherit;
    }
</style>