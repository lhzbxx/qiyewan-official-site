<style scoped>
.content{
    margin-top:30px;
}
.con_left{
    width:830px;
    padding:0 25px;
}
.con_title{
    font-size:24px;
    color:#494949;
    margin-bottom:20px;
}
.con_note{
    font-size:12px;
    color:#888888;
    margin-bottom:20px;
}
.con_note span{
     padding-left:20px;
 }
.con_article{
    font-size:14px;
    color:#6e6e6e;
    line-height:2em;
    margin-bottom:65px;
}
.share{
    border-bottom:1px solid #e5e5e5;
    padding-bottom:20px;
}
.con_r{
    width:280px
}
.Author{
    height:230px;
    background-color: #f9f9f9;
    width:280px;
    text-align: center;
}
.avatar img{
    width:100px;
    height:100px;
    background-color: pink;
}
.avatar{
    text-align: center;
    padding:10px 0;
}
.name,.intru{
    width:125px;
    margin:0 auto;
    font-size:12px;
    line-height:1.5em;
}
.name{
    color:#666666;
    font-size:14px;
}
.intru{
    color:#9c9c9c;
}
.Author ul{
    width:181px;
    margin:0 auto;
    margin-top:15px;
}
.Author ul li{
    padding:0 10px;
    float: left;
    color: #9c9c9c;
    font-size:14px;
}
.art_num{
    border-right:1px solid #9c9c9c;
}
.con.r {
    width:280px;
}
.recommend{
    height:300px;
    background-color:#f9f9f9;
    padding:20px;
    margin-top:30px;
}
.recommend ul{
   margin-left:20px;
   margin-top:20px;
}
.recommend ul li{
   height:50px;
   font-size:12px;
   color:#666666;
}
.recommend ul li:hover{
   color:#09acf4;
   cursor: pointer;
}
.rec_tit{
    font-size:14px;
    color:#444444;
}
.el-breadcrumb{
    padding: 10px 0;
    border-bottom: 1px solid #eee
}

.art_before{
    margin:20px 0 40px 0;
    color:#9f9f9f;
    font-size:14px;
}
.share span{
    width:25px;
    height:25px;
    display: inline-block;
}
.hide{
    display: none;
}
.qq{
    background: url("../assets/img/share.png") no-repeat;
    background-position: -5px 0;
}
.qzone{
     background: url("../assets/img/share.png") no-repeat;
     background-position: -40px 0;
}
.wechat{
      background: url("../assets/img/share.png") no-repeat;
      background-position: -77px -1px;
}
.weibo{
       background: url("../assets/img/share.png") no-repeat;
       background-position: -137px -1px;
}
.share i{
    font-style: normal;
    /*line-height:10px;*/
}

</style>

<template>
    <div>
        <div class="container">
            <div class="el-breadcrumb">
            <span class="el-breadcrumb__item">
                <span class="el-breadcrumb__item__inner">首页</span>
                <span class="el-breadcrumb__separator">&gt;</span>
            </span>
            <span class="el-breadcrumb__item">
                <span class="el-breadcrumb__item__inner">创业资讯</span>
                <span class="el-breadcrumb__separator">&gt;</span>
            </span>
            <span class="el-breadcrumb__item">
                <span class="el-breadcrumb__item__inner">正文</span>
                <span class="el-breadcrumb__separator">&gt;</span>
            </span>
            </div>
            <div class="clearfix"></div>
            <div class="content">
                <div class="con_left l">
                    <div class="con_title">{{ article.title }}</div>
                    <div class="con_note">
                        <span class="con_author">作者：{{ article.author }}</span>
                        <span class="con_time">{{ getLocalTime(article.createAt) }}</span>
                        <span class="con_browse">{{ article.viewers }}</span>
                        <span class="con_department">发表于：{{ article.category }}</span>
                    </div>
                    <div class="con_article" v-html="compiledMarkdown">
                        {{ article.content }}
                    </div>
                    <div class="share">
                        <i>分享到：</i>
                        <span class="qq"></span>
                        <span class="qzone"></span>
                        <span class="wechat"></span>
                        <span class="weibo"></span>
                    </div>
                    <div class="art_before">
                        <span class="l" v-on:click="nav2article(article.pre.id)" style="cursor: pointer">上一篇：{{ article.pre.title }}</span>
                        <span class="r" v-on:click="nav2article(article.next.id)">下一篇：{{ article.next.title }}</span>
                    </div>
                </div>
                <div class="con_right r">
                    <div class="Author">
                        <div class="avatar"><img src="" alt=""></div>
                        <div class="name">{{ article.author }}</div>
                        <div class="intru">企业湾分析师</div>
                        <ul>
                            <li class="art_num" id="art_num">0篇文章</li>
                            <li>阅读量{{ article.viewers }}</li>
                        </ul>
                    </div>
                    <div class="recommend" v-for="news in recommendNewsList">
                        <div class="rec_tit">
                            {{ news.category }}
                        </div>
                        <ul style="list-style:square;">
                            <li v-for="article in news.articles" v-on:click="nav2article(article.id)">{{ article.title }}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>
    import marked from 'marked'
    import articleApi from '../api/article'

    export default {
        data() {
            return {
                article: {
                    title: "【玩转数据系列七】",
                    author: "张三",
                    create_at: "2016-9-4 11:32:20",
                    viewers: 20,
                    category: "创业咨询",
                    content: "i am a ~~tast~~ **test**.",
                    pre: {id: 2, title: "Python大法好"},
                    next: {id: 3, title: "CPP大法保平安"},
                },
                recommendNewsList: [
                    {
                        category: "热文推荐",
                        articles: [
                            {id: 1, title: "总理开辟上海自由港究竟和我们关系有多是"},
                            {id: 2, title: "总理开辟上海自由港究竟和我们关系有多是"},
                            {id: 3, title: "总理开辟上海自由港究竟和我们关系有多是"},
                            {id: 4, title: "总理开辟上海自由港究竟和我们关系有多是"},
                            {id: 5, title: "总理开辟上海自由港究竟和我们关系有多是"},
                        ]
                    },
                    {
                        category: "热度排行",
                        articles: [
                            {id: 1, title: "总理开辟上海自由港究竟和我们关系有多是"},
                            {id: 2, title: "总理开辟上海自由港究竟和我们关系有多是"},
                            {id: 3, title: "总理开辟上海自由港究竟和我们关系有多是"},
                            {id: 4, title: "总理开辟上海自由港究竟和我们关系有多是"},
                            {id: 5, title: "总理开辟上海自由港究竟和我们关系有多是"},
                        ]
                    }
                ]
            }
        },
        created() {
           var path = location.href.split('/');
           articleApi.getArticleById(path[path.length - 1], response =>{
               this.article = response.body;
               console.log(response.body);
               articleApi.articlesCount(/*response.body.author*/'Cheyanne', response => {
                   console.log(response.body.count);
                   document.getElementById('art_num').innerHTML = response.body.count + '篇文章';
               }, response => {
                   console.log(response);
               });
           }, error => {
               console.log(error)
           });

        },
        computed: {
            compiledMarkdown: function () {
                return marked(this.article.content, { sanitize: true })
            }
        },
        methods: {
            nav2article: function(article_id){
                location.href = '/#/article/' + article_id;
            },
            getLocalTime:function(nS) {
                return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
            }
        }
    }
</script>
