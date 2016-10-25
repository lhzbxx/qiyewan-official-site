<template>
    <div>
        <div style="margin-top: 15px; background-color: #eee;">
            <div class="container">
                <el-row>
                    <el-col :span="24" style="margin: 18px 0 10px 10px;">
                        <b style="font-size: 20px;">热门推荐</b>
                    </el-col>
                    <el-col :span="6" v-for="(o, index) in 4" :offset="0">
                        <lh-product></lh-product>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>