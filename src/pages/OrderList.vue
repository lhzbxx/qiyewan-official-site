<template>
    <div class="container">
        <el-breadcrumb separator=">" style="padding: 10px 0; border-bottom: 1px solid #eee">
            <el-breadcrumb-item @click.native="backToHome()">首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单</el-breadcrumb-item>
        </el-breadcrumb>
        <el-tabs>
            <el-tab-pane label="全部订单"></el-tab-pane>
            <el-tab-pane label="未付款"></el-tab-pane>
            <el-tab-pane label="已付款"></el-tab-pane>
        </el-tabs>
        <lh-loading v-if="isLoading"></lh-loading>
        <div v-if="!isLoading">
            <lh-order :orders="data"></lh-order>
            <el-pagination
                    small
                    layout="prev, pager, next"
                    @current-change="fetchData"
                    :total="totalNum">
            </el-pagination>
        </div>
        <lh-hot-products></lh-hot-products>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                isLoading: true,
                error: null,
                data: [],
                page: 1
            }
        },
        computed: mapGetters({
            token: 'getToken',
            totalNum: 'orderNum'
        }),
        created() {
            this.fetchData(1)
        },
        methods: {
            fetchData (page) {
                this.page = page
                this.loading = false
                let vm = this
                this.$store.dispatch("getOrders", page).then(
                        data => {
                            vm.data = data.content
                            vm.isLoading = false
                        },
                        error => {
                            vm.error = error
                            vm.isLoading = false
                        }
                )
            },
            backToHome() {
                this.$router.push({name: 'home'})
            }
        }
    }
</script>