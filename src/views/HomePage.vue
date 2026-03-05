<template>
    <transition name="fade" appear @after-leave="onCoverLeft"
    @after-appear="onCoverAppear"
    >
        <div class="mask" v-show="splashStore.isVisible">
            <img src="../assets//img/homePage/home_page_mask.png" alt="" class="mask-img">
            <div class="dots-box">
                <span class="loading-text">Loading</span>
                <div class="dots">
                    <span class="dot" v-for="n in 3" :key="n"></span>
                </div>
            </div>
        </div>
    </transition>
    <div class="container-box" v-show="!splashStore.isVisible">
        <div class="homepage-container">
            <div class="intriduce-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
                <img src="../assets/img/homePage/home_page_intriduce_bg.png" class="intruduce-bg-img" alt="">
                <div class="intriduce">
                    我是<text class="point">王鹏翔</text>，一位充满热情的<text class="point">8年+UI设计师</text>，致力于打造简洁现代的数字体验。我通过精心的设计和切实有效的解决方案，帮助品牌讲述他们的故事。
                </div>
            </div>
            <!-- content  -->
            <div class="content-box">
                <template v-for="value in contentList" :key="value.title">
                    <div class="content-item" @click="handleContent(value.url, value.inner)" data-aos="fade-up" data-aos-delay="100">
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
            </div>
            <!-- 关于我 -->
            <div class="same-content about-box" data-aos="fade-up" data-aos-delay="100">
                <div class="part-title">关于我</div>
                <div class="about-content">
                    <p class="text-content">我融合<text class="point">设计、故事讲述和技术，</text>打造独具特色的品牌，从而创造卓越的数字体验。我的方法兼具<text class="point">创意与创新，突破常规，力求呈现兼具实用性和启发性的作品。</text></p>
                    <p class="text-content">从雄心勃勃的初创公司到成熟的企业，我与客户紧密合作，将他们的理念变为现实，<text class="point">打造能够与受众建立深层联系的互动体验。</text>每个项目都不仅仅是一个网站，更是一段将愿景转化为数字现实的旅程，旨在<text class="point">吸引受众、激发灵感，并留下深刻的印象。</text></p>
                    <div class="infomation">
                        <div class="info-item">
                            <div class="info">8年+</div>
                            <div class="info-title">工作经验</div>
                        </div>
                        <div class="info-item">
                            <div class="info">高级UI设计师</div>
                            <div class="info-title">期望职位</div>
                        </div>
                        <div class="info-item">
                            <div class="info">20K-25K</div>
                            <div class="info-title">期望薪资</div>
                        </div>
                    </div>
                    <div class="photo-box">
                        <img src="../assets/img/homePage/personal_photo_01.png" alt="personal_photo" class="photo first">
                        <img src="../assets/img/homePage/personal_photo_02.png" alt="personal_photo" class="photo second">
                    </div>
                </div>
            </div>
            <!-- work experience -->
            <div class="same-content experience-box" data-aos="fade-up" data-aos-delay="100">
                <div class="part-title">工作经验</div>
                <div class="experience-content">
                    <div class="experience-item">
                        <div class="company">(信征)北京认知星空信息技术有限公司</div>
                        <div class="work-info">
                            <div class="info-post">UI设计主管</div>
                            <div class="time-post">2022.6-2025.12</div>
                        </div>
                    </div>
                    <div class="experience-item">
                        <div class="company">北京微淼财商科技有限公司</div>
                        <div class="work-info">
                            <div class="info-post">高级UI/UX设计师</div>
                            <div class="time-post">2019.7-2022.4</div>
                        </div>
                    </div>
                    <div class="experience-item">
                        <div class="company">赤子城网络技术(北京)有限公司</div>
                        <div class="work-info">
                            <div class="info-post">UI设计师</div>
                            <div class="time-post">2017.7-2019.7</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- mine-thing -->
            <div class="same-content mine-thing" data-aos="fade-up" data-aos-delay="100">
                <div class="part-title">我做的事</div>
                <div class="mine-content">
                    <p class="mine-item">用户界面设计/用户体验设计</p>
                    <p class="mine-item">品牌推广设计</p>
                    <p class="mine-item">网站设计/网站开发</p>
                    <p class="mine-item">动效设计</p>
                    <p class="mine-item">搭建设计规范体系</p>
                    <p class="mine-item">设计指导</p>
                    <p class="mine-item">KPI效能考核</p>
                </div>
            </div>
        </div>
        <!-- contact -->
        <div class="contact">
            <div class="part-title">联系我</div>
            <div class="contact-content">
                <p class="contact-text">准备好合作了吗？我们来聊聊自由职业项目、合作以及全职职位吧。</p>
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="info-title">电话:</div>
                        <div class="info-content">15735921083</div>
                    </div>
                    <div class="contact-item">
                        <div class="info-title">微信:</div>
                        <div class="info-content">15735921083</div>
                    </div>
                    <div class="contact-item">
                        <div class="info-title">邮箱:</div>
                        <div class="info-content">532755415@QQ.COM</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, nextTick } from 'vue';
