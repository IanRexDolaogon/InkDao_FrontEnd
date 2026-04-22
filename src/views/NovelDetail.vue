<script setup>
import { useRoute } from 'vue-router'
import { novelsData } from '../data.js'
import { globalStore } from '../store.js'

const route = useRoute()
const novelId = parseInt(route.params.id)
const novel = novelsData.find(n => n.id === novelId)
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 mt-6 pb-10 font-sans">
    
    <div v-if="novel">
      <div class="text-xs text-black font-bold tracking-widest uppercase mb-6">
        WebNovels <span class="text-gray-500">/</span> Genre: {{ novel.genre }}
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        
        <div class="lg:w-1/4 space-y-4">
          <div class="bg-gray-200 border-2 border-black h-96 w-full flex items-center justify-center text-black text-center px-4 leading-tight font-bold">
            {{ novel.title }}<br><span class="text-gray-500 font-normal mt-2 text-sm">COVER</span>
          </div>
          
          <button class="w-full bg-black text-white border-2 border-black py-3 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            Start Reading
          </button>

          <button 
            @click="globalStore.toggleLibrary(novel.id)"
            :class="globalStore.isInLibrary(novel.id) ? 'bg-black text-white border-black' : 'bg-white text-black border-black'"
            class="w-full border-2 py-3 font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
          >
            {{ globalStore.isInLibrary(novel.id) ? '✓ In Library' : '+ Add to Library' }}
          </button>
          
          <button class="w-full bg-white border-2 border-black py-3 text-black font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
            Chapter List
          </button>

          <div class="text-xs space-y-2 mt-6 pt-4 border-t-2 border-black font-bold uppercase tracking-wider">
            <p><span class="text-gray-500 w-24 inline-block">Status:</span> Ongoing</p>
            <p><span class="text-gray-500 w-24 inline-block">Trans:</span> Active</p>
            <p><span class="text-gray-500 w-24 inline-block">Author:</span> <span class="text-black hover:underline cursor-pointer">{{ novel.author }}</span></p>
            <p class="pt-4"><span class="text-gray-500 w-24 inline-block">Views:</span> {{ novel.views }}</p>
          </div>
        </div>

        <div class="lg:w-2/4">
          <h1 class="text-4xl font-bold text-black mb-1 uppercase tracking-tighter">{{ novel.title }}</h1>
          <p class="text-sm text-gray-500 mb-6 font-bold uppercase tracking-wider">{{ novel.nativeTitle }}</p>
          
          <p class="text-base leading-relaxed text-black">
            {{ novel.synopsis }}
          </p>
          
          <div class="mt-10">
            <h3 class="font-bold text-black text-sm uppercase tracking-widest mb-4 border-b-2 border-black pb-2">Last 25 Chapters</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center cursor-pointer hover:bg-black hover:text-white p-2 transition-colors border-b border-gray-200">
                <div>
                  <p class="text-sm font-bold">Chapter {{ novel.chapters }}: Latest Release</p>
                  <p class="text-xs opacity-70 mt-1">{{ novel.timeAdded }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:w-1/4">
          <div class="bg-white p-5 border-2 border-black">
            <h3 class="text-xs font-bold text-black mb-4 uppercase tracking-widest">Rating</h3>
            <div class="text-5xl font-bold text-black leading-none">{{ novel.rating }}</div>
            <div class="text-black text-lg tracking-widest mt-2">★★★★☆</div>
          </div>
        </div>

      </div>
    </div>

    <div v-else class="text-center py-20 border-2 border-black">
      <h2 class="text-2xl font-bold text-black uppercase tracking-tighter">Novel not found!</h2>
      <p class="text-gray-500 mt-2 font-bold uppercase tracking-widest">The book you are looking for doesn't exist.</p>
      <router-link to="/" class="text-black font-bold underline mt-4 inline-block hover:opacity-70">← Go back home</router-link>
    </div>

  </div>
</template>