<template>
  <nav class="bg-[#2a2c37] text-white flex items-center justify-between px-6 py-3 shadow-md">
    
    <div class="flex items-center gap-6">
      <router-link to="/" class="font-bold text-xl flex items-center gap-2 hover:text-gray-300 transition-colors cursor-pointer">
        <span>🐰</span> INKDAO
      </router-link>
      <div class="relative hidden sm:block">
        <input type="text" placeholder="Search..." class="bg-[#1f2029] text-gray-300 px-4 py-1.5 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 w-64"/>
      </div>
    </div>

    <div class="flex items-center gap-6 text-sm text-gray-300">
      
      <router-link to="/library" class="hover:text-white transition-colors">Library</router-link>
      <router-link to="/library" class="hover:text-white transition-colors">Novels</router-link>
      
      <a href="#" class="hover:text-white transition-colors">Ranking</a>
      
      <div class="flex gap-3 ml-4">
        <button class="p-1.5 bg-[#1f2029] rounded hover:text-white transition-colors">🚪</button>
        <button class="p-1.5 bg-[#1f2029] rounded hover:text-white transition-colors">👤</button>
      </div>
    </div>
    
  </nav>
</template>