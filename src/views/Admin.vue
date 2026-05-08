<script setup>
import { globalStore } from '../store.js'
import { useRouter } from 'vue-router'

const router = useRouter()

// Basic security check
if (globalStore.user.role !== 'admin') {
  router.push('/home')
}

// Mock data
const pendingRequests = [
  { id: 101, title: '전지적 독자 시점 (ORV)', lang: 'Korean', user: 'Reader_001', date: '2 hours ago' },
  { id: 102, title: '诡秘之主 2 (LotM 2)', lang: 'Chinese', user: 'Klein_Fan', date: '5 hours ago' }
]
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 mt-6 space-y-6 pb-10 font-sans">
    
    <div class="bg-black text-white p-6 rounded-md shadow-sm border border-gray-800 flex justify-between items-center">
      <div>
        <h1 class="text-3xl font-bold tracking-wide uppercase">Admin Dashboard</h1>
        <p class="text-gray-400 mt-1 text-sm">Welcome back, {{ globalStore.user.username }}. Here is your DAO overview.</p>
      </div>
      <div class="text-right">
        <div class="text-xs text-gray-500 font-bold uppercase tracking-wider">System Status</div>
        <div class="text-green-500 font-bold flex items-center gap-2 justify-end">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> All Systems Nominal
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-md shadow-sm border border-gray-200">
        <div class="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">Total Novels</div>
        <div class="text-4xl font-bold text-black">120</div>
      </div>
      <div class="bg-white p-6 rounded-md shadow-sm border border-gray-200">
        <div class="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">Active Users</div>
        <div class="text-4xl font-bold text-black">1,432</div>
      </div>
      <div class="bg-white p-6 rounded-md shadow-sm border border-gray-200 border-l-4 border-l-black">
        <div class="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">Pending Translation Requests</div>
        <div class="text-4xl font-bold text-black">{{ pendingRequests.length }}</div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-md shadow-sm border border-gray-200">
      <h2 class="text-lg font-bold text-gray-900 mb-4 border-b pb-2 uppercase">Translation AI Queue</h2>
      
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm text-gray-600">
          <thead class="text-xs text-gray-900 uppercase bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-4 py-3">Req ID</th>
              <th class="px-4 py-3">Novel Title</th>
              <th class="px-4 py-3">Language</th>
              <th class="px-4 py-3">Requested By</th>
              <th class="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="req in pendingRequests" :key="req.id" class="border-b border-gray-100 hover:bg-gray-50">
              <td class="px-4 py-3 font-medium text-gray-900">#{{ req.id }}</td>
              <td class="px-4 py-3 font-bold">{{ req.title }}</td>
              <td class="px-4 py-3">{{ req.lang }}</td>
              <td class="px-4 py-3">{{ req.user }}<br><span class="text-[10px] text-gray-400">{{ req.date }}</span></td>
              <td class="px-4 py-3 text-right space-x-2">
                <button class="text-xs font-bold bg-black text-white px-3 py-1.5 rounded hover:bg-gray-800 transition-colors">APPROVE</button>
                <button class="text-xs font-bold border border-gray-300 text-gray-700 px-3 py-1.5 rounded hover:bg-gray-100 transition-colors">REJECT</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </main>
</template>