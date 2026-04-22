<script setup>
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'

const route = useRoute()
</script>

<template>
  <div class="min-h-screen bg-gray-100 font-sans pb-10">
    
    <Navbar v-if="route.path !== '/login'" />
    
    <router-view />
  </div>
</template>