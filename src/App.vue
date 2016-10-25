<style scoped>
    .introduce {
        height: 127px;
        width: 100%;
        margin: 0 auto;
    }

    .introduce_img1 {
        width: 77px;
        height: 80px;
        background: url("./assets/img/intro_1.png") no-repeat;
    }

    .introduce ul li:hover .introduce_img1 {
        background: url("./assets/img/intro_5.png") no-repeat;
    }

    .introduce_img2 {
        width: 77px;
        height: 80px;
        background: url("./assets/img/intro_2.png") no-repeat;
    }

    .introduce ul li:hover .introduce_img2 {
        background: url("./assets/img/intro_6.png") no-repeat;
    }

    .introduce_img3 {
        width: 89px;
        height: 80px;
        background: url("./assets/img/intro_3.png") no-repeat;
    }

    .introduce ul li:hover .introduce_img3 {
        background: url("./assets/img/intro_7.png") no-repeat;
    }

    .introduce_img4 {
        width: 77px;
        height: 80px;
        background: url("./assets/img/intro_4.png") no-repeat;
    }

    .introduce ul li:hover .introduce_img4 {
        background: url("./assets/img/intro_8.png") no-repeat;
    }

    .introduce ul {
        margin-top: 30px;
    }

    .introduce ul li {
        float: left;
        border: 1px solid #e9e9e9;
        margin-right: 15px;
        padding: 20px 24px 20px 25px;
        cursor: pointer;
        height: 107px;
        width: 278px;
        transition: all 0.3s ease-in-out;
    }

    .introduce ul li:hover {
        box-shadow: 0 0 7px #55b2da;
    }

    .introduce ul li:hover h5 {
        color: #0098db;
        transition: color 0.3s ease-in-out;
    }

    .introduce ul :last-child {
        margin-right: 0;
    }

    .introduce h5 {
        font-size: 19px;
        color: #2f2f2f;
        font-weight: normal;
        margin-top: 7px;
        letter-spacing: 2px;
        transition: color 0.3s ease-in-out;
    }

    .introduce p {
        font-size: 14px;
        color: #707070;
        margin-top: 5px;
        letter-spacing: 1px;
    }

    .hot-products {
        height: 750px;
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
        width: 269px;
        border-right: 1px solid rgb(219, 219, 219);
        border-top: 1px solid rgb(219, 219, 219);
        border-bottom: 1px solid rgb(219, 219, 219);
        position: relative;
        transition: all 0.3s ease-in-out;
    }

    .hot-product:hover {
        width: 392px;
        border: 1px solid #55b2da;
        box-shadow: 0 0 10px #55b2da;
        transition: all 0.3s ease-in-out;
    }

    .hot-product_li {
        border-left: 1px solid rgb(219, 219, 219);
    }

    .hot-product p {
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #fff;
        font-size: 16px;
    }

    .content-second {
        height: 400px;
        z-index: -1;
        opacity: 0;
        position: absolute;
        transition: all 0.3s ease-in-out;
    }

    .hot-product:hover .content-second {
        width: 390px;
        top: 160px;
        left: 0;
        background-color: #fff;
        display: block;
        z-index: 20;
        opacity: 1;
        transition: all 0.3s ease-in-out;
    }

    .content-info {
        width: 270px;
        height: 160px;
        background-color: rgb(235, 235, 236);
        padding-top: 20px;
        text-align: center;
        transition: all 0.3s ease-in-out;
    }

    .hot-product:hover .content-info {
        width: 390px;
        height: 180px;
        background-color: #eef5f8;
        transition: all 0.3s ease-in-out;
    }

    .classification-title {
        text-align: center;
        color: black;
        font-size: 16px;
        font-weight: bold;
        padding-top: 10px;
        padding-bottom: 6px;
        transition: all 0.3s ease-in-out;
    }

    .hot-product:hover .classification-title {
        color: #019bdf;
        font-size: 18px;
        transition: all 0.3s ease-in-out;
    }

    .classification-summary {
        font-size: 12px;
        color: #9a9fa3;
        transition: color 0.3s ease-in-out;
    }

    .hot-product:hover .classification-summary {
        color: #2daee7;
        transition: color 0.3s ease-in-out;
    }

    .content-split-line {
        height: 0;
        border-top: 1px solid rgb(92, 92, 92);
        width: 63px;
        margin: 0 auto;
        transition: color 0.3s ease-in-out;
    }

    .hot-product:hover .content-split-line {
        border-top: 1px solid rgb(34, 166, 224);
        width: 348px;
        transition: color 0.3s ease-in-out;
    }

    .main-product {
        padding-bottom: 25px;
        border-bottom: 1px solid #eee;
    }

    .other-product-summary {
        font-size: 12px;
        color: #9a9fa3;
    }

    .content-second-detail {
        width: 348px;
        margin: 0 auto;
        background-color: #fff;
        height: 410px;
        padding-top: 15px;
    }

    .content-second-detail h5 {
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
        transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
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

    .tools {
        height: 385px;
    }

    .tools ul {
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

    .tools ul :last-child {
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
        width: 193px;
        height: 115px;
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
</style>

<template>
    <div id="app">
        <lh-top-bar></lh-top-bar>
        <lh-header></lh-header>
        <div class="introduce">
            <div class="container">
                <ul>
                    <li v-for="item in introduces">
                        <div class="l">
                            <h5>{{ item.title }}</h5>
                            <p>{{ item.summary }}</p>
                        </div>
                        <div class="r introduce_img" :class="item.image"></div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="hot-products">
            <div class="container">
                <div class="title">
                    <h3>大热门服务</h3>
                    <div class="prompt">我们只做用户的需求，而不是用户找需求。</div>
                </div>
                <ul>
                    <li class="hot-product"
                        v-for="(hotProduct, index) in hotProducts"
                        :class="{active: isActive(index)}"
                        v-on:mouseover="setActive(index)">
                        <div class="content-info">
                            <div class="classification-icon">
                                <img src="./assets/img/ser_4.png">
                            </div>
                            <div class="classification-title">
                                {{ hotProduct.title }}
                            </div>
                            <div class="classification-summary">
                                {{ hotProduct.summary }}
                            </div>
                        </div>
                        <div class="content-split-line"></div>
                        <div class="content-first">
                            <p></p>
                            <p v-for="item in hotProduct.first">{{ item }}</p>
                            <p></p>
                        </div>
                        <div class="content-second">
                            <div class="content-second-detail">
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
        <div class="clearfix"></div>
        <div class="tools">
            <div class="container">
                <div class="title">
                    <h3>实用工具</h3>
                    <div class="prompt">
                        我们只做用户的需求，而不是用户找需求。
                    </div>
                </div>
                <ul>
                    <li class="tool" v-for="item in tools">
                        <div class="tool-img">
                            <img :src="item.cover" alt="">
                        </div>
                        <div class="tool-img-mask">
                            <img src="./assets/img/sousuo.png" alt="">
                        </div>
                        <p>{{ item.department }}</p>
                        <h5>{{ item.service }}</h5>
                        <div class="tool-underline"></div>
                    </li>
                </ul>
            </div>
        </div>
        <lh-footer></lh-footer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                introduces: [
                    {
                        "title": "注册财税一条龙",
                        "summary": "你身边的会计大神",
                        "image": "introduce_img1"
                    },
                    {
                        "title": "发财宝",
                        "summary": "你身边的会计大神",
                        "image": "introduce_img2"
                    },
                    {
                        "title": "商标宝",
                        "summary": "你身边的会计大神",
                        "image": "introduce_img3"
                    },
                    {
                        "title": "人事宝",
                        "summary": "你身边的会计大神",
                        "image": "introduce_img4"
                    }
                ],
                hotProducts: [{
                    title: "IT&设计",
                    summary: "专业、专注、专心",
                    first: [
                        "个人社保",
                        "人力资源管理",
                        "个人社保",
                        "人力资源管理",
                        "个人社保",
                        "人力资源管理",
                    ],
                    main: {
                        title: "个人社保",
                        summary: "办理员工用退工，社保、公积金增加减少以及缴费基数变更（服务费：3人及以下98.8元/月）",
                    },
                    other: [
                        {
                            title: "人力资源管理",
                            summary: "专业、专注、专心"
                        },
                        {
                            title: "人力资源管理",
                            summary: "专业、专注、专心"
                        },
                        {
                            title: "人力资源管理",
                            summary: "专业、专注、专心"
                        },
                        {
                            title: "人力资源管理",
                            summary: "专业、专注、专心"
                        }
                    ]
                },
                    {
                        title: "IT&设计",
                        summary: "专业、专注、专心",
                        first: [
                            "个人社保",
                            "人力资源管理",
                            "个人社保",
                            "人力资源管理",
                            "个人社保",
                            "人力资源管理",
                        ],
                        main: {
                            title: "个人社保",
                            summary: "办理员工用退工，社保、公积金增加减少以及缴费基数变更（服务费：3人及以下98.8元/月）",
                        },
                        other: [
                            {
                                title: "人力资源管理",
                                summary: "专业、专注、专心"
                            },
                            {
                                title: "人力资源管理",
                                summary: "专业、专注、专心"
                            },
                            {
                                title: "人力资源管理",
                                summary: "专业、专注、专心"
                            },
                            {
                                title: "人力资源管理",
                                summary: "专业、专注、专心"
                            }
                        ]
                    },
                    {
                        title: "IT&设计",
                        summary: "专业、专注、专心",
                        first: [
                            "个人社保",
                            "人力资源管理",
                            "个人社保",
                            "人力资源管理",
                            "个人社保",
                            "人力资源管理",
                        ],
                        main: {
                            title: "个人社保",
                            summary: "办理员工用退工，社保、公积金增加减少以及缴费基数变更（服务费：3人及以下98.8元/月）",
                        },
                        other: [
                            {
                                title: "人力资源管理",
                                summary: "专业、专注、专心"
                            },
                            {
                                title: "人力资源管理",
                                summary: "专业、专注、专心"
                            },
                            {
                                title: "人力资源管理",
                                summary: "专业、专注、专心"
                            },
                            {
                                title: "人力资源管理",
                                summary: "专业、专注、专心"
                            }
                        ]
                    },
                    {
                        title: "IT&设计",
                        summary: "专业、专注、专心",
                        first: [
                            "个人社保",
                            "人力资源管理",
                            "个人社保",
                            "人力资源管理",
                            "个人社保",
                            "人力资源管理",
                        ],
                        main: {
                            title: "个人社保",
                            summary: "办理员工用退工，社保、公积金增加减少以及缴费基数变更（服务费：3人及以下98.8元/月）",
                        },
                        other: [
                            {
                                title: "人力资源管理",
                                summary: "专业、专注、专心"
                            },
                            {
                                title: "人力资源管理",
                                summary: "专业、专注、专心"
                            },
                            {
                                title: "人力资源管理",
                                summary: "专业、专注、专心"
                            },
                            {
                                title: "人力资源管理",
                                summary: "专业、专注、专心"
                            }
                        ]
                    }
                ],
                tools: [
                    {
                        department: "国家知识产权局",
                        service: "商标查询",
                        url: "",
                        cover: "http://ofl0lw9er.bkt.clouddn.com/tool1.png"
                    },
                    {
                        department: "国家知识产权局",
                        service: "工商查询",
                        url: "",
                        cover: "http://ofl0lw9er.bkt.clouddn.com/tool2.png"
                    },
                    {
                        department: "国家知识产权局",
                        service: "专利查询",
                        url: "",
                        cover: "http://ofl0lw9er.bkt.clouddn.com/tool3.png"
                    },
                    {
                        department: "国家知识产权局",
                        service: "软件著作权查询",
                        url: "",
                        cover: "http://ofl0lw9er.bkt.clouddn.com/tool4.png"
                    }
                ],
                dialogVisible: false,
                formStacked: {
                    name: '',
                    region: '',
                    type: ''
                },
                currentDate: "2016年10月13日",
                active: 3,
            }
        },
        methods: {
            setActive(index) {
                this.active = index;
            },
            isActive(index) {
                return this.active == index;
            }
        }
    }
</script>
