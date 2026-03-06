import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import postCssPxToRem from 'postcss-pxtorem'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/' : '/',
    plugins: [vue(), vueDevTools(), cloudflare()],
    css: {
        postcss: {
            plugins: [
              // 2. 配置插件
              postCssPxToRem({
                // 核心配置：rootValue
                // 根据你的设计稿宽度（1440px）来设置，通常设为 设计稿宽度 / 10 = 144
                // 这样设计稿上一个 144px 的元素，转换后就是 1rem，非常便于计算和理解
                rootValue: 144,
                // 需要转换的 CSS 属性，'*' 代表所有属性（如 width, height, margin, padding 等）都进行转换
                propList: ['*'],
                // 是否直接替换包含rem的规则，而不是添加回退
                replace: true,
                // 允许在媒体查询中转换px
                mediaQuery: true,
                // 最小转换数值，小于 2px 的值不会被转换，避免过小的尺寸转为 rem 后出现精度问题
                minPixelValue: 2,
                // 排除 node_modules 目录下的文件，避免将第三方 UI 库（如 Element Plus）的样式也进行转换，通常它们有自己的适配方案
                exclude: /node_modules/
              })
            ]
        },
        preprocessorOptions: {
            less: {
              additionalData: `
                @import "@/styles/global.less";
              `,
              javascriptEnabled: true, // 如果需要使用 Less 的 JavaScript 表达式
            }
        },
    },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})