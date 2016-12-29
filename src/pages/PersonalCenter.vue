<template>
  <div id="personal-center" class="container">
    <div id="personal-center-main">
      <div class="customer" v-for="customer in customers">
        <div class="title">
          <p style="margin-left: 20px;">客户名称：{{customer.name}}</p>
          <div class="company-detail-button">
            <p>企业详情
              <i class="ci-right">
                <s>◇</s>
              </i>
            </p>
            <table class="company-detail">
              <tr>
                <td>公司名称：</td>
                <td class="company-details">暂无</td>
                <td>法人代表：</td>
                <td class="company-details">暂无</td>
              </tr>
              <tr>
                <td>公司地址：</td>
                <td class="company-details">暂无</td>
                <td>注册资本：</td>
                <td class="company-details">暂无</td>
              </tr>
              <tr>
                <td>员工人数：</td>
                <td class="company-details">暂无</td>
                <td>营业执照：</td>
                <td class="company-details">暂无</td>
              </tr>
              <tr>
                <td>纳税登记号：</td>
                <td class="company-details">暂无</td>
                <td>联系地址：</td>
                <td class="company-details">暂无</td>
              </tr>
            </table>
          </div>
          <p style="float: right; margin-right: 30px;">类型：企业</p>
        </div>
        <div class="contracts">
          <div class="contract">
            <div class="contract-title">
              <b style="margin-left: 20px;">2016-12-26</b>
              <p style="margin-left: 20px;">订单编号：</p>
              <p class="contract-collapse">
                <img src="../assets/collapse-white.png" class="collapse-icon">
              </p>
            </div>
            <div class="product-title">
              <p class="flex-2">服务详情</p>
              <p class="flex-1">数量</p>
              <p class="flex-1">金额</p>
              <p class="flex-1">服务单</p>
            </div>
            <div class="product">
              <div class="flex-2 product-info">
                <img :src="'product-SHSHLD0001-cover-1.jpg' | cdn-filter" style="height: 60px;">
                <div class="product-info-name">
                  <p>公司注册</p><br>
                  <p>区域：上海</p>
                </div>
              </div>
              <div class="flex-1">&times;1</div>
              <p class="flex-1">￥200</p>
              <p class="flex-1">8321y3298h</p>
            </div>
            <div class="separator">
              <p>服务节点</p>
              <img src="../assets/collapse.png" class="collapse-icon">
            </div>
            <div class="service-nodes">
              <div class="service-node">
                <div class="node-date">
                  <p class="node-date-year">2016</p><br>
                  <p class="node-date-month-and-day">12-26</p>
                </div>
                <div class="node-separator"></div>
                <div style="text-align: center; width: 20px;">
                  <div class="vertical-line"></div>
                  <div class="node-circle active"></div>
                  <div class="vertical-line"></div>
                </div>
                <div style="flex-grow: 1;">
                  <div class="node-name active">
                    公司核名
                  </div>
                </div>
                <b class="node-status">已完成</b>
                <div class="node-status-icon"></div>
              </div>
              <div class="service-node">
                <div class="node-date">
                  <p class="node-date-year">2016</p><br>
                  <p class="node-date-month-and-day">12-26</p>
                </div>
                <div class="node-separator"></div>
                <div style="text-align: center; width: 20px;">
                  <div class="vertical-line"></div>
                  <div class="node-circle"></div>
                  <div class="vertical-line"></div>
                </div>
                <div style="flex-grow: 1;">
                  <div class="node-name">
                    公司核名
                  </div>
                </div>
                <b class="node-status">已完成</b>
                <div class="node-status-icon"></div>
              </div>
              <div class="service-node">
                <div class="node-date">
                  <p class="node-date-year">2016</p><br>
                  <p class="node-date-month-and-day">12-26</p>
                </div>
                <div class="node-separator"></div>
                <div style="text-align: center; width: 20px;">
                  <div class="vertical-line"></div>
                  <div class="node-circle"></div>
                  <div class="vertical-line"></div>
                </div>
                <div style="flex-grow: 1;">
                  <div class="node-name">
                    公司核名
                  </div>
                </div>
                <b class="node-status">已完成</b>
                <div class="node-status-icon active"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="collapse">
          <img src="../assets/collapse.png" class="collapse-icon">
          <span class="helper"></span>
        </div>
      </div>
    </div>
    <div id="personal-center-history"></div>
  </div>
</template>

<script>
  import crmApi from '../api/crm'
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        customers: []
      }
    },
    computed: {
      ...mapGetters([
        'getPhone'
      ])
    },
    created () {
      let vm = this
      crmApi.getCustomers(this.getPhone,
        customers => {
          vm.customers = customers
        }
      )
    }
  }
</script>

