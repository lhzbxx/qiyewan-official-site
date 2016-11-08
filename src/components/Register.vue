<template>
    <div>
        <el-dialog title="企业湾账号注册" v-model="isVisible" size="tiny" ref="dialog">
            <el-form label-position="top" :model="formStacked" class="demo-form-stacked">
                <el-form-item label="手机号">
                    <el-input v-model="formStacked.phone"></el-input>
                </el-form-item>
                <el-form-item label="校验码">
                    <el-input v-model="formStacked.captcha" style="width: 50%; float:left; margin-right: 10px;"></el-input>
                    <el-button type="primary"
                               :disabled="isWaiting"
                               @click.native="requestCaptcha"
                               style="width: 45%">
                               {{ isWaiting ? timerShow : "点击获取" }}
                    </el-button>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="formStacked.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input type="password2" v-model="formStacked.password2"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary"
                       @click.native="submit"
                       style="width: 100%">注 册</el-button>
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
                timer: 60
            }
        },
        methods: {
            openDialog() {
                this.$refs.dialog.open()
            },
            requestCaptcha() {
                this.isWaiting = true
                this.timer = 60
                let vm = this
                this.counterDown()
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
            submit() {
                this.isLogging = true
                let vm = this
                this.$store.dispatch("userLogin", {
                    phone: this.formStacked.phone,
                    password: this.formStacked.password,
                    captcha: this.formStacked.captcha
                }).then(() => {
                    vm.isVisible = false
                    vm.formStacked.password = ""
                    vm.isLogging = false
                }, (error) => {
                    vm.formStacked.password = ""
                    vm.isLogging = false
                    if (error.detail == "Error.Auth.WRONG_PASSWORD") {
                        vm.error = "密码不正确！"
                    }
                })
            }
        },
        computed: {
            timerShow() {
                return this.timer + "秒"
            }
        }
    }
</script>