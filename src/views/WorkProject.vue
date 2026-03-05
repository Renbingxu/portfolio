<template>
    <div class="work-container">
        <!-- header -->
        <section class="work-header" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            专注设计，坚持创意与创新，将愿景转化为数字世界，实现0-1的体系化构建
        </section>
        <!-- content  -->
        <section class="content-box">
            <template v-for="value in contentList" :key="value.title">
                <div class="content-item" @click="handleContent(value.url, value.inner)" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
                    <div class="content-title">
                        <div class="title">{{ value.title }}</div>
                        <div class="desc">{{ value.type }}</div>
                        <div class="desc">{{ value.time }}</div>
                    </div>
                    <div class="content-img">
                        <img class="img-item" :src="value.imgUrl" :alt="value.title">
                    </div>
                </div>
            </template>    
        </section>
    </div>
    <AppFooter></AppFooter>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import AppFooter from '@/components/AppFooter.vue'
// import { handleImage } from '@/utils/utils';
import content_img_01 from '@/assets/img/homePage/content_img_01.png'; 
import content_img_02 from '@/assets/img/homePage/content_img_02.png'; 
import content_img_03 from '@/assets/img/homePage/content_img_03.png'; 
import content_img_04 from '@/assets/img/homePage/content_img_04.png'; 
import content_img_05 from '@/assets/img/homePage/content_img_05.png'; 
import content_img_06 from '@/assets/img/homePage/content_img_06.png';

const contentList = [
    {
        title: '社交-USA Cozypal',
        type: 'App',
        time: '2025',
        url: '/social',
        imgUrl: content_img_03,
        inner: true
    },
    {
        title: '招聘-Indonesia JobCity',
        type: 'App+Web',
        time: '2024-2025',
        url: '/recruitment',
        imgUrl: content_img_02,
        inner: true
    },
    {
        title: '贷款-loan Project',
        type: 'App',
        time: '2022-2025',
        url: '/loan',
        imgUrl: content_img_01,
        inner: true
    },
    {
        title: '健康-ChangQing Drink',
        type: 'App',
        time: '2022',
        url: 'https://www.zcool.com.cn/work/ZNTk4NzMxMTY=.html',
        imgUrl: content_img_04,
        inner: false
    },
    {
        title: '运动-Weigntloss Coach',
        type: 'App',
        time: '2019',
        url: 'https://www.zcool.com.cn/work/ZNTM5NDExMjA=.html',
        imgUrl: content_img_05,
        inner: false
    },
    {
        title: '数据可视化-Web',
        type: 'WEB',
        time: '2020',
        url: 'https://www.zcool.com.cn/work/ZNzMyNDgyMjg=.html',
        imgUrl: content_img_06,
        inner: false
    }
]
const router = useRouter()
const handleContent = (url: string, inner: boolean) => {
    console.log(url)
    if (inner) {
        router.push(url)
    } else {
        window.open(url)
    }
}
</script>

<style lang="less" scoped>
.work-container {
    width: 100%;
    overflow: hidden;
}
.work-header {
    width: 1360px;
    height: 424px;
    margin: 100px auto 180px;
    background: url('@/assets/img/workProject/work_header_bg.png') no-repeat left top;
    background-size: contain;
    text-align: center;
    padding: 140px 230px 0;
    box-sizing: border-box;
    font-size: 48px;
    color: @text-black-color;
    line-height: 72px;
    font-family: 'Roboto Condensed-Bold';
    font-weight: bold;
}

.content-box {
    width: 100%;
    padding: 0 40px 200px;
    box-sizing: border-box;
    margin: 78px auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: url('@/assets/img/homePage/mask_bg.png') no-repeat bottom left;
    background-size: contain;
    .content-item {
        width: 677px;
        margin-bottom: 56px;
        .content-title { 
            display: flex;
            justify-content: left;
            align-items: center;
            margin-bottom: 40px;
            .title {
                font-family: 'Roboto Condensed-Bold';
                font-size: @content-title-font-size;
                color: @text-white-color;
                margin-right: 30px;
            }
            .desc {
                width: 77px;
                height: 28px;
                line-height: 28px;
                text-align: center;
                color: @content-desc-color;
                font-family: 'Roboto Condensed-Regular';
                font-size: 14px;
                margin-right: 5px;
                background: @text-white-color;
            }
        }
        .content-img {
            width: 660px;
            height: 485px;
            overflow: hidden;
            .img-item {
                width: 100%;
                height: 100%;
                
                &:hover {
                    transform: scale(1.05);
                    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                    // animation: img-scale 0.5s ease-in-out;
                    cursor: pointer;
                }
            }
        }
    }
}

</style>