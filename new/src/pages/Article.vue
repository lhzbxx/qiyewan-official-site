<style scoped>
  .content {
    margin-top: 30px;
  }

  .con_left {
    width: 830px;
    padding: 0 25px;
  }

  .con_title {
    font-size: 24px;
    color: #494949;
    margin-bottom: 20px;
  }

  .con_note {
    font-size: 12px;
    color: #888888;
    margin-bottom: 20px;
  }

  .con_note span {
    padding-left: 20px;
  }

  .con_article {
    font-size: 14px;
    color: #6e6e6e;
    line-height: 2em;
    margin-bottom: 65px;
  }

  .share {
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 20px;
  }

  .con_r {
    width: 280px
  }

  .Author {
    height: 230px;
    background-color: #f9f9f9;
    width: 280px;
    text-align: center;
  }

  .avatar img {
    width: 100px;
    height: 100px;
    background-color: pink;
  }

  .avatar {
    text-align: center;
    padding: 10px 0;
  }

  .name, .intru {
    width: 125px;
    margin: 0 auto;
    font-size: 12px;
    line-height: 1.5em;
  }

  .name {
    color: #666666;
    font-size: 14px;
  }

  .intru {
    color: #9c9c9c;
  }

  .Author ul {
    width: 181px;
    margin: 0 auto;
    margin-top: 15px;
  }

  .Author ul li {
    padding: 0 10px;
    float: left;
    color: #9c9c9c;
    font-size: 14px;
  }

  .art_num {
    border-right: 1px solid #9c9c9c;
  }

  .con.r {
    width: 280px;
  }

  .recommend {
    background-color: #f9f9f9;
    padding: 20px;
    margin-top: 30px;
  }

  .recommend ul {
    margin-left: 20px;
    margin-top: 20px;
  }

  .recommend ul li {
    height: 50px;
    font-size: 12px;
    color: #666666;
  }

  .recommend ul li a {
    color: #666666 !important;
  }

  .recommend ul li:hover,
  .recommend ul li a:hover {
    color: #09acf4 !important;
    cursor: pointer;
  }

  .rec_tit {
    font-size: 14px;
    color: #444444;
  }

  .el-breadcrumb {
    padding: 10px 0;
    border-bottom: 1px solid #eee
  }

  .art_before {
    margin: 20px 0 40px 0;
    color: #9f9f9f;
    font-size: 14px;
  }

  .share span {
    width: 25px;
    height: 25px;
    display: inline-block;
  }

  .hide {
    display: none;
  }

  .qq {
    background: url("../assets/img/share.png") no-repeat;
    background-position: -5px 0;
  }

  .qzone {
    background: url("../assets/img/share.png") no-repeat;
    background-position: -40px 0;
  }

  .wechat {
    background: url("../assets/img/share.png") no-repeat;
    background-position: -77px -1px;
  }

  .weibo {
    background: url("../assets/img/share.png") no-repeat;
    background-position: -137px -1px;
  }

  .share i {
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
            <span class="con_time">{{ article.created_at }}</span>
            <span class="con_department">发表于：{{ article.from }}</span>
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
            <span class="l" v-on:click="nav2article(article.pre.id)"
                  style="cursor: pointer">上一篇：{{ article.pre.title }}</span>
            <span class="r" v-on:click="nav2article(article.next.id)">下一篇：{{ article.next.title }}</span>
          </div>
        </div>
        <div class="con_right r">
          <div class="Author">
            <div class="avatar"><img src="../assets/img/logo_samll.png" alt=""></div>
            <div class="name">{{ article.author }}</div>
            <div class="intru">企业湾分析师</div>
            <ul>
              <li class="art_num" id="art_num">0篇文章</li>
              <li>阅读量{{ article.view_count }}</li>
            </ul>
          </div>
          <div class="recommend">
            <div class="rec_tit">
              热文推荐
            </div>
            <ul style="list-style:square;">
              <li v-for="item in recommendNewsList">
                <router-link :to="{ name: 'article', params: { id: item.id }}">{{ item.title }}
                </router-link>
              </li>
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
        article: [],
        recommendNewsList: null
      }
    },
    watch: {
      '$route': 'fetchData'
    },
    created() {
      this.fetchData();
    },
    computed: {
      compiledMarkdown: function () {
        return marked(this.article.content, {sanitize: true})
      }
    },
    methods: {
      nav2article: function (article_id) {
        location.href = '/#/article/' + article_id;
        location.reload();
      },
      fetchData () {
        let vm = this;
        articleApi.getArticle(vm.$route.params.id, data => {
          vm.article = data.data[0];
        }, error => {
          vm.error = error
        });

        articleApi.getRecommendNews(data => {
          vm.recommendNewsList = data.data;
        }, error => {
          vm.error = error
        });
      }
    }
  }
</script>
