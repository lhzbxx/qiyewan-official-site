<style scoped>
  #top-bar {
    height: 35px;
    width: 100%;
    background-color: #f7f7f7;
    position: relative;
    z-index: 30;
  }

  #location {
    position: relative;
    width: 100px;
    height: 35px;
    top: 0;
    cursor: default;
    border: 1px solid #f7f7f7;
    border-top: none;
    background: #eee;
  }

  #location img {
    position: relative;
    left: 18px;
    top: 8px;
  }

  #location:hover #area.active {
    display: block;
  }

  #location:hover {
    background-color: white;
    border: 1px solid #0097da;
    border-top: none;
  }

  #location span {
    position: relative;
    left: 25px;
    top: 3px;
  }

  #area {
    position: absolute;
    width: 192px;
    height: 131px;
    background-color: #fff;
    top: 33px;
    left: -1px;
    border-left: 1px solid #0097da;
    border-right: 1px solid #0097da;
    border-bottom: 1px solid #0097da;
    z-index: 2;
    display: none;
  }

  #area ul {
    width: 168px;
    margin: 0 auto;
  }

  #area ul p {
    width: 93px;
    height: 0;
    border-top: 1px solid #0097da;
    margin-left: 87px;
  }

  #area ul li {
    width: 50px;
    float: left;
    margin-top: 10px;
    margin-left: 3px;
    margin-right: 3px;
    color: #818080;
    text-align: center;
    line-height: 30px;
  }

  #area ul li.active {
    background-color: #0ca6ea !important;
    color: white !important;
  }

  #area ul li:hover {
    cursor: pointer;
    color: #0ca6ea;
    background-color: #F4F4F4;
  }

  #header-user-block {
    overflow: hidden;
  }

  #header-user-block ul {
    display: inline-block;
    float: right;
    margin-left: 30px;
  }

  #header-user-block ul li {
    float: left;
    height: 35px;
    line-height: 35px;
  }

  #header-user-block ul li a {
    cursor: pointer;
    border-right: 1px solid #9f9f9f;
    padding: 0 10px;
    height: 20px;
    color: #808080;
  }

  #header-user-block ul li a:hover {
    color: #0ca6ea;
  }

  #header-user-block ul :last-child a {
    border-right: none;
  }

  #tel a {
    cursor: pointer;
    color: #4e4e4e;
  }

  #tel a:hover {
    color: #0ca6ea;
  }

  #tel {
    display: inline-block;
    font-size: 13px;
    color: #4e4e4e;
    float: right;
    line-height: 35px;
  }

  .ci-right {
    top: 13px;
    right: 10px;
    height: 7px;
    overflow: hidden;
    position: absolute;
    display: block;
    font: 400 15px/15px consolas;
    color: #00a7f0;
    transform: rotate(0deg);
    transition: transform .2s ease-in 0s;
  }

  #location:hover .ci-right {
    transform: rotate(180deg);
    transition: transform .2s ease-in 0s;
  }

  s {
    position: relative;
    top: -7px;
    text-decoration: none;
  }
</style>

<template>
  <div id="top-bar">
    <div class="container">
      <div id="location" class="l" v-on:mouseenter="isShowing = true">
        <img src="../assets/icon_location.png">
        <span style="color: #0ca6ea;">{{ getRegion.name }}</span>
        <i class="ci-right">
          <!--<s>◇</s>-->
          <s>◆</s>
        </i>
        <div id="area" v-bind:class="{'active': isShowing}">
          <ul>
            <p></p>
            <li v-for="(item, index) in getRegions"
                :class="{active: index == getRegionIndex}"
                v-on:click="changeRegion(index)">
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
      <div id="header-user-block" class="r">
        <ul>
          <li v-if="!isLogin"
              v-on:click="openRegisterDialog()">
            <a>注册</a>
          </li>
          <!--<li v-if="!isLogin"-->
          <!--v-on:click="openResetPasswordDialog()">-->
          <!--<a>忘记密码</a>-->
          <!--</li>-->
          <li v-if="!isLogin"
              v-on:click="openLoginDialog()">
            <a>登录</a>
          </li>
          <li v-if="isLogin">
            <router-link to="/order">订单</router-link>
          </li>
          <li v-if="isLogin">
            <router-link to="/person">个人中心</router-link>
          </li>
          <li v-if="isLogin">
            <router-link to="/cart">购物车（{{ cartNum }}）</router-link>
          </li>
        </ul>
        <div id="tel" v-if="isLogin">
          <span style="font-weight: bold;">{{ getPhone }}</span>&nbsp;
          <a @click="logout">退出</a>
        </div>
      </div>
      <lh-login
        v-on:register="handleLoginToRegister"
        v-on:reset-password="handleLoginToResetPassword"
        ref="loginDialog">
      </lh-login>
      <lh-reset-password ref="resetPasswordDialog"></lh-reset-password>
      <lh-register ref="registerDialog"></lh-register>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        isShowing: true
      }
    },
    computed: mapGetters({
      isLogin: 'isLogin',
      getPhone: 'getPhone',
      getRegions: 'getRegions',
      getRegion: 'getRegion',
      getRegionIndex: 'getRegionIndex',
      cartNum: 'cartNum',
      needLogin: 'needLogin'
    }),
    methods: {
      handleLoginToRegister () {
        this.openRegisterDialog()
      },
      handleLoginToResetPassword () {
        this.openResetPasswordDialog()
      },
      openLoginDialog () {
        this.$refs.loginDialog.openDialog()
      },
      openResetPasswordDialog () {
        this.$refs.resetPasswordDialog.openDialog()
      },
      openRegisterDialog () {
        this.$refs.registerDialog.openDialog()
      },
      changeRegion (index) {
        let vm = this
        this.$store.commit('CHANGE_REGION', index)
        this.isShowing = false
        this.$router.replace('/')
        this.$message({
          message: '已经切换到地区：' + vm.getRegion.name,
          type: 'success'
        })
      },
      logout () {
        this.$store.commit('USER_LOGOUT')
        this.$router.replace({name: 'home'})
      }
    },
    watch: {
      'needLogin': 'openLoginDialog'
    }
  }
</script>
