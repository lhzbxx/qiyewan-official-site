<style>
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

    div.show {
        display: block;
    }

    div.hide {
        display: none;
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
        z-index: 10;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1), z-index 0s 0.12s;
    }

    .hot-product.active {
        width: 34%;
        height: 573px;
        border: 1px solid #55b2da;
        box-shadow: 0 0 20px #55b2da;
        z-index: 11;
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

    .main-btn a {
        color: #0098db !important;
    }

    .main-btn a:hover, .main-btn:hover a {
        color: #fff !important;
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
        height: 770px;
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

    #timeline ul li:last-child.active::before {
        display: none !important;
    }

    #timeline ul li:last-child.active::after {
        display: none !important;
    }

    #timeline ul li.active {
        color: #139cd7;
        border-color: #139cd7;
    }

    #timeline ul li.active:before {
        top: -1px;
        border-top: 25px solid transparent;
        border-left: 15px solid #139cd7;
        border-bottom: 25px solid transparent;
        z-index: 10;
    }

    #timeline ul li.active:after {
        top: 0;
        border-top: 24px solid transparent;
        border-left: 14px solid white;
        border-bottom: 24px solid transparent;
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
        color: #d2d2d2;
        border: 1px solid #d2d2d2;
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
    }

    #banner a {
        color: #fff !important;
    }

    #banner a:hover, #banner button:hover a {
        color: #139cd7 !important;
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
        left: 60px;
    }

    .slide img {
        position: absolute;
        left: 50%;
        top: 46%;
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
        height: 400px;
        margin-bottom: 20px;
        background: url("http://ofw6tmkxn.bkt.clouddn.com/voice-bg.png") no-repeat;
        position: relative;
    }

    .voice {
        width: 100%;
        height: 400px;
        display: none;
        animation: fadeIn 0.5s;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .voice-control {
        width: 35px;
        height: 50px;
        position: absolute;
        top: 65%;
        margin-top: -25px;
        cursor: pointer;
    }

    .voice-left-img {
        float: left;
        width: 45%;
        height: 100%;
        position: relative;
        margin-left: 55px;
    }

    .voice-left-img img {
        position: absolute;
        right: 0;
        top: 40%;
        height: 280px;
        width: 420px;
        margin-top: -100px;
        border: 3px solid #e0e0e0;
        border-radius: 5px;
    }

    .voice-right-img {
        float: left;
        width: 50%;
        height: 100%;
        position: relative;
    }

    .voice-right-img .summary {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto 0;
        height: 280px;
        width: 473px;
        padding-right: 61px;
        color: #e9e9e9;
        margin-left: 40px;
    }

    .voice-right-img .summary h2 {
        margin-top: 30px;
        margin-bottom: 20px;
        overflow: hidden;
        font-weight: normal;
        line-height: 2em;
    }

    .voice-right-img .summary h2:first-letter {
        margin-left: 20px;
    }

    .voice-right-img .summary p {
        text-align: right;
        font-size: 15px;
        line-height: 25px;
    }

    .voice-right-img .summary .name {
        font-weight: 800;
    }

    #voice-control-left {
        left: 0;
        padding-top: 10px;
        padding-left: 2px;
        font-size: 28px;
        color: #d5d5d5;
    }

    #voice-control-left:hover, #voice-control-right:hover {
        background-color: rgba(108, 108, 108, 0.4);
    }

    .voice-control-con {
        position: absolute;
        height: 300px;
        top: 0;
        margin-left: -580px;
        left: 50%;
    }

    #voice-control-right {
        right: 0;
        padding-top: 10px;
        padding-left: 5px;
        font-size: 28px;
        color: #d5d5d5;
    }

    #news {
        float: left;
        margin-top: 5px;
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
        border: 1px solid rgb(225, 225, 225);
        border-bottom: 1px solid #139cd7;
        cursor: pointer;
        background-color: rgb(248, 248, 248);
        transition: all 0.3s ease-in-out;
    }

    .news-tab a {
        color: #444;
    }

    .news-tab.active a {
        color: #0da3e5 !important;
    }

    .news-tab.active {
        z-index: 10;
        border: 1px solid #139cd7;
        border-top-width: 1px;
        border-bottom: 1px solid transparent;
        background-color: white;
        color: #139cd7;
    }

    .promise {
        height: 410px;
        background-color: #f6f6f6;
    }

    @media screen and (min-width: 1400px) {
        .promise {
            height: 530px;
            background-color: #f6f6f6;
        }
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

    .news_link {
        display: inline-block;
        margin-right: 8px;
    }

    #news:last-child .news_link {
        margin-right: 0px;
    }
