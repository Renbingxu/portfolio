<template>
    <div class="header-box" :style="{backgroundColor: `rgba(26, 26, 26, ${navOpacity})`}">
        <div class="title" @click="handlerNavigater({
            name: '首页',
            path: '/home',
            navKey: 'home'
        })">UI/UX Portfolio</div>
        <div class="function-box">
            <template v-for="value in btnMap" :key="value.name">
                <div :class="[{'active': isActive(value)}, 'btn']"  @click="handlerNavigater(value)">{{ value.name }}</div>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { throttle} from 'lodash-es'
// 0完全透明，1完全不透明
const navOpacity = ref(0) 
// 滚动200px后达到完全不透明
const scrollThreshold = 200


const handleScroll = () => {
    const scrollY = window.scrollY
    // 优化1：如果已经达到完全不透明且滚动超过阈值，直接返回
    if (navOpacity.value === 1 && scrollY >= scrollThreshold) {
        return
    }
    
    // 优化2：如果还是透明且滚动小于阈值，直接返回
    if (navOpacity.value === 0 && scrollY === 0) {
        return
    }
    // 计算透明度：滚动距离 / 阈值，最大为1
    const newOpacity = Math.min(scrollY / scrollThreshold, 1)

    // 优化3：只有透明度真正变化时才更新
    if (newOpacity !== navOpacity.value) {
        navOpacity.value = newOpacity
    }
}
// 创建节流版本（100ms内只执行一次）
const throttledHandleScroll = throttle(handleScroll, 100)
onMounted(() => {
    throttledHandleScroll.cancel()
    window.addEventListener('scroll', throttledHandleScroll)
})



onUnmounted(() => {
    window.removeEventListener('scroll', throttledHandleScroll)
})






const btnMap = [
    {
        name: '首页',
        path: '/home',
        navKey: 'home'
    },
    {
        name: '工作',
        path: '/project',
        navKey: 'project'
    },
    {
        name: '关于我',
        path: '/about',
        navKey: 'about'
    },
    {
        name: '联系我',
        path: '/contact',
        navKey: 'contact'
    }
]
const router = useRouter();
const route = useRoute();
const handlerNavigater = (value: typeof btnMap[0]) => {
    if (route.path === value.path) return
    console.log('跳转')
    router.push(value.path)
    
}

// 直接从路由判断激活状态
const isActive = (item: typeof btnMap[0]) => {
    const { navKey} = route.meta
    return navKey === item.navKey
}

</script>

<style scoped lang="less">
.header-box {
    width: @maxWitdh;
    height: 82px;
    border-bottom: 2px solid #666666;
    box-sizing: border-box;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    transition: background-color 0.1s ease; /* 平滑过渡 */
    .title {
        font-size: @title-font-size;
        color: @text-white-color;
        font-weight: 500;
        margin-right: 170px;
        cursor: pointer;
    }
    .function-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1;
        .btn {
            height: @navigate-height;
            font-size: @navigate-font-size;
            padding: 0 12px;
            border-radius: calc(@navigate-height / 2);
            color: @navigate-text-color;
            line-height: @navigate-height;
            box-sizing: border-box;
            border: 1px solid #FFFFFF;
            &:hover {
                cursor: pointer;
            }
            &.active {
                background: @navigate-active-bg-color;
                color: @navigate-avtive-color;
                border: none;
            }
        }
    }
}
</style>