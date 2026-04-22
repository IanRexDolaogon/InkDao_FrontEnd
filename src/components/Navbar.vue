<template>
  <nav class="bg-white text-black flex items-center justify-between px-6 py-4 border-b-2 border-black">
    
    <div class="flex items-center">
      <router-link to="/home" class="flex items-center hover:opacity-70 transition-opacity cursor-pointer">
        <img src="../assets/logo.png" alt="InkDao Logo" class="h-10 w-auto object-contain" />
        <span class="font-bold text-2xl ml-2 tracking-tighter">INKDAO</span>
      </router-link>
    </div>

    <div class="flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
      
      <router-link to="/library" class="hover:underline">Library</router-link>
      <router-link to="/novels" class="hover:underline">Novels</router-link>
      <a href="#" class="hover:underline">Ranking</a>
      
      <div class="flex gap-3 ml-4">
        <router-link 
          to="/search" 
          class="border-2 border-black p-1.5 hover:bg-black hover:text-white transition-colors flex items-center justify-center group" 
          title="Search Novels"
        >
          <img src="../assets/search_icon.svg" alt="Search" class="h-5 w-5 object-contain group-hover:invert transition-all" />
        </router-link>
        
        <router-link 
          to="/profile" 
          class="border-2 border-black p-1.5 hover:bg-black hover:text-white transition-colors flex items-center justify-center group" 
          title="My Profile"
        >
          <img src="../assets/profile_icon.svg" alt="Profile" class="h-5 w-5 object-contain group-hover:invert transition-all" />
        </router-link>

        <router-link 
          to="/" 
          class="border-2 border-black p-1.5 hover:bg-black hover:text-white transition-colors flex items-center justify-center group" 
          title="Logout"
        >
          <img src="../assets/logout_icon.svg" alt="Logout" class="h-5 w-5 object-contain group-hover:invert transition-all" />
        </router-link>
      </div>
    </div>
    
  </nav>
</template>