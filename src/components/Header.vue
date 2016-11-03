<style scoped>
    #nav {
        height: 68px;
        width: 100%;
        border-bottom: 1px solid #dcdbdb;
        box-shadow: 0 2px 2px #f3f3f3;
    }

    #nav ul {
        float: left;
        margin-left: 30px;
    }

    #nav ul li {
        float: left;
        height: 58px;
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
        width: 700px;
        /*//background-color: rgba(255, 255, 255, .6);*/
        border: 1px solid #aaa;
        background-color: #FFF;
        margin-left: 36px;
        transform: translate(-50%, 0%);
        opacity: 0;
        z-index: -1;
        top: 70px;
        transition: all 0.3s ease-in-out;
        padding-bottom: 20px;
    }

    .nav-show-left {
        width: 65%;
    }
    .nav-show-right {
        width:35%;
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
        width: 180px;
        height: 24px;
        line-height: 24px;
        display: block;
        float: left;
        margin-bottom: 7px;
        margin-left: 10px;
        color: #5e5e5e;
        background-color: #eee;
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
        line-height: 65px;
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
                    },
                    {
                        title: "人事服务",
                        l: {
                            title: "社保",
                            list: [
                                "企业社保账户开户",
                                "企业公积金账户开户",
                                "委托代缴社保公积金服务",
                                "个人社保公积金账户代开户",
                                "个人社保公积金代缴",
                            ]
                        },
                        r: {
                            title: "公司人事",
                            list: [
                                "人力资源基础文档",
                            ]
                        }
                    },
                    {
                        title: "法律服务",
                        l: {
                            title: "法律服务",
                            list: [
                                "合同撰写与审查（定制）",
                                "法律咨询",
                                "法律包服务",
                                "股东，合伙协议",
                                "公司章程",
                                "股权激励协议",
                                "合同撰写与审查（普通）"
                            ]
                        },
                        r: {
                            title: "知识产权",
                            list: [
                                "实用新型专利申请",
                                "发明专利申请",
                                "商标注册",
                                "计算机软件著作权",
                                "文字或美术著作权"
                            ]
                        }
                    },
                    {
                        title: "财税服务",
                        l: {
                            title: "财税服务",
                            list: [
                                "零申报代理记账",
                                "小规模纳税人代理记账",
                                "一般纳税人代理记账",
                            ]
                        },
                        r: {
                            title: "税务服务",
                            list: [
                                "税务报道，税种核定",
                                "一般纳税人认定"
                            ]
                        }
                    },
                    {
                        title: "IT&设计服务",
                        l: {
                            title: "网站设计",
                            list: [
                                "标准网站",
                                "定制网站",
                                "差旅及费用管理平台服务(SaaS)"
                            ]
                        },
                        r: {
                            title: "LOGO设计",
                            list: [
                                "VI设计",
                                "LOGO设计"
                            ]
                        }
                    }
                ]
            }
        }
    }
</script>