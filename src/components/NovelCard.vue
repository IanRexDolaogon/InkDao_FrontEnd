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
  <router-link :to="`/novel/${id}`" class="border border-gray-200 rounded-md overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col h-full cursor-pointer">
    
    <div class="bg-gray-800 h-48 w-full flex items-center justify-center text-gray-500 text-sm">
      Cover Image
    </div>
    
    <div class="p-3 flex flex-col flex-grow">
      <h3 class="font-bold text-gray-800 text-sm leading-tight mb-2 line-clamp-2">
        {{ title }}
      </h3>
      <div class="mt-auto">
        <div class="flex justify-between text-xs text-gray-500 mb-1">
          <span>{{ genre }}</span>
          <span>{{ chapters }} Ch</span>
        </div>
        <p class="text-xs text-gray-400">Added {{ timeAdded }}</p>
      </div>
    </div>
    
  </router-link>
</template>