<template>
    <div>
        <el-dialog title="企业湾密码修改"
                   v-model="isVisible"
                   ref="dialog"
                   size="tiny">
            <el-form label-position="top" :model="formStacked">
                <el-input v-model="formStacked.phone" placeholder="手机号"></el-input>
                <br>
                <el-input v-model="formStacked.captcha"
                          placeholder="校验码"
                          style="width: 50%;
                                 float:left;
                                 margin-right: 10px;"></el-input>
                <el-button type="primary"
                           style="width: 45%">
                    点击获取
                </el-button>
                <div style="clear: both;"></div>
                <br>
                <el-input type="password"
                          v-model="formStacked.password"
                          placeholder="密码"></el-input>
                <br>
                <el-input type="password2"
                          v-model="formStacked.password2"
                          placeholder="确认密码"></el-input>
                <el-checkbox class="checkbox"
                             v-model="checked"
                             style="margin-top: 5px; margin-bottom: 10px;">
                    同意
                    <el-button type="text" style="padding: 10px 5px;">
                        企业湾用户协议
                    </el-button>
                </el-checkbox>
            </el-form>
            <el-button type="primary"
                       @click.native="isVisible = false"
                       style="width: 100%">确 认</el-button>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isVisible: false,
                checked: false,
                formStacked: {
                    phone: "",
                    captcha: "",
                    password: "",
                    password2: ""
                }
            }
        },
        methods: {
            openDialog() {
                this.$refs.dialog.open()
            }
        }
    }
</script>