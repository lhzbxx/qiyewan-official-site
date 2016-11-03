<style scoped xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
    #introduce {
        height: 127px;
        width: 100%;
        margin: 0 auto;
    }

    .introduce_img1 {
        width: 77px;
        height: 80px;
        background: url("../assets/img/intro_1.png") no-repeat;
    }

    #introduce ul li:hover .introduce_img1 {
        background: url("../assets/img/intro_5.png") no-repeat;
    }

    .introduce_img2 {
        width: 77px;
        height: 80px;
        background: url("../assets/img/intro_2.png") no-repeat;
    }

    #introduce ul li:hover .introduce_img2 {
        background: url("../assets/img/intro_6.png") no-repeat;
    }

    .introduce_img3 {
        width: 89px;
        height: 80px;
        background: url("../assets/img/intro_3.png") no-repeat;
    }

    #introduce ul li:hover .introduce_img3 {
        background: url("../assets/img/intro_7.png") no-repeat;
    }

    .introduce_img4 {
        width: 77px;
        height: 80px;
        background: url("../assets/img/intro_4.png") no-repeat;
    }

    #introduce ul li:hover .introduce_img4 {
        background: url("../assets/img/intro_8.png") no-repeat;
    }

    #introduce ul {
        margin-top: 30px;
    }

    #introduce ul li {
        float: left;
        border: 1px solid #e9e9e9;
        margin-right: 15px;
        padding: 20px 24px 20px 25px;
        cursor: pointer;
        height: 107px;
        width: 278px;
        transition: all 0.3s ease-in-out;
    }

    #introduce ul li:hover {
        box-shadow: 0 0 7px #55b2da;
    }

    #introduce ul li:hover h5 {
        color: #0098db;
        transition: color 0.3s ease-in-out;
    }

    #introduce ul :last-child {
        margin-right: 0;
    }

    #introduce h5 {
        font-size: 19px;
        color: #2f2f2f;
        font-weight: normal;
        margin-top: 7px;
        letter-spacing: 2px;
        transition: color 0.3s ease-in-out;
    }

    #introduce p {
        font-size: 14px;
        color: #707070;
        margin-top: 5px;
        letter-spacing: 1px;
    }

    #hot-products {
        height: 760px;
        width: 100%;
        background-color: #f5f6f6;
    }

    .title h3 {
        font-size: 24px;
        padding-top: 50px;
        letter-spacing: 3px;
        color: #5d5d5d;
    }

    .title .prompt {
        font-size: 14px;
        color: #646464;
        padding-top: 12px;
        letter-spacing: 1px;
    }

    .title {
        text-align: center;
        padding-bottom: 40px;
    }

    .hot-product {
        float: left;
        width: 22%;
        height: 563px;
        border: 1px solid rgb(219, 219, 219);
        position: relative;
        z-index: 100;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1), z-index 0s 0.12s;
    }

    .hot-product.active {
        width: 34%;
        height: 573px;
        border: 1px solid #55b2da;
        box-shadow: 0 0 20px #55b2da;
        z-index: 101;
    }

    .card {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        background-color: white;
    }

    .hot-product p {
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #fff;
        font-size: 16px;
    }

    .hot-product-content {
        position: absolute;
        top: 160px;
        height: 400px;
        width: 100%;
    }

    .content-first {
        width: 100%;
        z-index: 3;
        opacity: 1;
        transition: all 0.12s cubic-bezier(0.4, 0, 0.2, 1) 0.18s;
    }

    .hot-product.active .content-first {
        z-index: 2;
        opacity: 0;
        transition: all 0.12s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    }

    .content-second {
        z-index: 2;
        opacity: 0;
        left: 25px;
        max-width: 343px;
        background-color: #fff;
        height: 410px;
        padding-top: 15px;
        transition: all 0.12s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    }

    .hot-product.active .content-second {
        z-index: 3;
        opacity: 1;
        transition: all 0.12s cubic-bezier(0.4, 0, 0.2, 1) 0.18s;
    }

    .content-info {
        width: 100%;
        height: 159px;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: rgb(235, 235, 236);
        padding-top: 20px;
        text-align: center;
        position: absolute;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1), z-index 0s 0.12s;
    }

    .hot-product.active .content-info {
        top: -10px;
        height: 169px;
        background-color: #eef5f8;
        z-index: 3;
    }

    .content-info-detail {
        position: absolute;
        bottom: 17px;
        width: 100%;
    }

    .classification-title {
        text-align: center;
        color: black;
        font-size: 16px;
        font-weight: bold;
        padding-top: 10px;
        padding-bottom: 6px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1), z-index 0s 0.12s;
    }

    .hot-product.active .classification-title {
        color: #019bdf;
        font-size: 18px;
    }

    .classification-summary {
        font-size: 12px;
        color: #9a9fa3;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1), z-index 0s 0.12s;
    }

    .hot-product.active .classification-summary {
        color: #2daee7;
    }

    .content-split-line {
        height: 0;
        border-top: 1px solid rgb(92, 92, 92);
        width: 63px;
        margin: 0 auto;
        position: relative;
        top: 159px;
        z-index: 3;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1), z-index 0s 0.12s;
    }

    .hot-product.active .content-split-line {
        border-top: 1px solid rgb(34, 166, 224);
        width: 348px;
    }

    .main-product {
        padding-bottom: 25px;
        border-bottom: 1px solid #eee;
    }

    .other-product-summary {
        font-size: 12px;
        color: #9a9fa3;
    }

    .content-second h5 {
        padding-top: 15px;
        padding-bottom: 10px;
        font-size: 18px;
        color: #2e2e2e;
        font-weight: normal;
        letter-spacing: 2px;
    }

    .main-product-summary {
        color: #a9a9a9;
        font-size: 14px;
        line-height: 22px;
    }

    .main-btn {
        background-color: white;
        margin-top: 20px;
        width: 96px;
        height: 30px;
        font-size: 14px;
        line-height: 28px;
        text-align: center;
        border: 1px solid rgb(34, 166, 224);
        color: #0098db;
        cursor: pointer;
        transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    }

    .main-btn:hover {
        background-color: rgb(34, 166, 224);
        color: white;
    }

    .other-product {
        width: 50%;
        margin-top: 25px;
    }

    .other-product h6 {
        color: #404040;
        font-size: 14px;
        font-weight: normal;
        line-height: 30px;
    }

    .other-product a {
        cursor: pointer;
        display: block;
        color: #0098db;
        font-size: 12px;
        margin-top: 7px;
    }

    .other-product a:hover {
        text-decoration: underline;
    }

    #tools {
        height: 385px;
    }

    #tools ul {
        width: 1000px;
        margin: 0 auto;
    }

    .tool {
        float: left;
        width: 193px;
        position: relative;
        margin-right: 75px;
        cursor: pointer;
    }

    #tools ul :last-child {
        margin-right: 0;
    }

    .tool:hover .tool-underline {
        width: 100%;
        opacity: 1;
        transition: all 0.3s ease-in-out;
    }

    .tool-underline {
        height: 0;
        width: 0;
        opacity: 0;
        border-top: 3px solid #0098db;
        transition: all 0.3s ease-in-out;
    }

    .tool:hover .tool-img-mask {
        opacity: 0.5;
    }

    .tool-img-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 188px;
        height: 113px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        background-color: #0098db;
        opacity: 0;
        transition: all 1s;
    }

    .tool-img-mask img {
        padding: 30px 63px;
    }

    .tool p {
        color: #676767;
        font-size: 12px;
        margin: 8px 0 5px 0;
    }

    .tool h5 {
        color: #2f2f2f;
        font-size: 18px;
        font-weight: normal;
        padding-bottom: 10px;
    }

    #timeline {
        width: 100%;
        height: 820px;
    }

    #timeline ul li {
        text-align: center;
        height: 50px;
        line-height: 50px;
        width: 25%;
        border: 1px solid #dcdcdc;
        float: left;
        font-size: 20px;
        position: relative;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        margin-left: -1px;
    }

    #timeline ul li.active:before, #timeline ul li.active:after {
        border: solid transparent;
        content: ' ';
        height: 0;
        left: 100%;
        top: 0;
        position: absolute;
        width: 0;
    }

    #timeline ul li.active:before {
        top: -1px;
        border-left-width: 26px;
        border-right-width: 26px;
        border-bottom-width: 25px;
        border-top-width: 25px;
        border-left-color: #139cd7;
        z-index: 10;
    }

    #timeline ul li.active {
        color: #139cd7;
        border-color: #139cd7;
        /* box-shadow: 0 0 20px #139cd7; */
    }

    #timeline ul li.active:after {
        top: 0;
        border-width: 24px;
        border-left-color: white;
        z-index: 10;
    }

    #timeline ul li a {
        color: #555555;
    }

    #timeline ul {
        height: 50px;
    }

    .timeline-products span {
        display: inline-block;
        width: 140px;
        height: 36px !important;
        font-size: 14px;
        color: #dcdcdc;
        border: 1px solid #dcdcdc;
        margin: 25px 25px 20px 0;
        line-height: 36px;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    .timeline-products span:hover {
        color: #139cd7;
        border-color: #139cd7;
    }

    .timeline-products span.active {
        color: white;
        border-color: #139cd7;
        background-color: #139cd7;

    }

    .timeline-pic {
        padding: 10px;
    }

    .timeline-pic:hover img {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        transform: translate3d(0, -3px, 0);
    }

    .timeline-pic img {
        width: 100%;
        height: 100%;
        transition: all .2s linear;
        cursor: pointer;
    }

    .timeline-pic-left {
        width: 20%;
        height: 487px;
        float: left;
    }

    .timeline-pic-right {
        width: 80%;
        height: 504px;
        float: right;
    }

    .timeline-pic-one {
        width: 50%;
        height: 243px;
    }

    .timeline-pic-two {
        width: 25%;
        height: 243px;
    }

    #banner {
        width: 100%;
        position: relative;
        height: 500px;
        overflow: hidden;
        background: #139cd7;
    }

    .slide {
        transform: translate3d(0, 100%, 0);
        position: absolute;
        height: 100%;
        width: 100%;
        overflow: hidden;
        background: transparent;
        visibility: hidden;
        animation: re-banner-slide-20 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0s 1;
    }

    .slide.active {
        visibility: visible;
        transform: translate3d(0, 0, 0);
    }

    .slide .slide-left {
        top: 160px;
        left: 0;
        line-height: 50px;
        text-align: left;
        position: absolute;
        color: #fff;
    }

    .slide.active .slide-left {
        animation: re-banner-slide-20 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0s 1;
    }

    .slide .slide-right {
        width: 800px;
        height: 100%;
        position: absolute;
        right: 0;
        transition: all 0.5s ease-out;
        transform-style: preserve-3d;
    }

    .slide .slide-right .right-image {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .slide img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 600px;
    }

    .slide.active img {
        animation: re-banner-slide-80 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0s 1;
    }

    @keyframes re-banner-slide-20 {
        0% {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
        }
        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes re-banner-slide-80 {
        0% {
            opacity: 0;
            transform: translate3d(-50%, -40%, 0);
        }
        100% {
            opacity: 1;
            transform: translate3d(-50%, -50%, 0);
        }
    }

    .slide .slide-left > .title {
        background: rgba(0, 0, 0, 0.3);
    }

    #banner button {
        background-color: transparent;
        width: 120px;
        height: 36px;
        font-size: 16px;
        text-align: center;
        border: 1px solid white;
        color: white;
        margin-top: 30px;
        cursor: pointer;
        outline: none;
        transition: all 0.3s ease-in-out;
    }

    #banner button:hover {
        background-color: white;
        color: #139cd7;
    }

    #banner h1 {
        text-align: left;
        font-size: 44px;
        margin-bottom: 10px;
    }

    #banner p {
        font-size: 20px;
    }

    #banner .big-title {
        background: rgba(0, 0, 0, 0.15);
        padding: 8px 15px;
    }

    #banner-tab {
        position: absolute;
        left: 50%;
        bottom: 5px;
        transform: translate(-50%, 0);
        z-index: 20;
    }

    #banner-tab li {
        background: #a1a1a3;
        text-align: center;
        float: left;
        color: #FFFFFF;
        width: 26px;
        height: 4px;
        padding: 10px 3px;
        cursor: pointer;
        transition: all 0.8s ease-out;
        background-clip: content-box;
        box-sizing: content-box;
    }

    #banner-tab li.active, #banner-tab li:hover {
        background: #fff;
        background-clip: content-box;
        box-sizing: content-box;
    }

    #voices {
        width: 100%;
        height: 300px;
        margin-bottom: 20px;
        background: url("http://ofw6tmkxn.bkt.clouddn.com/customer-voice-background.png") no-repeat;
        position: relative;
    }

    .voice {
        width: 100%;
        height: 300px;
    }

    .voice-control {
        width: 35px;
        height: 50px;
        background-color: lightslategray;
        position: absolute;
        top: 50%;
        margin-top: -25px;
        cursor: pointer;

    }

    .voice-left-img {
        float: left;
        width: 50%;
        height: 100%;
        position: relative;
    }

    .voice-left-img img {
        position: absolute;
        right: 0;
        top: 50%;
        height: 200px;
        margin-top: -100px;
    }

    .voice-right-img {
        float: left;
        width: 50%;
        height: 100%;
        position: relative;
    }

    .voice-right-img img {
        position: absolute;
        left: 0;
        top: 50%;
        height: 200px;
        margin-top: -100px;
    }

    #voice-control-left {
        left: 0
    }

    #voice-control-right {
        right: 0
    }

    #news {
        float: left;
        margin-top: 5px;
    }

    #news-tabs {
    }

    .news-tab {
        font-size: 16px;
        float: left;
        display: inline-block;
        width: 150px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        z-index: 5;
        border: 1px solid #dcdcdc;
        border-bottom: 2px solid #139cd7;
        cursor: pointer;
        background-color: #eee;
        transition: all 0.3s ease-in-out;
    }

    .news-tab.active {
        z-index: 10;
        border: 1px solid #139cd7;
        border-top-width: 2px;
        border-bottom: 2px solid transparent;
        background-color: white;
        color: #139cd7;
    }

    .promise {
        height: 410px;
        background-color: #f6f6f6;
    }

    .promise ul {
        width: 1000px;
        margin: 30px auto;
    }

    .promise ul li {
        width: 236px;
        float: left;
        border-right: 1px solid rgb(224, 224, 224);
        margin-left: 17px;
    }

    .promise ul :first-child {
        margin-left: 0px;
    }

    .promise ul :last-child {
        border-right: none;
    }

    .pro_r {
        margin-left: 10px;
    }

    .pro_r h5 {
        font-weight: normal;
        font-size: 17px;
        margin-top: 12px;
        letter-spacing: 3px;
    }

    .pro_r p {
        font-size: 12px;
        margin-top: 8px;
        letter-spacing: 1px;
        color: rgb(103, 102, 101);
    }

    .pro_img img {
        width: 100%;
    }
