<template>
    <div id="app">
        <!--<el-menu default-active="1" mode="horizontal" @select="handleselect">-->
            <!--<el-menu-item index="1">工商服务</el-menu-item>-->
            <!--<el-menu-item index="2">人事服务</el-menu-item>-->
            <!--<el-menu-item index="3">法律服务</el-menu-item>-->
            <!--<el-menu-item index="4">财税服务</el-menu-item>-->
            <!--<el-menu-item index="5">IT&设计</el-menu-item>-->
            <!--<el-menu-item index="6">套餐服务</el-menu-item>-->
            <!--<el-menu-item index="7">快捷入口</el-menu-item>-->
            <!--<el-menu-item index="8">400-716-8896</el-menu-item>-->
        <!--</el-menu>-->

        <el-button type="text" @click.native="dialogVisible = true">点击打开 Dialog</el-button>

        <el-dialog title="提示" v-model="dialogVisible" size="tiny">
            <el-form label-position="top" :model="formStacked" class="demo-form-stacked">
                <el-form-item label="名称">
                    <el-input v-model="formStacked.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-input v-model="formStacked.region"></el-input>
                </el-form-item>
                <el-form-item label="活动展开形式">
                    <el-input v-model="formStacked.type"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click.native="dialogVisible = false" style="width: 100%">确 定</el-button>
            </span>
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
                }
            }
        },
        methods: {
        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
</style>