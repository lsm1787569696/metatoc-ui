
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: "/",
        componet: () => import("../views/cardForServerNode/index.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory("./")
})

export default router