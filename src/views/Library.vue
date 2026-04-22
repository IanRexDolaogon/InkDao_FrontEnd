<script setup>
import { ref, computed } from 'vue'
import NovelCard from '../components/NovelCard.vue'
import { novelsData } from '../data.js'
import { globalStore } from '../store.js'

// Track which tab is currently selected
const activeTab = ref('All')

// Filter the library based on the active tab
const displayedNovels = computed(() => {
  let filteredLibrary = []

  if (activeTab.value === 'All') {
    filteredLibrary = globalStore.library
  } else if (activeTab.value === 'Reading') {
    filteredLibrary = globalStore.library.filter(n => n.status === 'reading')
  } else if (activeTab.value === 'Will Read') {
    filteredLibrary = globalStore.library.filter(n => n.status === 'will_read')
  } else if (activeTab.value === 'Completed') {
    filteredLibrary = globalStore.library.filter(n => n.status === 'completed')
  }

  // Turn those saved objects back into full novel data
  return filteredLibrary.map(savedItem => novelsData.find(n => n.id === savedItem.id)).reverse()
})
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 mt-6 space-y-6 pb-10 font-sans">
    
    <div class="bg-white p-6 rounded-md shadow-sm border border-gray-200">
      <h1 class="text-3xl font-bold text-gray-800">My Library</h1>
      <p class="text-gray-500 mt-2">Manage your reading lists and track your progress.</p>
    </div>

    <div class="flex gap-6 border-b border-gray-200 text-sm font-medium text-gray-500">
      <button @click="activeTab = 'All'" :class="activeTab === 'All' ? 'text-purple-600 border-b-2 border-purple-600 pb-2' : 'hover:text-gray-800 pb-2'">All ({{ globalStore.library.length }})</button>
      <button @click="activeTab = 'Reading'" :class="activeTab === 'Reading' ? 'text-purple-600 border-b-2 border-purple-600 pb-2' : 'hover:text-gray-800 pb-2'">Reading</button>
      <button @click="activeTab = 'Will Read'" :class="activeTab === 'Will Read' ? 'text-purple-600 border-b-2 border-purple-600 pb-2' : 'hover:text-gray-800 pb-2'">Will Read</button>
      <button @click="activeTab = 'Completed'" :class="activeTab === 'Completed' ? 'text-purple-600 border-b-2 border-purple-600 pb-2' : 'hover:text-gray-800 pb-2'">Completed</button>
    </div>

    <div v-if="displayedNovels.length === 0" class="text-center py-20 bg-white rounded-md border border-gray-200 shadow-sm">
      <span class="text-4xl block mb-3">📭</span>
      <h3 class="text-lg font-bold text-gray-700">No novels found here</h3>
      <p class="text-gray-500 mt-1">You haven't added any books to this list yet.</p>
      <router-link to="/" class="text-purple-600 hover:underline mt-4 inline-block font-medium">← Browse New Novels</router-link>
    </div>

    <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      
      <div v-for="novel in displayedNovels" :key="novel.id" class="flex flex-col h-full relative group">
        
        <div class="flex-grow mb-2">
          <NovelCard 
            :id="novel.id" 
            :title="novel.title" 
            :genre="novel.genre" 
            :chapters="novel.chapters" 
            :timeAdded="novel.timeAdded" 
          />
        </div>

        <select 
          @change="globalStore.updateStatus(novel.id, $event.target.value)" 
          :value="globalStore.getStatus(novel.id)"
          class="w-full bg-gray-50 border border-gray-300 text-gray-700 text-xs font-bold rounded px-2 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500 cursor-pointer shadow-sm"
        >
          <option value="will_read">WILL READ</option>
          <option value="reading">READING</option>
          <option value="completed">COMPLETED</option>
        </select>
        
        <button 
          @click="globalStore.toggleLibrary(novel.id)" 
          class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-600"
          title="Remove from Library"
        >
          ✕
        </button>

      </div>
    </div>

  </main>
</template>