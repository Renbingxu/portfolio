import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入 amfe-flexible 用于动态设置 rem 基准值
import 'amfe-flexible'
import './assets/font/font.css'
import 'aos/dist/aos.css' // 引入样式
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)

app.mount('#app')
