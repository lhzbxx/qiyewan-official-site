<style scoped>
    #nav {
        height: 68px;
        width: 100%;
    }

    #nav ul {
        float: left;
        margin-left: 30px;
    }

    #nav ul li {
        float: left;
        padding-left: 40px;
        font-size: 16px;
        letter-spacing: 2px;
        position: relative;
        border-bottom: 2px solid white;
    }

    #nav ul li:hover > a {
        border-bottom: 2px solid #0098db;
    }

    #nav ul li:hover .show {
        opacity: 1;
        z-index: 10;
        transition: all 0.3s ease-in-out;
    }

    .show {
        position: absolute;
        width: 456px;
        height: 165px;
        background-color: rgba(255, 255, 255, .8);
        margin-left: 36px;
        transform: translate(-50%, 0%);
        opacity: 0;
        z-index: -1;
        top: 70px;
        transition: all 0.3s ease-in-out;
    }

    .nav-show-left, .nav-show-right {
        width: 50%;
    }

    .nav-show-content {
        margin-left: 13px;
    }

    .registration {
        text-align: center;
        font-size: 14px;
        font-weight: normal;
        color: #626262;
        margin: 10px 0;
    }

    .registration:hover {
        cursor: pointer;
        color: #0098db;
    }

    .nav-show-content span {
        text-align: center;
        font-size: 12px;
        width: 85px;
        height: 24px;
        line-height: 24px;
        display: block;
        float: left;
        margin-bottom: 7px;
        margin-left: 10px;
        color: #5e5e5e;
        background-color: #fdfdfd;
        transition: color 0.3s ease-in-out;
    }

    .nav-show-left span:hover, .nav-show-right span:hover {
        cursor: pointer;
        color: #0098db;
        transition: color 0.3s ease-in-out;
    }

    #nav ul li > a {
        color: #282828;
        display: block;
        line-height: 68px;
    }
</style>

<template>
    <div id="nav">
        <div class="container">
            <div class="logo l">
                <router-link to="/">
                    <img src="../assets/img/logo.png" alt="">
                </router-link>
            </div>
            <ul>
                <li v-for="item in navigators">
                    <a href="">{{ item.title }}</a>
                    <div class="show">
                        <div class="nav-show-left l">
                            <div class="nav-show-content">
                                <router-link to="/product/list">
                                    <div class="registration">
                                        {{ item.l.title }}
                                    </div>
                                </router-link>
                                <router-link to="/product/detail">
                                    <span v-for="i in item.l.list">
                                        {{ i }}
                                    </span>
                                </router-link>
                            </div>
                        </div>
                        <div class="nav-show-right l">
                            <div class="nav-show-content">
                                <div class="registration">{{ item.r.title }}</div>
                                <span v-for="i in item.r.list">{{ i }}</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="">套餐服务</a>
                </li>
                <li>
                    <a href="">快捷入口</a>
                </li>
                <li>
                    <a>400-716-8896</a>
                </li>
            </ul>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navigators: [
                    {
                        title: "工商服务",
                        l: {
                            title: "工商变更",
                            list: [
                                "工商注销",
                                "内资企业注销",
                                "外资企业注销",
                                "1元补差产品",
                                "股东、股权变更",
                                "注册资本变更",
                                "经营地址变更（不跨区）",
                                "公司高管变更",
                                "法人代表变更",
                                "经营范围变更",
                                "公司名称变更",
                                "分公司注册",
                                "合伙企业注册",
                                "有限责任公司注册",
                                "三证合一"
                            ]
                        },
                        r: {
                            title: "工商注销",
                            list: [
                                "内资企业注销",
                                "外资企业注销",
                                "1元补差产品"
                            ]
                        }
                    }
                ]
            }
        }
    }
</script>