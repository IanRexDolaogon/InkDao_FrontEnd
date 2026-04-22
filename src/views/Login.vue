<template>
  <div class="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

    <div class="absolute inset-0 z-0">
      <img src="../assets/banner.png" alt="InkDao Background" class="w-full h-full object-cover opacity-20" />
      <div class="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
    </div>

    <div class="relative z-10 bg-white p-10 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-lg w-full text-center mx-4">
      
      <div class="flex justify-center mb-6">
        <img src="../assets/logo.png" alt="InkDao Logo" class="h-16 w-auto object-contain" />
      </div>

      <h1 class="text-4xl font-bold text-black mb-4 uppercase tracking-tighter">Welcome to InkDao</h1>

      <p class="text-black mb-8 leading-relaxed text-sm font-medium">
        Your ultimate sanctuary for translated webnovels. Developed by Rex Ian V. Dolaogon from University of Southern Mindanao.
      </p>

      <router-link 
        to="/home" 
        class="inline-block w-full bg-black hover:bg-gray-800 text-white font-bold py-4 px-6 transition-all border-2 border-black text-lg uppercase tracking-widest"
      >
        Enter the Library
      </router-link>

      <div class="mt-8 pt-6 border-t-2 border-black">
        <p class="text-xs text-gray-500 font-bold uppercase tracking-wider">
          Guest mode active. Demo version. All novels shown are just samples.
        </p>
      </div>
      
    </div>
  </div>
</template>