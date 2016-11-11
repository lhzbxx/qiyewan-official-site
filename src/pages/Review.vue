<template>
    <div class="container">
        <lh-loading v-if="isLoading"></lh-loading>
        <div v-if="!isLoading">
            <h3 style="text-align: center; color: #585858; margin: 20px 0;font-size:18px;font-weight: normal;letter-spacing: 2px;">
                订单评价</h3>
            <p style="text-align: center; color: #aaa; margin-bottom: 15px; font-size: 15px;">
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
                                {{ order.amount }} {{ product.unit }}
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
                                    v-model="rateToast"
                                    show-text
                                    :texts="['极差', '失望', '一般', '满意', '非常满意']"
                                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                            </el-rate>
                        </el-form-item>
                        <el-form-item label="评价" style="color:#464646;font-size:14px">
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" style="padding: 10px 25px;">提交评价</el-button>
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
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rateToast: 5,
                order: null,
                product: null,
                isLoading: true
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            getLocalTime(nS) {
                return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/, ' ');
            },
        },
        created() {
            let vm = this
            orderApi.getOrder(this.$store.getters.getToken, this.$route.params.orderSerialId,
                    function (data) {
                        vm.order = data
                        productApi.getProductDetail()(vm.$store.getters.getToke, vm.$route.params.productSerialId,
                                function (data) {
                                    vm.product = data
                                    vm.isLoading = false
                                }, function (data) {
                                    console.log(data)
                                })
                    }, function (data) {
                        console.log(data)
                    })
        }
    }
</script>