</style>

<template>
    <div>
        <div id="banner">
            <div class="slide"
                 :class="{active: isBannerActive(index)}"
                 :style="item.bgColor"
                 v-for="(item, index) in banners">
                <div class="container" style="position: relative; height: 100%">
                    <div class="slide-left">
                        <h1>
                            <span class="big-title">{{ item.mainTitle }}</span>
                            {{ item.subTitle }}
                        </h1>
                        <p>{{ item.summary }}</p>
                        <button>
                            <router-link
                                    :to="{ name: 'product-detail', params: { serialId: getRegion.code+item.serialId }}">
                                了解详情
                            </router-link>
                        </button>
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
                    <li v-for="item in introduces" v-if="getRegion.code+item.serialId != 'SCCDPS0004'">
                        <router-link
                                :to="{ name: 'product-detail', params: { serialId: getRegion.code+item.serialId }}">
                            <div class="l">
                                <h5>{{ getRegion.code+item.serialId == 'BJBJPS0004' ? '注册宝' : item.title }}</h5>
                                <p>{{ item.summary }}</p>
                            </div>
                            <div class="r introduce_img" :class="item.image"></div>
                        </router-link>
                    </li>
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
                                        <img v-show="!isHotActive(index)" :src="hotProduct.image">
                                        <img v-show="isHotActive(index)" :src="hotProduct.activeImage">
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
                                        <router-link
                                                :to="{ name: 'product-detail', params: { serialId: getRegion.code+hotProduct.main.serialId }}">
                                            立即购买
                                        </router-link>
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
                                    <router-link
                                            :to="{ name: 'product-detail', params: { serialId: getRegion.code+item.serialId }}">
                                        立即购买
                                    </router-link>
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
                            <router-link
                                    :to="{ name: 'product-detail', params: { serialId: getRegion.code+timelines[state].types[stateType].products.right.serialId }}">
                                <img :src="timelines[state].types[stateType].products.right.url">
                            </router-link>
                        </div>
                        <div class="l timeline-pic-two timeline-pic"
                             v-for="item in timelines[state].types[stateType].products.one">
                            <router-link
                                    :to="{ name: 'product-detail', params: { serialId: getRegion.code+item.serialId }}">
                                <img :src="item.url">
                            </router-link>
                        </div>
                        <div class="l timeline-pic-one timeline-pic">
                            <router-link
                                    :to="{ name: 'product-detail', params: { serialId: getRegion.code+timelines[state].types[stateType].products.rightBottom.serialId }}">
                                <img :src="timelines[state].types[stateType].products.rightBottom.url">
                            </router-link>
                        </div>
                        <div class="l timeline-pic-two timeline-pic">
                            <router-link
                                    :to="{ name: 'product-detail', params: { serialId: getRegion.code+timelines[state].types[stateType].products.bottomOne.serialId }}">
                                <img :src="timelines[state].types[stateType].products.bottomOne.url">
                            </router-link>
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
            <div class="voice"
                 :class="{show: isVoiceBannerActive(index)}"
                 v-for="(voice,index) in customerVoices">
                <div class="voice-left-img">
                    <img :src="voice.headImg">
                </div>
                <div class="voice-right-img">
                    <div class="summary">
                        <h2>{{ voice.content}}</h2>
                        <p>{{ voice.company}}</p>
                        <p class="position">{{ voice.posion}}</p>
                        <p class="name">{{ voice.name}}</p>
                    </div>
                </div>
            </div>
            <div class="container voice-control-con">
                <div id="voice-control-left" v-on:click="setVoiceBanner(voiceBanner-1)"
                     class="voice-control el-icon-arrow-left"></div>
                <div id="voice-control-right" v-on:click="setVoiceBanner(voiceBanner+1)"
                     class="voice-control  el-icon-arrow-right"></div>
            </div>
        </div>
        <div class="container">
            <ul id="news-tabs">
                <li class="news-tab"
                    v-for="(item, index) in news"
                    :class="{active: isNewsTab(index)}"
                    v-on:mouseover="setNewsTab(index),newsTab=index">
                    {{ item.title }}
                </li>
            </ul>
            <div id="news">
                <lh-news v-for="article in news[newsTab].articles" class="news_link"
                         :img="article.img"
                         :title="article.title"
                         :summary="article.summary"
                         :tags="article.tags"
                         :date="article.date"
                         :views="article.views"
                         :id="article.articleId"></lh-news>
            </div>
        </div>
        <div class="clearfix"></div>
        <div id="tools" name="quick-entry">
            <div class="container">
                <div class="title">
                    <h3>实用工具</h3>
                    <div class="prompt">
                        工商、商标等查询，为您创业开启便捷之路
                    </div>
                </div>
                <ul>
                    <li class="tool" v-for="item in tools">
                        <a :href="item.url" target="_blank">
                            <div class="tool-img">
                                <img :src="item.cover" alt="">
                            </div>
                            <div class="tool-img-mask">
                                <img src="../assets/img/sousuo.png" alt="">
                            </div>
                            <p>{{ item.department }}</p>
                            <h5>{{ item.service }}</h5>
                            <div class="tool-underline"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="promise">
            <div class="pro_img"><img src="http://ofw6tmkxn.bkt.clouddn.com/about-us-banner1.png"></div>
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
        <div class="clearfix"></div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import authApi from '../api/auth'
    export default {
        computed: mapGetters({
            getRegion: 'getRegion',
        }),
        data () {
            return {
                introduces: [
                    {
                        serialId: "PS0001",
                        "title": "注册财税一条龙",
                        "summary": "助您专注核心业务",
                        "image": "introduce_img1"
                    },
                    {
                        serialId: "PS0002",
                        "title": "法财宝",
                        "summary": "法律、财务保驾护航",
                        "image": "introduce_img2"
                    },
                    {
                        serialId: "PS0003",
                        "title": "商标宝",
                        "summary": "助您提升企业形象",
                        "image": "introduce_img3"
                    },
                    {
                        serialId: "PS0004",
                        "title": "人事宝",
                        "summary": "社保全程无忧",
                        "image": "introduce_img4"
                    }
                ],
                hotProducts: [
                    {
                        title: "工商服务",
                        image: "http://ofw6tmkxn.bkt.clouddn.com/hot_1.png",
                        activeImage: "http://ofw6tmkxn.bkt.clouddn.com/ser_1.png",
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
                            serialId: "IC0001",
                            title: "公司注册",
                            summary: "有限责任公司、分公司、合伙企业注册，三/五证合一营业执照全程无忧直通车",
                        },
                        other: [
                            {
                                serialId: "IC0003",
                                title: "1元注册+零申报记账",
                                summary: "1年代账送1元公司注册"
                            },
                            {
                                serialId: "IC0004",
                                title: "公司名称变更",
                                summary: "工商变更，章证照统一变更"
                            },
                            {
                                serialId: "IC0005",
                                title: "经营范围变更",
                                summary: "工商变更，不包括税务变更"
                            },
                            {
                                serialId: "IC0006",
                                title: "法人代表变更",
                                summary: "工商变更，证照变更"
                            }
                        ]
                    },
                    {
                        title: "财税服务",
                        image: "http://ofw6tmkxn.bkt.clouddn.com/hot_2.png",
                        activeImage: "http://ofw6tmkxn.bkt.clouddn.com/ser_2.png",
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
                            serialId: "FC0001",
                            title: "零申报代理记账",
                            summary: "专业会计提供税务、财务咨询，为您做账、报税。零申报(无经济业务发生，申报数据为零)",
                        },
                        other: [
                            {
                                serialId: "FC0002",
                                title: "小规模纳税人代理记账",
                                summary: "免费财税咨询，做账、报税"
                            },
                            {
                                serialId: "FC0003",
                                title: "一般纳税人代理记账",
                                summary: "免费财税咨询，做账、报税"
                            },
                            {
                                serialId: "FC0006",
                                title: "税务报道，税种认证",
                                summary: "报税、核税，购买CA证书等"
                            },
                            {
                                serialId: "FC0008",
                                title: "一般纳税人认定",
                                summary: "报税、核税，购买CA证书等"
                            }
                        ]
                    },
                    {
                        title: "法律服务",
                        image: "http://ofw6tmkxn.bkt.clouddn.com/hot_3.png",
                        activeImage: "http://ofw6tmkxn.bkt.clouddn.com/ser_3.png",
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
                            serialId: "LD0013",
                            title: "商标注册",
                            summary: "专业律师查询意向商标预，提交商标申请建议书，专人全程办理。",
                        },
                        other: [
                            {
                                serialId: "LD0002",
                                title: "合同撰写与审查（定制）",
                                summary: "专业律师撰写与审查合同"
                            },
                            {
                                serialId: "LD0006",
                                title: "法律咨询",
                                summary: "专业律师，一对一咨询"
                            },
                            {
                                serialId: "LD0004",
                                title: "股东，合伙协议",
                                summary: "专业律师撰写股东合伙协议"
                            },
                            {
                                serialId: "LD0011",
                                title: "实用新型专利申请",
                                summary: "专业律师制定知识产权战略"
                            }
                        ]
                    },
                    {
                        title: "人事服务",
                        image: "http://ofw6tmkxn.bkt.clouddn.com/hot_5.png",
                        activeImage: "http://ofw6tmkxn.bkt.clouddn.com/ser_5.png",
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
                            serialId: "HR0003",
                            title: "委托代缴社保公积金服务",
                            summary: "办理员工用退工，社保、公积金增加减少以及缴费基数变更(服务费：3人及以下98.8元/月;从第四人开始，每增加一人，服务费多增加18.8元/月)",
                        },
                        other: [
                            {
                                serialId: "HR0001",
                                title: "企业社保账户开户",
                                summary: "办理企业社保开户许可"
                            },
                            {
                                serialId: "HR0002",
                                title: "企业公积金账户开户",
                                summary: "办理企业公积金开户许可"
                            },
                            {
                                serialId: "HR0004",
                                title: "个人社保开户",
                                summary: "办理个人社保开户许可"
                            },
                            {
                                serialId: "HR0005",
                                title: "个人社保公积金代缴",
                                summary: "社保交纳、基数变更"
                            }
                        ]
                    }
                ],
                tools: [
                    {
                        department: "中国商标网【商标局】",
                        service: "商标查询",
                        url: "http://sbj.saic.gov.cn/sbcx/",
                        cover: "http://ofl0lw9er.bkt.clouddn.com/tool1.png"
                    },
                    {
                        department: "全国企业信用信息公示系统",
                        service: "工商查询",
                        url: "http://gsxt.saic.gov.cn/",
                        cover: "http://ofl0lw9er.bkt.clouddn.com/tool2.png"
                    },
                    {
                        department: "国际知识产权局",
                        service: "专利查询",
                        url: "http://cpquery.sipo.gov.cn/",
                        cover: "http://ofl0lw9er.bkt.clouddn.com/tool3.png"
                    },
                    {
                        department: "中国版权保护中心",
                        service: "软件著作权查询",
                        url: "http://www.ccopyright.com.cn/cpcc/RRegisterAction.do?method=list&no=fck",
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
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-5-1.png"
                                    },
                                    right: {
                                        serialId: "IC0002",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-5-2.png"
                                    },
                                    one: [
                                        {
                                            serialId: "IC0012",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-5-3.png"
                                        },
                                        {
                                            serialId: "HR0003",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-5-4.png"
                                        },
                                        {
                                            serialId: "HR0002",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-5-5.png"
                                        }
                                    ],
                                    rightBottom: {
                                        serialId: "IT0001",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-5-6.png"
                                    },
                                    bottomOne: {
                                        serialId: "HR0001",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-5-7.png"
                                    }
                                }

                            },
                            {
                                title: "财税服务",
                                products: {
                                    left: {
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-3-1.png"
                                    },
                                    right: {
                                        serialId: "FC0003",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-3-2.png"
                                    },
                                    one: [
                                        {
                                            serialId: "FC0008",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-3-3.png"
                                        },
                                        {
                                            serialId: "IT0004",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-3-4.png"
                                        },
                                        {
                                            serialId: "IT0005",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-3-5.png"
                                        }
                                    ],
                                    rightBottom: {
                                        serialId: "IT0003",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-3-6.png"
                                    },
                                    bottomOne: {
                                        serialId: "IT0002",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-3-7.png"
                                    }
                                }
                            },
                            {
                                title: "法律服务",
                                products: {
                                    left: {
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-2-1.png"
                                    },
                                    right: {
                                        serialId: "LD0010",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-2-2.png"
                                    },
                                    one: [
                                        {
                                            serialId: "LD0011",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-2-3.png"
                                        },
                                        {
                                            serialId: "LD0012",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-2-4.png"
                                        },
                                        {
                                            serialId: "LD0014",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-2-5.png"
                                        }
                                    ],
                                    rightBottom: {
                                        serialId: "LD0002",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-2-6.png"
                                    },
                                    bottomOne: {
                                        serialId: "LD0015",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-2-7.png"
                                    }
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
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-8-1.png"
                                    },
                                    right: {
                                        serialId: "IC0009",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-8-2.png"
                                    },
                                    one: [
                                        {
                                            serialId: "IC0004",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-8-3.png"
                                        },
                                        {
                                            serialId: "IC0005",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-8-4.png"
                                        },
                                        {
                                            serialId: "IC0006",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-8-5.png"
                                        }
                                    ],
                                    rightBottom: {
                                        serialId: "FC0001",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-4-6.png"
                                    },
                                    bottomOne: {
                                        serialId: "IC0010",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-8-7.png"
                                    }
                                }
                            },
                            {
                                title: "财税法+",
                                products: {
                                    left: {
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-4-1.png"
                                    },
                                    right: {
                                        serialId: "FC0004",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-4-2.png"
                                    },
                                    one: [
                                        {
                                            serialId: "FC0005",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-4-3.png"
                                        },
                                        {
                                            serialId: "FC0006",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-4-4.png"
                                        },
                                        {
                                            serialId: "FC0007",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-4-5.png"
                                        }
                                    ],
                                    rightBottom: {
                                        serialId: "FC0001",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-4-6.png"
                                    }, bottomOne: {
                                        serialId: "FC0010",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-4-7.png"
                                    }

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
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-6-1.png"
                                    },
                                    right: {
                                        serialId: "LD0004",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-6-2.png"
                                    },
                                    one: [
                                        {
                                            serialId: "LD0005",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-6-3.png"
                                        },
                                        {
                                            serialId: "LD0003",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-6-4.png"
                                        },
                                        {
                                            serialId: "LD0001",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-6-5.png"
                                        }
                                    ], rightBottom: {
                                        serialId: "LD0006",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-6-6.png"
                                    }, bottomOne: {
                                        serialId: "LD0013",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-6-7.png"
                                    }

                                }
                            },
                            {
                                title: "增值服务",
                                products: {
                                    left: {
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-7-1.png"
                                    },
                                    right: {
                                        serialId: "FC0002",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-7-2.png"
                                    },
                                    one: [
                                        {
                                            serialId: "FC0009",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-7-3.png"
                                        },
                                        {
                                            serialId: "LD0002",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-7-4.png"
                                        },
                                        {
                                            serialId: "LD0009",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-7-5.png"
                                        }
                                    ],
                                    rightBottom: {
                                        serialId: "IT0003",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-7-6.png"
                                    },
                                    bottomOne: {
                                        serialId: "HR0006",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-7-7.png"
                                    }
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
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-1-1.png"
                                    },
                                    right: {
                                        serialId: "IC0013",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-1-2.png"
                                    },
                                    one: [
                                        {
                                            serialId: "LD0006",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-1-3.png"
                                        },
                                        {
                                            serialId: "IC0013",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-1-4.png"
                                        },
                                        {
                                            serialId: "IC0010",
                                            url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-1-5.png"
                                        }],
                                    rightBottom: {
                                        serialId: "LD0002",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-1-6.png"
                                    },
                                    bottomOne: {
                                        serialId: "IC0013",
                                        url: "http://ofw6tmkxn.bkt.clouddn.com/timeline1-1-7.png"
                                    }

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
                        serialId: "IC0001",
                        mainTitle: "公司服务",
                        subTitle: "想你所想",
                        summary: "让您满意是我们不变的服务追求",
                        imgTopUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-1-top.png",
                        imgMiddleUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-1-middle.png",
                        imgBottomUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-1-bottom.png",
                        bgColor: "background-color: #2fa7f5;"

                    },
                    {
                        serialId: "IC0001",
                        mainTitle: "公司注册",
                        subTitle: "快人一步",
                        summary: "创业园区、孵化基地专业对接",
                        imgTopUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-5-top-v1.png",
                        imgMiddleUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-5-middle-v1.png",
                        imgBottomUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-5-bottom-v1.png",
                        bgColor: "background-color: #2399f3;"
                    },
                    {
                        serialId: "FC0001",
                        mainTitle: "代理记账",
                        subTitle: "只需98元",
                        summary: "免费财税咨询，作账报税无忧",
                        imgTopUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-2-top.png",
                        imgMiddleUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-2-middle.png",
                        imgBottomUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-2-bottom.png",
                        bgColor: "background-color: #2ca8dc;"
                    },
                    {
                        serialId: "LD0001",
                        mainTitle: "法律咨询",
                        subTitle: "全程陪同",
                        summary: "专业律师为企业保驾护航",
                        imgTopUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-3-middle.png",
                        imgMiddleUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-3-bottom.png",
                        imgBottomUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-3-top.png",
                        bgColor: "background-color: #0daef2;"
                    },
                    {
                        serialId: "HR0001",
                        mainTitle: "社保公积金",
                        subTitle: "",
                        summary: "缴纳社保公积金,养老无忧",
                        imgTopUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-4-bottom.png",
                        imgMiddleUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-4-middle.png",
                        imgBottomUrl: "http://ofw6tmkxn.bkt.clouddn.com/banner-4-top.png",
                        bgColor: "background-color: #0770cb;"
                    },
                ],
                news: [
                    {
                        title: "创业资讯",
                        articles: [
                            {
                                articleId: "1",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/startup_01.jpg',
                                title: '创业公司如何招聘？',
                                summary: '在风风火火拿到融资以后，找人就成为了创业公司最大的事情。没有好的...',
                                tags: ['人事', '招聘'],
                                date: '2016年8月29日',
                                views: 236
                            },
                            {
                                articleId: "2",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/startup_02.jpg',
                                title: '财务部非金钱激励员工的108种手段',
                                summary: '在任何一个组织里，管理者都是下属的镜子。可以说，只要看....',
                                tags: ['专利申请'],
                                date: '2016年8月25日',
                                views: 359
                            },
                            {
                                articleId: "3",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/startup_03.jpg',
                                title: '公司对于老东家的知识产权的法律风险防范',
                                summary: '我们在第一讲就提到，在创业的过程中，您首先考虑是否侵犯了老东家的知识...',
                                tags: ['知识产权', '法律'],
                                date: '2016年829日',
                                views: 599
                            },
                            {
                                articleId: "4",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/startup_04.jpg',
                                title: '老公司向新公司迁移时的用户迁移问题',
                                summary: '老公司向新公司迁移的时候，还有员工的问题，这也是要考虑的。一方面要...',
                                tags: ['公司变更'],
                                date: '2016年9月3日',
                                views: 366
                            },
                            {
                                articleId: "5",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/startup_05.jpg',
                                title: '商标相关问答',
                                summary: '商标的价值其实是眼睛看不到手却拿得到的财富，从我们的角度看，创业公司...',
                                tags: ['商标'],
                                date: '2016年9月5日',
                                views: 688
                            }
                        ]
                    },
                    {
                        title: "工商干货",
                        articles: [
                            {
                                articleId: "6",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/industry_01.jpg',
                                title: '企业类型之股份公司',
                                summary: '讲完了个人独资企业与合伙企业这些非公司制企业之后，我们现在来看看大家...',
                                tags: ['工商', '营业执照'],
                                date: '2016年9月12日',
                                views: 289
                            },
                            {
                                articleId: "7",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/industry_02.jpg',
                                title: '企业类型之个人独资企业！',
                                summary: '怀揣着满满热情的创业者们,欢迎又来到了我们的财税微课堂啦,让我们继续挖掘...',
                                tags: ['工商', '营业执照'],
                                date: '2016年9月12日',
                                views: 289
                            },
                            {
                                articleId: "8",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/industry_03.jpg',
                                title: '注册资本1万亿 没钱也任性！',
                                summary: '近两年设立公司的创业者都知道，现在开公司只需要在公司章程中写明...',
                                tags: ['工商', '营业执照'],
                                date: '2016年9月12日',
                                views: 289
                            },
                            {
                                articleId: "9",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/industry_04.jpg',
                                title: '企业名称',
                                summary: '你说人生究竟什么最重要？听到这个问题，每个人第一反应一定是：“钱”。事实...',
                                tags: ['工商', '营业执照'],
                                date: '2016年9月12日',
                                views: 289
                            },
                            {
                                articleId: "10",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/industry_5.jpg',
                                title: '税率宝典——终于抓住你这个磨人的小妖精！',
                                summary: '财务们看过来！营改增后，增值税税率档次增加，大家是否为记不住税率发愁呢。不要担心，一财君送上“税率小宝典”，轻轻松...',
                                tags: ['工商'],
                                date: '2016年9月12日',
                                views: 289
                            }
                        ]

                    },
                    {
                        title: "财税干货",
                        articles: [
                            {
                                articleId: "11",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/finance_01.jpg',
                                title: '个人股东占用公司资金也要交个人所得税',
                                summary: '许多初创公司往往由创业者自身持有100%的股权或者绝大部分股权，这...',
                                tags: ['财税', '税务'],
                                date: '2016年9月13日',
                                views: 453
                            },
                            {
                                articleId: "12",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/finance_02.jpg',
                                title: '采购商品你真的会比价吗？',
                                summary: '谈到采购商品的比价问题，站在消费者个人的角度来看，真的是一个...',
                                tags: ['财税', '采购'],
                                date: '2016年9月15日',
                                views: 259
                            },
                            {
                                articleId: "13",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/finance_03.jpg',
                                title: '公司采购业务中的这些税收风险你知道吗？',
                                summary: '一项采购交易中，通常由买方直接取得卖方开具的销售发票，并且直接向卖方...',
                                tags: ['财税', '采购', '税务'],
                                date: '2016年9月16日',
                                views: 459
                            },
                            {
                                articleId: "14",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/finance_04.jpg',
                                title: '小规模纳税人 OR 一般纳税人？',
                                summary: '最近遇到好几个准备设立公司的创业者问我这样一个问题：“我该选择...',
                                tags: ['财税', '税务'],
                                date: '2016年9月17日',
                                views: 459
                            },
                            {
                                articleId: "15",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/finance_05.jpg',
                                title: '只有错买，没有错卖！企业湾教您如何收购股权',
                                summary: '商业交易是由卖方提供商品或服务，因此卖方通常比买方更加熟知所销售的...',
                                tags: ['财税', '股权'],
                                date: '2016年9月19日',
                                views: 429
                            },
                        ]
                    },
                    {
                        title: "法律干货",
                        articles: [
                            {
                                articleId: "17",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/law_01.jpg',
                                title: '合伙人股东之间的协议',
                                summary: '今天我们重点讨论第一个问题：合伙人之间的股权协议需要注意什么。...',
                                tags: ['法律', '合同'],
                                date: '2016年9月21日',
                                views: 359
                            },
                            {
                                articleId: "17",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/law_02.jpg',
                                title: '员工个人自行缴社保的书面承诺有效吗？ ',
                                summary: '王某于2011年5月进入F公司设于宁波某商场的品牌专柜从事营业员工...',
                                tags: ['法律', '社保'],
                                date: '2016年9月22日',
                                views: 389
                            },
                            {
                                articleId: "18",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/law_03.jpg',
                                title: '公司知识产权',
                                summary: '上周我们创业科普中一直都是在讲公司的控制权，似乎公司只有勾心斗角...',
                                tags: ['法律', '知识产权'],
                                date: '2016年8月23日',
                                views: 233
                            },
                            {
                                articleId: "19",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/law_04.jpg',
                                title: 'APP可否申请专利的探讨(续)',
                                summary: '跟着上期我们继续来讲APP可否申请专利。针对App申请发明专利....',
                                tags: ['专利申请'],
                                date: '2016年8月25日',
                                views: 359
                            },
                            {
                                articleId: "20",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/law_05.jpg',
                                title: '拟定合同过程中的关注点（一）',
                                summary: '通常来讲，合同的主体不需要关注，因为大多数情况下，合同...',
                                tags: ['法律', '合同'],
                                date: '2016年9月21日',
                                views: 359
                            }
                        ]

                    },
                    {
                        title: "人事干货",
                        articles: [
                            {
                                articleId: "21",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/hr_01.jpg',
                                title: '作为公司老板，只有这20%工作是你需要亲自做的',
                                summary: '作为公司老板，你只需专注那些能为公司带来最大利益的事情。通常说来，这些事情...',
                                tags: ['人事'],
                                date: '2016年9月20日',
                                views: 469
                            },
                            {
                                articleId: "22",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/hr_02.jpg',
                                title: '别让人情拖垮你的公司！',
                                summary: '中国是一个非常讲“人情”讲“关系”的国家，有时候靠人情刷脸，靠关系办事会比...',
                                tags: ['人事'],
                                date: '2016年9月23日',
                                views: 469
                            },
                            {
                                articleId: "23",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/hr_03.jpg',
                                title: '创业公司的员工激励怎么做？',
                                summary: '当你费劲苦心，把员工招募进来后，怎么让他们死心塌地的和你一起拼命干就是...',
                                tags: ['人事'],
                                date: '2016年9月25日',
                                views: 469
                            },
                            {
                                articleId: "24",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/hr_04.jpg',
                                title: '财务部非金钱激励员工的108种手段 ，你一定要懂！',
                                summary: '在任何一个组织里，管理者都是下属的镜子。可以说，只...',
                                tags: ['人事'],
                                date: '2016年9月28日',
                                views: 369
                            },
                            {
                                articleId: "25",
                                img: 'http://ofw6tmkxn.bkt.clouddn.com/hr_05.jpg',
                                title: '你做了什么，可以多出四个工作日？',
                                summary: '你说人生究竟什么最重要？听到这个问题，每个人第一反应一定是...',
                                tags: ['人事'],
                                date: '2016年10月8日',
                                views: 469
                            }
                        ]
                    }
                ],
                customerVoices: [
                    {
                        headImg: "http://ofw6tmkxn.bkt.clouddn.com/customer1.png",
                        content: "企业湾的增值服务特别适合像我们这样的创业型公司，服务专业，价格公道,适合创业公司在经费不宽裕的情况下把事情推行下去。我认为企业湾是一个一站式、超值，适合创业公司的合格的企业服务供应商。",
                        company: "成都天添益网络科技有限公司",
                        position: "COO",
                        name: ""
                    },
                    {
                        headImg: "http://ofw6tmkxn.bkt.clouddn.com/customer2.png",
                        content: "平和温润、真诚无华为朴，知行合一、志坚质洁为正，正是这种相同的真挚的价值观让朴正教育咨询和企业湾相遇相知，并开始了旗下花田儿童教育项目的顺利筹建感谢企业湾专业细致的服务和支持，让我们不忘初心一起走下去。",
                        company: "四川朴正教育咨询有限公司",
                        position: "花田教育",
                        name: ""
                    },
                    {
                        headImg: "http://ofw6tmkxn.bkt.clouddn.com/customer3_1.png",
                        content: "企业湾为我们提供人事、法律、财务等相当专业的服务，他们以专业的水准、负责的态度服务于客户，提供全方位的咨询与服务，使我们无后顾之忧。",
                        company: "镇江市红包兔信息技术有限公司",
                        position: "创始人兼CEO",
                        name: ""
                    },
                    {
                        headImg: "http://ofw6tmkxn.bkt.clouddn.com/customer4_1.png",
                        content: "企业湾为我们解决了初创企业在财务、法律方面资源短缺、缺乏行业经验的老大难问题，让我们在创业的路上省了不少心。用优质贴心专业的服务，为中小型企业的创业之路保驾护航。",
                        company: "上海恩陶投资管理有限公司",
                        position: "公司负责人",
                        name: ""
                    },
                    {
                        headImg: "http://ofw6tmkxn.bkt.clouddn.com/customer5.png",
                        content: "我们不仅是企业湾的客户，也是企业湾的战略合作伙伴。企业湾人诚恳的态度、专业的服务让我感动，作为创业企业，我们共同进步。",
                        company: "上海云简软件科技有限公司",
                        position: "创始人兼CEO",
                        name: ""
                    },
                    {
                        headImg: "http://ofw6tmkxn.bkt.clouddn.com/customer6_1.png",
                        content: "响应迅速，帮我们节省了很多的时间，从工商，到人事、法律在企业湾一站式解决了，省时省事，是我们有更多的精力专业住本质工作。",
                        company: "南京贝贝帮教育咨询有限公司",
                        position: "创始人兼CEO",
                        name: ""
                    },

                ],
                currentDate: "2016年10月13日",
                banner: 0,
                active: 3,
                state: 0,
                stateType: 0,
                newsTab: 0,
                voiceBanner: 0,
                hotActive: 3,
            }
        },
        methods: {
            setActive(index) {
                this.active = index;
                this.hotActive = index;
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
            isHotActive(index){
                return this.hotActive == index;
            },
            setVoiceBanner(index){
                if (index < 0) index = 5;
                if (index > 5) index = 0;
                this.voiceBanner = index;
            },
            isVoiceBannerActive(index) {
                return this.voiceBanner == index;
            },
            setNewsTab(index) {
                this.newsTab = index;
            },
            isNewsTab(index) {
                return this.newsTab == index;
            }
        },
        created() {
            let vm = this
            authApi.getRegion(function (region) {
                vm.$store.commit("CHANGE_REGION", region)
            })
        }
    }
</script>
