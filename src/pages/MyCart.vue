<template>
    <div>
        <div class="container">
            <el-breadcrumb separator=">" style="padding: 10px 0; border-bottom: 1px solid #eee">
                <el-breadcrumb-item @click.native="backToHome()">首页</el-breadcrumb-item>
                <el-breadcrumb-item>购物车</el-breadcrumb-item>
            </el-breadcrumb>
            <br>
            <lh-loading v-if="isLoading"></lh-loading>
            <div v-if="!isLoading">
                <lh-cart :carts="data"
                         :page="page"></lh-cart>
                <el-pagination
                        small
                        layout="prev, pager, next"
                        style="margin-top: -34px; margin-left: 15px;"
                        @current-change="fetchData"
                        :total="totalNum">
                </el-pagination>
            </div>
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
            totalNum: 'cartNum'
        }),
        created() {
            this.fetchData(1)
        },
        methods: {
            fetchData (page) {
                this.page = page
                this.loading = false
                let vm = this
                this.$store.dispatch("getCarts", page).then(
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