<style scoped>
    #top-bar {
        height: 35px;
        width: 100%;
        background-color: #f7f7f7;
        position: relative;
        z-index: 30;
    }

    #location {
        position: relative;
        width: 100px;
        height: 35px;
        top: 0;
        cursor: default;
        border: 1px solid #f7f7f7;
        border-top: none;
    }

    #location img {
        position: relative;
        left: 18px;
        top: 8px;
    }

    #location:hover #area {
        display: block;
    }

    #location:hover {
        background-color: white;
        border: 1px solid #0097da;
        border-top: none;
    }

    #location span {
        position: relative;
        left: 25px;
        top: 5px;
    }

    #area {
        position: absolute;
        width: 192px;
        height: 90px;
        background-color: #fff;
        top: 33px;
        left: -1px;
        border-left: 1px solid #0097da;
        border-right: 1px solid #0097da;
        border-bottom: 1px solid #0097da;
        z-index: 2;
        display: none;
    }

    #area ul {
        width: 168px;
        margin: 0 auto;
    }

    #area ul p {
        width: 93px;
        height: 0;
        border-top: 1px solid #0097da;
        margin-left: 87px;
    }

    #area ul li {
        width: 50px;
        float: left;
        margin-top: 10px;
        margin-left: 3px;
        margin-right: 3px;
        color: #818080;
        text-align: center;
        line-height: 30px;
    }

    #area ul li.active {
        background-color: #0ca6ea !important;
        color: white !important;
    }

    #area ul li:hover {
        cursor: pointer;
        color: #0ca6ea;
        background-color: #F4F4F4;
    }

    #header-user-block {
        overflow: hidden;
    }
    
    #header-user-block ul {
        display: inline-block;
        float: right;
        margin-left: 30px;
    }

    #header-user-block ul li {
        float: left;
        height: 35px;
        line-height: 35px;
    }

    #header-user-block ul li a {
        cursor: pointer;
        border-right: 1px solid #9f9f9f;
        padding: 0 10px;
        height: 20px;
        color: #808080;
    }

    #header-user-block ul li a:hover {
        color: #0ca6ea;
    }

    #header-user-block ul :last-child a {
        border-right: none;
    }

    #tel a {
        cursor: pointer;
        color: #4e4e4e;
    }

    #tel a:hover {
        color: #0ca6ea;
    }

    #tel {
        display: inline-block;
        font-size: 13px;
        color: #4e4e4e;
        float: right;
        line-height: 35px;
    }

    .ci-right {
        top: 13px;
        right: 10px;
        height: 7px;
        overflow: hidden;
        position: absolute;
        display: block;
        font: 400 15px/15px consolas;
        color: #6A6A6A;
        transform: rotate(0deg);
        transition: transform .2s ease-in 0s;
    }

    #location:hover .ci-right {
        transform: rotate(180deg);
        transition: transform .2s ease-in 0s;
    }

    s {
        position: relative;
        top: -7px;
        text-decoration: none;
    }
</style>

<template>
    <div id="top-bar">
        <div class="container">
            <div id="location" class="l">
                <img src="../assets/img/icon_location.png">
                <span>{{ $store.getters.getRegion.name }}</span>
                <i class="ci-right">
                    <s>◇</s>
                </i>
                <div id="area">
                    <ul>
                        <p></p>
                        <li v-for="(item, index) in $store.getters.getRegions" :class="{active: index == $store.state.region}">
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
            </div>
            <div id="header-user-block" class="r">
                <ul>
                    <li v-if="!$store.state.isLogin"><a href="#">注册</a></li>
                    <li v-if="!$store.state.isLogin"><a href="#">登录</a></li>
                    <li v-if="$store.state.isLogin"><a href="#">订单</a></li>
                    <li v-if="$store.state.isLogin"><a href="#">个人中心</a></li>
                    <li v-if="$store.state.isLogin"><a href="#">购物车（0）</a></li>
                </ul>
                <div id="tel" v-if="$store.state.isLogin">
                    <span>{{ $store.state.user.phone }}</span>&nbsp;
                    <a href="#">退出</a>
                </div>
            </div>
        </div>
    </div>
</template>