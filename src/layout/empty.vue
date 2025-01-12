<script setup>
import { RouterView } from "vue-router";
import Navbar from '../components/Navbar/navbar.vue';
import sponsorName from "../components/Header/sponsorName.vue";
</script>
<template>
  <div class="wrapper">
    <Navbar />
    <sponsorName />
    <main>
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
  </main>
  </div>
</template>

<style scoped>

</style>