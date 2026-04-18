<script setup>
import { computed } from 'vue'
import NovelCard from '../components/NovelCard.vue'
import { novelsData } from '../data.js'
import { globalStore } from '../store.js'

const user = {
  username: "Daoist_Reader",
  joined: "January 2026",
  chaptersRead: 1337
}

// FIXED: We now map through the new object structure to get the IDs
const myLibraryNovels = computed(() => {
  return globalStore.library
    .map(savedItem => novelsData.find(n => n.id === savedItem.id))
    .reverse() 
})
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 mt-6 space-y-6 pb-10">
    
    <div class="bg-white p-6 rounded-md shadow-sm border border-gray-200 flex flex-col sm:flex-row items-center gap-6">
      
      <div class="h-24 w-24 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-4xl shadow-inner flex-shrink-0">
        👤
      </div>
      
      <div class="text-center sm:text-left flex-1">
        <h1 class="text-2xl font-bold text-gray-800">{{ user.username }}</h1>
        <p class="text-sm text-gray-500 mt-1">Joined {{ user.joined }}</p>
      </div>
      
      <div class="flex gap-4 mt-4 sm:mt-0 w-full sm:w-auto justify-center">
        <div class="bg-gray-50 border border-gray-200 p-4 rounded-md text-center min-w-[110px]">
          <div class="text-2xl font-bold text-purple-600">{{ user.totalLibrary }}</div>
          <div class="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">In Library</div>
        </div>
        <div class="bg-gray-50 border border-gray-200 p-4 rounded-md text-center min-w-[110px]">
          <div class="text-2xl font-bold text-green-500">{{ user.chaptersRead }}</div>
          <div class="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Ch. Read</div>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-md shadow-sm border border-gray-200">
      <div class="flex justify-between items-center mb-6 border-b pb-2">
        <h2 class="text-xl font-light text-gray-700">Recently Read</h2>
        <router-link to="/library" class="text-sm text-purple-600 hover:text-purple-800 hover:underline transition-colors font-medium">
          View Full Library →
        </router-link>
      </div>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <NovelCard 
          v-for="novel in recentlyRead" 
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