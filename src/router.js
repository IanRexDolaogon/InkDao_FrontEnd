import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import NovelDetail from './views/NovelDetail.vue'
import Library from './views/Library.vue'
import Profile from './views/Profile.vue'
import Novels from './views/Novels.vue'
import Search from './views/Search.vue'
import Login from './views/Login.vue' 

const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home },
  { path: '/novel/:id', component: NovelDetail },
  { path: '/library', component: Library },
  { path: '/profile', component: Profile },
  { path: '/novels', component: Novels },
  { path: '/search', component: Search }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})