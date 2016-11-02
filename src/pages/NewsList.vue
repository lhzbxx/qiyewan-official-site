<style scoped>
    .display-block {
        display: inline-block;
    }

    .top-img {
        position: relative;
        left: -385px;
        margin-bottom: 26px;
    }

    /*创业咨询*/
    .total-title {
        height: 34px;
        border-top: 1px solid #ccefff;
        background-color: #f7f7f7;
        padding-left: 15px;
        margin-bottom: 14px;
        color: #0098db;
        font-size: 16px;
        line-height: 34px;
    }

    .total-title:before {
        content: '';
        position: absolute;
        left: 0;
        background: #0098db;
        width: 93px;
        top: 0;
        height: 1px;
    }

    .big-news {
        height: 244px;
        width: 370px;
    }

    .opt-news-title {
        position: absolute;
        top: 204px;
        height: 40px;
        width: 370px;
        padding-left: 25px;
        overflow-y: hidden;
        background-color: rgba(100, 100, 100, .4);
        color: #fff;
        font-size: 16px;
        line-height: 40px;
    }

    .img-news {
        position: relative;
        margin-bottom: 10px;
        cursor: pointer;

    }
    .img-news:hover .opt-news-title{
        transition: all .2s ease-in-out;
        background-color: rgba(100, 100, 100, .8);
    }

    .prev-news, .next-news {
        display: inline-block;
        height: 50px;
        width: 20px;
        cursor: pointer;
    }

    .prev-news {
        background: url("../assets/img/icon_prev_news.png");
        margin-right: 2px;
    }

    .next-news {
        background: url("../assets/img/icon_next_news.png");
        margin-left: 6px;
    }

    .slider-news {
        height: 50px;
        width: 100px;
        margin-left: 5px;
        overflow: hidden;
        cursor: pointer;
    }

    .business-right {
        padding-left: 17px;
    }

    .bu-right-list {
        padding: 10px;
        background-color: #f5f5f5;
        margin-bottom: 20px;
        color: #686868;
        font-size: 16px;
        text-align: center;
    }

    .bu-right-list:last-child {
        margin-bottom: 0;
    }

    .news-date {
        width: 52px;
        vertical-align: middle;
    }

    .day {
        font-size: 20px;
        color: #e4002c;
    }

    .list-title {
        width: 266px;
        margin-left: 10px;
        vertical-align: middle;
        overflow: hidden;
        text-align: left;
        cursor: pointer;
    }

    /*财税资讯*/
    .saas-news {
        margin-top: 38px;
    }

    .little-news-img {
        height: 76px;
        width: 111px;
        margin-right: 10px;
        overflow: hidden;
        vertical-align: middle;
    }

    .news-summary {
        width: 225px;
        height: 76px;
        overflow: hidden;
        font-size: 14px;
        vertical-align: middle;
        color: #1aa0e3;
    }
.saas-img-news{
    cursor: pointer;
    transition: all .2s ease-in-out;
}
.saas-img-news:hover{
    background-color: #eff;
}
    /*右侧精彩推荐*/
    .right-item {
        background-color: #f7f7f7;
        width: 340px;
        margin-bottom: 39px;
    }

    .right-title {
        position: relative;
        padding-left: 10px;
        font-size: 16px;
        line-height: 40px;
    }

    .right-title:before {
        content: '';
        position: absolute;
        top: 11px;
        width: 3px;
        height: 18px;
        background: #0098db;
    }

    .right-news-img {
        height: 240px;
        width: 340px;
        overflow: hidden;
    }

    .right-item .opt-news-title {
        width: 340px;
        top: 200px;
    }

    .r-i-list {
        padding: 0 15px 10px 15px;
        list-style: square;

    }

    .r-i-list li {
        cursor: pointer;
        color: #575757;
        font-size: 14px;
        margin-top: 10px;
        margin-left: 15px;
    }

    .r-i-list li:hover,.bu-right-list:hover {
        transition: all .2s ease-in-out;
        color: #1aa0e3;
    }
</style>

