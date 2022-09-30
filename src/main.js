import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import store from './store/index'
import Menus from 'vue3-menus'

createApp(App)
    .use(router)
    .use(ElementPlus, { zhCn })
    .use(store)
    .use(Menus)
    .mount('#app')