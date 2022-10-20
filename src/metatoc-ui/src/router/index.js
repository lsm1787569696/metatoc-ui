import { createRouter, createWebHashHistory } from "vue-router";

const index = () => import('../views/index.vue')
const test = () => import('../views/test.vue')

const routes = [
    { path: '/', redirect: '/index' },
    {
        path: '/index',
        name: 'index',
        component: index
    },
    {
        path: '/test',
        name: 'test',
        component: test
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
