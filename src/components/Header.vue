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
        width: 700px;
        border: 1px solid #aaa;
        background-color: #FFF;
        margin-left: 36px;
        transform: translate(-50%, 0%);
        opacity: 0;
        z-index: -1;
        top: 67px;
        transition: all 0.3s ease-in-out;
        padding-bottom: 20px;
    }

    .show a {
        color: #5e5e5e !important;
    }

    .show a:hover {
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
        height: 34px;
        line-height: 34px;
        text-align: center;
        font-size: 14px;
        font-weight: normal;
        color: #626262;
        margin: 5px 0;
    }

    .registration:hover {
        cursor: pointer;
        color: #0098db;
    }

    .nav-show-content span {
        text-align: center;
        font-size: 12px;
        width: 200px;
        height: 34px;
        line-height: 34px;
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
                    <router-link
                            :to="{ name: 'product-list', params: { regionCode: getRegion.code, category: item.code }}">
                        {{ item.title }}
                    </router-link>
                    <div class="show">
                        <div class="nav-show-left l">
                            <div class="nav-show-content" v-if="item.l.title">
                                <router-link
                                        :to="{ name: 'product-list', params: { regionCode: getRegion.code, category: item.l.title }}">
                                    <div class="registration">{{ item.l.title }}</div>
                                </router-link>
                                <span v-for="i in item.l.list">
                                    <router-link :to="{ name: 'product-detail', params: { serialId: i.serialId }}">
                                        {{ i.name }}
                                    </router-link>
                                </span>
                            </div>
                        </div>
                        <div class="nav-show-right l">
                            <div class="nav-show-content">
                                <router-link
                                        :to="{ name: 'product-list', params: { regionCode: getRegion.code, category: item.r.title }}">
                                    <div class="registration">
                                        {{ item.r.title }}
                                    </div>
                                </router-link>
                                <span v-for="i in item.r.list">
                                     <router-link
                                             :to="{ name: 'product-detail', params: { serialId: i.serialId }}">
                                        {{ i.name }}
                                    </router-link>
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
                <p>
                    <a href="https://123.59.50.191:8443/dashboard">财税平台</a>
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
    import productApi from '../api/product'
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                navigators: [
                    {
                        title: "工商服务",
                        code: "IC",
                        l: {
                            title: "工商变更",
                            list: []
                        },
                        r: {
                            title: "工商注销",
                            list: []
                        }
                    },
                    {
                        title: "财税服务",
                        code: "FC",
                        l: {
                            title: "财务服务",
                            list: []
                        },
                        r: {
                            title: "税务服务",
                            list: []
                        }
                    },
                    {
                        title: "法律服务",
                        code: "LD",
                        l: {
                            title: "法律服务",
                            list: []
                        },
                        r: {
                            title: "知识产权",
                            list: []
                        }
                    },
                    {
                        title: "人事服务",
                        code: "HR",
                        l: {
                            title: "社保",
                            list: []
                        },
                        r: {
                            title: "公司人事",
                            list: []
                        }
                    },
                    {
                        title: "IT&设计服务",
                        code: "IT",
                        l: {
                            title: "网站设计",
                            list: []
                        },
                        r: {
                            title: "LOGO设计",
                            list: []
                        }
                    },
                    {
                        title: "套餐服务",
                        code: "PS",
                        l: {
                            title: "",
                            list: []
                        },
                        r: {
                            title: "套餐",
                            list: []
                        }
                    }
                ]
            }
        },
        computed: mapGetters({
            getRegion: 'getRegion',
            getRegionIndex: 'getRegionIndex'
        }),
        watch: {
            getRegionIndex: 'fetchData'
        },
        created () {
            this.fetchData()
        },
        methods: {
            fetchData () {
                let vm = this
                productApi.getNavList(this.getRegion.code,
                        function (data) {
                            vm.handleNavData(data)
                        },
                        function (error) {
                            vm.error = error
                        }
                )
            },
            handleNavData(data) {
                for (var i of this.navigators) {
                    i.l.list = data.filter(item => i.l.title == item.classificationName)
                    i.r.list = data.filter(item => i.r.title == item.classificationName)
                }
            }
        }
    }
</script>