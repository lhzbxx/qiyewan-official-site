<template>
    <div>
        <el-dialog title="企业湾密码修改" v-model="dialogVisible" size="tiny">
            <el-form label-position="top" :model="formStacked" class="demo-form-stacked">
                <el-form-item label="手机号">
                    <el-input v-model="formStacked.phone"></el-input>
                </el-form-item>
                <el-form-item label="校验码">
                    <el-input v-model="formStacked.captcha" style="width: 50%; float:left; margin-right: 10px;"></el-input>
                    <el-button type="primary" style="width: 45%">点击获取</el-button>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="formStacked.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input type="password2" v-model="formStacked.password2"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" @click.native="dialogVisible = false" style="width: 100%">确 认</el-button>
        </el-dialog>
    </div>
</template>