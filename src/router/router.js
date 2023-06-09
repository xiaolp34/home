import { createRouter, createWebHistory } from 'vue-router'
import List from './views/List.vue' // 替换为你的关于页面组件

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/list',
    name: 'List',
    component: List
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
