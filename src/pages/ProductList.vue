<template>
    <div class="container">
        <el-breadcrumb separator=">" style="padding: 10px 0; border-bottom: 1px solid #eee">
            <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
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
                            :img="imageIp+item.cover"
                            :price="item.price"
                            :url="item.serialId"></lh-product>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import productApi from '../api/product'
    export default {
        data() {
            return {
                imageIp: "http://ofw6tmkxn.bkt.clouddn.com/",
                products:null,
                categoryName:''
            }
        },
        created () {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData',
        },
        methods: {
            fetchData () {
                var category = this.$route.params.category;
                var regionCode = this.$route.params.regionCode;
                this.loading = true
                productApi.getProductList(regionCode,category,
                        data => {
                            this.products = data;
                            this.categoryName = category;
                        },
                        error => {
                            this.error = error
                        }
                )
                this.loading = false
            },
        }
    }
</script>