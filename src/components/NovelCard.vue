<script setup>
defineProps({
  id: Number,
  title: String,
  genre: String,
  chapters: Number,
  timeAdded: String,
  cover: String // Added this so the card knows to look for the cover link!
})
</script>

<template>
  <router-link :to="`/novel/${id}`" class="group border-2 border-black overflow-hidden hover:-translate-y-1 transition-transform bg-white flex flex-col h-full cursor-pointer">
    
    <div class="bg-gray-200 border-b-2 border-black aspect-[2/3] w-full flex items-center justify-center text-center relative overflow-hidden">
      <span class="absolute z-0 font-bold tracking-widest uppercase text-gray-500 text-xs px-2">NO COVER</span>
      <img 
        :src="cover || `/covers/${id}.jpg`" 
        alt="Cover" 
        class="w-full h-full object-cover object-center relative z-10 group-hover:scale-105 transition-transform duration-500" 
        @error="$event.target.style.display='none'"
      />
    </div>
    
    <div class="p-4 flex flex-col flex-grow">
      <h3 class="text-sm font-bold text-black uppercase tracking-tight leading-tight mb-3 line-clamp-2 group-hover:text-gray-500 transition-colors">
        {{ title }}
      </h3>
      
      <div class="mt-auto">
        <div class="flex justify-between items-center mb-3">
          <span class="text-[10px] font-bold border border-black text-black px-2 py-1 uppercase tracking-widest">
            {{ genre }}
          </span>
          <span class="text-xs font-bold text-gray-600">{{ chapters }} CH</span>
        </div>
        <p class="text-[10px] text-gray-500 font-bold uppercase tracking-widest border-t border-gray-200 pt-2">Added {{ timeAdded }}</p>
      </div>
    </div>
    
  </router-link>
</template>