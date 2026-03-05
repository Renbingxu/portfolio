<script setup lang="ts"></script>

<template>
    <router-view></router-view>
</template>

<script lang="ts" setup>
import { onMounted, } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css'

onMounted(() => {
    AOS.init({
        // 全局配置
        duration: 800,           // 动画持续时间
        easing: 'ease-out-cubic', // 缓动函数
        once: false,              // 是否只触发一次
        mirror: false,           // 滚动向上时是否反向动画
        offset: 100,             // 触发动画的偏移量
        delay: 0,                // 默认延迟
        disable: window.innerWidth < 768, // 移动端禁用
        anchorPlacement: 'top-bottom', // 全局默认锚点位置
    })
})

</script>
<style scoped lang="less">

</style>
