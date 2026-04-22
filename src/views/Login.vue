<template>
  <div class="relative min-h-screen flex items-center justify-center overflow-hidden">

    <div class="absolute inset-0 z-0 bg-black">
      
      <img src="../assets/banner.png" alt="InkDao Background" class="w-full h-full object-cover opacity-40" />
      
      <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"></div>
    </div>

    <div class="relative z-10 bg-[#2a2c37]/90 p-10 rounded-xl shadow-2xl max-w-lg w-full text-center border border-gray-700 mx-4">
      
      <div class="flex justify-center mb-6">
        <img src="../assets/logo.png" alt="InkDao Logo" class="h-16 w-auto object-contain drop-shadow-md" />
      </div>

      <h1 class="text-3xl font-bold text-white mb-4 tracking-wide">Welcome to InkDao</h1>

      <p class="text-gray-300 mb-8 leading-relaxed text-sm">
        Your ultimate sanctuary for translated webnovels. Develop by Rex Ian V. Dolaogon from University of Southern Mindanao.
      </p>

      <router-link 
        to="/home" 
        class="inline-block w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md transition-colors shadow-lg border border-gray-700 text-lg tracking-wider"
        >
        ENTER THE LIBRARY
        </router-link>

      <div class="mt-8 pt-6 border-t border-gray-600">
        <p class="text-xs text-gray-500">Guest mode active. No account required for this frontend demo.</p>
      </div>
      
    </div>
  </div>
</template>