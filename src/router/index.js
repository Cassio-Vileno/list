import { createRouter, createWebHistory } from 'vue-router'
import AddTask from '../views/AddTask.vue'
import EditTask from '../views/EditTask.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-task',
    name: 'AddTask',
    component: AddTask
  },
  {
    path: '/edit-task',
    name: 'EditTask',
    component: EditTask
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
