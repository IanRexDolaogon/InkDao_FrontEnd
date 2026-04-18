<script setup>
import NovelCard from '../components/NovelCard.vue'
import { novelsData } from '../data.js' // Imports all 105 novels!
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 mt-6 space-y-6">
    
    <div class="bg-white p-6 rounded-md shadow-sm border border-gray-200">
      <h1 class="text-3xl font-bold text-gray-800">All Novels</h1>
      <p class="text-gray-500 mt-2">Browsing {{ novelsData.length }} titles in the Inkdao database.</p>
    </div>

    <div class="bg-white p-6 rounded-md shadow-sm border border-gray-200">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        <NovelCard 
          v-for="novel in novelsData" 
          :key="novel.id" 
          :id="novel.id" 
          :title="novel.title" 
          :genre="novel.genre" 
          :chapters="novel.chapters" 
          :timeAdded="novel.timeAdded" 
        />
      </div>
    </div>

  </main>
</template>