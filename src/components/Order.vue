<style scoped>
    .el-table .cell{
        font-weight:normal;
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
                    width="300">
                <div>
                    <el-row style="height: 130px;">
                        <!--<p style="font-size: 13px; line-height: 20px;">-->
                            <!--创建于：-->
                            <!--{{ row.createAt }}-->
                        <!--</p>-->
                        <!--<p style="font-size: 13px; line-height: 20px; ">-->
                            <!--订单号：-->
                            <!--{{ row.serialId }}-->
                        <!--</p>-->
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
                        <el-col :span="19"
                                style="height: 100%;
                                       display: table;">
                            <div style="width: 100%;
                                        height: 100%;
                                        display: table-cell;
                                        vertical-align: middle;
                                        padding-left: 10px;">
                                <p style="line-height: 16px; margin-bottom: 5px;">
                                    {{ row.product.title }}
                                </p>
                                <p style="font-size: 13px; line-height: 15px; color: #aaa; margin-bottom: 10px;">
                                    区域：{{ row.product.address }}
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
                    property="totalPrice"
                    label="金额">
                <div style="color: red;">
                    &yen;
                    <span>{{ row.totalPrice }}</span>
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
                    <div v-if="row.orderState == 1">
                        <el-button type="primary" size="small">
                            去付款
                        </el-button>
                        <br>
                        <el-button type="text">
                            取消订单
                        </el-button>
                    </div>
                    <div v-if="row.orderState == 2">
                        <el-button type="primary" icon="edit" size="small">
                            去评价
                        </el-button>
                    </div>
                    <div v-if="row.orderState == 3">
                        <el-button type="text" :disabled="true" size="small">
                            已评价
                        </el-button>
                    </div>
                </div>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                orders: [{
                    product: {
                        cover: "",
                        title: "个人社保公积金账户代开户",
                        address: "上海-上海市-松江区"
                    },
                    amount: 1,
                    unit: "年",
                    totalPrice: 200,
                    orderState: 1,
                    createAt: Date.now(),
                    serialId: "UO9023hi1"
                }, {
                    product: {
                        cover: "",
                        title: "个人社保公积金账户代开户",
                        address: "上海-上海市-松江区"
                    },
                    unitPrice: 200,
                    amount: 1,
                    unit: "年",
                    totalPrice: 200,
                    orderState: 2,
                    createAt: Date.now(),
                    serialId: "UO9023hi1"
                }],
                orderState(state) {
                    switch(state) {
                        case 1:
                            return "未付款"
                        case 2:
                            return "交易完成"
                        case 10:
                            return "交易超时"
                        default:
                            return "交易完成"
                    }
                }
            }
        },
        methods: {

        },
        computed: {
        }
    }
</script>