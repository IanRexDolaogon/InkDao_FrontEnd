<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { globalStore } from '../store.js'

const router = useRouter()

// Form data states
const username = ref('')
const password = ref('')
const loginError = ref('')

const handleLogin = () => {
  if (username.value.trim() === '' || password.value === '') {
    loginError.value = "PLEASE ENTER YOUR CREDENTIALS."
    return
  }

  // Pass the typed username to the store
  globalStore.login(username.value, password.value)
  router.push('/home')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans relative">
    
    <div class="absolute inset-0 z-0 bg-white"></div>

    <div class="relative z-10 bg-white border-4 border-black p-10 max-w-lg w-full text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      
      <div class="flex justify-center mb-6">
        <img src="../assets/logo.png" alt="InkDao Logo" class="h-20 w-auto object-contain" />
      </div>

      <h1 class="text-4xl font-black text-black mb-2 uppercase tracking-tighter">INKDAO</h1>

      <p class="text-black mb-8 leading-relaxed text-sm font-bold uppercase tracking-wider">
        Your ultimate sanctuary for translated webnovels.<br><br>
        Developed by Rex Ian V. Dolaogon.
      </p>

      <form @submit.prevent="handleLogin" class="space-y-4 text-left">
        
        <div>
          <label class="block text-xs font-black uppercase tracking-widest mb-2 text-black">Username</label>
          <input 
            v-model="username" 
            type="text" 
            required
            placeholder="ENTER USERNAME"
            class="w-full border-2 border-black p-3 font-bold uppercase tracking-widest focus:outline-none focus:bg-gray-100 transition-colors placeholder-gray-400"
          />
        </div>

        <div>
          <label class="block text-xs font-black uppercase tracking-widest mb-2 text-black mt-4">Password</label>
          <input 
            v-model="password" 
            type="password" 
            required
            placeholder="ENTER PASSWORD"
            class="w-full border-2 border-black p-3 font-bold tracking-widest focus:outline-none focus:bg-gray-100 transition-colors placeholder-gray-400"
          />
        </div>

        <p v-if="loginError" class="text-red-600 font-bold text-xs uppercase tracking-widest text-center mt-2">{{ loginError }}</p>

        <button 
          type="submit" 
          class="w-full bg-black text-white border-2 border-black font-black py-4 px-6 text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-colors mt-6"
        >
          Login
        </button>
      </form>

      <div class="mt-8 pt-6 border-t-2 border-black">
        <p class="text-xs text-gray-500 font-bold uppercase tracking-widest">
          Type "admin" as username to access Admin Panel.
        </p>
      </div>
      
    </div>
  </div>
</template>