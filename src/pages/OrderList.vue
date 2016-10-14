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
                    label="商品信息">
                <div>
                    <el-row>
                        <el-col :span="5">
                            <img src="../assets/logo.png" style="width: 100%;">
                        </el-col>
                        <el-col :span="19">

                        </el-col>
                    </el-row>
                </div>
            </el-table-column>
            <el-table-column
                    property="unitPrice"
                    label="单价">
                <div>￥
                    <span>
                        200
                    </span>
                </div>
            </el-table-column>
            <el-table-column
                    property="amount"
                    label="数量">
                <div>
                    <span>
                        1
                    </span>
                    <span>
                        年
                    </span>
                </div>
            </el-table-column>
            <el-table-column
                    property="totalPrice"
                    label="小计">
                <div style="color: red;">
                    ￥
                    <span>200</span>
                </div>
            </el-table-column>
            <el-table-column
                    property="action"
                    label="操作">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                paidProducts: [{

                }],
                unpaidProducts: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: []
            }
        },
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleMultipleSelectionChange(val) {

            }
        }
    }
</script>