<style scoped>
  .content {
    margin-top: 30px;
  }

  .con_left {
    width: 830px;
    padding: 0 25px 0 0;
  }

  .con_title {
    font-size: 24px;
    color: #777;
    margin-bottom: 20px;
  }

  .con_note {
    font-size: 14px;
    color: #aaa;
    margin-bottom: 20px;
  }

  .con_note span:not(:first-child) {
    margin-left: 20px;
  }

  .con_article {
    font-size: 14px;
    color: #6e6e6e;
    line-height: 2em;
    padding-bottom: 12px;
    text-align: justify;
    -moz-text-align-last: justify;/*ff*/
    -webkit-text-align-last: justify;/*chrome 20+*/
  }

  .author {
    height: 230px;
    background-color: #f9f9f9;
    width: 300px;
    text-align: center;
  }

  .avatar img {
    width: 30%;
    height: 80px;
    margin-top: 16px;
  }

  .avatar {
    text-align: center;
    padding: 10px 0;
  }

  .name, .intru {
    width: 125px;
    margin: 5px auto 0 auto;
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

  .author ul {
    width: 181px;
    margin-left: 33%;
    margin-top: 10px;
  }

  .author ul li {
    float: left;
    color: #9c9c9c;
    font-size: 14px;
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
    height: 40px;
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
    margin: 20px 0 70px 0;
    color: #9f9f9f;
    font-size: 14px;
  }

  .share span {
    width: 25px;
    height: 25px;
    display: inline-block;
  }

  .share i {
    font-style: normal;
    /*line-height:10px;*/
  }

  hr {
    display: block;
    border: 0;
    border-top: 1px solid #eee;
    margin: 1em 0;
    padding: 0;
  }

  .vertical-splitter {
    border-right: 1px solid #9c9c9c;
    height: 14px;
    margin: 3px 5px 0 5px;
  }

</style>

<template>
  <div>
    <lh-loading v-if="!article || loading"></lh-loading>
    <div class="container" v-else>
      <div class="el-breadcrumb">
            <span class="el-breadcrumb__item">
                <span class="el-breadcrumb__item__inner"><a href="/">首页</a></span>
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
            <span class="con_department">发表于：{{ article.source }}</span>
          </div>
          <div class="con_article" v-html="article.content">
          </div>
          <hr>
          <div class="art_before">
            <span class="l" v-on:click="nav2article(article.pre.id)"
                  style="cursor: pointer">上一篇：{{ article.pre.title }}</span>
            <span class="r" v-on:click="nav2article(article.next.id)">下一篇：{{ article.next.title }}</span>
          </div>
        </div>
        <div class="con_right r">
          <div class="author">
            <div class="avatar"><img src="../assets/logo_bg_alpha.png" alt=""></div>
            <div class="name">{{ article.author }}</div>
            <div class="intru">企业湾分析师</div>
            <ul>
              <li id="art_num">0篇文章</li>
              <li class="vertical-splitter"></li>
              <li>阅读量{{ article.pv }}</li>
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
  import articleApi from '../api/article'

  export default {
    data () {
      return {
        loading: true,
        article: null,
        recommendNewsList: null
      }
    },
    watch: {
      '$route': 'fetchData'
    },
    created () {
      this.fetchData()
    },
    methods: {
      nav2article: function (articleId) {
        this.$router.push({name: 'article', params: {id: articleId}})
      },
      fetchData () {
        let vm = this
        articleApi.getArticle(vm.$route.params.id, data => {
          vm.article = data.data[0]
          vm.loading = false
        }, error => {
          vm.error = error
        })
        articleApi.getRecommendNews(data => {
          vm.recommendNewsList = data.data
        }, error => {
          vm.error = error
        })
      }
    }
  }
</script>
