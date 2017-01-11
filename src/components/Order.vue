<style scoped>
  .el-table .cell {
    font-weight: normal;
  }

  .order-title {
    font-size: 13px;
    line-height: 40px;
    color: #333;
    border-bottom: 1px solid #eee;
    margin-left: -18px;
    padding-left: 18px;
    margin-right: -18px;
    background: #f5f5f5;
  }

  .order-detail {
    height: 100%;
    display: table;
  }

  .order-detail-wrapper {
    width: 100%;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    padding-left: 20px;
  }

  .order-detail-product-title {
    line-height: 25px;
  }

  .order-detail-product-region {
    font-size: 13px;
    line-height: 20px;
    color: #aaa;
  }

  .top-splitter {
    width: 100%;
    height: 42px;
    background: #f5f5f5;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

<template>
  <div>
    <el-table
      :data="orders"
      style="width: 100%">
      <el-table-column
        inline-template
        label="商品信息"
        width="420">
        <div>
          <p class="order-title">
            <span style="font-weight: bold;">{{ getLocalTime(row.createAt) }}</span>
            &nbsp;&nbsp;订单号：{{ row.serialId }}
          </p>
          <el-row style="height: 90px;" v-for="item in row.details">
            <el-col :span="5" class="order-detail">
              <div style="width: 100%;
                                        height: 100%;
                                        display: table-cell;
                                        vertical-align: middle;">
                <img :src="item.cover | cdn-filter"
                     style="width: 100%;
                                            display: table-cell;
                                            vertical-align: middle;">
              </div>
            </el-col>
            <el-col :span="19"
                    class="order-detail">
              <div class="order-detail-wrapper">
                <p class="order-detail-product-title">
                  <router-link :to="{ name: 'product-detail', params: { serialId: item.productSerialId } }">
                    {{ item.name }}
                  </router-link>
                </p>
                <p class="order-detail-product-region">
                  区域：{{ item.region }}
                </p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        property="amount"
        label="数量">
        <div>
          <div class="top-splitter"></div>
          <el-row style="height: 90px; padding-top: 42px;" v-for="item in row.details">
            <el-col :span="24"
                    class="order-detail">
              <div class="order-detail-wrapper" style="padding-left: 0;">
                <p class="order-detail-product-title">
                  <b>{{ item.amount }}</b> {{ item.unit }}
                </p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        property="totalPrice"
        label="金额">
        <div style="color: red; padding-top: 42px;">
          <div class="top-splitter"></div>
          &yen;
          <span>{{ row.totalPrice.toFixed(2) }}</span>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        label="交易状态">
        <div style="padding-top: 42px;">
          <div class="top-splitter"></div>
          {{ orderStage(row.orderStage) }}
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        align="center"
        label="操作">
        <div>
          <div class="top-splitter"></div>
          <div v-if="row.orderStage == 'UNPAID'" style="padding-top: 42px;">
            <el-button type="primary"
                       size="small"
                       @click.native="jumpToPay(row)">
              去付款
            </el-button>
            <br>
            <el-button type="text"
                       @click.native="cancelOrder($index, row.serialId)">
              取消订单
            </el-button>
          </div>
          <div v-if="row.orderStage == 'PAID'">
            <el-row style="height: 90px; padding-top: 42px;" v-for="item in row.details">
              <el-col :span="24"
                      class="order-detail">
                <div class="order-detail-wrapper" style="padding-left: 0;">
                  <p class="order-detail-product-title">
                    <el-button type="text"
                               :disabled="true"
                               v-if="item.isReviewed"
                               size="small">
                      已评价
                    </el-button>
                    <el-button type="primary"
                               icon="edit"
                               v-else
                               @click.native="goToReview(row, item)"
                               size="small">
                      去评价
                    </el-button>
                  </p>
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-if="row.orderStage == 'REVIEWED'">
            <el-row style="height: 90px; padding-top: 42px;" v-for="item in row.details">
              <el-col :span="24"
                      class="order-detail">
                <div class="order-detail-wrapper" style="padding-left: 0;">
                  <p class="order-detail-product-title">
                    <el-button type="text"
                               :disabled="true"
                               size="small">
                      已评价
                    </el-button>
                  </p>
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-if="row.orderStage == 'TIMEOUT' || row.orderStage == 'CANCELED'"
               style="padding-top: 42px;">
            <el-button type="text"
                       :disabled="true"
                       size="small">
              已失效
            </el-button>
            <br>
            <el-button type="danger"
                       size="small"
                       @click.native="deleteOrder($index, row.serialId)">
              删除
            </el-button>
          </div>
        </div>
      </el-table-column>
    </el-table>
    <lh-wxpay ref="wxpayDialog"></lh-wxpay>
  </div>
</template>

<script>
  import pingpp from 'pingpp-js'
  export default {
    data () {
      return {
        orderStage (state) {
          switch (state) {
            case 'UNPAID':
              return '未付款'
            case 'PAID':
              return '待评价'
            case 'REVIEWED':
              return '交易完成'
            case 'TIMEOUT':
              return '交易超时'
            case 'CANCELED':
              return '已取消'
            default:
              return '未知'
          }
        }
      }
    },
    methods: {
      jumpToPay (row) {
        if (row.payment.substr(-3) === 'WAP') {
          return this.$message({
            type: 'warning',
            message: '请在官网的移动端进行支付！'
          })
        }
        if (row.payment === 'WXPAY') {
          this.$refs.wxpayDialog.openDialog(JSON.parse(row.charge).credential.wx_pub_qr)
        } else {
          pingpp.createPayment(row.charge, function (result, err) {
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
      getLocalTime (nS) {
        return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/, ' ')
      },
      goToReview (row, item) {
        this.$router.push({
          name: 'review',
          params: {orderSerialId: row.serialId, productSerialId: item.productSerialId}
        })
      },
      cancelOrder (index, serialId) {
        let vm = this
        this.$confirm('确认取消该订单吗？', '取消订单', {
          type: 'warning'
        }).then(function () {
          vm.$store.dispatch('cancelOrder', serialId).then(
            function () {
              vm.orders[index].orderStage = 'CANCELED'
              vm.$message({
                type: 'success',
                message: '成功取消订单'
              })
            },
            function () {
              vm.$message.error('取消订单失败...')
            }
          )
        }).catch(function () {}
        )
      },
      deleteOrder (index, serialId) {
        let vm = this
        this.$confirm('删除后，该订单将不再显示，确认删除该订单吗？', '删除订单', {
          type: 'warning'
        }).then(function () {
          vm.$store.dispatch('cancelOrder', serialId).then(
            function () {
              vm.orders.splice(index)
              vm.$message({
                type: 'success',
                message: '成功取消订单'
              })
            },
            function () {
              vm.$message.error('取消订单失败...')
            }
          )
        }).catch(function () {}
        )
      }
    },
    props: {
      orders: Array
    }
  }
</script>
