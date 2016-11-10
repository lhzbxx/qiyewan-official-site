<style scoped>
    .image {
        width: 268px;
     /*   height: 273px;*/
        overflow: hidden;
        display: block;
    }

    a {
        color: #888 !important;
    }

    .product-container {
        display: inline-block;
        background-color: #fff;
    }

    #product {
        cursor: pointer;
        transition: all .2s linear;
    }

    #product:hover {
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        transform: translate3d(0, -5px, 0);
    }
</style>

<template>
    <div class="product-container">
        <el-card id="product"
                 :body-style="{ padding: '0px' }"
                 style="margin:10px 20px 20px 0;">
            <router-link :to="{ name: 'product-detail', params: { serialId: url }}">
                <img :src="img" class="image">
                <div style="padding: 14px;">
                    <p style="font-size: 16px; color: #333;width: 240px;height: 40px;overflow: hidden;">{{ title }}</p>
                    <p style="font-size: 13px; color: #aaa; width: 240px;height: 50px;overflow: hidden;">{{ summary }}</p>
                    <br>
                    <p>价格：&nbsp;<span style="color: red;font-size: 16px">&yen;{{ price }}</span></p>
                </div>
            </router-link>
        </el-card>
    </div>
</template>

<script>
    export default {
        methods: {},
        props: {
            title: String,
            summary: String,
            price: Number,
            img: String,
            url: String
        }
    }
</script>