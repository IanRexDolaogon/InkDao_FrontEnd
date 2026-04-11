<script setup>
import { useRoute } from 'vue-router'
import { novelsData } from '../data.js'

// 1. Get the current route (URL)
const route = useRoute()

// 2. Extract the ID from the URL (e.g., /novel/2 -> id is 2)
const novelId = parseInt(route.params.id)

// 3. Search our database for the novel that matches this ID
const novel = novelsData.find(n => n.id === novelId)
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 mt-6 text-gray-800 font-sans pb-10">
    
    <div v-if="novel">
      <div class="text-xs text-gray-500 mb-6 font-bold tracking-wide">
        ↘ WebNovels and Books <span class="font-normal text-gray-600">↘ {{ novel.genre }}</span>
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        
        <div class="lg:w-1/4 space-y-4">
          <div class="bg-gray-800 h-96 w-full rounded-md flex items-center justify-center text-gray-400 shadow-sm text-center px-4 leading-tight font-bold">
            {{ novel.title }}<br><span class="text-gray-500 font-normal mt-2 text-sm">Cover</span>
          </div>
          <button class="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md font-bold text-sm transition shadow-sm">
            START READING
          </button>
          <button class="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-md font-bold text-sm transition shadow-sm">
            CHAPTERS LIST
          </button>

          <div class="text-xs space-y-2 mt-6 pt-4 border-t border-gray-200">
            <p><span class="text-gray-500 w-24 inline-block">Status in COO:</span> Ongoing</p>
            <p><span class="text-gray-500 w-24 inline-block">Translation:</span> Active</p>
            <p><span class="text-gray-500 w-24 inline-block">Authors:</span> <span class="text-blue-600 hover:underline cursor-pointer">{{ novel.author }}</span></p>
            <p class="pt-4"><span class="text-gray-500 w-24 inline-block">Views:</span> {{ novel.views }}</p>
          </div>
        </div>

        <div class="lg:w-2/4">
          <h1 class="text-3xl font-bold text-gray-900 mb-1">{{ novel.title }}</h1>
          <p class="text-sm text-gray-500 mb-6">{{ novel.nativeTitle }}</p>
          
          <p class="text-sm leading-relaxed text-gray-700">
            {{ novel.synopsis }}
          </p>
          
          <div class="mt-10">
            <h3 class="font-bold text-gray-500 text-sm tracking-wider mb-4 border-b border-gray-200 pb-2">LAST 25 CHAPTERS</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center group cursor-pointer">
                <div>
                  <p class="text-sm font-medium text-green-600 group-hover:underline">Chapter {{ novel.chapters }}: Latest Release</p>
                  <p class="text-xs text-gray-400 mt-1">{{ novel.timeAdded }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:w-1/4 space-y-6">
          <div class="bg-white p-5 rounded-md shadow-sm border border-gray-200">
            <h3 class="text-xs font-bold text-gray-500 mb-4 tracking-wider">RATING</h3>
            <div class="text-4xl font-bold text-gray-800 leading-none">{{ novel.rating }}</div>
            <div class="text-yellow-400 text-lg tracking-widest mt-2">★★★★☆</div>
          </div>
        </div>

      </div>
    </div>

    <div v-else class="text-center py-20">
      <h2 class="text-2xl font-bold text-gray-800">Novel not found!</h2>
      <p class="text-gray-500 mt-2">The book you are looking for doesn't exist in our database.</p>
      <router-link to="/" class="text-purple-600 hover:underline mt-4 inline-block">← Go back home</router-link>
    </div>

  </div>
</template>