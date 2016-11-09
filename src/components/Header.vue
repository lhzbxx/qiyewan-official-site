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

    #nav ul li, #nav ul p {
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
        width: 625px;
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
    .show a{
        color:#5e5e5e !important;
    }
    .show a:hover{
        color: #0098db !important;
    }


    .nav-show-left {
        width: 64%;
    }

    .nav-show-right {
        width: 35%;
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

    #nav ul li > a, #nav ul p > a {
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
                                <router-link :to="{ name: 'product-list', params: { category: item.l.title }}">
                                    <div class="registration">
                                        {{ item.l.title }}
                                    </div>
                                </router-link>
                                <span v-for="i in item.l.list">
                                    <router-link :to="{ name: 'product-detail', params: { serialId: getRegion.code+i.serialId }}">
                                        {{ i.name }}
                                    </router-link>
                                </span>
                            </div>
                        </div>
                        <div class="nav-show-right l">
                            <div class="nav-show-content">
                                <div class="registration">{{ item.r.title }}</div>
                                <span v-for="i in item.r.list">
                                     <router-link :to="{ name: 'product-detail', params: { serialId: getRegion.code+i.serialId }}">
                                        {{ i.name }}
                                    </router-link>
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="">套餐服务</a>
                </li>
                <p>
                    <a href="">快捷入口</a>
                </p>
                <p>
                    <a>400-716-8896</a>
                </p>
            </ul>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        computed: mapGetters({
            getRegion: 'getRegion',
        }),
        data() {
            return {
                navigators: [
                    {
                        title: "工商服务",
                        l: {
                            title: "工商变更",
                            list: [
                                {name:"公司注册(园区)",serialId:"IC0001"},
                                {name:"公司注册(非园区)",serialId:"IC0002"},
                                {name:"1元注册(园区)+零申报记账(1年)",serialId:"IC0003"},
                                {name:"公司名称变更",serialId:"IC0004"},
                                 {name:"经营范围变更",serialId:"IC0005"},
                                 {name:"法人代表变更",serialId:"IC0006"},
                                 {name:"经营地址变更(不跨区)",serialId:"IC0007"},
                                 {name:"经营地址变更(跨区)",serialId:"IC0008"},
                                 {name:"注册资本变更",serialId:"IC0009"},
                                 {name:"股东,股权变更",serialId:"IC0010"},
                                 {name:"公司高管变更",serialId:"IC0011"},
                                 {name:"三证/五证合一",serialId:"IC0012"},
                            ]
                        },
                        r: {
                            title: "工商注销",
                            list: [
                                {name:"内资企业注销",serialId:"IC0013"},
                                {name:"1元补差产品",serialId:"IC0014"},
                            ]
                        }
                    },
                    {
                        title: "财税服务",
                        l: {
                            title: "财务服务",
                            list: [
                                {name:"零申报代理记账",serialId:"FC0001"},
                                {name:"小规模纳税人代理记账",serialId:"FC0002"},
                                {name:"一般纳税人代理记账",serialId:"FC0003"},
                                {name:"企业基本户开户",serialId:"FC0004"},
                                {name:"企业一般户开户",serialId:"FC0005"},
                            ]
                        },
                        r: {
                            title: "税务服务",
                            list: [
                               {name:"税务报道,税种认定",serialId:"FC0006"},
                               {name:"代领CA证书",serialId:"FC0007"},
                               {name:"一般纳税人认定",serialId:"FC0008"},
                               {name:"税务登记信息变更",serialId:"FC0009"},
                               {name:"代开发票服务",serialId:"FC0010"},
                            ]
                        }
                    },
                    {
                        title: "法律服务",
                        l: {
                            title: "法律服务",
                            list: [
                                {name:"合同撰写与审查（普通）",serialId:"LD0001"},
                                {name:"合同撰写与审查（定制）",serialId:"LD0002"},
                                {name:"公司章程",serialId:"LD0003"},
                                {name:"股东，合伙协议",serialId:"LD0004"},
                                {name:"股权激励协议",serialId:"LD0005"},
                                {name:"法律咨询",serialId:"LD0006"},
                                {name:"法律咨询(包月)",serialId:"LD0007"},
                                {name:"法律包服务(三个月)",serialId:"LD0008"},
                                {name:"法律包服务(半年)",serialId:"LD0009"},
                                {name:"法律包服务(一年)",serialId:"LD0010"},
                            ]
                        },
                        r: {
                            title: "知识产权",
                            list: [
                                {name:"实用新型专利申请",serialId:"LD0011"},
                                {name:"发明专利申请",serialId:"LD0012"},
                                {name:"商标注册",serialId:"LD0013"},
                                {name:"计算机软件著作权",serialId:"LD0014"},
                                {name:"文字或美术著作权",serialId:"LD0015"},
                            ]
                        }
                    },
                    {
                        title: "人事服务",
                        l: {
                            title: "社保",
                            list: [
                                {name:"企业社保账户开户",serialId:"HR0001"},
                                {name:"企业公积金账户开户",serialId:"HR0002"},
                                {name:"委托代缴社保公积金服务",serialId:"HR0003"},
                                {name:"个人社保开户",serialId:"HR0004"},
                                {name:"个人社保公积金代缴",serialId:"HR0005"},
                            ]
                        },
                        r: {
                            title: "公司人事",
                            list: [
                                {name:"人力资源基础文档",serialId:"HR0006"}
                            ]
                        }
                    },
                    {
                        title: "IT&设计服务",
                        l: {
                            title: "网站设计",
                            list: [
                                {name:"标准网站",serialId:"IT0001"},
                                {name:"定制网站",serialId:"IT0002"},
                                {name:"费用管理平台服务(SaaS)",serialId:"IT0003"},
                            ]
                        },
                        r: {
                            title: "LOGO设计",
                            list: [
                               {name:"VI设计",serialId:"IT0004"},
                               {name:"LOGO设计(一个方案)",serialId:"IT0005"},
                               {name:"LOGO设计(三个方案)",serialId:"IT0006"}
                            ]
                        }
                    }
                ]
            }
        },
    }
</script>