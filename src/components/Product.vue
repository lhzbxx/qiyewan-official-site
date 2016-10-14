<style scoped>
    .text {
        font-size: 14px;
    }

    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .item {
        padding: 18px 0;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix {
    @utils-clearfix;
    }

    .box-card {
        width: 480px;
    }
</style>

<template>
    <div>
        <el-row>
            <el-col :span="8" v-for="(o, index) in 2" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="../assets/logo.png" class="image">
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                            <time class="time">2016年10月13日</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>


<script>
    export default {
        data () {
            return {
                dialogVisible: false,
                formStacked: {
                    name: '',
                    region: '',
                    type: ''
                },
                currentDate: "2016年10月13日"
            }
        },
        methods: {}
    }
</script>