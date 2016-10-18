<template>
    <div>
        <el-row>
            <el-col :span="4">
                <el-menu mode="vertical" default-active="1" style="margin: 10px 10px 10px 0;">
                    <el-menu-item index="1"><i class="el-icon-menu"></i>首页</el-menu-item>
                    <el-menu-item index="2"><i class="el-icon-message"></i>我的购物车</el-menu-item>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-date"></i>我的订单</template>
                        <el-menu-item index="3-1">待支付订单</el-menu-item>
                        <el-menu-item index="3-2">已支付订单</el-menu-item>
                        <el-menu-item index="3-3">待评价</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20">
                <div style="padding: 20px;
                            border: 1px solid #eee;
                            margin-top: 10px;">
                    <el-row>
                        <el-col :span="12">
                            <img src="../assets/logo.png">
                        </el-col>
                        <el-col :span="12"></el-col>
                    </el-row>
                </div>
                <br>
                <lh-table-header title="我的购物车" color="light"></lh-table-header>
                <el-table
                        :data="unpaidProducts"
                        selection-mode="multiple"
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
                            label="数量"
                            width="210">
                        <div>
                            <el-input-number @change="handleAmountChange"
                                             :min="1"
                                             size="small"
                                             v-model="row.amount">
                            </el-input-number>
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
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                unpaidProducts: [{
                    product: {
                        cover: "",
                        title: "个人社保公积金账户代开户",
                        address: "上海-上海市-松江区"
                    },
                    unitPrice: 200,
                    amount: 1,
                    totalPrice: 200
                }, {
                    product: {
                        cover: "",
                        title: "个人社保公积金账户代开户",
                        address: "上海-上海市-松江区"
                    },
                    unitPrice: 200,
                    amount: 1,
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
            },
            handleAmountChange() {
            }
        }
    }
</script>