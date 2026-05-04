<script setup>
import { ref } from 'vue'

const formData = ref({
  title: '',
  author: '',
  language: '',
  link: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const submitRequest = () => {
  // 1. Show the loading state
  isSubmitting.value = true
  
  // 2. Simulate a network request (wait 1.5 seconds)
  setTimeout(() => {
    isSubmitting.value = false
    showSuccess.value = true
    
    // Reset form after a few seconds
    setTimeout(() => {
      showSuccess.value = false
      formData.value = { title: '', author: '', language: '', link: '' }
    }, 4000)
  }, 1500)
}
</script>

<template>
  <main class="max-w-3xl mx-auto px-4 mt-10 space-y-6 pb-20 font-sans">
    
    <div class="bg-white p-8 rounded-md shadow-sm border border-gray-200">
      
      <div class="border-b border-gray-200 pb-4 mb-6">
        <h1 class="text-3xl font-bold text-gray-900 tracking-wide uppercase">Request Translation</h1>
        <p class="text-gray-500 mt-2 text-sm">Submit an untranslated webnovel to the InkDao queue. If approved by the community, our AI agents will begin processing it.</p>
      </div>

      <!-- Success Message -->
      <div v-if="showSuccess" class="bg-gray-50 border border-black text-black p-6 rounded-md text-center mb-6">
        <span class="text-3xl block mb-2">📜</span>
        <h3 class="font-bold text-lg">Request Added to Queue!</h3>
        <p class="text-sm mt-1">Your request for <strong>"{{ formData.title }}"</strong> has been submitted to the DAO.</p>
      </div>

      <!-- The Form -->
      <form v-else @submit.prevent="submitRequest" class="space-y-5">
        
        <div>
          <label class="block text-xs font-bold text-gray-800 mb-1 uppercase tracking-wider">Novel Title (Native or English)</label>
          <input 
            v-model="formData.title" 
            type="text" 
            required 
            class="w-full bg-white border border-gray-300 text-gray-900 rounded px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            placeholder="e.g., 전지적 독자 시점"
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-gray-800 mb-1 uppercase tracking-wider">Author</label>
            <input 
              v-model="formData.author" 
              type="text" 
              required 
              class="w-full bg-white border border-gray-300 text-gray-900 rounded px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
              placeholder="Author name"
            />
          </div>
          
          <div>
            <label class="block text-xs font-bold text-gray-800 mb-1 uppercase tracking-wider">Original Language</label>
            <select v-model="formData.language" required class="w-full bg-white border border-gray-300 text-gray-900 rounded px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all">
              <option value="" disabled>Select language...</option>
              <option value="Chinese">Chinese (CN)</option>
              <option value="Korean">Korean (KR)</option>
              <option value="Japanese">Japanese (JP)</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-xs font-bold text-gray-800 mb-1 uppercase tracking-wider">Raw Source Link (Optional)</label>
          <input 
            v-model="formData.link" 
            type="url" 
            class="w-full bg-white border border-gray-300 text-gray-900 rounded px-4 py-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            placeholder="https://..."
          />
        </div>

        <button 
          type="submit" 
          :disabled="isSubmitting"
          class="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-md transition-colors shadow-lg border border-gray-800 text-sm tracking-widest uppercase mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isSubmitting ? 'PROCESSING REQUEST...' : 'SUBMIT TO AI QUEUE' }}
        </button>

      </form>
    </div>
  </main>
</template>