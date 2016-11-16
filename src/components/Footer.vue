<style scoped>
    .footer {
        width: 100%;
        height: 158px;
        margin-top: 15px;
        position: relative;
        background-color: #f5f5f5;
    }

    .footer_ul li {
        float: left;
        margin: 20px 20px 0;
        border-right: 1px solid #d2d2d2;
    }

    .footer_ul :last-child {
        border-right: none;

    }

    .footer_div {
        float: left;
        width: 150px;
    }

    .footer_div h3 {
        font-size: 14px;
        color: #999999;
        height: 40px;
        font-weight: normal;
        line-height: 40px;
    }

    .footer_div p {
        font-size: 12px;
        height: 25px;
        line-height: 25px;
    }

    .footer_div p a {
        font-size: 12px;
        color: #999999;
    }

    .footer_ul_2 {
        width: 270px;
        text-align: center;
    }

    .footer_ul_2 p {
        color: #606060;
        font-size: 20px;
        margin-left: -40px;
    }

    .footer_ul_2 img {
        margin-left: -40px;
    }

    .footer_ul_3 img {
        margin: 20px 30px;
    }

    .footer_bottom {
        height: 39px;
        margin-top: 15px;
        background-color: #eaeaea;
    }

    .footer_bottom p {
        text-align: center;
        font-size: 12px;
        color: #999999;
        line-height: 39px;
    }

    .weibo {
        background-image: url('../assets/img/foo_3.png');
        height: 67px;
        width: 67px;
        margin: 24px 24px 0 0;
        cursor: pointer;
    }

    .wechat {
        background-image: url('../assets/img/foo_2.png');
        height: 67px;
        width: 67px;
        margin-top: 24px;
    }

    .weibo:hover {
        background-image: url('../assets/img/foo_3_active.png');
    }

    .wechat:hover {
        background-image: url('../assets/img/foo_2_active.png');
        cursor: pointer;
    }

    .wechat:hover + .wechat-qrcode {
        opacity: 1;
        left: 20px;
        transition: all 0.3s ease-in-out;
    }

    .wechat-qrcode {
        opacity: 0;
        transition: all 0.3s ease-in-out;
        position: relative;
        left: -20px;
        width: 100px;
        margin: 5px 0 0 0 !important;
    }
</style>

<template>
    <div class="footer">
        <div class="container">
            <ul class="footer_ul">
                <li>
                    <div class="footer_div">
                        <h3>企业动态</h3>
                        <p><router-link to="/about-us">关于我们</router-link></p>
                        <p><router-link to="/recruitment">加入我们</router-link></p>
                    </div>
                    <div class="footer_div">
                        <h3>订单服务</h3>
                        <p><router-link to="/about-us">索取发票</router-link></p>
                        <p><router-link to="/about-us">退款说明</router-link></p>
                        <p><router-link to="/about-us">支付方式</router-link></p>
                    </div>
                    <div class="footer_div">
                        <h3>售后服务</h3>
                        <p><router-link to="/about-us">联系我们</router-link></p>
                        <p><router-link to="/about-us">用户协议</router-link></p>
                    </div>

                </li>
                <li class="footer_ul_2">
                    <img src="../assets/img/foo_1.png">
                    <p>400-716-8896</p>
                </li>
                <li class="footer_ul_3">
                    <div class="weibo l"></div>
                    <div class="wechat l"></div>
                    <img class="wechat-qrcode" src="../assets/wechat-qrcode.jpg">
                </li>
            </ul>
        </div>
        <div class="clearfix"></div>
        <div class="footer_bottom">
            <p>Copyright @ 2015-2016 www.qiyewan.com 企业湾 备案号：沪CP备15043250号-2</p>
        </div>
    </div>
</template>