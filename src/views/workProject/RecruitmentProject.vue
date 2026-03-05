<template>
    <div class="recruitment-container" ref="recruitmentRef">
        <!-- header -->
        <section class="recruitment-header">
            <img src="../../assets/img/workProject/recruitment/recruitment_header_bg.png" alt="" class="image header-bg">
            <img src="../../assets/img/workProject/recruitment/recruitment_header_text.png" alt="" class="image header-text" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
        </section>
        <section class="blank"></section>
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/my_role.png" alt="" class="image">
        </section>
        <!-- part-01 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_01.png" alt="" class="image">
        </section>
        <!-- part-02 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_02.png" alt="" class="image">
        </section>
        <!-- part-03 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_03.png" alt="" class="image">
        </section>
        <!-- part-04 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_04.png" alt="" class="image">
        </section>
        <!-- part-05 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_05.png" alt="" class="image">
        </section>
        <!-- part-06 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_06.png" alt="" class="image">
        </section>
        <!-- part-07 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_07.png" alt="" class="image">
        </section>
        <!-- part-08 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_08.png" alt="" class="image">
        </section>
        <!-- part-09 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_09.png" alt="" class="image">
        </section>
        <!-- part-10 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_10.png" alt="" class="image">
        </section>
        <!-- part-11 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_11.png" alt="" class="image">
        </section>

        <!-- part-12 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_12.png" alt="" class="image">
        </section>
        <!-- part-13 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_13.png" alt="" class="image">
        </section>
        <!-- part-14 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_14.png" alt="" class="image">
        </section>
        <!-- part-15 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_15.png" alt="" class="image">
        </section>
        <!-- part-16 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_16.png" alt="" class="image">
        </section>
        <!-- part-17 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_17.png" alt="" class="image">
        </section>
        <!-- part-18 -->
        <section class="part-box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">
            <img src="../../assets/img/workProject/recruitment/part_18.png" alt="" class="image">
        </section>

        <section class="blank_large"></section>

    </div>
    <AppFooter></AppFooter>
</template>

<script lang="ts" setup>
import AppFooter from '@/components/AppFooter.vue';
import Aos from "aos";
import imagesLoaded from 'imagesloaded'
import { onMounted, ref, nextTick } from "vue";

const recruitmentRef = ref<HTMLElement | null>(null)

onMounted(() => {
    imagesLoaded(recruitmentRef.value as any, function () {
        console.log('🎉 容器内的所有图片都加载完成了！')
        nextTick(() => {
            Aos.refresh()
        })
    })
})
</script>

<style lang="less" scoped>
.image {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
}
.blank {
    width: 100%;
    height: 60px;
}
.blank_large {
    width: 100%;
    height: 200px;

}
.recruitment-container {
    width: 100%;
    overflow: hidden;
    background: @bg-color;
}
.part-box {
    width: 100%;
    position: relative;
}
.recruitment-header {
    width: 100%;
    position: relative;
    .header-bg {
        width: 1440px;
        height: auto;
        object-fit: contain;
    }
    .header-text {
        width: 1113px;
        height: 469px;
        position: absolute;
        top: 183px;
        left: 50%;
        transform: translateX(-50%);
        object-fit: contain;
    }
}

</style>