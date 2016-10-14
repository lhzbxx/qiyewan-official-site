<template>
    <div>
        <el-breadcrumb separator=">" style="padding: 10px 0; border-bottom: 1px solid #eee">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>工商服务</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
            <el-col :span="24" style="margin-top: 20px;">
                <p>工商变更</p>
            </el-col>
            <el-col :span="6" v-for="(o, index) in 10" :offset="0">
                <product></product>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>