<style scoped>
  #personal-center-main {
    width: 75%;
    position: relative;
    height: 100px;
    float: left;
    padding: 20px;
  }

  #personal-center-history {
    width: 25%;
    background: red;
    position: relative;
    height: 100px;
    float: left;
    padding: 20px;
  }

  .title {
    background: #00a0ea;
    width: 100%;
    height: 47px;
    line-height: 47px;
    color: white;
    font-size: 16px;
  }

  p {
    display: inline-block;
  }

  .company-detail-button {
    float: right;
    margin-right: 20px;
    cursor: pointer;
    padding: 0 20px;
    border: 1px solid #00a0ea;
    border-top: none;
    border-bottom: none;
    z-index: 2;
  }

  .company-detail-button:hover {
    background: white;
    color: #00a0ea;
    border: 1px solid #eee;
    border-top: none;
    border-bottom: none;
  }

  .collapse {
    width: 100%;
    height: 31px;
    background: #f2f2f2;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }

  .collapse:hover {
    background: #d3d3d3;
  }

  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .ci-right {
    top: -2px;
    left: 5px;
    height: 7px;
    overflow: hidden;
    position: relative;
    display: inline-block;
    font: 400 15px/15px consolas;
    color: white;
    transform: rotate(0deg);
    transition: transform .2s ease-in 0s;
  }

  .company-detail-button:hover .ci-right {
    color: #00a0ea;
    transform: rotate(180deg);
    transition: transform .2s ease-in 0s;
  }

  s {
    position: relative;
    top: -7px;
    text-decoration: none;
  }

  .company-detail-button:hover .company-detail {
    display: block;
  }

  .company-detail {
    right: 39px;
    position: absolute;
    border: 1px solid #eee;
    height: 145px;
    top: 67px;
    display: none;
    cursor: default;
    font-size: 13px;
    background: white;
    border-top: none;
    color: black;
    padding: 10px;
    z-index: 3;
  }

  .company-details {
    min-width: 50px;
    text-align: left;
  }

  td {
    line-height: 30px;
    text-align: right;
  }

  .contract-title {
    background: #ddf3fe;
    height: 39px;
    color: #546b79;
    line-height: 39px;
    font-size: 15px;
  }

  .contract-collapse {
    width: 56px;
    height: 20px;
    float: right;
    position: relative;
    top: 9px;
    margin-right: 20px;
    background: #00a0ea;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    line-height: 20px;
  }

  .product-title {
    display: flex;
    align-items: center;
    height: 39px;
    color: #546b79;
    background: #f9f9f9;
    border: 1px solid #eee;
    text-align: center;
  }

  .product {
    display: flex;
    align-items: center;
    border: 1px solid #eee;
    height: 80px;
    text-align: center;
  }

  .separator {
    height: 52px;
    background: #ddf3fe;
    text-align: center;
  }

  .separator p {
    display: block;
    font-size: 14px;
    padding-top: 8px;
  }

  .service-nodes {
    padding: 20px;
    border: 1px solid #eee;
  }

  .service-node {
    height: 100px;
    display: flex;
    align-items: center;
  }

  .node-date {
    width: 60px;
    text-align: right;
  }

  .node-date-month-and-day {
    font-size: 16px;
    color: #00a0ea;
    line-height: 22px;
  }

  .node-separator {
    border: 1px solid #eee;
    width: 40px;
    margin: 0 20px;
  }

  .vertical-line {
    height: 30px;
    width: 0;
    border: 1px solid #333;
  }

  .node-circle {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    border: 2px solid gray;
    margin: 15px 0 15px -4px;
  }

  .node-circle.active {
    width: 20px;
    height: 20px;
    margin: 10px 0 10px -9px;
    background: #e6f7ff;
    border: 2px solid #00a0ea;
  }

  .node-name {
    border: 1px solid #eee;
    background: #e6f7ff;
    color: #00a0ea;
    padding: 10px 30px;
    font-size: 16px;
    margin-left: 25px;
    display: inline-block;
  }

  .node-name.active {
    background: #83d8ff;
  }

  .node-name.inactive {
    color: gray;
  }

  .node-status {
    font-size: 16px;
    color: #00a0ea;
    width: 80px;
    text-align: center;
  }

  .node-status.inactive {
    color: gray;
  }

  .node-status-icon {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    border: 2px solid #00a0ea;
    margin: 0 29px;
  }

  .node-status-icon.active {
    background-color: #00a0ea;
    border: 8px solid #83d8ff;
    width: 32px;
    height: 32px;
    margin: 0 20px;
  }

  .node-status-icon.inactive {
    border-color: gray;
  }

  .flex-1 {
    flex: 1;
  }

  .flex-2 {
    flex: 2;
  }

  .product-info-name {
    text-align: left;
    margin-left: 8px;
  }

  .product-info {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
