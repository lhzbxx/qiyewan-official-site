<template>
    <div class="container">
        <el-breadcrumb separator=">" style="padding: 10px 0; border-bottom: 1px solid #eee">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单</el-breadcrumb-item>
        </el-breadcrumb>
        <el-tabs>
            <el-tab-pane label="全部订单"></el-tab-pane>
            <el-tab-pane label="未付款"></el-tab-pane>
            <el-tab-pane label="已付款"></el-tab-pane>
        </el-tabs>
        <lh-order></lh-order>
        <!--<br>-->
        <!--<lh-cart></lh-cart>-->
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