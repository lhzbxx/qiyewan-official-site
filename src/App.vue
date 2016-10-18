<template>
    <div id="app">
        <lh-top-bar></lh-top-bar>
        <el-menu default-active="1" mode="horizontal">
            <el-row>
                <el-col :span="3"></el-col>
            </el-row>
            <el-menu-item index="1">工商服务</el-menu-item>
            <el-menu-item index="2">人事服务</el-menu-item>
            <el-menu-item index="3">法律服务</el-menu-item>
            <el-menu-item index="4">财税服务</el-menu-item>
            <el-menu-item index="5">IT&设计</el-menu-item>
            <el-menu-item index="6">套餐服务</el-menu-item>
            <el-menu-item index="7">快捷入口</el-menu-item>
            <el-menu-item index="8">400-716-8896</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                dialogVisible: false,
                formStacked: {
                    name: '',
                    region: '',
                    type: ''
                },
                currentDate: "2016年10月13日"
            }
        },
        methods: {}
    }
</script>

<style>
    body {
        background-color: #fff;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
</style>