</style>

<template>
    <div>
        <div id="banner">
            <div class="slide"
                 :class="{active: isBannerActive(index)}"
                 v-for="(item, index) in banners">
                <div class="container" style="position: relative; height: 100%;">
                    <div class="slide-left">
                        <h1>
                            <span class="big-title">{{ item.mainTitle }}</span>
                            {{ item.subTitle }}
                        </h1>
                        <p>{{ item.summary }}</p>
                        <button>了解详情</button>
                    </div>
                    <div class="slide-right"
                         onmouseleave="this.style.transform='rotateX(0deg) rotateY(0deg)'"
                         onmousemove="x = event.clientY + document.body.scrollTop - 108;
                          y = (event.clientX + document.body.scrollLeft - 360 - (window.screen.width - 1160) / 2);
                          this.style.transform='rotateX(' + 15 * (x - 250) / 500 + 'deg) rotateY(' + 15 * (400 - y) / 800 + 'deg)'">
                        <div class="right-image" data-zindex="50" style="transform: translateZ(50px);">
                            <img :src="item.imgBottomUrl" alt="">
                        </div>
                        <div class="right-image" data-zindex="100" style="transform: translateZ(100px);">
                            <img :src="item.imgMiddleUrl" alt="">
                        </div>
                        <div class="right-image" data-zindex="150" style="transform: translateZ(150px);">
                            <img :src="item.imgTopUrl" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <ul id="banner-tab">
                <li v-for="n in banners.length"
                    v-on:click="setBannerActive(n-1)"
                    :class="{active: isBannerActive(n-1)}"></li>
            </ul>
        </div>
        <div id="introduce">
            <div class="container">
                <ul>
                    <router-link to="/product/detail">
                        <li v-for="item in introduces">
                            <div class="l">
                                <h5>{{ item.title }}</h5>
                                <p>{{ item.summary }}</p>
                            </div>
                            <div class="r introduce_img"
                                 :class="item.image"></div>
                        </li>
                    </router-link>
                </ul>
            </div>
        </div>
        <div id="hot-products">
            <div class="container">
                <div class="title">
                    <h3>大热门服务</h3>
                    <div class="prompt">聚焦企业服务需求，一站式全方位服务</div>
                </div>
                <ul>
                    <li class="hot-product"
                        v-for="(hotProduct, index) in hotProducts"
                        :class="{active: isActive(index)}"
                        v-on:mouseover="setActive(index)">
                        <div class="card">
                            <div class="content-info">
                                <div class="content-info-detail">
                                    <div class="classification-icon">
                                        <img src="../assets/img/ser_1.png">
                                    </div>
                                    <div class="classification-title">
                                        {{ hotProduct.title }}
                                    </div>
                                    <div class="classification-summary">
                                        {{ hotProduct.summary }}
                                    </div>
                                </div>
                            </div>
                            <div class="content-split-line"></div>
                            <div class="hot-product-content content-first">
                                <p></p>
                                <p v-for="item in hotProduct.first">{{ item }}</p>
                                <p></p>
                            </div>
                            <div class="hot-product-content content-second">
                                <div class="main-product">
                                    <h5>
                                        {{ hotProduct.main.title }}
                                    </h5>
                                    <div class="main-product-summary">
                                        {{ hotProduct.main.summary }}
                                    </div>
                                    <button class="main-btn">
                                        立即购买
                                    </button>
                                </div>
                                <div class="l other-product"
                                     v-for="item in hotProduct.other">
                                    <h6>
                                        {{ item.title }}
                                    </h6>
                                    <div class="other-product-summary">
                                        {{ item.summary }}
                                    </div>
                                    <a href="">立即购买</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div id="timeline">
            <div class="container">
                <div class="title">
                    <h3>企业树发展史</h3>
                    <div class="prompt">不同阶段,企业树需要不同的浇灌</div>
                </div>
                <ul>
                    <li v-for="(item, index) in timelines"
                        v-on:mouseover="state=index, stateType=0"
                        :class="{active: state == index}">
                        {{ item.title }}
                    </li>
                </ul>
                <div class="timeline-products">
                    <span v-for="(item, index) in timelines[state].types"
                          v-on:click="stateType=index"
                          :class="{active: stateType == index}">
                        {{ item.title }}
                    </span>
                </div>
                <div class="timeline-pics">
                    <div class="timeline-pic-left timeline-pic">
                        <img :src="timelines[state].types[stateType].products.left.url">
                    </div>
                    <div class="timeline-pic-right">
                        <div class="l timeline-pic-one timeline-pic">
                            <img :src="timelines[state].types[stateType].products.right.url">
                        </div>
                        <div class="l timeline-pic-two timeline-pic"
                             v-for="item in timelines[state].types[stateType].products.one">
                            <img :src="item.url">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="container" style="height: 100%;">
            <div class="title">
                <h3>客户声音</h3>
                <div class="prompt">您的声音，是我们前进的动力</div>
            </div>
        </div>
        <div id="voices">
            <div class="voice">
                <div class="voice-left-img">
                    <img src="../assets/logo.png">
                </div>
                <div class="voice-right-img">
                    <img src="../assets/logo.png">
                </div>
            </div>
            <div class="container"
                 style="position: absolute;
                        height: 300px; top: 0;
                        margin-left: -580px;
                        left: 50%;">
                <div id="voice-control-left" class="voice-control"></div>
                <div id="voice-control-right" class="voice-control"></div>
            </div>
        </div>
        <div class="container">
            <ul id="news-tabs">
                <li class="news-tab"
                    v-for="(item, index) in news"
                    :class="{active: isNewsTab(index)}"
                    v-on:click="setNewsTab(index)">
                    {{ item.title }}
                </li>
            </ul>
            <div id="news">
                <lh-news style="margin-right: 8px;"></lh-news>
                <lh-news style="margin-right: 8px;"></lh-news>
                <lh-news style="margin-right: 8px;"></lh-news>
                <lh-news style="margin-right: 8px;"></lh-news>
                <lh-news style="margin-right: 8px;"></lh-news>
            </div>
        </div>
        <div class="clearfix"></div>
        <div id="tools">
            <div class="container">
                <div class="title">
                    <h3>实用工具</h3>
                    <div class="prompt">
                        工商、商标等查询，为您创业开启便捷之路
                    </div>
                </div>
                <ul>
                    <li class="tool" v-for="item in tools">
                        <div class="tool-img">
                            <img :src="item.cover" alt="">
                        </div>
                        <div class="tool-img-mask">
                            <img src="../assets/img/sousuo.png" alt="">
                        </div>
                        <p>{{ item.department }}</p>
                        <h5>{{ item.service }}</h5>
                        <div class="tool-underline"></div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="promise">
            <div class="pro_img"><img src="../assets/img/intru.jpg"></div>
            <ul>
                <li>
                    <div class="pro_l l"><img src="../assets/img/pro_1.png"></div>
                    <div class="l pro_r">
                        <h5>资质认证</h5>
                        <p>专业资质及实名服务</p>
                    </div>
                </li>
                <li>
                    <div class="pro_l l"><img src="../assets/img/pro_2.png"></div>
                    <div class="l pro_r">
                        <h5>支付安全</h5>
                        <p>明码标价及赔付机制</p>
                    </div>
                </li>
                <li>
                    <div class="pro_l l"><img src="../assets/img/pro_3.png"></div>
                    <div class="l pro_r">
                        <h5>高效优质</h5>
                        <p>专业人员对口接待</p>
                    </div>
                </li>
                <li>
                    <div class="pro_l l"><img src="../assets/img/pro_1.png"></div>
                    <div class="l pro_r">
                        <h5>全程无忧</h5>
                        <p>服务进度实时反馈</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                introduces: [
                    {
                        "title": "注册财税一条龙",
                        "summary": "助您专注核心业务",
                        "image": "introduce_img1"
                    },
                    {
                        "title": "发财宝",
                        "summary": "法律、财务保驾护航",
                        "image": "introduce_img2"
                    },
                    {
                        "title": "商标宝",
                        "summary": "助您提升企业形象",
                        "image": "introduce_img3"
                    },
                    {
                        "title": "人事宝",
                        "summary": "社保全程无忧",
                        "image": "introduce_img4"
                    }
                ],
                hotProducts: [{
                    title: "工商服务",
                    image: "../assets/img/ser_1.png",
                    summary: "工商，就这么简单…",
                    first: [
                        "公司注册",
                        "1元注册+零申报记账",
                        "公司名称变更",
                        "经营范围变更",
                        "法人代表变更",
                        "三证合一"

                    ],
                    main: {
                        title: "公司注册",
                        summary: "有限责任公司、分公司、合伙企业注册，三/五证合一营业执照全程无忧直通车",
                    },
                    other: [
                        {
                            title: "1元注册+零申报记账",
                            summary: "1年代账送1元公司注册"
                        },
                        {
                            title: "公司名称变更",
                            summary: "工商变更，章证照统一变更"
                        },
                        {
                            title: "经营范围变更",
                            summary: "工商变更，不包括税务变更"
                        },
                        {
                            title: "法人代表变更",
                            summary: "工商变更，证照变更"
                        }
                    ]
                },
                    {
                        title: "财税服务",
                        image: "../assets/img/ser_2.png",
                        summary: "财务清晰，纳税放心",
                        first: [
                            "零申报代理记账",
                            "小规模纳税人代理记账",
                            "一般纳税人代理记账",
                            "税务报道，税种认证",
                            "一般纳税人认定",
                            "人力资源管理",
                        ],
                        main: {
                            title: "零申报代理记账",
                            summary: "专业会计提供税务、财务咨询，为您做账、报税。零申报(无经济业务发生，申报数据为零)",
                        },
                        other: [
                            {
                                title: "小规模纳税人代理记账",
                                summary: "免费财税咨询，做账、报税"
                            },
                            {
                                title: "一般纳税人代理记账",
                                summary: "免费财税咨询，做账、报税"
                            },
                            {
                                title: "税务报道，税种认证",
                                summary: "报税、核税，购买CA证书等"
                            },
                            {
                                title: "一般纳税人认定",
                                summary: "报税、核税，购买CA证书等"
                            }
                        ]
                    },
                    {
                        title: "法律服务",
                        image: "../assets/img/ser_3.png",
                        summary: "您的私人法律顾问",
                        first: [
                            "商标注册",
                            "合同撰写与审查（定制）",
                            "法律咨询",
                            "股东，合伙协议",
                            "实用新型专利申请",
                            "公司章程"
                        ],
                        main: {
                            title: "商标注册",
                            summary: "专业律师查询意向商标预，提交商标申请建议书，专人全程办理。",
                        },
                        other: [
                            {
                                title: "合同撰写与审查（定制）",
                                summary: "专业律师帮您撰写与审查合同"
                            },
                            {
                                title: "法律咨询",
                                summary: "专业律师，一对一咨询"
                            },
                            {
                                title: "股东，合伙协议",
                                summary: "专业律师撰写股东合伙协议"
                            },
                            {
                                title: "实用新型专利申请",
                                summary: "专业律师制定知识产权战略"
                            }
                        ]
                    },
                    {
                        title: "人事服务",
                        summary: "创业不忘养老",
                        first: [
                            "委托代缴社保公积金服务",
                            "企业社保账户开户",
                            "企业公积金账户开户",
                            "个人社保开户",
                            "个人社保公积金代缴",
                            "人力资源基础文档"
                        ],
                        main: {
                            title: "委托代缴社保公积金服务",
                            summary: "办理员工用退工，社保、公积金增加减少以及缴费基数变更(服务费：3人及以下98.8元/月;从第四人开始，每增加一人，服务费多增加18.8元/月)",
                        },
                        other: [
                            {
                                title: "企业社保账户开户",
                                summary: "办理企业社保开户许可"
                            },
                            {
                                title: "企业公积金账户开户",
                                summary: "办理企业公积金开户许可"
                            },
                            {
                                title: "个人社保开户",
                                summary: "办理个人社保开户许可"
                            },
                            {
                                title: "个人社保开户",
                                summary: "社保交纳、基数变更"
                            }
                        ]
                    }
                ],
                tools: [
                    {
                        department: "中国商标网【商标局】",
                        service: "商标查询",
                        url: "",
                        cover: "http://ofl0lw9er.bkt.clouddn.com/tool1.png"
                    },
                    {
                        department: "全国企业信用信息公示系统",
                        service: "工商查询",
                        url: "",
                        cover: "http://ofl0lw9er.bkt.clouddn.com/tool2.png"
                    },
                    {
                        department: "国际知识产权局",
                        service: "专利查询",
                        url: "",
                        cover: "http://ofl0lw9er.bkt.clouddn.com/tool3.png"
                    },
                    {
                        department: "中国版权保护中心",
                        service: "软件著作权查询",
                        url: "",
                        cover: "http://ofl0lw9er.bkt.clouddn.com/tool4.png"
                    }
                ],
                timelines: [
                    {
                        title: "种子萌芽",
                        types: [
                            {
                                title: "创立公司",
                                products: {
                                    left: {
                                        url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                    },
                                    right: {
                                        url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                    },
                                    one: [
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        }
                                    ]
                                }
                            },
                            {
                                title: "财税服务",
                                products: {
                                    left: {
                                        url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                    },
                                    right: {
                                        url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                    },
                                    one: [
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        }, {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        }
                                    ]
                                }
                            },
                            {
                                title: "法律服务",
                                products: {
                                    left: {
                                        url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                    },
                                    right: {
                                        url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                    },
                                    one: [
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        }, {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        }
                                    ]
                                }


                            }
                        ]
                    },
                    {
                        title: "茁壮成长",
                        types: [
                            {
                                title: "工商服务",
                                products: {
                                    left: {
                                        url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                    },
                                    right: {
                                        url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                    },
                                    one: [
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        }
                                    ]
                                }
                            },
                            {
                                title: "财税法+",
                                products: {
                                    left: {
                                        url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                    },
                                    right: {
                                        url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                    },
                                    one: [
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        title: "枝繁叶茂",
                        types: [
                            {
                                title: "法律服务",
                                products: {
                                    left: {
                                        url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                    },
                                    right: {
                                        url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                    },
                                    one: [
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        }, {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        }
                                    ]

                                }
                            },
                            {
                                title: "增值服务",
                                products: {
                                    left: {
                                        url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                    },
                                    right: {
                                        url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                    },
                                    one: [
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        title: "落叶归根",
                        types: [
                            {
                                title: "注销公司",
                                products: {
                                    left: {
                                        url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                    },
                                    right: {
                                        url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                    },
                                    one: [
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        },
                                        {
                                            url: "http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ],
                dialogVisible: false,
                formStacked: {
                    name: '',
                    region: '',
                    type: ''
                },
                banners: [
                    {
                        mainTitle: "公司注册",
                        subTitle: "快人一步",
                        summary: "创业园区、孵化基地专业对接",
                        imgTopUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-1-top.png",
                        imgMiddleUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-1-middle.png",
                        imgBottomUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-1-bottom.png"

                    },
                    {
                        mainTitle: "代理记账",
                        subTitle: "只需98元",
                        summary: "免费财税咨询，作账报税无忧",
                        imgTopUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-2-top.png",
                        imgMiddleUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-2-middle.png",
                        imgBottomUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-2-bottom.png"
                    },
                    {
                        mainTitle: "法律咨询",
                        subTitle: "全程陪同",
                        summary: "专业律师为企业保驾护航",
                        imgTopUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-3-top.png",
                        imgMiddleUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-3-middle.png",
                        imgBottomUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-3-bottom.png"
                    },
                    {
                        mainTitle: "社保公积金缴纳",
                        subTitle: "",
                        summary: "缴纳社保公积金,养老无忧",
                        imgTopUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-4-top.png",
                        imgMiddleUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-4-middle.png",
                        imgBottomUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-4-bottom.png"
                    }, {
                        mainTitle: "公司注册",
                        subTitle: "快人一步",
                        summary: "创业园区、孵化基地专业对接",
                        imgTopUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-5-top.png",
                        imgMiddleUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-5-middle.png",
                        imgBottomUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-5-bottom.png"
                    },
                ],
                news: [
                    {
                        title: "创业资讯"
                    },
                    {
                        title: "工商干货"
                    },
                    {
                        title: "财税干货"
                    },
                    {
                        title: "法律干货"
                    },
                    {
                        title: "人事干货"
                    }
                ],
                currentDate: "2016年10月13日",
                banner: 0,
                active: 3,
                state: 0,
                stateType: 0,
                newsTab: 0
            }
        },
        methods: {
            setActive(index) {
                this.active = index;
            },
            isActive(index) {
                return this.active == index;
            },
            setBannerActive(index) {
                this.banner = index;
            },
            isBannerActive(index) {
                return this.banner == index;
            },
            setNewsTab(index) {
                this.newsTab = index;
            },
            isNewsTab(index) {
                return this.newsTab == index;
            }
        }
    }
</script>
