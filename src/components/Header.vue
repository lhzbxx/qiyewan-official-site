<style scoped>
  #nav {
    height: 68px;
    width: 100%;
    border-bottom: 1px solid #dcdbdb;
    box-shadow: 0 2px 2px #f3f3f3;
  }

  #nav ul {
    float: left;
    margin-left: 30px;
  }

  #nav ul li, #nav ul p {
    float: left;
    height: 58px;
    padding-left: 37px;
    font-size: 16px;
    letter-spacing: 2px;
    position: relative;
    border-bottom: 2px solid white;
  }

  #nav ul li:hover > a {
    border-bottom: 2px solid #0098db;
  }

  #nav ul li:hover .show {
    opacity: 1;
    z-index: 10;
    transition: all 0.3s ease-in-out;
  }

  .init {
    opacity: 0 !important;
    z-index: -1 !important;
  }

  .show {
    position: absolute;
    width: 700px;
    border: 1px solid #aaa;
    background-color: #FFF;
    margin-left: 36px;
    transform: translate(-50%, 0%);
    opacity: 0;
    z-index: -1;
    top: 67px;
    transition: all 0.3s ease-in-out;
    padding-bottom: 20px;
  }

  .show a {
    color: #5e5e5e !important;
  }

  .show a:hover {
    color: #0098db !important;
  }

  .nav-show-left {
    width: 64%;
  }

  .nav-show-right {
    width: 35%;
  }

  .nav-show-content {
    margin-left: 13px;
  }

  .registration {
    height: 34px;
    line-height: 34px;
    text-align: center;
    font-size: 14px;
    font-weight: normal;
    color: #626262;
    margin: 5px 0;
  }

  .registration:hover {
    cursor: pointer;
    color: #0098db;
  }

  .nav-show-content span {
    text-align: center;
    font-size: 12px;
    width: 200px;
    height: 34px;
    line-height: 34px;
    display: block;
    float: left;
    margin-bottom: 7px;
    margin-left: 10px;
    color: #5e5e5e;
    background-color: #eee;
    transition: color 0.3s ease-in-out;
    overflow: hidden;
  }

  .nav-show-left span:hover, .nav-show-right span:hover {
    cursor: pointer;
    color: #0098db;
    transition: color 0.3s ease-in-out;
  }

  #nav ul li > a, #nav ul p > a {
    color: #282828;
    display: block;
    line-height: 65px;
  }

  #hot-icon {
    position: relative;
    top: -10px;
    color: red;
    font-size: 12px;
    font-weight: bold;
  }
</style>

<template>
  <div id="nav">
    <div class="container">
      <div class="logo l">
        <router-link to="/">
          <img style="height: 44px; margin-top: 10px; margin-left: 10px;"
               src="http://cdn.qiyewan.com/logo.png" alt="">
        </router-link>
      </div>
      <ul style="margin-left: 0;">
        <li v-for="item in navigators"
            v-on:mouseenter="isHovering = true">
          <router-link
            :to="{ name: 'product-list', params: { regionCode: getRegion.code, category: item.code }}">
            {{ item.title }}
          </router-link>
          <div class="show"
               v-bind:class="{'init': !isHovering}">
            <div class="nav-show-left l">
              <div class="nav-show-content" v-if="item.l.title">
                <router-link
                  :to="{ name: 'product-list', params: { regionCode: getRegion.code, category: item.l.title }}">
                  <div class="registration">{{ item.l.title }}</div>
                </router-link>
                <router-link
                  :to="{ name: 'product-detail', params: { serialId: i.serialId }}"
                  v-for="i in item.l.list"><span>{{ i.name }}</span>
                </router-link>
              </div>
            </div>
            <div class="nav-show-right l">
              <div class="nav-show-content">
                <router-link
                  :to="{ name: 'product-list', params: { regionCode: getRegion.code, category: item.r.title }}">
                  <div class="registration">
                    {{ item.r.title }}
                  </div>
                </router-link>
                <router-link
                  :to="{ name: 'product-detail', params: { serialId: i.serialId }}"
                  v-for="i in item.r.list"><span>{{ i.name }}</span>
                </router-link>
              </div>
            </div>
          </div>
        </li>
        <p>
          <router-link to="/brand">免费商标查询<span id="hot-icon">hot</span></router-link>
        </p>
        <p>
          <router-link to="/inv">投融资</router-link>
        </p>
        <p>
          <a href="http://tax.qiyewan.com/dashboard">财税平台</a>
        </p>
      </ul>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
  import productApi from '../api/product'
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {
        isHovering: false,
        navigators: [
          {
            title: '工商服务',
            code: 'IC',
            l: {
              title: '工商变更',
              list: []
            },
            r: {
              title: '工商注销',
              list: []
            }
          },
          {
            title: '财税服务',
            code: 'FC',
            l: {
              title: '财务服务',
              list: []
            },
            r: {
              title: '税务服务',
              list: []
            }
          },
          {
            title: '法律服务',
            code: 'LD',
            l: {
              title: '法律服务',
              list: []
            },
            r: {
              title: '知识产权',
              list: []
            }
          },
          {
            title: '人力资源服务',
            code: 'HR',
            l: {
              title: '企业',
              list: []
            },
            r: {
              title: '个人',
              list: []
            }
          },
          {
            title: 'IT&设计服务',
            code: 'IT',
            l: {
              title: '网站设计',
              list: []
            },
            r: {
              title: 'LOGO设计',
              list: []
            }
          }
        ]
      }
    },
    computed: mapGetters({
      getRegion: 'getRegion',
      getRegionIndex: 'getRegionIndex'
    }),
    watch: {
      getRegionIndex: 'fetchData',
      $route () {
        this.isHovering = false
        this.fetchData()
      }
    },
    mounted () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        let vm = this
        productApi.getNavList(this.getRegion.code,
          function (data) {
            vm.handleNavData(data)
          },
          function (error) {
            vm.error = error
          }
        )
      },
      handleNavData (data) {
        for (var i of this.navigators) {
          i.l.list = data.filter(item => i.l.title === item.classificationName)
          i.r.list = data.filter(item => i.r.title === item.classificationName)
        }
      }
    }
  }
</script>
