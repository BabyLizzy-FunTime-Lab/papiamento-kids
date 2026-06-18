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
        path: '/user-form/create',
        name: 'UserFormCreate',
        component: () => import('../views/UserForm.vue'),
        props: {mode: 'create'},
    },
    {
        path: '/user-form/edit',
        name: 'UserFormEdit',
        component: () => import('../views/UserForm.vue'),
        props: {mode: 'edit'},
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
