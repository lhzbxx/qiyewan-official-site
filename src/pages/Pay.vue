<template>
  <div id="order" class="container">
    <div v-if="getOrder">
    <div style="border: 1px solid #eee;
                    border-bottom: none;
                    padding: 20px;">
      <el-row style="height: 70px;">
        <el-col :span="16"
                style="height: 100%;
                               display: table;">
          <div style="display: table-cell;
                               height: 100%;
                               vertical-align: middle;
                               font-size: 16px;">
            <p>
              <i class="el-icon-circle-check"
                 style="font-size: 40px; color: #67d76c; margin-right: 10px; vertical-align: middle;"></i>
              商品信息提交成功
            </p>
            </p>
          </div>
        </el-col>
        <el-col :span="8"
                style="text-align: right;
                               height: 100%;
                               display: table;">
          <div style="display: table-cell; height: 100%; vertical-align: middle; font-size: 16px;">
            应付金额
            <span style="color: red; font-size: 24px;">{{ getOrder.totalPrice.toFixed(2) }}</span>元
          </div>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="getOrder.details"
      selection-mode="multiple"
      style="width: 100%">
      <el-table-column
        inline-template
        label="商品信息"
        width="420">
        <div>
          <el-row style="height: 90px;">
            <el-col :span="5" style="height: 100%; display: table;">
              <div style="width: 100%;
                                        height: 100%;
                                        display: table-cell;
                                        vertical-align: middle;">
                <img :src="row.cover | cdn-filter"
                     style="width: 100%;
                                            display: table-cell;
                                            vertical-align: middle;">
              </div>
            </el-col>
            <el-col :span="19" style="height: 100%; display: table;">
              <div style="width: 100%;
                                        height: 100%;
                                        display: table-cell;
                                        vertical-align: middle;
                                        padding-left: 10px;">
                <p style="line-height: 16px; margin-bottom: 5px;">
                  {{ row.name }}
                </p>
                <p style="font-size: 13px; line-height: 15px; color: #aaa;">
                  区域：{{ row.region }}
                </p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        label="单价">
        <div>&yen;
          <span>{{ row.unitPrice }}</span>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        label="数量">
        <div>
          <b>{{ row.amount }}</b>
          <span>{{ row.unit }}</span>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        width="300"
        label="服务详情">
        <div style="line-height: normal;">
          <span>{{ row.summary }}</span>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        property="totalPrice"
        label="小计"
        width="200">
        <div style="color: red;">
          &yen;
          <span>{{ totalPrice(row) }}
            <span style="font-size: 13px;" v-show="row.premium > 0"> ( &plus; {{ row.premium.toFixed(2) }} ) </span>
          </span>
        </div>
      </el-table-column>
    </el-table>
    </div>
    <br>
    <div>
      <div id="choose-payment">
        <span style="line-height: 40px; margin-left: 20px;">支付方式</span>
      </div>
      <el-row style="border: 1px solid #eee;">
        <el-col :span="8"
                v-for="(item, index) in payments"
                class="payment-wrapper">
          <img :src="item.url | cdn-filter"
               class="payment"
               v-bind:class="{chosen: index == payment}"
               v-on:click="payment = index">
        </el-col>
      </el-row>
    </div>
    <br>
    <el-button type="primary"
               size="large"
               class="pay-button"
               @click.native="addToOrder"
               :loading="isOrdering">
      {{ isOrdering ? "跳转中..." : "立即支付" }}
    </el-button>
    <br>
    <br>
    <br>
    <lh-wxpay ref="wxpayDialog"></lh-wxpay>
  </div>
</template>
<script>
  import pingpp from 'pingpp-js'
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        payments: [
          {
            name: '支付宝',
            code: 'ALIPAY',
            url: 'AliPay-banner-2.png'
          },
          {
            name: '微信支付',
            code: 'WXPAY',
            url: 'WxPay-banner-2.png'
          }
        ],
        payment: 0,
        isOrdering: false
      }
    },
    computed: {
      ...mapGetters([
        'getOrder'
      ])
    },
    created () {
      if (!this.getOrder) {
        this.$router.replace({name: 'order'})
      }
    },
    methods: {
      addToOrder () {
        this.isOrdering = true
        let vm = this
        this.$store.dispatch('changePayment', {
          serialId: this.getOrder.serialId,
          payment: this.payments[this.payment].code
        }).then(
          function (order) {
            if (order.payment === 'WXPAY') {
              vm.$refs.wxpayDialog.openDialog(JSON.parse(order.charge).credential.wx_pub_qr)
            } else {
              pingpp.createPayment(order.charge, function (result, err) {
                if (result === 'success') {
                  // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL。
                  vm.$router.replace({name: 'order'})
                } else if (result === 'fail') {
                  // charge 不正确或者微信公众账号支付失败时会在此处返回
                  vm.$router.replace({name: 'order'})
                } else if (result === 'cancel') {
                  // 微信公众账号支付取消支付
                  vm.$router.replace({name: 'order'})
                }
              })
            }
          },
          function () {
            vm.isOrdering = false
            vm.$router.replace({name: 'order'})
          }
        )
      },
      totalPrice (detail) {
        let member = detail.member - detail.minMember
        if (member > 0) {
          return (detail.amount * (detail.unitPrice +
          detail.perPrice * (detail.member - detail.minMember)) + detail.premium * 1).toFixed(2)
        } else {
          return (detail.amount * detail.unitPrice + detail.premium * 1).toFixed(2)
        }
      }
    }
  }
</script>
<style scoped>
  #order {
    margin-top: 20px;
  }

  .chosen {
    border: 1px solid #20A0FF !important;
  }

  .pay-button {
    border-radius: 3px;
    margin-bottom: 12px;
    float: right;
  }

  .payment-wrapper {
    text-align: center;
    padding: 20px;
    height: 200px;
    vertical-align: middle;
  }

  .payment {
    padding: 30px;
    width: 100%;
    cursor: pointer;
    border: 1px solid #eee;
  }

  #choose-payment {
    background-color: #EFF2F7;
    height: 40px;
    border: 1px solid #eee;
    border-bottom: none;
  }
</style>
