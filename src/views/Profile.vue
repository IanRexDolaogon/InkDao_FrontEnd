<script setup>
import { computed } from 'vue'
import NovelCard from '../components/NovelCard.vue'
import { novelsData } from '../data.js'
import { globalStore } from '../store.js'

const user = {
  username: "Daoist_Reader",
  joined: "January 2026",
  chaptersRead: 1337,
  totalLibrary: computed(() => globalStore.library.length)
}

// Logic to get the library list
const myLibraryNovels = computed(() => {
  return globalStore.library
    .map(savedItem => novelsData.find(n => n.id === savedItem.id))
    .reverse() 
})

// Slice the list to show only the 5 most recent for the dashboard
const recentlyRead = computed(() => myLibraryNovels.value.slice(0, 5))
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 mt-6 space-y-6 pb-10 font-sans">
    
    <div class="bg-white p-6 border-2 border-black flex flex-col sm:flex-row items-center gap-6">
      
     <div class="h-24 w-24 bg-white border-2 border-black flex items-center justify-center flex-shrink-0">
        <img src="../assets/profile_icon.svg" class="h-12 w-12 object-contain" />
      </div>
      
      <div class="text-center sm:text-left flex-1">
        <h1 class="text-2xl font-bold text-black uppercase tracking-tighter">{{ user.username }}</h1>
        <p class="text-sm text-gray-500 mt-1">Joined {{ user.joined }}</p>
      </div>
      
      <div class="flex gap-4 mt-4 sm:mt-0 w-full sm:w-auto justify-center">
        <div class="border-2 border-black p-4 text-center min-w-[110px]">
          <div class="text-2xl font-bold text-black">{{ user.totalLibrary }}</div>
          <div class="text-xs text-black font-bold uppercase tracking-wider mt-1">In Library</div>
        </div>
        <div class="border-2 border-black p-4 text-center min-w-[110px]">
          <div class="text-2xl font-bold text-black">{{ user.chaptersRead }}</div>
          <div class="text-xs text-black font-bold uppercase tracking-wider mt-1">Ch. Read</div>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 border-2 border-black">
      <div class="flex justify-between items-center mb-6 border-b-2 border-black pb-2">
        <h2 class="text-xl font-bold text-black uppercase tracking-tighter">Recently Read</h2>
        <router-link to="/library" class="text-sm text-black hover:underline font-bold uppercase tracking-wider">
          View Full Library →
        </router-link>
      </div>
      
      <div v-if="recentlyRead.length > 0" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
      <div v-else class="text-center py-10 text-gray-400 font-bold uppercase tracking-wider">
        No books in library
      </div>
    </div>

  </main>
</template>