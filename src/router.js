import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import NovelDetail from './views/NovelDetail.vue'
import Library from './views/Library.vue' // 1. Import the new page

const routes = [
  { path: '/', component: Home },
  { path: '/novel/:id', component: NovelDetail },
  { path: '/library', component: Library } // 2. Add the route
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})