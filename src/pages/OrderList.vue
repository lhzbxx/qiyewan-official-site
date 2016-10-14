<template>
    <div>
        <el-breadcrumb separator=">" style="padding: 10px 0; border-bottom: 1px solid #eee">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单</el-breadcrumb-item>
        </el-breadcrumb>
        <el-tabs>
            <el-tab-pane label="全部订单"></el-tab-pane>
            <el-tab-pane label="未付款"></el-tab-pane>
            <el-tab-pane label="已付款"></el-tab-pane>
        </el-tabs>
        <el-table
                :data="paidProducts"
                selection-mode="multiple"
                style="width: 100%"
                @selectionchange="handleMultipleSelectionChange">
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
                    property="orderState"
                    label="交易状态">
                <div>
                    {{ row.orderState }}
                </div>
            </el-table-column>
            <el-table-column
                    inline-template
                    property="action"
                    label="操作">
                <div>
                    <el-button type="primary" icon="edit" size="small" v-if="row.isReviewed">
                        去评价
                    </el-button>
                    <el-button type="text" :disabled="true" size="small" v-else>
                        已评价
                    </el-button>
                </div>
            </el-table-column>
        </el-table>
        <br>
        <el-table
                :data="unpaidProducts"
                selection-mode="multiple"
                style="width: 100%"
                @selectionchange="handleMultipleSelectionChange">
            <el-table-column
                    type="selection"
                    width="50">
            </el-table-column>
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
                    property="totalPrice"
                    label="小计">
                <div style="color: red;">
                    &yen;
                    <span>{{ row.totalPrice }}</span>
                </div>
            </el-table-column>
            <el-table-column
                    inline-template
                    property="action"
                    label="操作">
                <div>
                    <el-button type="danger"
                               icon="delete"
                               size="small"
                               @click.native="show">
                        删除
                    </el-button>
                </div>
            </el-table-column>
        </el-table>
        <div style="border: 1px solid #e0e6ed; border-top: none; width: 100%; text-align: right;">
            <span style="font-size: 13px; margin-right: 30px;">
                已选择0件商品，合计：
                <span style="color: red; font-size: 20px;">
                    &yen;400
                </span>
            </span>
            <el-button type="primary"
                       size="large"
                       style="border-radius: 0;">
                去结算
            </el-button>
        </div>
        <div style="margin-top: 15px; background-color: #eee;">
            <el-row>
                <el-col :span="24" style="margin-top: 10px;">
                    <b>热门推荐</b>
                </el-col>
                <el-col :span="6" v-for="(o, index) in 4" :offset="0">
                    <product></product>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                paidProducts: [{
                    product: {
                        cover: "",
                        title: "个人社保公积金账户代开户",
                        address: "上海-上海市-松江区"
                    },
                    amount: 1,
                    unit: "年",
                    totalPrice: 200,
                    orderState: "未付款",
                    isReviewed: false
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
                    orderState: "交易成功",
                    isReviewed: true
                }],
                unpaidProducts: [{
                    product: {
                        cover: "",
                        title: "个人社保公积金账户代开户",
                        address: "上海-上海市-松江区"
                    },
                    unitPrice: 200,
                    amount: 1,
                    unit: "年",
                    totalPrice: 200
                }, {
                    product: {
                        cover: "",
                        title: "个人社保公积金账户代开户",
                        address: "上海-上海市-松江区"
                    },
                    unitPrice: 200,
                    amount: 1,
                    unit: "年",
                    totalPrice: 200
                }],
                multipleSelection: []
            }
        },
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleMultipleSelectionChange(val) {

            },
            show() {
                this.$confirm('确认删除该商品吗？', '删除商品', {
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功！'
                    });
                }).catch(() => {
                });
            }
        }
    }
</script>