<template>
  <div class="container">
    <lh-loading v-if="isLoading"></lh-loading>
    <div v-if="!isLoading">
      <h3 id="title">订单评价</h3>
      <p id="sub-title">
        订单号
        <b style="margin-right: 20px;">{{ order.serialId }}</b>
        购物时间
        <b>{{ getLocalTime(order.createAt) }}</b>
      </p>
      <el-row style="border: 1px solid #eee;">
        <el-col :span="8"
                style="text-align: center;
                    border-right: 1px solid #eee;
                    margin-top: 30px;
                    margin-bottom: 30px;">
          <div style="position: relative; width: 200px; margin: auto;">
            <img src="../assets/logo.png">
            <p style="position: relative; margin: auto; width: 150px;">
              {{ product.summary }}
            </p>
            <br>
            <p style="color: red; font-size: 20px;">
              &yen;{{ product.unitPrice }}
            </p>
            <br>
            <p style="color: gray; font-size: 14px;">
              服务数量：
              <span>
                                {{ amount }} {{ product.unit }}
                            </span>
            </p>
          </div>
        </el-col>
        <el-col :span="16">
          <el-form
            ref="form"
            :model="form"
            label-width="100px"
            @submit.prevent="onSubmit"
            style="margin: 30px 20px;">
            <el-form-item label="商品满意度" style="color:#464646;font-size:14px">
              <el-rate
                v-model="form.rate"
                show-text
                :texts="['极差', '失望', '一般', '满意', '非常满意']"
                :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                style="display: inline-flex;">
              </el-rate>
            </el-form-item>
            <el-form-item label="评价" style="color:#464646;font-size:14px">
              <el-input type="textarea"
                        v-model="form.content"
                        :rows=5></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click.native="onSubmit"
                         type="primary"
                         style="padding: 10px 25px;">
                提交评价
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import orderApi from '../api/order'
  import productApi from '../api/product'

  export default {
    data () {
      return {
        form: {
          rate: 5,
          content: '',
          productSerialId: null,
          serialId: null
        },
        rateToast: 5,
        order: null,
        product: null,
        isLoading: true,
        amount: 0
      }
    },
    methods: {
      onSubmit () {
        let vm = this
        productApi.sendReview(this.$store.getters.getToken, this.form,
          function (data) {
            vm.$alert('评论提交成功！', '提交成功', {
              callback: action => {
                vm.$router.replace({name: "order"})
              }
            })
          },
          function (error) {
            vm.$alert('评论提交失败...可能已经评价过了...', '提交失败', {
              callback: action => {
                vm.$router.replace({name: "order"})
              }
            })
          })
      },
      getLocalTime (nS) {
        return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/, ' ');
      },
    },
    created () {
      let vm = this
      orderApi.getOrder(this.$store.getters.getToken, this.$route.params.orderSerialId,
        function (data) {
          vm.order = data
          productApi.getProductDetail(vm.$route.params.productSerialId,
            function (data) {
              vm.product = data
              vm.isLoading = false
              vm.form.productSerialId = vm.product.serialId
              vm.form.serialId = vm.order.serialId
              if (vm.order.details.some(item => item.productSerialId == vm.product.serialId)) {
                for (let i of vm.order.details) {
                  if (i.productSerialId == vm.product.serialId)
                    vm.amount = i.amount
                }
              } else {
                vm.$router.replace({name: 'home'})
              }
            }, function (data) {
              console.log(data)
            })
        }, function (data) {
          console.log(data)
          vm.$router.replace({name: 'home'})
        })
    }
  }
</script>
<style type="text/css">
  #title {
    text-align: center;
    color: #585858;
    margin: 20px 0;
    font-size: 18px;
    font-weight: normal;
    letter-spacing: 2px;
  }

  #sub-title {
    text-align: center;
    color: #aaa;
    margin-bottom: 15px;
    font-size: 15px;
  }
</style>
