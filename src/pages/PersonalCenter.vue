<template>
    <div>
        <el-row>
            <el-col :span="4">
                <el-menu mode="vertical"
                         default-active="1"
                         style="margin: 10px 10px 10px 0;">
                    <el-menu-item index="1"><i class="el-icon-menu"></i>首页</el-menu-item>
                    <el-menu-item index="2"><i class="el-icon-message"></i>我的购物车</el-menu-item>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-date"></i>我的订单</template>
                        <el-menu-item index="3-1">待支付订单</el-menu-item>
                        <el-menu-item index="3-2">已支付订单</el-menu-item>
                        <el-menu-item index="3-3">待评价</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20">
                <div style="padding: 20px;
                            border: 1px solid #eee;
                            margin-top: 10px;
                            height: 200px;">
                    <el-row style="height: 100%;">
                        <el-col :span="5"
                                style="height: 100%;
                                       display: table;">
                            <div style="width: 100%;
                                        height: 100%;
                                        display: table-cell;
                                        vertical-align: middle;">
                                <img src="../assets/logo.png"
                                     style="width: 100px;
                                            cursor: pointer;
                                            display: table-cell;
                                            vertical-align: middle;">
                            </div>
                        </el-col>
                        <el-col :span="5"
                                style="height: 100%;
                                       display: table;">
                            <div style="width: 100%;
                                        height: 100%;
                                        display: table-cell;
                                        vertical-align: middle;">
                                <p style="font-size: 18px;
                                          margin-bottom: 5px;">
                                    {{ username }}
                                </p>
                                <p style="font-size: 15px;
                                          color: #333;">
                                    {{ phoneNumber }}
                                </p>
                            </div>
                        </el-col>
                        <el-col :span="9"
                                :offset="2"
                                style="height: 100%;
                                       display: table;">
                            <div style="width: 100px;
                                        height: 100%;
                                        display: table-cell;
                                        vertical-align: middle;">
                                <img src="../assets/logo.png"
                                     style="width: 70px;
                                            cursor: pointer;">
                                <p style="font-size: 13px;">
                                    购物车
                                    <span style="color: #F7BA2A;">
                                        {{ cartNum }}
                                    </span>
                                    个
                                </p>
                            </div>
                            <div style="width: 100px;
                                        height: 100%;
                                        display: table-cell;
                                        vertical-align: middle;">
                                <img src="../assets/logo.png"
                                     style="width: 70px;
                                            cursor: pointer;">
                                <p style="font-size: 13px;">
                                    未付款
                                    <span style="color: #F7BA2A;">
                                        {{ unpaidNum }}
                                    </span>
                                    个
                                </p>
                            </div>
                            <div style="width: 100px;
                                        height: 100%;
                                        display: table-cell;
                                        vertical-align: middle;">
                                <img src="../assets/logo.png"
                                     style="width: 70px;
                                            cursor: pointer;">
                                <p style="font-size: 13px;">
                                    待评价
                                    <span style="color: #F7BA2A;">
                                        {{ unreviewedNum }}
                                    </span>
                                    个
                                </p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <br>
                <lh-table-header title="我的购物车" color="light"></lh-table-header>
                <lh-cart></lh-cart>
                <br>
                <lh-table-header title="我的订单" color="light"></lh-table-header>
                <lh-order></lh-order>
            </el-col>
        </el-row>
        <lh-hot-products></lh-hot-products>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: "Anna",
                phoneNumber: "13843429302",
                cartNum: 3,
                unpaidNum: 2,
                unreviewedNum: 3
            }
        },
        methods: {
        }
    }
</script>