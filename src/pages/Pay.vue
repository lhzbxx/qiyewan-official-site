<style scoped xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml"
       xmlns:v-on="http://www.w3.org/1999/xhtml">
    .chosen {
        border: 1px solid #20A0FF !important;
    }
</style>

<template>
    <div style="margin: 10px;">
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
                               style="font-size: 25px;
                                  color: #58B7FF;"></i>
                            订单提交成功，请您尽快付款！
                        </p>
                        <p style="margin: 5px 0 10px 30px;">
                            订单号：
                            <span style="font-size: 15px;">
                            1904u318941894
                        </span>
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
                        <span style="color: red; font-size: 24px;">
                            400
                        </span>元
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-table
                :data="products"
                selection-mode="multiple"
                style="width: 100%">
            <el-table-column
                    inline-template
                    label="商品信息"
                    width="300">
                <div>
                    <el-row style="height: 62.5px;">
                        <el-col :span="5" style="height: 100%; display: table;">
                            <div style="width: 100%;
                                        height: 100%;
                                        display: table-cell;
                                        vertical-align: middle;">
                                <img src="../assets/logo.png"
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
                                    {{ row.product.title }}
                                </p>
                                <p style="font-size: 13px; line-height: 15px; color: #aaa;">
                                    区域：{{ row.product.address }}
                                </p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-table-column>
            <el-table-column
                    inline-template
                    property="unitPrice"
                    label="单价">
                <div>&yen;
                    <span>
                        {{ row.unitPrice }}
                    </span>
                </div>
            </el-table-column>
            <el-table-column
                    inline-template
                    property="amount"
                    label="数量">
                <div>
                    <span>
                        {{ row.amount }}
                    </span>
                    <span>
                        {{ row.unit }}
                    </span>
                </div>
            </el-table-column>
            <el-table-column
                    inline-template
                    property="serviceDetail"
                    label="服务详情">
                <div style="line-height: normal;">
                    <span>{{ row.product.detail }}</span>
                </div>
            </el-table-column>
            <el-table-column
                    inline-template
                    property="totalPrice"
                    label="小计">
                <div style="color: red;">
                    &yen;
                    <span>{{ row.totalPrice }}</span>
                </div>
            </el-table-column>
        </el-table>
        <br>
        <div>
            <div style="background-color: #EFF2F7;
                        height: 40px;
                        border: 1px solid #eee;
                        border-bottom: none;">
                <span style="line-height: 40px; margin-left: 20px;">支付方式</span>
            </div>
            <el-row style="border: 1px solid #eee;">
                <el-col :span="8"
                        v-for="item in payments"
                        style="text-align: center;">
                    <img src="../assets/logo.png"
                         style="margin: 10px;
                                cursor: pointer;
                                border: 1px solid #eee;"
                         v-bind:class="{ chosen: item.isChosen }"
                         v-on:click="choose(item)">
                </el-col>
            </el-row>
        </div>
        <br>
        <el-button type="primary"
                   size="large"
                   style="border-radius: 3px;
                          float: right;">
            立即支付
        </el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [{
                    product: {
                        cover: "",
                        title: "个人社保公积金账户代开户",
                        address: "上海-上海市-松江区",
                        detail: "办理工商变更，不包括股权转让协议撰写",
                    },
                    unitPrice: 200,
                    amount: 1,
                    unit: "年",
                    totalPrice: 200
                }, {
                    product: {
                        cover: "",
                        title: "个人社保公积金账户代开户",
                        address: "上海-上海市-松江区",
                        detail: "办理工商变更，不包括股权转让协议撰写",
                    },
                    unitPrice: 200,
                    amount: 1,
                    unit: "年",
                    totalPrice: 200
                }],
                payments: [{
                    isChosen: true
                }, {
                    isChosen: false
                }, {
                    isChosen: false
                }, {
                    isChosen: false
                }, {
                    isChosen: false
                }, {
                    isChosen: false
                }]
            }
        },
        methods: {
            choose($e) {
                for (var item of this.payments) {
                    item.isChosen = false
                }
                $e.isChosen = true;
            }
        }
    }
</script>