<template>
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
</template>

<style lang="less" scoped>
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
</style>