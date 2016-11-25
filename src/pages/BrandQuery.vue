<template>
    <div id="brand">
        <div id="search">
            <p id="title">免费查询商标</p>
            <div id="search-box">
                <input id="search-input" autofocus placeholder="请输入 商标名 或 注册号 或 申请人 关键词">
                <div id="search-button">
                    <img src="../assets/search-button.png"
                         alt="搜索">
                </div>
                <p id="count">已累计为1000+家客户服务</p>
            </div>
        </div>
        <lh-loading v-if="isSearching"></lh-loading>
        <div id="results"
             v-if="results.length > 0"
             class="container">
            <p id="result">搜到 “” 相关的结果，共50条：</p>
            <lh-brand :tmImg="item.tmImg"
                      :tmName="item.tmName"
                      :currentStatus="item.currentStatus"
                      :regNo="item.regNo"
                      :agent="item.agent"
                      :intCls="item.intCls"
                      :appDate="item.appDate"
                      v-for="item in results"></lh-brand>
            <el-pagination
                    large
                    layout="prev, pager, next"
                    @current-change="fetchData"
                    :total="results.length">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isSearching: false,
                results: []
            }
        }
    }
</script>

<style scoped>
    #search {
        height: 234px;
        padding-top: 40px;
        background-image: url("../assets/search-banner.png");
    }

    #search-button {
        width: 50px;
        height: 46px;
        float: left;
        text-align: center;
        padding-top: 7px;
        cursor: pointer;
        margin-right: 15px;
    }

    #count {
        font-size: 16px;
        position: relative;
        top: 10px;
        left: 0;
        color: #aaa;
    }

    #search-box {
        width: 700px;
        height: 50px;
        border: 2px solid #58B7FF;
        background: white;
        margin: 20px auto;
    }

    #search-input {
        border: none;
        outline: none;
        height: 46px;
        width: 600px;
        margin-left: 30px;
        font-size: 19px;
        float: left;
    }

    #title {
        text-align: center;
        font-size: 28px;
        line-height: 40px;
        color: #666;
    }

    #results {
        margin-bottom: 20px;
    }

    #result {
        font-size: 18px;
        line-height: 40px;
    }
</style>