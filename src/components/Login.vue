<template>
    <div>
        <el-dialog title="企业湾账号登录"
                   v-model="isVisible"
                   size="tiny"
                   ref="dialog">
            <el-form label-position="top"
                     ref="loginForm"
                     :rules="rules"
                     :model="formStacked">
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="formStacked.phone"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="formStacked.password"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary"
                       @click.native="submit"
                       :loading="isLogging"
                       style="width: 100%">
                {{ isLogging ? "登录中" : "登 录" }}
            </el-button>
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
                    password: ""
                },
                isLogging: false,
                error: null,
                rules: {
                    phone: [
                        {
                            required: true,
                            message: '请输入手机号',
                            trigger: 'blur'
                        }
                    ],
                    password: [
                        {
                            required: true,
                            message: '请输入密码',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            openDialog() {
                this.error = ""
                this.$refs.dialog.open()
            },
            submit() {
                this.$refs.loginForm.validate((valid) => {
                    console.log(valid)
                    if (valid) {
                        this.isLogging = true
                        let vm = this
                        this.$store.dispatch("userLogin", {
                            phone: this.formStacked.phone,
                            password: this.formStacked.password
                        }).then(() => {
                            vm.isVisible = false
                            vm.formStacked.password = ""
                            vm.isLogging = false
                        }, (error) => {
                            vm.formStacked.password = ""
                            vm.isLogging = false
                            if (error.detail == "Error.Auth.WRONG_PASSWORD") {
                                vm.$message.error("密码不正确！");
                            }
                            if (error.detail == "Error.Auth.USER_NOT_EXISTS") {
                                vm.$message.error("用户不存在！");
                            }
                        })
                    } else {
                        return false
                    }
                })
            }
        }
    }
</script>