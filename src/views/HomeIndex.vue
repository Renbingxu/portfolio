<template>
    <div class="container">
        <AppHeader v-if="!splashStore.isVisible"></AppHeader>
        <div class="router-view-container">
            <router-view :key="routerKey"></router-view>
        </div>
    </div>
    
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AppHeader from '@/components/AppHeader.vue'
import { useSplashStore } from '@/store/headerStore';
const splashStore = useSplashStore()

const router = useRoute()

const routerKey = computed(() => router.path)
</script>

<style lang="less" scoped>
.container {
    width: 1440px;
    margin: auto;
    background: @bg-color;
}
.router-view-container {
    width: 100%;
    // padding: 0 @content-padding;
    // box-sizing: border-box;
}
</style>