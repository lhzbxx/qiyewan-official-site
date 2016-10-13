<template>
    <div id="app">
        <el-menu default-active="1" mode="horizontal">
            <el-menu-item index="1">工商服务</el-menu-item>
            <el-menu-item index="2">人事服务</el-menu-item>
            <el-menu-item index="3">法律服务</el-menu-item>
            <el-menu-item index="4">财税服务</el-menu-item>
            <el-menu-item index="5">IT&设计</el-menu-item>
            <el-menu-item index="6">套餐服务</el-menu-item>
            <el-menu-item index="7">快捷入口</el-menu-item>
            <el-menu-item index="8">400-716-8896</el-menu-item>
        </el-menu>

        <el-button type="text" @click.native="dialogVisible = true">点击打开 Dialog</el-button>

        <el-dialog title="企业湾密码修改" v-model="dialogVisible" size="tiny">
            <el-form label-position="top" :model="formStacked" class="demo-form-stacked">
                <el-form-item label="手机号">
                    <el-input v-model="formStacked.phone"></el-input>
                </el-form-item>
                <el-form-item label="校验码">
                    <el-input v-model="formStacked.captcha"
                              style="width: 50%; float:left; margin-right: 10px;"></el-input>
                    <el-button type="primary" style="width: 45%">点击获取</el-button>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="formStacked.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input type="password2" v-model="formStacked.password2"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" @click.native="dialogVisible = false" style="width: 100%">登 录</el-button>
        </el-dialog>

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
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
</style>