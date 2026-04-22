<script setup>
import { ref, computed } from 'vue'
import NovelCard from '../components/NovelCard.vue'
import { novelsData } from '../data.js'

const activeTab = ref('Daily')

const newNovels = computed(() => novelsData.slice(0, 10))

const rankings = computed(() => ({
  Daily: novelsData.slice(5, 15),
  Weekly: novelsData.slice(15, 25),
  Monthly: novelsData.slice(25, 35)
}))
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 mt-6 space-y-6 font-sans">
    
    <div class="w-full h-48 md:h-64 lg:h-80 border-2 border-black overflow-hidden mb-6">
      <img 
        src="../assets/banner.png" 
        alt="Welcome to InkDao" 
        class="w-full h-full object-cover object-center"
      />
    </div>
    
    <div class="flex flex-col lg:flex-row gap-6">
      
      <div class="lg:w-3/4 bg-white p-6 border-2 border-black">
        <div class="flex justify-between items-center mb-6 border-b-2 border-black pb-2">
          <h2 class="text-xl font-bold text-black uppercase tracking-tighter">New Novels</h2>
          <router-link to="/novels" class="text-xs border-2 border-black text-black px-4 py-1 hover:bg-black hover:text-white transition-colors font-bold uppercase tracking-wider">
            See More
          </router-link>
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

      <div class="lg:w-1/4 bg-white p-6 border-2 border-black h-fit">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold text-black uppercase tracking-tighter">Ranking</h2>
          <a href="#" class="text-xs border-2 border-black text-black px-2 py-1 hover:bg-black hover:text-white transition-colors font-bold uppercase tracking-wider">All</a>
        </div>

        <div class="flex text-sm text-center border-b-2 border-black mb-4">
          <button 
            @click="activeTab = 'Daily'" 
            :class="activeTab === 'Daily' ? 'border-b-2 border-black text-black font-bold' : 'text-gray-400 hover:text-black'" 
            class="flex-1 pb-2 transition-colors uppercase text-xs tracking-wider"
          >Daily</button>
          <button 
            @click="activeTab = 'Weekly'" 
            :class="activeTab === 'Weekly' ? 'border-b-2 border-black text-black font-bold' : 'text-gray-400 hover:text-black'" 
            class="flex-1 pb-2 transition-colors uppercase text-xs tracking-wider"
          >Weekly</button>
          <button 
            @click="activeTab = 'Monthly'" 
            :class="activeTab === 'Monthly' ? 'border-b-2 border-black text-black font-bold' : 'text-gray-400 hover:text-black'" 
            class="flex-1 pb-2 transition-colors uppercase text-xs tracking-wider"
          >Monthly</button>
        </div>

        <div class="space-y-4">
          <router-link 
            v-for="(rank, index) in rankings[activeTab]" 
            :key="rank.id" 
            :to="`/novel/${rank.id}`"
            class="flex gap-3 items-center border-b border-black pb-3 last:border-0 hover:bg-black hover:text-white transition-colors group"
          >
            <span class="text-black font-extrabold text-lg w-6 text-center group-hover:text-white">{{ index + 1 }}</span>
            
            <div class="flex-1">
              <h4 class="text-sm font-bold text-black line-clamp-2 leading-tight group-hover:text-white transition-colors">{{ rank.title }}</h4>
              
              <div class="flex gap-4 text-xs text-gray-500 mt-1 font-medium group-hover:text-gray-300">
                <span class="flex items-center gap-1">
                  <img src="../assets/views_icon.svg" alt="Views" class="h-3.5 w-3.5 brightness-0" /> 
                  {{ rank.views }}
                </span>
                
                <span class="flex items-center gap-1 text-black font-bold group-hover:text-white">
                  <img src="../assets/stars_icon.svg" alt="Rating" class="h-3.5 w-3.5 brightness-0 group-hover:invert" /> 
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