<script setup>
import { ref, computed } from 'vue'
import NovelCard from '../components/NovelCard.vue'
import { novelsData } from '../data.js'

const activeTab = ref('Daily')

// 1. LIMIT TO 5: Automatically grab only the first 5 novels from the database
const newNovels = computed(() => novelsData.slice(0, 15))

// 2. LIMIT TO 10: Automatically slice out chunks of 10 for the leaderboards
const rankings = computed(() => ({
  Daily: novelsData.slice(5, 15),    // Grabs novels #6 through #15
  Weekly: novelsData.slice(15, 25),  // Grabs novels #16 through #25
  Monthly: novelsData.slice(25, 35)  // Grabs novels #26 through #35
}))
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 mt-6 space-y-4">
    
    <div class="flex flex-col lg:flex-row gap-6 mt-4">
      
      <div class="lg:w-3/4 bg-white p-4 rounded-md shadow-sm border border-gray-200 h-fit">
        <div class="flex justify-between items-center mb-4 border-b pb-2">
          <h2 class="text-xl font-light text-gray-700">New Novels</h2>
          <button class="text-sm border border-gray-300 px-3 py-1 rounded hover:bg-gray-50 transition-colors">See More</button>
        </div>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <NovelCard 
            v-for="novel in newNovels" 
            :key="novel.id" 
            :id="novel.id" 
            :title="novel.title" 
            :genre="novel.genre" 
            :chapters="novel.chapters" 
            :timeAdded="novel.timeAdded" 
          />
        </div>
      </div>

      <div class="lg:w-1/4 bg-white p-4 rounded-md shadow-sm border border-gray-200 h-fit">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-light text-gray-700">Novel Ranking</h2>
          <button class="text-xs border border-gray-300 px-2 py-1 rounded hover:bg-gray-50 transition-colors">See More</button>
        </div>

        <div class="flex text-sm text-center border-b mb-4">
          <button @click="activeTab = 'Daily'" :class="activeTab === 'Daily' ? 'border-green-500 text-gray-800 font-medium border-b-2' : 'text-gray-400 hover:text-gray-600'" class="flex-1 pb-2 transition-colors">Daily</button>
          <button @click="activeTab = 'Weekly'" :class="activeTab === 'Weekly' ? 'border-green-500 text-gray-800 font-medium border-b-2' : 'text-gray-400 hover:text-gray-600'" class="flex-1 pb-2 transition-colors">Weekly</button>
          <button @click="activeTab = 'Monthly'" :class="activeTab === 'Monthly' ? 'border-green-500 text-gray-800 font-medium border-b-2' : 'text-gray-400 hover:text-gray-600'" class="flex-1 pb-2 transition-colors">Monthly</button>
        </div>

        <div class="space-y-4 min-h-[200px]">
          <router-link 
            v-for="(rank, index) in rankings[activeTab]" 
            :key="rank.id" 
            :to="`/novel/${rank.id}`"
            class="flex gap-3 items-start border-b border-gray-100 pb-3 last:border-0 cursor-pointer hover:bg-gray-50 transition-colors block group"
          >
            <span class="text-green-500 font-bold mt-1 w-4">{{ index + 1 }}</span>
            <div class="bg-gray-800 h-16 w-12 flex-shrink-0 flex items-center justify-center text-gray-500 text-[10px] rounded-sm text-center leading-tight shadow-sm">Cover</div>
            <div class="flex-1">
              <h4 class="text-sm font-medium text-gray-800 line-clamp-2 leading-tight group-hover:text-purple-600 transition-colors">{{ rank.title }}</h4>
              <div class="flex gap-3 text-xs text-gray-500 mt-2">
                <span>👁 {{ rank.views }}</span>
                <span class="text-yellow-500">★ {{ rank.rating || rank.score }}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      
    </div>
  </main>
</template>