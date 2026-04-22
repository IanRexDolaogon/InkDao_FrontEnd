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
  <router-link 
    :to="`/novel/${id}`" 
    class="group border-2 border-black overflow-hidden transition-all bg-white flex flex-col h-full cursor-pointer hover:bg-black"
  >
    
    <div class="bg-gray-100 border-b-2 border-black h-48 w-full flex items-center justify-center text-black text-sm font-bold uppercase tracking-widest">
      Cover
    </div>
    
    <div class="p-4 flex flex-col flex-grow">
      
      <h3 class="text-sm font-bold text-black leading-tight mb-4 line-clamp-2 group-hover:text-white transition-colors uppercase tracking-tighter">
        {{ title }}
      </h3>
      
      <div class="mt-auto">
        <div class="flex justify-between items-center mb-2">
          
          <span class="text-[10px] font-bold border-2 border-black text-black px-2 py-0.5 uppercase tracking-wider group-hover:border-white group-hover:text-white transition-colors">
            {{ genre }}
          </span>
          
          <span class="text-xs font-bold text-black group-hover:text-gray-300 transition-colors uppercase tracking-widest">
            {{ chapters }} Ch.
          </span>
          
        </div>
        
        <p class="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-hover:text-gray-400 transition-colors">
          Added {{ timeAdded }}
        </p>
      </div>
      
    </div>
    
  </router-link>
</template>