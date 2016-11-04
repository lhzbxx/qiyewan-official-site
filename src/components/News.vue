<style scoped>
    #news {
        border: 1px solid #dcdcdc;
        width: 224px;
        height: 335px;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        transition: all .2s linear;
    }
    #news:hover{
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        transform: translate3d(0, -5px, 0);
    }
    img {
        height: 45%;
        width: 100%;
    }
    #detail {
        margin: 0 auto;
        width: 80%;
        height: 50%;
        padding-top: 5px;
    }
    h3 {
        height: 60px;
        line-height: 30px;
        color: #444;
    }
    p {
        height: 52px;
        margin-bottom: 15px;
        color: #666;
        overflow: hidden;
    }
    #tags {
        position: relative;
        bottom: 5px;
        margin-left: 0;
    }
    .tag:first-child {
        margin-left: 0;
    }
    .tag {
        border: 1px solid #dcdcdc;
        float: left;
        padding: 3px 5px;
        margin-left: 5px;
    }
    #time {
        position: absolute;
        left: 20px;
        bottom: 10px;
        color: #888;
    }
    #views {
        position: absolute;
        right: 20px;
        bottom: 10px;
        color: #888;
    }
</style>

<template>
    <div id="news">
        <img :src="img" alt="">
        <div id="detail">
            <h3>{{ title }}</h3>
            <p>{{ summary }}</p>
            <ul id="tags">
                <li class="tag" v-for="item in tags">{{ item }}</li>
            </ul>
            <div class="clearfix"></div>
            <div style="width: 100%;">
                <span id="time">{{ date }}</span>
                <span id="views">{{ views }} 次浏览</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            img:String,
            url:String,
            title: String,
            summary: String,
            tags: {
                type: Array
            },
            date: String,
            views: Number
        }
    }
</script>