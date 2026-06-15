import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/user-home',
        name: 'UserHomePage',
        component: () => import('../views/UserHomePage.vue'),
    },
    {
        path: '/create-user',
        name: 'CreateUser',
        component: () => import('../views/CreateUser.vue'),
    },
    {
        path: '/user-profile',
        name: 'UserProfile',
        component: () => import('../views/UserProfile.vue'),
    }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
