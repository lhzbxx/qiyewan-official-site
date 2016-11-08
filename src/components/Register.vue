<template>
    <div>
        <el-dialog title="企业湾账号注册"
                   v-model="isVisible"
                   size="tiny"
                   ref="dialog">
            <el-form label-position="top"
                     :model="formStacked"
                     :rules="rules"
                     ref="registerForm">
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="formStacked.phone"></el-input>
                </el-form-item>
                <el-form-item label="校验码" prop="captcha">
                    <el-input v-model="formStacked.captcha"
                              style="width: 50%; float:left; margin-right: 10px;"></el-input>
                    <el-button type="primary"
                               :disabled="isWaiting"
                               @click.native="requestCaptcha"
                               style="width: 46%">
                        {{ isWaiting ? timerShow : "点击获取" }}
                    </el-button>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password"
                              auto-complete="off"
                              v-model="formStacked.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password2">
                    <el-input type="password"
                              auto-complete="off"
                              v-model="formStacked.password2"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary"
                       @click.native="submit"
                       style="width: 100%">注 册
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
                    captcha: "",
                    password: "",
                    password2: ""
                },
                isWaiting: false,
                timer: 60,
                rules: {
                    phone: [
                        {
                            require: true,
                            message: '请输入正确的手机号',
                            trigger: 'change'
                        }
                    ],
                    captcha: [
                        {
                            require: true,
                            message: '请输入正确的手机号',
                            trigger: 'blur'
                        }
                    ],
                    password: [
                        {
                            require: true,
                            message: '请输入正确的手机号',
                            trigger: 'blur'
                        }
                    ],
                    password2: [
                        {
                            require: true,
                            message: '请输入正确的手机号',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            openDialog() {
                this.$refs.dialog.open()
            },
            requestCaptcha() {
                this.$refs.registerForm.validateField('phone',
                        (valid) => {
                            console.log(valid)
                            if (valid) {
                                this.dispatch("requestCaptcha")
                                this.isWaiting = true
                                this.timer = 60
                                this.counterDown()
                            } else {
                                return false
                            }
                        })
            },
            counterDown() {
                setTimeout(() => {
                    if (this.timer == 0) {
                        this.isWaiting = 0
                        return
                    }
                    this.timer -= 1
                    this.counterDown()
                }, 1000)
            },
            submit(ev) {
                this.$refs.registerForm.validate((valid) => {
                    console.log(valid)
                    if (valid) {
                        this.isLogging = true
                        let vm = this
                        this.$store.dispatch("userRegister", {
                            phone: this.formStacked.phone,
                            password: this.formStacked.password,
                            captcha: this.formStacked.captcha
                        }).then(() => {
                            vm.isVisible = false
                            vm.formStacked.password = ""
                            vm.formStacked.password2 = ""
                            vm.isLogging = false
                        }, (error) => {
                            vm.formStacked.password = ""
                            vm.formStacked.password2 = ""
                            vm.isLogging = false
                            if (error.detail == "Error.Action.WRONG_CAPTCHA") {
                                vm.error = "验证码不正确！"
                            }
                        })
                    } else {
                        return false;
                    }
                });
            }
        },
        computed: {
            timerShow() {
                return this.timer + "秒"
            }
        }
    }
</script>