import { createRouter, createWebHashHistory } from "vue-router";

const index = () => import('../views/index.vue')
const index1 = () => import('../views/index1.vue')
const test = () => import('../views/test.vue')

const routes = [
    { path: '/', redirect: '/index' },
    {
        path: '/index',
        name: 'index',
        component: index
    },
    {
        path: '/index1',
        name: 'index1',
        component: index1
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
