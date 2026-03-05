
import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { debounce } from 'lodash-es'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeIndex.vue'),
        redirect: '/home',
        meta: {
            navKey: 'home'
        },
        children: [
            {
                path: '/home',
                name: 'homePage',
                component: () => import('@/views/HomePage.vue'),
                meta: {
                    navKey: 'home'
                }
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/AboutMe.vue'),
                meta: {
                    navKey: 'about'
                }
            },
            {
                path: '/project',
                name: 'project',
                component: () => import('@/views/WorkProject.vue'),
                meta: {
                    navKey: 'project'
                },
            },
            {
                path: '/contact',
                name: 'contact',
                component: () => import('@/views/ContactMe.vue'),
                meta: {
                    navKey: 'contact'
                }
            },
            {
                path: '/loan',
                name: 'loan',
                component: () => import('@/views/workProject/LoanProject.vue'),
                meta: {
                    navKey: 'project'
                }
            },
            {
                path: '/recruitment',
                name: 'recruitment',
                component: () => import('@/views/workProject/RecruitmentProject.vue'),
                meta: {
                    navKey: 'project'
                }
            },
            {
                path: '/social',
                name: 'social',
                component: () => import('@/views/workProject/SocialProject.vue'),
                meta: {
                    navKey: 'project'
                }
            }
        ]
    },
]



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    // 滚动行为配置
    scrollBehavior(to, from, savedPosition) {
        // 如果存在保存的位置（比如使用浏览器的后退按钮）
            if (savedPosition) {
            return savedPosition
        }
        
        // 返回顶部
        return { top: 0, behavior: 'smooth' } // behavior: 'smooth' 添加平滑滚动效果
    }
})


const refreshAOS = debounce(() => {
    nextTick(() => {
        AOS.refresh()
    })
}, 150)


router.afterEach(() => {
    refreshAOS()
})



export default router
