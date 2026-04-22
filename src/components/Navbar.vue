<template>
  <nav class="bg-black text-white flex items-center justify-between px-6 py-3 shadow-md border-b border-gray-800">
    
    <div class="flex items-center gap-6">
      <router-link to="/home" class="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
        <img src="../assets/logo.png" alt="InkDao Logo" class="h-12 w-auto object-contain" />
        <span class="font-bold text-2xl ml-2">INKDAO</span>
      </router-link>
    </div>

    <div class="flex items-center gap-6 text-sm text-gray-300">
      
      <router-link to="/library" class="hover:text-white transition-colors">Library</router-link>
      <router-link to="/novels" class="hover:text-white transition-colors">Novels</router-link>
      <a href="#" class="hover:text-white transition-colors">Ranking</a>
      
      <div class="flex gap-3 ml-4">
        <router-link to="/search" class="p-1.5 bg-gray-900 rounded hover:bg-gray-800 transition-colors flex items-center justify-center" title="Search Novels">
          <img src="../assets/search_icon.svg" alt="Search" class="h-6 w-6 object-contain" />
        </router-link>
        
        <router-link to="/profile" class="p-1.5 bg-gray-900 rounded hover:bg-gray-800 transition-colors flex items-center justify-center" title="My Profile">
          <img src="../assets/profile_icon.png" alt="Profile" class="h-6 w-6 object-contain" />
        </router-link>

        <router-link to="/" class="p-1.5 bg-gray-900 rounded hover:bg-gray-800 transition-colors flex items-center justify-center" title="Logout">
          <img src="../assets/logout_icon.png" alt="Logout" class="h-6 w-6 object-contain" />
        </router-link>
      </div>
    </div>
    
  </nav>
</template>