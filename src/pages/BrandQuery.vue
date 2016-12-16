<template>
  <div id="brand">
    <div id="search">
      <p id="title">免费查询商标</p>
      <div id="search-box">
        <input id="search-input"
               v-model="query"
               autofocus
               placeholder="请输入 商标名 或 注册号 或 申请人 关键词">
        <div id="search-button">
          <img src="../assets/search-button.png"
               v-on:click="search(1)"
               alt="搜索">
        </div>
      </div>
      <p id="count">已累计为5000+家客户服务</p>
    </div>
    <lh-loading v-if="isSearching"></lh-loading>
    <div id="results"
         v-if="result"
         class="container">
      <p id="result">搜到 “{{ query2 }}” 相关的结果，共{{ result.allRecords }}条：</p>
      <lh-brand :tmImg="item.tmImg"
                :tmName="item.tmName"
                :currentStatus="item.currentStatus"
                :regNo="item.regNo"
                :applicantCn="item.applicantCn"
                :intCls="item.intCls"
                :appDate="item.appDate"
                v-for="item in JSON.parse(result.results)"></lh-brand>
      <el-pagination
        large
        layout="prev, pager, next"
        :page-size="30"
        @current-change="search"
        :total="result.allRecords">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import brandApi from '../api/brand'
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {
        query: '',
        query2: '',
        isSearching: false,
        result: null
      }
    },
    computed: mapGetters({
      token: 'getToken',
      isLogin: 'isLogin'
    }),
    methods: {
      search (page) {
        if (!this.isLogin) {
          this.$store.commit('REQUIRE_LOGIN')
          return
        }
        this.result = null
        this.query2 = this.query
        if (this.isSearching) {
          return
        }
        this.isSearching = true
        let vm = this
        if (this.query !== '') {
          brandApi.fuzzyQuery(this.token, this.query, page, data => {
            vm.result = data
            vm.isSearching = false
          }, error => {
            console.log(error)
          })
        }
      }
    }
  }
</script>

<style scoped>
  #search {
    height: 234px;
    padding-top: 40px;
    background-image: url("../assets/search-banner.png");
    text-align: center;
  }

  #search-button {
    width: 50px;
    height: 46px;
    float: left;
    text-align: center;
    padding-top: 7px;
    cursor: pointer;
    margin-right: 16px;
  }

  #count {
    font-size: 16px;
    color: #aaa;
    width: 700px;
    text-align: left;
    margin: -10px auto 0;
  }

  #search-box {
    width: 700px;
    height: 50px;
    border: 2px solid #58B7FF;
    background: white;
    margin: 20px auto;
  }

  #search-input {
    border: none;
    outline: none;
    height: 46px;
    width: 600px;
    margin-left: 30px;
    font-size: 19px;
    float: left;
  }

  #title {
    text-align: center;
    font-size: 28px;
    line-height: 40px;
    color: #666;
  }

  #results {
    margin-bottom: 20px;
  }

  #result {
    font-size: 18px;
    line-height: 40px;
  }
</style>
