import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Root',
            component: () => import(/* webpackChunkName: "Root" */ './components/Root.vue')
        },
        {
            path: '/other',
            name: 'OtherRoute',
            component: () => import(/* webpackChunkName: "Other" */ './components/OtherRoute.vue')
        }
    ]
})

export default router