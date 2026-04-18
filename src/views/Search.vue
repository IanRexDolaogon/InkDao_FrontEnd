<script setup>
import { ref, computed } from 'vue'
import NovelCard from '../components/NovelCard.vue'
import { novelsData } from '../data.js'

// 1. Search & Filter State
const searchQuery = ref('')
const selectedLanguage = ref('')
const selectedGenre = ref('')
const minRating = ref(0)
const sortBy = ref('Most Viewed') // Default sorting

// 2. Automatically generate dropdown options based on your actual data!
const availableLanguages = computed(() => [...new Set(novelsData.map(n => n.language))].sort())
const availableGenres = computed(() => [...new Set(novelsData.map(n => n.genre))].sort())

// 3. The Master Filter Engine
const filteredNovels = computed(() => {
  let results = novelsData

  // Filter by Text Search (Checks title, native title, and synopsis)
  if (searchQuery.value.trim() !== '') {
    const query = searchQuery.value.toLowerCase()
    results = results.filter(n => 
      n.title.toLowerCase().includes(query) || 
      (n.nativeTitle && n.nativeTitle.toLowerCase().includes(query)) ||
      n.synopsis.toLowerCase().includes(query)
    )
  }

  // Filter by Language
  if (selectedLanguage.value !== '') {
    results = results.filter(n => n.language === selectedLanguage.value)
  }

  // Filter by Genre
  if (selectedGenre.value !== '') {
    results = results.filter(n => n.genre === selectedGenre.value)
  }

  // Filter by Minimum Rating
  if (minRating.value > 0) {
    results = results.filter(n => parseFloat(n.rating) >= minRating.value)
  }

  // Sorting Engine
  results = [...results].sort((a, b) => {
    if (sortBy.value === 'Highest Rated') {
      return parseFloat(b.rating) - parseFloat(a.rating)
    } else if (sortBy.value === 'Most Viewed') {
      // We have to remove commas from the views string (e.g. "5,400,200" -> 5400200) to sort mathematically
      const viewsA = parseInt(a.views.replace(/,/g, '')) || 0
      const viewsB = parseInt(b.views.replace(/,/g, '')) || 0
      return viewsB - viewsA
    } else {
      // Sort by Most Chapters
      return b.chapters - a.chapters
    }
  })

  return results
})
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 mt-6 space-y-6 pb-10 font-sans">
    
    <div class="bg-white p-6 rounded-md shadow-sm border border-gray-200">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Advanced Search</h1>
      
      <div class="relative">
        <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 text-xl">🔍</span>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search by title, native title, or keyword..." 
          class="w-full bg-gray-50 border border-gray-300 text-gray-800 px-12 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg shadow-inner"
        />
      </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-6">
      
      <div class="lg:w-1/4 space-y-4">
        <div class="bg-white p-5 rounded-md shadow-sm border border-gray-200">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-bold text-gray-700 tracking-wide">FILTERS</h3>
            <button @click="searchQuery=''; selectedLanguage=''; selectedGenre=''; minRating=0; sortBy='Most Viewed'" class="text-xs text-purple-600 hover:underline">Clear All</button>
          </div>

          <div class="mb-4">
            <label class="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Language</label>
            <select v-model="selectedLanguage" class="w-full bg-gray-50 border border-gray-300 text-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500">
              <option value="">All Languages</option>
              <option v-for="lang in availableLanguages" :key="lang" :value="lang">{{ lang }}</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Genre</label>
            <select v-model="selectedGenre" class="w-full bg-gray-50 border border-gray-300 text-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500">
              <option value="">All Genres</option>
              <option v-for="genre in availableGenres" :key="genre" :value="genre">{{ genre }}</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Min Rating (Stars)</label>
            <input type="range" min="0" max="5" step="0.5" v-model="minRating" class="w-full accent-purple-600" />
            <div class="text-right text-sm font-bold text-yellow-500 mt-1">{{ minRating > 0 ? minRating + ' ★ & Up' : 'Any Rating' }}</div>
          </div>

          <div class="mb-2">
            <label class="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Sort By</label>
            <select v-model="sortBy" class="w-full bg-gray-50 border border-gray-300 text-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500">
              <option value="Most Viewed">Most Viewed</option>
              <option value="Highest Rated">Highest Rated</option>
              <option value="Most Chapters">Most Chapters</option>
            </select>
          </div>

        </div>
      </div>

      <div class="lg:w-3/4">
        <div class="bg-white p-5 rounded-md shadow-sm border border-gray-200">
          <div class="mb-4 pb-2 border-b border-gray-100 flex justify-between items-center">
            <h2 class="text-lg font-bold text-gray-800">Results ({{ filteredNovels.length }})</h2>
          </div>
          
          <div v-if="filteredNovels.length === 0" class="text-center py-20 text-gray-500">
            <span class="text-4xl block mb-2">🤔</span>
            <h3 class="text-lg font-bold text-gray-700">No novels found</h3>
            <p class="text-sm">Try adjusting your filters or searching for a different term.</p>
          </div>

          <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <NovelCard 
              v-for="novel in filteredNovels" 
              :key="novel.id" 
              :id="novel.id" 
              :title="novel.title" 
              :genre="novel.genre" 
              :chapters="novel.chapters" 
              :timeAdded="novel.timeAdded" 
            />
          </div>
        </div>
      </div>

    </div>
  </main>
</template>