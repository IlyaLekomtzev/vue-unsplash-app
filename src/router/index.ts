import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

export enum AppRoute {
    Main = '/',
    User = '/user'
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: AppRoute.Main,
            name: 'home',
            component: HomeView
        },
        {
            path: AppRoute.User + '/:username',
            name: 'user',
            component: () => import('@/views/UserView.vue')
        }
    ]
});

export default router;
