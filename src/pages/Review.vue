<template>
    <div>
        <h3 style="text-align: center; color: #333; margin: 20px 0;">订单评价</h3>
        <p style="text-align: center; color: #aaa; margin-bottom: 15px; font-size: 15px;">
            订单号
            <span style="margin-right: 20px;">#89137843</span>
            购物时间
            <span>2016年10月14日</span>
        </p>
        <el-row style="border: 1px solid #eee;">
            <el-col :span="8"
                    style="text-align: center;
                    border-right: 1px solid black;
                    margin-top: 30px;
                    margin-bottom: 30px;">
                <div style="position: relative; width: 200px; margin: auto;">
                    <img src="../assets/logo.png">
                    <p style="position: relative; margin: auto; width: 150px;">
                        办理工商变更，不包括股权转让协议撰写。
                    </p>
                    <br>
                    <p style="color: red; font-size: 20px;">
                        ￥200
                    </p>
                    <br>
                    <p style="color: gray; font-size: 14px;">
                        服务数量：
                        <span>
                            2个
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
                    <el-form-item label="商品满意度">
                        <el-rate
                                v-model="rateToast"
                                show-text
                                :texts="['极差', '失望', '一般', '满意', '非常满意']"
                                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                        </el-rate>
                    </el-form-item>
                    <el-form-item label="评价">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="padding: 10px 25px;">提交评价</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
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
                rateToast: 5
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>