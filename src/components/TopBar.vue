<style scoped>
    .header {
        height: 30px;
        width: 100%;
        background-color: #f7f7f7;
        position: relative;
        z-index: 30;
    }

    .location {
        position: relative;
        width: 100px;
        height: 29px;
        border: 1px solid #f7f7f7;
    }

    .location:hover .area {
        display: block;
    }

    .location:hover {
        border: 1px solid #0097da;
    }

    .location img {
        position: absolute;
        top: -3px;
        left: 6px;
    }

    .location span {
        position: relative;
        left: 25px;
        top: 5px;
    }

    .tel a {
        color: #4e4e4e;
    }

    .tel a:hover {
        color: #0ca6ea;
    }

    .tel {
        font-size: 13px;
        color: #4e4e4e;
        position: relative;
        top: -10px;
        right: 20px;
    }

    .area {
        position: absolute;
        width: 174px;
        height: 58px;
        background-color: #fff;
        top: 29px;
        left: -1px;
        border-left: 1px solid #0097da;
        border-right: 1px solid #0097da;
        border-bottom: 1px solid #0097da;
        z-index: 2;
        display: none;
    }

    .area ul {
        width: 150px;
        margin: 0 auto;
    }

    .area ul p {
        width: 74px;
        height: 0;
        border-top: 1px solid #0097da;
        margin-left: 88px;
    }

    .area ul li {
        width: 50px;
        float: left;
        margin-top: 10px;
        color: #818080;
        text-align: center;
    }

    .area ul li:hover {
        cursor: pointer;
        color: #0098db;
    }

    .hea-r ul {
        display: inline-block;
    }

    .hea-r ul li {
        float: left;
        height: 30px;
        line-height: 30px;
    }

    .hea-r ul li a {
        border-right: 1px solid #9f9f9f;
        padding: 0 10px;
        height: 20px;
        color: #808080;
    }

    .hea-r ul li a:hover {
        color: #0ca6ea;
    }

    .hea-r ul :last-child a {
        border-right: none;
    }
</style>

<template>
    <div id="top-bar">
        <div class="header">
            <div class="container">
                <div class="location l">
                    <img src="../assets/img/icon_location.png">
                    <span>上海</span>
                    <div class="area">
                        <ul>
                            <p></p>
                            <li>北京</li>
                            <li>上海</li>
                            <li>成都</li>
                            <li>广州</li>
                            <li>镇江</li>
                        </ul>
                    </div>
                </div>
                <div class="hea-r r">
                    <span class="tel" v-if="isLogin">18883390061 <a href="#">退出</a></span>
                    <ul>
                        <li v-if="!isLogin"><a href="#">注册</a></li>
                        <li v-if="!isLogin"><a href="#">登录</a></li>
                        <li v-if="isLogin"><a href="#">订单</a></li>
                        <li v-if="isLogin"><a href="#">购物车（0）</a></li>
                        <li v-if="isLogin"><a href="#">个人中心</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isLogin: true
            }
        }
    }
</script>