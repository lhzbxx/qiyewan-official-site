<style scoped>
  .el-table .cell {
    font-weight: normal;
  }

  .order-title {
    font-size: 13px;
    line-height: 40px;
    color: #333;
    border-bottom: 1px solid #eee;
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
                <img :src="cdnPrefix + item.cover"
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
      </el-table-column>
      <el-table-column
        inline-template
        property="totalPrice"
        label="金额">
        <div style="color: red;">
          &yen;
          <span>{{ row.totalPrice.toFixed(2) }}</span>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        label="交易状态">
        <div>
          {{ orderState(row.orderState) }}
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        align="center"
        label="操作">
        <div>
          <div v-if="row.orderState == 'Unpaid'">
            <el-button type="primary"
                       size="small"
                       @click.native="jumpToPay(row.payUrl)">
              去付款
            </el-button>
            <br>
            <el-button type="text"
                       @click.native="cancelOrder($index, row.serialId)">
              取消订单
            </el-button>
          </div>
          <div v-if="row.orderState == 'Paid'">
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
          <div v-if="row.orderState == 'Reviewed'">
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
          <div v-if="row.orderState == 'Timeout' || row.orderState == 'Canceled'">
            <el-button type="text"
                       :disabled="true"
                       size="small">
              已失效
            </el-button>
          </div>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        orderState(state) {
          switch (state) {
            case 'Unpaid':
              return "未付款"
            case 'Paid':
              return "待评价"
            case 'Reviewed':
              return "交易完成"
            case 'Timeout':
              return "交易超时"
            case 'Canceled':
              return "已取消"
            default:
              return "未知"
          }
        }
      }
    },
    computed: mapGetters({
      cdnPrefix: 'cdnPrefix'
    }),
    methods: {
      jumpToPay (url) {
        window.open(url)
      },
      getLocalTime(nS) {
        return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/, ' ');
      },
      goToReview(row, item) {
        this.$router.push({
          name: 'review',
          params: {orderSerialId: row.serialId, productSerialId: item.productSerialId}
        })
      },
      cancelOrder(index, serialId) {
        let vm = this
        this.$confirm('确认取消该订单吗？', '取消订单', {
          type: 'warning'
        }).then(function () {
          vm.$store.dispatch("cancelOrder", serialId).then(
            function () {
              vm.orders[index].orderState = "Canceled"
              vm.$message({
                type: 'success',
                message: '成功取消订单'
              })
            },
            function () {
              vm.$message.error("取消订单失败...")
            }
          )
        }).catch(function () {
          }
        );
      }
    },
    props: {
      orders: Array
    }
  }
</script>
