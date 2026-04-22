<script setup>
defineProps({
  id: Number,
  title: String,
  genre: String,
  chapters: Number,
  timeAdded: String
})
</script>

<template>
  <router-link :to="`/novel/${id}`" class="group border border-gray-200 rounded-md overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col h-full cursor-pointer">
    
    <div class="bg-gray-800 h-48 w-full flex items-center justify-center text-gray-500 text-sm">
      Cover Image
    </div>
    
    <div class="p-3 flex flex-col flex-grow">
      
      <h3 class="text-sm font-bold text-gray-900 leading-tight mb-3 line-clamp-2 group-hover:text-gray-500 transition-colors">
        {{ title }}
      </h3>
      
      <div class="mt-auto">
        <div class="flex justify-between items-center mb-2">
          
          <span class="text-[10px] font-bold border border-gray-800 text-gray-800 px-2 py-0.5 rounded-sm uppercase tracking-wider">
            {{ genre }}
          </span>
          
          <span class="text-xs font-medium text-gray-600">{{ chapters }} Ch.</span>
          
        </div>
        
        <p class="text-[11px] text-gray-400 font-medium">Added {{ timeAdded }}</p>
      </div>
      
    </div>
    
  </router-link>
</template>