import {  useRouter } from 'vue-router';
import content_img_01 from '@/assets/img/homePage/content_img_01.png'; 
import content_img_02 from '@/assets/img/homePage/content_img_02.png'; 
import content_img_03 from '@/assets/img/homePage/content_img_03.png'; 
import content_img_04 from '@/assets/img/homePage/content_img_04.png'; 
import content_img_05 from '@/assets/img/homePage/content_img_05.png'; 
import content_img_06 from '@/assets/img/homePage/content_img_06.png';
import { handleSessionStorage } from '@/utils/utils';
import Aos from 'aos';
import { useSplashStore } from '@/store/headerStore';
const splashStore = useSplashStore()
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

onMounted(() => {
    const hasVisited = handleSessionStorage.get('hasVisited')
    if (!hasVisited) {
        splashStore.changeStatus(true)
        setTimeout(() => {
            splashStore.changeStatus(false)
            handleSessionStorage.set('hasVisited', 'true')
        }, 2000);
    } else {
        // 不是第一次访问：直接显示内容并初始化 AOS
        splashStore.changeStatus(false)
        nextTick(() => {
            Aos.refresh()
        })
    }
})

// cover 相关

const onCoverLeft = () => {
    // 等待 DOM 更新后重新初始化 AOS
    nextTick(() => {
        Aos.refresh()
    })
}

const onCoverAppear = () => {
    console.log('onCoverAppear')
}

</script>



