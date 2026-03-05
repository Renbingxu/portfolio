<template>
    <div class="contact-me-box">
        <section class="about-header">
            <p class="about-text" data-aos="fade-up" data-aos-delay="100" data-aos-offset="100">准备好合作了吗？我们来聊聊自由职业项目、合作以及全职职位吧。</p>
            <div class="infomation" data-aos="fade-up" data-aos-delay="300" data-aos-offset="100">
                <div class="info-item">
                    <div class="info-tips">
                        <img src="../assets/img/contactMe/info_tips.png" alt="">
                    </div>
                    <div class="info-content">
                        <p class="info-name">电话:</p>
                        <p class="info-value">15735921083</p>
                    </div>
                </div>
                <div class="info-item" >
                    <div class="info-tips">
                        <img src="../assets/img/contactMe/info_tips.png" alt="">
                    </div>
                    <div class="info-content">
                        <p class="info-name">微信:</p>
                        <p class="info-value">15735921083</p>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-tips">
                        <img src="../assets/img/contactMe/info_tips.png" alt="">
                    </div>
                    <div class="info-content">
                        <p class="info-name">邮箱:</p>
                        <p class="info-value">532755415@QQ.COM</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script lang="ts" setup>

</script>


<style lang="less" scoped>
.contact-me-box {
    width: 100%;
    min-height: 100vh;
    background: @bg-color;
    overflow: hidden;
    padding: 0 40px 100px;
    box-sizing: border-box;
}
.about-header {
    width: 1360px;
    height: 965px;
    margin: 100px auto;
    background: url('@/assets/img/contactMe/contact_me_bg.png') no-repeat left top;
    background-size: contain;
    padding: 0 173px;
    box-sizing: border-box;
    overflow: hidden;
    .about-text {
        width: 900px;
        font-size: 48px;
        font-weight: bold;
        font-family: 'Roboto Condensed-Bold';
        line-height: 72px;
        text-align: center;
        margin: 215px auto 160px;
        color: @text-black-color;
    }
    .infomation {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-between;
        .info-item {
            display: flex;
            align-items: flex-start;
            &:nth-child(2) {
                justify-self: end;
            }
            .info-tips {
                width: 36px;
                height: 36px;
                margin-right: 14px;
                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }
            .info-content {
                flex: 1;
                color: @text-black-color;
                text-align: left;
                .info-name {
                    font-size: 24px;
                    font-family: 'Roboto Condensed-Regular';
                }
                .info-value {
                    font-size: 48px;
                    font-family: 'Roboto Condensed-Bold';
                    font-weight: 400;
                }
            }
        }
    }
}
</style>