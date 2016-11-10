<template>
    <div class="container">
        <el-breadcrumb separator=">" style="padding: 10px 0; border-bottom: 1px solid #eee">
            <el-breadcrumb-item>
                <router-link to="/">首页</router-link>
            </el-breadcrumb-item>
            <el-breadcrumb-item>{{ categoryName }}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
            <el-col :span="24" style="margin-top: 20px;">
                <p>{{ categoryName }}</p>
            </el-col>
            <el-col :span="24">
                <lh-product v-for="item in products"
                            :title="item.name"
                            :summary="item.summary"
                            :img="cdnPrefix+item.cover"
                            :price="item.price"
                            :url="item.serialId"></lh-product>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import productApi from '../api/product'
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                products: null,
                categoryName: ''
            }
        },
        created () {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        computed: mapGetters({
            cdnPrefix: 'cdnPrefix'
        }),
        methods: {
            fetchData () {
                let category = this.$route.params.category
                let regionCode = this.$route.params.regionCode
                this.loading = true
                let vm = this
                productApi.getProductList(regionCode, category,
                        function (data) {
                            vm.products = data
                            vm.categoryName = category
                        },
                        function (error) {
                            vm.error = error
                        }
                )
                this.loading = false
            }
        }
    }
</script>