<template>
  <div id="checkout" class="container">
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
                 style="font-size: 40px;
                                      color: #58B7FF;
                                      margin-right: 10px;"></i>
              订单提交成功！
            </p>
            </p>
          </div>
        </el-col>
        <el-col :span="8"
                style="text-align: right;
                               height: 100%;
                               display: table;">
          <div style="display: table-cell;
                               height: 100%;
                               vertical-align: middle;
                               font-size: 16px;">
            应付金额
            <span style="color: red; font-size: 24px;">{{ totalPrice() }}</span>元
          </div>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="checkout"
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
                <img :src="row.product.cover | cdn-filter"
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
                  {{ row.product.name }}
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
          <span>{{ row.product.unitPrice }}</span>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        label="数量">
        <div>
          <b>{{ row.amount }}</b>
          <span>{{ row.product.unit }}</span>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        width="300"
        label="服务详情">
        <div style="line-height: normal;">
          <span>{{ row.product.summary }}</span>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        property="totalPrice"
        label="小计">
        <div style="color: red;">
          &yen;
          <span>{{ row | sub-total-price-filter }}</span>
        </div>
      </el-table-column>
    </el-table>
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
    <el-tooltip effect="dark"
                content="支付金额不能为￥0"
                placement="top-end"
                v-if="totalPrice() <= 0"
                class="pay-button">
      <el-button type="primary"
                 size="large"
                 disabled>
        无法支付
      </el-button>
    </el-tooltip>
    <el-button type="primary"
               size="large"
               class="pay-button"
               @click.native="addToOrder"
               v-else
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
            url: 'AliPay-banner.png'
          },
          {
            name: '微信支付',
            code: 'WXPAY',
            url: 'WxPay-banner.png'
          }
        ],
        payment: 0,
        isOrdering: false
      }
    },
    computed: {
      ...mapGetters({
        checkout: 'getCheckout'
      })
    },
    created () {
      if (this.checkout.length === 0) {
        this.$router.replace({name: 'order'})
      }
    },
    methods: {
      addToOrder () {
        this.isOrdering = true
        let vm = this
        this.$store.dispatch('addToOrder', {
          carts: this.checkout,
          payment: this.payments[this.payment].code
        }).then(
          function (order) {
            if (order.payment === 'WXPAY') {
              vm.$refs.wxpayDialog.openDialog(JSON.parse(order.charge).credential.wx_pub_qr)
            } else {
              pingpp.createPayment(order.charge, function (result, err) {
                if (result === 'success') {
                  // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL。
                } else if (result === 'fail') {
                  // charge 不正确或者微信公众账号支付失败时会在此处返回
                } else if (result === 'cancel') {
                  // 微信公众账号支付取消支付
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
      totalPrice () {
        var result = 0
        for (let i of this.checkout) {
          let amount = i.amount
          let member = i.member
          if (i.product.serialId.substr(4) === 'HR0003') {
            result += member > 3 ? ((98.8 + 18.8 * (member - 3)) * amount) : (98.8 * amount)
          } else {
            result += (amount * i.product.unitPrice)
          }
        }
        return result.toFixed(2)
      }
    }
  }
</script>
<style scoped>
  #checkout {
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
