<template>
  <nav class="bg-[#2a2c37] text-white flex items-center justify-between px-6 py-3 shadow-md">
    
    <div class="flex items-center gap-6">
      <router-link to="/" class="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
        
        <img src="../assets/logo.png" alt="InkDao Logo" class="h-12 w-auto object-contain" />
        
        <span class="font-bold text-2xl ml-2">INKDAO</span>
        
      </router-link>
    </div>

    <div class="flex items-center gap-6 text-sm text-gray-300">
      
      <router-link to="/library" class="hover:text-white transition-colors">Library</router-link>
      <router-link to="/novels" class="hover:text-white transition-colors">Novels</router-link>
      <a href="#" class="hover:text-white transition-colors">Ranking</a>
      
      <div class="flex gap-3 ml-4">
        <router-link to="/search" class="p-1.5 bg-[#1f2029] rounded hover:text-white transition-colors block flex items-center justify-center" title="Search Novels">
          🔍
        </router-link>
        
        <router-link to="/profile" class="p-1.5 bg-[#1f2029] rounded hover:text-white transition-colors block flex items-center justify-center" title="My Profile">
          👤
        </router-link>

        <button class="p-1.5 bg-[#1f2029] rounded hover:text-white transition-colors" title="Logout">🚪</button>
      </div>
    </div>
    
  </nav>
</template>