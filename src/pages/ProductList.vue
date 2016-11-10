<template>
    <div class="container">
        <el-breadcrumb separator=">" style="padding: 10px 0; border-bottom: 1px solid #eee">
            <el-breadcrumb-item><router-link to="/">首页</router-link></el-breadcrumb-item>
            <el-breadcrumb-item>工商服务</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
            <el-col :span="24" style="margin-top: 20px;">
                <p>工商变更</p>
            </el-col>
            <el-col :span="24">
                <lh-product v-for="item in products"
                            :title="item.name"
                            :summary="item.summary"
                            :img="imageIp+item.cover"
                            :price="item.unitPrice"
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
            }
        },
        created () {
            this.fetchData()
        },
        methods: {
            fetchData () {
                this.loading = true
                productApi.getProductList('工商变更',
                        data => {
                            this.products = data.content;
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