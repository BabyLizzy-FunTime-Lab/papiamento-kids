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
    // {
    //     path: '/user-creator',
    //     name: 'UserCreator',
    //     component: () => import(),
    // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
