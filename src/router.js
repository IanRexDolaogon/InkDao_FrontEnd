import { createRouter, createWebHistory } from 'vue-router'
import { globalStore } from './store.js' // We need the store to check if they are logged in

import Home from './views/Home.vue'
import NovelDetail from './views/NovelDetail.vue'
import Library from './views/Library.vue'
import Profile from './views/Profile.vue'
import Novels from './views/Novels.vue'
import Search from './views/Search.vue'
import Login from './views/Login.vue'
import Request from './views/Request.vue'
import Admin from './views/Admin.vue'

// Add meta tags to protect pages
const routes = [
  { path: '/', component: Login, meta: { requiresAuth: false } },
  { path: '/home', component: Home, meta: { requiresAuth: true } },
  { path: '/novel/:id', component: NovelDetail, meta: { requiresAuth: true } },
  { path: '/library', component: Library, meta: { requiresAuth: true } },
  { path: '/profile', component: Profile, meta: { requiresAuth: true } },
  { path: '/novels', component: Novels, meta: { requiresAuth: true } },
  { path: '/search', component: Search, meta: { requiresAuth: true } },
  { path: '/request', component: Request, meta: { requiresAuth: true } },
  { path: '/admin', component: Admin, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// THE BOUNCER: This runs every single time the user clicks a link or changes the URL
router.beforeEach((to, from, next) => {
  // If the page requires auth, AND the user is NOT logged in...
  if (to.meta.requiresAuth && !globalStore.user.isLoggedIn) {
    next('/') // Kick them back to the login page!
  } else {
    next() // Otherwise, let them through.
  }
})

export default router