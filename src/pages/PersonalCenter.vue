<template>
    <div>
        <el-row>
            <el-col :span="4">
                <el-menu mode="vertical" default-active="1" style="margin: 10px 10px 10px 0;">
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
                            margin-top: 10px;">
                    <el-row>
                        <el-col :span="12">
                            <img src="../assets/logo.png">
                        </el-col>
                        <el-col :span="12"></el-col>
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
            }
        },
        methods: {
        }
    }
</script>