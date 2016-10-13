<template>
    <div>
        <el-dialog title="企业湾账号登录" v-model="dialogVisible" size="tiny">
            <el-form label-position="top" :model="formStacked" class="demo-form-stacked">
                <el-form-item label="手机号">
                    <el-input v-model="formStacked.phone"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="formStacked.password"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" @click.native="dialogVisible = false" style="width: 100%">登 录</el-button>
        </el-dialog>
    </div>
</template>