<template>
    <div class="container">
        <div class="top-img"><img src="../assets/img/banner_2.png"></div>
        <el-row>
            <el-col :span="16">
                <div>
                    <p class="total-title">创业资讯</p>
                    <el-row>
                        <el-col :span="12" class="business-left">
                            <div class="img-news">
                                <img src="../assets/img/banner_2.png" class="big-news" alt="news-img">
                                <p class="opt-news-title">上海国际马拉松上海国</p>
                            </div>
                            <div>
                                <span class="prev-news"></span>
                                <img src="../assets/img/shangbiao.jpg" class="slider-news" alt="news-img"><img
                                    src="../assets/img/shangbiao.jpg" class="slider-news" alt="news-img"><img
                                    src="../assets/img/shangbiao.jpg" class="slider-news" alt="news-img">
                                <span class="next-news"></span>
                            </div>
                        </el-col>
                        <el-col :span="12" class="business-right">
                            <div class="bu-right-list">
                                <div class="news-date display-block">
                                    <p class="day">10</p>
                                    <p class="year-month">2016/10</p>
                                </div>
                                <p class="list-title display-block">我是新是新闻标题我是新闻标题</p>
                            </div>
                            <div class="bu-right-list">
                                <div class="news-date display-block">
                                    <p class="day">10</p>
                                    <p class="year-month">2016/10</p>
                                </div>
                                <p class="list-title display-block">我是新是新闻标题我是新闻标题</p>
                            </div>
                            <div class="bu-right-list">
                                <div class="news-date display-block">
                                    <p class="day">10</p>
                                    <p class="year-month">2016/10</p>
                                </div>
                                <p class="list-title display-block">我是新是新闻标题我是新闻标题</p>
                            </div>
                            <div class="bu-right-list">
                                <div class="news-date display-block">
                                    <p class="day">10</p>
                                    <p class="year-month">2016/10</p>
                                </div>
                                <p class="list-title display-block">我是新是新闻标题我是新闻标题</p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <el-row class="saas-news">
                    <el-col :span="11">
                        <p class="total-title">财税资讯</p>
                        <div class="saas-img-news">
                            <img src="../assets/img/banner_2.png" class="little-news-img" alt="">
                            <p class="news-summary display-block">闻描述新述新闻描述闻描述新述新闻描述闻描述新述新闻描述闻描述新述新闻描述闻描述新述新闻描述</p>
                        </div>
                        <ul class="r-i-list">
                            <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                            <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                            <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                            <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                            <li>新闻标题</li>
                        </ul>
                    </el-col>
                    <el-col :span="11" :offset="2">
                        <p class="total-title">法律资讯</p>
                        <div class="saas-img-news">
                            <img src="../assets/img/banner_2.png" class="little-news-img" alt="">
                            <p class="news-summary display-block">闻描述新述新闻描述闻描述新述新闻描述闻描述新述新闻描述闻描述新述新闻描述闻描述新述新闻描述</p>
                        </div>
                        <ul class="r-i-list">
                            <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                            <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                            <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                            <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                            <li>新闻标题</li>
                        </ul>
                    </el-col>
                </el-row>
                <el-row class="saas-news">
                    <el-col :span="11">
                        <p class="total-title">财税资讯</p>
                        <div class="saas-img-news">
                            <img src="../assets/img/banner_2.png" class="little-news-img" alt="">
                            <p class="news-summary display-block">闻描述新述新闻描述闻描述新述新闻描述闻描述新述新闻描述闻描述新述新闻描述闻描述新述新闻描述</p>
                        </div>
                        <ul class="r-i-list">
                            <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                            <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                            <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                            <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                            <li>新闻标题</li>
                        </ul>
                    </el-col>
                    <el-col :span="11" :offset="2">
                        <p class="total-title">法律资讯</p>
                        <div class="saas-img-news">
                            <img src="../assets/img/banner_2.png" class="little-news-img" alt="">
                            <p class="news-summary display-block">闻描述新述新闻描述闻描述新述新闻描述闻描述新述新闻描述闻描述新述新闻描述闻描述新述新闻描述</p>
                        </div>
                        <ul class="r-i-list">
                            <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                            <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                            <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                            <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                            <li>新闻标题</li>
                        </ul>
                    </el-col>
                </el-row>

            </el-col>
            <el-col :span="7" :offset="1">
                <div class="right-item">
                    <p class="right-title">&nbsp;分类标题</p>
                    <div class="img-news">
                        <img src="../assets/img/banner_2.png" class="right-news-img">
                        <p class="opt-news-title">上海国际马拉松上海国</p>
                    </div>
                    <ul class="r-i-list">
                        <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                        <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                    </ul>
                </div>
                <div class="right-item">
                    <p class="right-title">&nbsp;分类标题</p>
                    <div class="img-news">
                        <img src="../assets/img/banner_2.png" class="right-news-img">
                        <p class="opt-news-title">上海国际马拉松上海国</p>
                    </div>
                    <ul class="r-i-list">
                        <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                        <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                    </ul>
                </div>
                <div class="right-item">
                    <p class="right-title">&nbsp;分类标题</p>
                    <div class="img-news">
                        <img src="../assets/img/banner_2.png" class="right-news-img">
                        <p class="opt-news-title">上海国际马拉松上海国</p>
                    </div>
                    <ul class="r-i-list">
                        <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                        <li>新闻标题新闻标题新闻标题新闻标题新闻标</li>
                    </ul>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                hello: 'hello'
            }
        },
    }
</script>
