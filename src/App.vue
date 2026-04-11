<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100 font-sans pb-10">
    <Navbar />
    <router-view />
  </div>
</template>