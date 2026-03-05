<template>
    <div class="work-container" ref="workContainer">
        <!-- header -->
        <section class="project-header">
            <img src="../../assets/img/workProject/project_header.png" alt="" class="project-header-img image">
            <img src="../../assets/img/workProject/project_header_text.png" alt="" class="project-header-text" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
        </section>
        <!-- achievement -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/achievement.png" alt="" class="achoevement image">
        </section>
        <section class="part-box" data-aos="fade-up" data-aos-offset="100">
            <img class="current-situation image" src="../../assets/img/workProject/current_situation.png" alt="">
        </section>
        <!-- trend -->
        <section class="part-box" data-aos="fade-up" data-aos-offset="100">
            <img class="trend image" src="../../assets/img/workProject/trend.png" alt="">
        </section>
        <!-- differentiation -->
        <section class="part-box" data-aos="fade-up" data-aos-offset="100">
            <img class="differentiation image" src="../../assets/img/workProject/differentiation.png" alt="">
        </section>
        <!-- specification -->
        <section class="part-box" >
            <img class="specification image" src="../../assets/img/workProject/specification.png" alt="" data-aos="fade-up" data-aos-offset="100">
            <img class="specification-mask image" src="../../assets/img/workProject/specification_mask.png" alt="" data-aos="fade-up" data-aos-offset="100">
        </section>
        <!-- home page -->
         <section class="part-box" data-aos="fade-up" data-aos-offset="100">
            <img class="home-page image" src="../../assets/img/workProject/home_page.png" alt="">
        </section>
        <!-- process -->
         <section class="part-box" data-aos="fade-up" data-aos-offset="100">
            <img class="process image" src="../../assets/img/workProject/process.png" alt="">
        </section>
        <!-- core process -->
         <section class="part-box" data-aos="fade-up" data-aos-offset="100">
            <img class="core-process image" src="../../assets/img/workProject/core_process.png" alt="">
        </section>
        <!-- core business -->
        <section class="part-box" data-aos="fade-up" data-aos-offset="100">
            <img class="core-business image" src="../../assets/img/workProject/core_business.png" alt="">
        </section>
        <!-- result -->
        <section class="part-box" data-aos="fade-up" data-aos-offset="100">
            <img class="result image" src="../../assets/img/workProject/result.png" alt="">
        </section>
        <!-- footer mask -->
        <section class="part-box" data-aos="fade-up" data-aos-offset="100">
            <img class="footer-mask image" src="../../assets/img/workProject/footer_mask.png" alt="">
        </section>
    </div>
    <AppFooter></AppFooter>
</template>

<script lang="ts" setup>
import AppFooter from "@/components/AppFooter.vue";
import Aos from "aos";
import imagesLoaded from 'imagesloaded'
import { onMounted, ref, nextTick } from "vue";

const workContainer = ref<HTMLElement | null>(null)

onMounted(() => {
    imagesLoaded(workContainer.value as any, function () {
        console.log('🎉 容器内的所有图片都加载完成了！')
        nextTick(() => {
            Aos.refresh()
        })
    })
})


</script>

<style lang="less" scoped>
.work-container {
    width: 100%;
    overflow: hidden;
}
.part-box {
    width: 100%;
    position: relative;
}
.project-header {
    width: 100%;
    position: relative;
    .project-header-img {
        width: 1440px;
        height: auto;
        object-fit: contain;
    }
    .project-header-text {
        width: 1113px;
        height: 469px;
        position: absolute;
        top: 183px;
        left: 50%;
        transform: translateX(-50%);
        object-fit: contain;
    }
}
.achoevement {
    width: 100%;
    height: auto;
    object-fit: contain;
}
.image {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
}

</style>