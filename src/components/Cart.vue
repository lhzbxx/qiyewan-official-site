<template>
    <div>
        <el-table
                :data="unpaidProducts"
                selection-mode="multiple"
                style="width: 100%"
                @selection-change="handleMultipleSelectionChange">
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
                    label="单价">
                <div>&yen;
                    <span>
                        {{ row.unitPrice }}
                    </span>
                </div>
            </el-table-column>
            <el-table-column
                    inline-template
                    label="数量"
                    width="210">
                <div>
                    <el-input-number @change="handleAmountChange(row)"
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
                已选择{{ amountOfSelection }}件商品，合计：
                <span style="color: red; font-size: 20px;">
                    &yen;{{ totalPrice }}
                </span>
            </span>
            <el-button type="primary"
                       size="large"
                       style="border-radius: 0;">
                去结算
            </el-button>
        </div>
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
            handleMultipleSelectionChange(val) {
                this.multipleSelection = val;
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
            handleAmountChange(item) {
                console.log(item.amount);
                item.totalPrice = item.unitPrice * item.amount;
            }
        },
        computed: {
            amountOfSelection() {
                return this.multipleSelection.length
            },
            totalPrice() {
                var r = 0;
                for (var i of this.multipleSelection) {
                    r = r + i.amount * i.unitPrice
                }
                return r
            }
        }
    }
</script>