<style scoped>

  .el-menu-item {
    height: 50px;
    padding-left: 25px;
    border-left: 1px solid #e5e5e5 !important;
    border-right: 1px solid #e5e5e5 !important;
    border-top: 1px solid #e5e5e5 !important;
  }

  .el-submenu {
    border: 1px solid #e5e5e5 !important;
  }

  .cart {
    background: url("../assets/icon-cart.png");
  }

  .is-active .cart {
    background: url("../assets/icon-cart-active.png");
  }

  .home {
    background: url("../assets/icon-home.png");
  }

  .is-active .home {
    background: url("../assets/icon-home-active.png");
  }

  .order {
    background: url("../assets/icon-order.png") no-repeat;
  }

  .is-opened .order {
    background: url("../assets/icon-order-active.png");

  }

  .is-opened span {
    color: #0098db !important;
  }

  #order .el-menu-item {
    background-color: #fff !important;
    border-left: 1px solid #fff !important;
    border-right: 1px solid #fff !important;
  }

  #order .el-menu-item {
    border-bottom: none !important;
    border-top: none !important;
  }

  .left-nav span {
    position: relative;
    display: inline-block;
    height: 17px;
    width: 17px;
    top: -2px;
    vertical-align: middle;
    margin-right: 10px;
    margin-left: -10px;
    overflow: hidden;
  }

  #order span {
    left: 7px;
    margin-right: 16px;
  }

  .el-menu-item.is-active {
    padding-left: 20px;
    border-left: 6px solid #0098db !important;
    color: #0098db !important;
  }
</style>
<template>
  <div>
    <div class="container">
      <el-row class="clearfix">
        <el-col :span="4">
          <el-menu mode="vertical" class="left-nav"
                   default-active="1"
                   style="margin: 10px 10px 10px 0;background-color: #fff">
            <el-menu-item index="1"><span class="home"></span>首页</el-menu-item>
            <el-menu-item index="2"><span class="cart"></span>我的购物车</el-menu-item>
            <el-submenu index="3" id="order" class="is-opened">
              <template slot="title"><span class="order"></span>我的订单</template>
              <el-menu-item index="3-1">待支付订单</el-menu-item>
              <el-menu-item index="3-2">已支付订单</el-menu-item>
              <el-menu-item index="3-3">待评价</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :span="20">
          <div style="padding: 20px;
                            border: 1px solid #eee;
                            margin-top: 10px;
                            height: 200px;">
            <el-row style="height: 100%;">
              <el-col :span="5"
                      style="height: 100%;
                                       display: table;">
                <div style="width: 100%;
                                        height: 100%;
                                        display: table-cell;
                                        vertical-align: middle;">
                  <img src="../assets/logo.png"
                       style="width: 100px;
                                            cursor: pointer;
                                            display: table-cell;
                                            vertical-align: middle;">
                </div>
              </el-col>
              <el-col :span="5"
                      style="height: 100%;
                                       display: table;">
                <div style="width: 100%;
                                        height: 100%;
                                        display: table-cell;
                                        vertical-align: middle;">
                  <p style="font-size: 18px;
                                          margin-bottom: 5px;">
                    {{ username }}
                  </p>
                  <p style="font-size: 15px;
                                          color: #333;">
                    {{ phoneNumber }}
                  </p>
                </div>
              </el-col>
              <el-col :span="9"
                      :offset="2"
                      style="height: 100%;
                                       display: table;">
                <div style="width: 100px;
                                        height: 100%;
                                        display: table-cell;
                                        vertical-align: middle;">
                  <img src="../assets/logo.png"
                       style="width: 70px;
                                            cursor: pointer;">
                  <p style="font-size: 13px;">
                    购物车
                    <span style="color: #F7BA2A;">
                                        {{ cartNum }}
                                    </span>
                    个
                  </p>
                </div>
                <div style="width: 100px;
                                        height: 100%;
                                        display: table-cell;
                                        vertical-align: middle;">
                  <img src="../assets/logo.png"
                       style="width: 70px;
                                            cursor: pointer;">
                  <p style="font-size: 13px;">
                    未付款
                    <span style="color: #F7BA2A;">
                                        {{ unpaidNum }}
                                    </span>
                    个
                  </p>
                </div>
                <div style="width: 100px;
                                        height: 100%;
                                        display: table-cell;
                                        vertical-align: middle;">
                  <img src="../assets/logo.png"
                       style="width: 70px;
                                            cursor: pointer;">
                  <p style="font-size: 13px;">
                    待评价
                    <span style="color: #F7BA2A;">
                                        {{ unreviewedNum }}
                                    </span>
                    个
                  </p>
                </div>
              </el-col>
            </el-row>
          </div>
          <br>
          <lh-table-header title="我的购物车" color="light"></lh-table-header>
          <lh-cart></lh-cart>
          <br>
          <lh-table-header title="我的订单" color="light"></lh-table-header>
          <lh-order></lh-order>
        </el-col>
      </el-row>
    </div>
    <lh-hot-products></lh-hot-products>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        username: 'Anna',
        cartNum: 3,
        unpaidNum: 2,
        unreviewedNum: 3
      }
    },
    computed: mapGetters({
      phoneNumber: 'getPhone'
    }),
    methods: {}
  }
</script>
