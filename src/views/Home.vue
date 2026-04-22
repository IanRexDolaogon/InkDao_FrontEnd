<script setup>
import { ref, computed } from 'vue'
import NovelCard from '../components/NovelCard.vue'
import { novelsData } from '../data.js'

const activeTab = ref('Daily')

// I changed this from 15 to 10 so it generates two perfect, even rows of 5!
const newNovels = computed(() => novelsData.slice(0, 10))

// 2. LIMIT TO 10: Automatically slice out chunks of 10 for the leaderboards
const rankings = computed(() => ({
  Daily: novelsData.slice(5, 15),
  Weekly: novelsData.slice(15, 25),
  Monthly: novelsData.slice(25, 35)
}))
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 mt-6 space-y-4">
    
    <div class="w-full h-48 md:h-64 lg:h-80 rounded-md overflow-hidden shadow-sm mb-6">
      <img 
        src="../assets/banner.png" 
        alt="Welcome to InkDao" 
        class="w-full h-full object-cover object-center"
      />
    </div>
    
    <div class="flex flex-col lg:flex-row gap-6 mt-4">
      
      <div class="lg:w-3/4 bg-white p-4 rounded-md shadow-sm border border-gray-200 h-fit">
        <div class="flex justify-between items-center mb-4 border-b pb-2">
          <h2 class="text-xl font-bold text-gray-900 uppercase tracking-wide">New Novels</h2>
          <router-link to="/novels" class="text-sm border border-gray-800 text-gray-800 px-3 py-1 rounded hover:bg-black hover:text-white transition-colors font-bold">See More</router-link>
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
          <h2 class="text-xl font-bold text-gray-900 uppercase tracking-wide">Ranking</h2>
          <a href="#" class="text-xs border border-gray-800 text-gray-800 px-2 py-1 rounded hover:bg-black hover:text-white transition-colors font-bold">See More</a>
        </div>

        <div class="flex text-sm text-center border-b border-gray-200 mb-4">
          <button @click="activeTab = 'Daily'" :class="activeTab === 'Daily' ? 'border-black text-black font-bold border-b-2' : 'text-gray-400 hover:text-gray-800'" class="flex-1 pb-2 transition-colors uppercase text-xs tracking-wider">Daily</button>
          <button @click="activeTab = 'Weekly'" :class="activeTab === 'Weekly' ? 'border-black text-black font-bold border-b-2' : 'text-gray-400 hover:text-gray-800'" class="flex-1 pb-2 transition-colors uppercase text-xs tracking-wider">Weekly</button>
          <button @click="activeTab = 'Monthly'" :class="activeTab === 'Monthly' ? 'border-black text-black font-bold border-b-2' : 'text-gray-400 hover:text-gray-800'" class="flex-1 pb-2 transition-colors uppercase text-xs tracking-wider">Monthly</button>
        </div>

        <div class="space-y-4 min-h-[200px]">
          <router-link 
            v-for="(rank, index) in rankings[activeTab]" 
            :key="rank.id" 
            :to="`/novel/${rank.id}`"
            class="flex gap-3 items-center border-b border-gray-100 pb-3 last:border-0 cursor-pointer hover:bg-gray-50 transition-colors block group"
          >
            <span class="text-black font-extrabold text-lg w-6 text-center">{{ index + 1 }}</span>
            
            <div class="flex-1">
              <h4 class="text-sm font-bold text-gray-900 line-clamp-2 leading-tight group-hover:text-gray-500 transition-colors">{{ rank.title }}</h4>
              
              <div class="flex gap-4 text-xs text-gray-500 mt-2 font-medium">
                <span class="flex items-center gap-1">
                  <img src="../assets/views_icon.svg" alt="Views" class="h-3.5 w-3.5 opacity-70" /> 
                  {{ rank.views }}
                </span>
                
                <span class="flex items-center gap-1 text-gray-800 font-bold">
                  <img src="../assets/stars_icon.svg" alt="Rating" class="h-3.5 w-3.5 opacity-70" /> 
                  {{ rank.rating || rank.score }}
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      
    </div>
  </main>
</template>