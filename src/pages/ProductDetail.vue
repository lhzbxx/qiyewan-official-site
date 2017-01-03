<style scoped>
  .detail_pic {
    background: url(http://cdn.qiyewan.com/produce_2.jpg) no-repeat;
    width: 100%;
    height: 350px;
    background-size: 108%;
    background-position: -36px -7px;
  }

  .detail_tit {
    width: 380px;
    height: 253px;
    margin-left: 337px;
    padding-top: 40px;
    white-space: normal;
  }

  .detail_tit h3 {
    color: #279ad2;
    font-size: 32px;
  }

  .detail_tit p {
    color: #747474;
    font-size: 16px;
    margin-top: 20px;
    word-wrap: break-word;
    word-break: normal;
    line-height: 1.7em;
  }

  .detail_pic h4 {
    color: #ffffff;
    font-size: 20px;
    margin-top: 50px;
    text-align: center;
  }

  .step ul li {
    border: 1px solid #0098db;
    height: 75px;
    margin: 25px 35px 0px 35px;
    padding: 10px 20px 0 20px;
  }

  .step ul li p {
    color: #385055;
    font-size: 16px;
    text-indent: 1em;
    margin-top: 5px;
  }

  .step ul li h5 {
    color: #0098da;
    font-size: 20px;
  }

  .Process {
    background: url(http://cdn.qiyewan.com/progress_.jpg) no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    width: 100%;
    height: 285px;
    margin-top: 30px;
    position: relative;
  }

  .Process .btn {
    width: 156px;
    margin: 0 auto;
    height: 42px;
    color: #009ada;
    font-size: 24px;
    background-color: #fff;
    line-height: 42px;
    text-align: center;
    border-radius: 5px;
  }

  .Process p {
    height: 30px;
  }

  .Process ul {
    margin-left: 77px;
  }

  .zhushi {
    position: absolute;
    top: 87%;
    text-align: center;
    width: 100%;
    font-size: 14px;
    color: white;
  }

  .Process ul li {
    margin-top: 20px;
    width: 180px;
    height: 52px;
    background-color: #fff;
    font-size: 18px;
    color: #049fe2;
    line-height: 52px;
    text-align: center;
    float: left;
    position: relative;
    margin-left: -1px;
    z-index: 10;
  }

  .Process ul :nth-child(4n) {
    width: 165px;
  }

  .Process ul li:last-child span {
    display: none;
  }

  .Process ul li span {
    position: absolute;
    top: -4px;
    left: 119px;
    z-index: 50;
  }

  .detail_bg, .internet {
    background-color: #f7f7f7;
  }

  .tit {
    color: #2a9cd4;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin: 30px 0;
  }

  .pro_pic, .get_pic {
    text-align: center;
  }

  .p_c {
    text-align: center;
    color: #b1b1b1;
    font-size: 14px;
  }

  .internet {
    height: 360px;
  }

  .internet ul {
    margin-left: 30px;
    margin-top: 30px;
  }

  .internet ul li {
    text-align: center;
    float: left;
    width: 180px;
    margin-right: 19px;
    border-radius: 8px;
    background-color: #fff;
    height: 170px;
    position: relative;
    transition: all .2s linear;
    cursor: pointer;
  }

  .internet ul li::after {
    position: absolute;
    content: '';
    border-top: 12px solid white;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    top: 100%;
    left: 44%;
  }

  .internet ul li h5 {
    height: 35px;
    line-height: 35px;
    background-color: #38b0e5;
    font-size: 18px;
    font-weight: normal;
    color: white;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .internet ul li p {
    font-size: 14px;
    color: #b1b1b1;
    line-height: 1.5em;
    margin: 10px 0;
  }

  .li_con {
    width: 140px;
    white-space: normal;
    margin: 0 auto;
  }

  .hide {
    display: none;
  }

  .inter_bg {
    margin-top: 30px;
    margin-left: -4px;
  }

  .inter_bg img {
    width: 100%;
  }

  .internet ul li:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -3px, 0);
  }

  .padd {
    padding: 15px;
  }

  .advan_img img {
    width: 100%;
  }

  .advan_img img {
    width: 100%;
  }
</style>
<template>
  <div class="container">
    <lh-loading v-if="!product"></lh-loading>
    <div v-else>
      <el-breadcrumb separator=">" class="bread-crumb">
        <el-breadcrumb-item>
          <router-link to="/">首页</router-link>
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ product.classificationName }}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-row style="margin-top:20px">
        <el-col :span="11" style="margin-right:30px">
          <img :src="product.cover | cdn-filter"
               style="width: 100%; height: 381px;">
        </el-col>
        <el-col :span="10" class="pro_right">
          <h3 style="margin:10px 0;font-size:20px;color:#383838">{{product.name}}</h3>
          <p style="font-size: 12px;
                          color: #dd2726;line-height:1.8em">
            温馨提示：请选择服务区域、服务时长、购买数目。
            <br>如有问题，请拨打售后服务热线：400-716-8896
          </p>
          <div style="background-color: #eee;
                            font-size: 14px;
                            margin: 10px 0;
                            padding: 10px 20px 20px;">
            <p style="margin: 10px 0;">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：
              <span style="font-size: 20px;
                                     color: red;">&yen; {{ form | sub-total-price-filter }}</span></p>
            <p style="">用户评分：
              <el-rate
                v-model="product.rate"
                disabled
                :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                style="display: inline-flex;">
              </el-rate>
              <span style="color: #ff9900; font-size: 17px;">{{ product.rate.toFixed(1) }}</span>
              <span style="color: #aaa">（<b> {{ product.purchaseNumber }} </b>位用户参与评分）</span>
            </p>
          </div>
          <el-form :model="form" label-width="75px" style="text-align:left">
            <el-form-item label="服务区域">
              <el-row>
                <el-col :span="5" style="margin-right: 15px">
                  <el-select v-model="form.regionCityCode"
                             :placeholder="address.province"
                             disabled>
                  </el-select>
                </el-col>
                <el-col :span="5" style="margin-right: 15px">
                  <el-select v-model="form.regionCityCode"
                             :placeholder="address.city"
                             disabled>
                  </el-select>
                </el-col>
                <el-col :span="6" style="margin-right: 15px">
                  <el-select v-model="address.district" :placeholder="address.district">
                    <el-option v-for="area in address.districts"
                               :value="area"></el-option>
                  </el-select>
                </el-col>
              </el-row>
              <p style="font-size: 12px; color: #dd2726; line-height:1.8em">
                温馨提示：请在页面左上角切换服务区域。
              </p>
            </el-form-item>
            <el-form-item label="购买时长" style="margin-bottom: 8px" v-if="!product.isInstant">
              <el-radio-group v-model="form.amount">
                <el-radio-button label="6" disabled>半年</el-radio-button>
                <el-radio-button label="12">一年</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="参与人数" style="margin-bottom: 8px" v-if="product.serialId.substr(4) === 'HR0003'">
              <el-input-number :min="1"
                               size="small"
                               v-model="form.member">
              </el-input-number>
            </el-form-item>
            <el-form-item label="购买数量" style="margin-bottom: 8px" v-if="product.isInstant">
              <el-input-number :min="1"
                               size="small"
                               v-model="form.amount">
              </el-input-number>
            </el-form-item>
          </el-form>
          <el-button type="primary"
                     size="large"
                     @click.native="directOrder"
                     style="width: 120px; margin-left: 10px;">
            立即购买
          </el-button>
          <el-button size="large"
                     style="width: 120px;
                                      margin-left: 10px;
                                      color:#279ad2"
                     :loading="isAdding"
                     v-on:click="addToCart">
            {{ isAdding ? "加入中..." : "加入购物车" }}
          </el-button>
          <p style="font-size: 13px;
                          color: #aaa;
                          margin: 15px 0 30px 10px;">
            服务承诺：一站超值 快速响应 专业服务 全程无忧
          </p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <p style="font-size:14px;">您可能需要：</p>
          <lh-product v-for="item in hotProducts"
                      :title="item.title"
                      :summary="item.summary"
                      :img="item.img | cdn-filter"
                      :price="item.price"
                      :url="getRegion.code+item.serialId"></lh-product>
        </el-col>
        <el-col :span="18" class="detail_tab">
          <el-tabs type="border-card"
                   style="width: 100%;padding: 0;">
            <el-tab-pane label="服务详情">
              <div class="detail_bg">
                <div class="detail_pic">
                  <div class="detail_tit">
                    <h3>{{ product.name }}</h3>
                    <p>{{ product.summary }}</p>
                  </div>
                  <h4 class="hide">为什么要代办税务／服务内容（服务能帮助您做什么）</h4>
                </div>
                <div class="step hide">
                  <ul>
                    <li>
                      <h5>1.参与</h5>
                      <p>{{ product.info }}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="provide">
                <div class="pro_pic">
                  <img style="width: 100%" :src="product.whatNeed | cdn-filter" alt="">
                </div>
              </div>
              <div class="Process">
                <p></p>
                <div class="btn">服务流程</div>
                <ul>
                  <li v-for="(item,index) in JSON.parse(product.process)">{{ index+1 }}、{{ item }}
                    <span><img src="../assets/border1.png"></span>
                  </li>
                </ul>
                <div class="zhushi">注：由于地域、政策等因素不同，所需时间有差异</div>
              </div>
              <div class="get">
                <div class="get_pic">
                  <img style="width: 100%" :src="product.whatObtain | cdn-filter">
                </div>
              </div>
              <div class="internet">
                <div class="tit" style="padding-top:30px;">网上预约流程</div>
                <p class="p_c">多数主管税务机关要求企业提供软件著作权和软件登记检测报告，才可享受增值税即征即退，最多可退增值税额82%</p>
                <ul>
                  <li>
                    <h5>在线下单</h5>
                    <div class="li_con">
                      <p>在线直接下单，安全便捷</p>
                      <img src="../assets/internet_1.png">
                    </div>
                  </li>
                  <li>
                    <h5>即时响应</h5>
                    <div class="li_con">
                      <p>服务专员快速联系，4小时响应</p>
                      <img src="../assets/internet_2.png">
                    </div>
                  </li>
                  <li>
                    <h5>快速交付</h5>
                    <div class="li_con">
                      <p>定制专业、简约流程，不走弯路</p>
                      <img src="../assets/internet_3.png">
                    </div>
                  </li>
                  <li>
                    <h5>满意为止</h5>
                    <div class="li_con">
                      <p>全程专业人员服务，满意为止</p>
                      <img src="../assets/internet_4.png">
                    </div>
                  </li>
                </ul>
                <div class="clearfix"></div>
                <div class="inter_bg">
                  <img src="../assets/internet_bg.png">
                </div>
              </div>
              <div class="advan">
                <div class="tit">我们的服务优势</div>
                <div class="advan_img"><img :src="'advan.png' | cdn-filter"></div>
              </div>
            </el-tab-pane>
            <el-tab-pane :label="'用户评价（' + product.purchaseNumber + '）'">
              <div class="padd">
                <div v-for="item in reviews">
                  <el-row style="margin: 10px 0;">
                    <el-col :span="12">
                      <p style="font-size: 15px; color: #333; white-space: normal; margin-bottom: 5px;">
                        {{ item.content }}
                      </p>
                      <p style="font-size: 13px;
                                              color: #aaa;">
                        {{ getLocalTime(item.createAt) }}
                      </p>
                    </el-col>
                    <el-col :span="6">
                      <el-rate
                        v-model="item.star"
                        disabled
                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                        text-color="#ff9900"
                        text-template="{value}">
                      </el-rate>
                    </el-col>
                    <el-col :span="6"
                            style="text-align: center;">
                      <img src="../assets/logo_samll.png"
                           style="width: 60px;
                                                border-radius: 50%;">
                      <p>
                        {{ item.username }}
                      </p>
                    </el-col>
                  </el-row>
                </div>

              </div>
            </el-tab-pane>
            <el-tab-pane label="常见问题">
              <div v-for="item in faq" style="margin-bottom: 10px; padding: 10px">
                <p style="color: orange;
                                  font-size: 16px;
                                  margin: 10px 0;
                                  white-space: normal">
                  {{ item.question }}
                </p>
                <div style="color: #333;
                                  font-size: 14px;
                                  white-space: normal;
                                  line-height: 1.5em;">
                  {{ item.answer }}
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import productApi from '../api/product'
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {
        reviews: null,
        faq: null,
        product: null,
        error: null,
        loading: false,
        isAdding: false,
        form: {
          amount: 1,
          member: 1,
          product: null,
          serialId: null,
          regionCode: null,
          region: null
        },
        address: {
          province: null,
          city: null,
          district: null,
          districts: null
        }
      }
    },
    computed: mapGetters({
      getRegion: 'getRegion',
      hotProducts: 'hotProducts',
      isLogin: 'isLogin'
    }),
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        this.loading = true
        let vm = this
        productApi.getProductDetail(this.$route.params.serialId,
          data => {
            vm.product = data
            vm.product.rate = Math.round(vm.product.rate * 10) / 10
            vm.form.product = data
            vm.loading = false
            vm.refreshForm()
          },
          error => {
            vm.error = error
          }
        )
        productApi.getProductFaqs(vm.$route.params.serialId,
          data => {
            vm.faq = data.content
          },
          error => {
            vm.error = error
          }
        )
        productApi.getProductReviews(vm.$route.params.serialId,
          data => {
            vm.reviews = data.content
          },
          error => {
            vm.error = error
          }
        )
      },
      addToCart () {
        if (!this.isLogin) {
          this.$store.commit('REQUIRE_LOGIN')
          return
        }
        this.isAdding = true
        this.$store.dispatch('addToCart', {
          cart: this.form,
          isOverride: true
        })
          .then(() => {
            this.$message({
              message: '成功加入购物车~~',
              type: 'success'
            })
            this.isAdding = false
          }, () => {
            this.$message.error('加入购物车失败...')
            this.isAdding = false
          })
      },
      directOrder () {
        if (!this.isLogin) {
          this.$store.commit('REQUIRE_LOGIN')
          return
        }
        this.$store.dispatch('addToCart', {
          cart: this.form,
          isOverride: false
        })
          .then(data => {
            this.$store.commit('CHECKOUT', [data])
            this.$router.push({name: 'checkout'})
          }, () => {
          })
      },
      refreshForm () {
        this.address.province = this.getRegion.pName
        this.address.city = this.getRegion.name
        this.address.district = this.getRegion.areas[0]
        this.address.districts = this.getRegion.areas
        this.form.regionCode = this.getRegion.code
        this.form.region = this.address.province + '-' + this.address.city + '-' + this.address.district
        this.form.serialId = this.$route.params.serialId
        if (this.product.isInstant) {
          this.form.amount = 1
        } else {
          this.form.amount = '12'
        }
      },
      getLocalTime (nS) {
        return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/, ' ')
      }
    }
  }
</script>
