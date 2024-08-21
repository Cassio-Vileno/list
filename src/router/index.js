import CompletedTask from '@/views/CompletedTask.vue'
import TaskDatails from '@/views/TaskDatails.vue'
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
    path: '/completed-task',
    name: 'CompletedTask',
    component: CompletedTask
  },
  {
    path: '/add-task',
    name: 'AddTask',
    component: AddTask
  },
  {
    path: '/edit-task/:id',
    name: 'EditTask',
    component: EditTask
  },
  {
    path: '/task-datails/:id',
    name: 'TaskDatails',
    component: TaskDatails
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
