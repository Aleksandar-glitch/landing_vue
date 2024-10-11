import { createRouter, createWebHistory } from 'vue-router'

// Import your components here
import About from '../components/About.vue'
import Landing from '../pages/landing/index.vue'
import Platform from '../pages/platform/index.vue'
import Contact from '../pages/contact/index.vue'

// Define your routes
const routes = [
  {
    path: '/platform',
    name: 'Platform',
    component: Platform
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

// Create the router instance using history mode
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