<style lang="less" scoped>
.mask {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: @bg-color;
    z-index: 999;
    .mask-img {
        width: 1123px;
        height: 495px;
        display: block;
        object-fit: contain;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
/* 渐变动画 */
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

.fade-enter-to, .fade-leave-from {
    opacity: 1;
}
.container-box {
    width: 100%;
}
.homepage-container {
    width: 100%;
    overflow: hidden;
    padding: 0 @content-padding;
    box-sizing: border-box;
}
.intriduce-box {
    width: 100%;
    height: 392px;
    display: flex;
    justify-content: right;
    margin-top: 36px;
    margin-right: 30px;
    align-items: center;
    position: relative;
    .intruduce-bg-img {
        width: 620px;
        height: 392px;
        position: absolute;
        right: 0;
        top: 0;
    }
    .intriduce{
        width: 620px;
        text-align: left;
        font-size: 24px;
        color: @text-white-color;
        line-height: 48px;
        font-weight: normal;
        font-family: Roboto Condensed-Regular;

        .point {
            font-size: 40px;
            font-weight: bold;
            color: @text-highlight-color;
            font-family: Roboto Condensed-Bold;
        }
    }
}
.content-box {
    width: 100%;
    margin: 78px 0 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
.same-content {
    display: flex;
    justify-content: space-between;
    .part-title {
        font-size: @content-title-font-size;
        color: @text-white-color;
        font-family: 'Roboto Condensed-Bold';
        font-weight: 500;
    }

    .text-content {
        font-size: 28px;
        font-family: 'Roboto Condensed-Regular';
        color: @text-white-color;
        text-align: left;
        line-height: 42px;
        margin-bottom: 60px;
        .point {
            font-family: 'Roboto Condensed-Bold';
            color: @text-highlight-color;
        }
    }
    .infomation {
        width: 100%;
        height: 392px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;
        background: url('@/assets/img/homePage/about_bg.png') no-repeat 50% 50%;
        background-size: contain;
        .info-item {
            display: flex;
            flex-direction: column;
            align-items: start;
            .info {
                font-size: 48px;
                color: @text-highlight-color;
                margin-bottom: 15px;
                font-family: 'Roboto Condensed-Bold';
            }
            .info-title {
                font-size: 20px;
                font-family: 'Roboto Condensed-Regular';
                color: @text-white-60-color;
            }
        }
    }
    .photo-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: end;
        .photo {
            width: 251px;
            height: 210px;
            &.first {
                width: 400px;
                height: 500px;
            }
        }
    }
}
.experience-box ,.mine-thing{
    margin-top: 200px;
}
.experience-content, .about-content, .mine-content{
    width: 670px;
}
.experience-item {
    width: 100%;
    margin-bottom: 80px;
    &:last-child {
        margin-bottom: 0;
    }
    .company {
        font-size: 38px;
        font-family: Roboto Condensed-Regular;
        color: @text-highlight-color;
        margin-bottom: 8px;
    }
    .work-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: @text-white-60-color;
        font-size: 24px;
        font-family: Roboto Condensed-Regular;
    }
}

.mine-thing {
    padding-bottom: 200px;
    background: url('@/assets/img/homePage/mask_bg.png') no-repeat bottom left;
    background-size: contain;
}
.mine-item {
    font-size: 38px;
    font-family: Roboto Condensed-Regular;
    color: @text-highlight-color;
    &:nth-child(2n) {
        color: @text-white-80-color;
    }
}

.contact {
    width: 100%;
    height: 826px;
    padding: 180px @content-padding 0;
    box-sizing: border-box;
    background: @text-highlight-color;
    box-sizing: border-box;
    color: @text-black-color;
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto Condensed-Bold';
    .part-title {
        font-size: 40px;
        font-family: 'Roboto Condensed-Bold';
        font-weight: 500;
    }
    .contact-content {
        width: 621px;
        .contact-text {
            font-size: 40px;
            line-height: 60px;
            text-align: left;
            margin-bottom: 100px;
            font-family: 'Roboto Condensed-Bold';
            font-weight: 600;
        }
        .contact-info {
            display: flex;
            justify-content: left;
            flex-wrap: wrap;
            .contact-item {
                text-align: left;
                margin-right: 89px;
                margin-bottom: 50px;
                .info-title {
                    font-size: 24px;
                    font-family: 'Roboto Condensed-Regular';
                }
                .info-content {
                    font-size: 32px;

                }
            }
        }

    }
}




.dots-box {
    position: absolute;
    text-align: center;
    left: 50%;
    bottom: 65px;
    transform: translateX(-50%);
}

.loading-text {
    color: @text-white-color;
    font-size: 16px;
    font-weight: 500;
    margin-right: 10px;
}

.dots {
    display: inline-flex;
    gap: 4px;
}

.dot {
    width: 4px;
    height: 4px;
    background: @text-white-color;
    border-radius: 50%;
    display: inline-block;
    animation: bounce 1.4s infinite ease-in-out both;
}

.dot:nth-child(1) { animation-delay: -0.32s; }
.dot:nth-child(2) { animation-delay: -0.16s; }

@keyframes bounce {
    0%, 80%, 100% { 
        transform: scale(0);
    } 
    40% { 
        transform: scale(1);
    }
}

</style>