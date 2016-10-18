<template>
    <div>
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
    </div>
</template>