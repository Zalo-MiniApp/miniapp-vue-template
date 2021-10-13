import { createRouter, createWebHashHistory } from 'vue-router'
import Index from './pages/index.vue'
import List from './pages/list.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/list', component: List },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router