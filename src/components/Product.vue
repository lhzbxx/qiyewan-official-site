<style scoped>
    .image {
        width: 100%;
        display: block;
    }

    #product {
        cursor: pointer;
    }
</style>

<template>
    <div>
        <el-card id="product"
                 :body-style="{ padding: '0px' }"
                 style="margin:10px 20px 20px 0;">
            <img :src="img" class="image">
            <div style="padding: 14px;">
                <p style="font-size: 16px; color: #333;">{{ title }}</p>
                <p style="font-size: 13px; color: #aaa;">{{ summary }}</p>
                <br>
                <p style="color: red;">￥{{ price }}</p>
            </div>
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
            img: String
        }
    }
</script>