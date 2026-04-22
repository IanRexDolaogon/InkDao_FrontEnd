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

  return filteredLibrary
    .map(savedItem => novelsData.find(n => n.id === savedItem.id))
    .reverse()
})
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 mt-6 space-y-6 pb-10 font-sans">
    
    <div class="bg-white p-6 border-2 border-black">
      <h1 class="text-3xl font-bold text-black uppercase tracking-tighter">My Library</h1>
      <p class="text-gray-500 mt-2 font-medium">Manage your reading lists and track your progress.</p>
    </div>

    <div class="flex gap-6 border-b-2 border-black text-sm font-bold text-gray-500 uppercase tracking-wider pb-2">
      <button 
        @click="activeTab = 'All'" 
        :class="activeTab === 'All' ? 'text-black border-b-2 border-black -mb-[9px] pb-1' : 'hover:text-black'"
      >
        All ({{ globalStore.library.length }})
      </button>
      <button 
        @click="activeTab = 'Reading'" 
        :class="activeTab === 'Reading' ? 'text-black border-b-2 border-black -mb-[9px] pb-1' : 'hover:text-black'"
      >
        Reading
      </button>
      <button 
        @click="activeTab = 'Will Read'" 
        :class="activeTab === 'Will Read' ? 'text-black border-b-2 border-black -mb-[9px] pb-1' : 'hover:text-black'"
      >
        Will Read
      </button>
      <button 
        @click="activeTab = 'Completed'" 
        :class="activeTab === 'Completed' ? 'text-black border-b-2 border-black -mb-[9px] pb-1' : 'hover:text-black'"
      >
        Completed
      </button>
    </div>

    <div v-if="displayedNovels.length === 0" class="text-center py-20 bg-white border-2 border-black">
      <span class="text-4xl block mb-3">●</span>
      <h3 class="text-lg font-bold text-black uppercase tracking-tighter">No novels found here</h3>
      <p class="text-gray-500 mt-1">You haven't added any books to this list yet.</p>
      <router-link to="/" class="text-black font-bold underline mt-4 inline-block hover:opacity-70">← Browse New Novels</router-link>
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
          class="w-full bg-white border-2 border-black text-black text-xs font-bold px-2 py-2 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer uppercase tracking-wider"
        >
          <option value="will_read">WILL READ</option>
          <option value="reading">READING</option>
          <option value="completed">COMPLETED</option>
        </select>
        
        <button 
          @click="globalStore.toggleLibrary(novel.id)" 
          class="absolute -top-2 -right-2 bg-black text-white w-6 h-6 flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-800"
          title="Remove from Library"
        >
          ✕
        </button>
      </div>
    </div>

  </main>
</template>