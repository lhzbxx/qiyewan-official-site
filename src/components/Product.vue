<style scoped>
    .image {
        width: 100%;
        display: block;

    }
</style>

<template>
    <div>
        <el-card :body-style="{ padding: '5px' }" style="margin:10px 20px 20px 0;">
            <img src="../assets/logo.png" class="image">
            <div style="padding: 14px;">
                <p style="font-size: 16px; color: #333;">{{ product.title }}</p>
                <p style="font-size: 13px; color: #aaa;">{{ product.summary }}</p>
                <br>
                <p style="color: red;">￥{{ product.price }}</p>
            </div>
        </el-card>
    </div>
</template>


<script>
    export default {
        data () {
            return {
                product: {
                    title: "经营地址变更（不跨区）",
                    summary: "这个服务只会有助于您事半功倍！",
                    price: 998
                }
            }
        },
        methods: {}
    }
</script>