<template>
    <div>
        <el-dialog title="企业湾账号登录" v-model="isVisible" size="tiny" ref="dialog">
            <el-form label-position="top" :model="formStacked" class="demo-form-stacked">
                <el-form-item label="手机号">
                    <el-input v-model="formStacked.phone"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="formStacked.password"></el-input>
                </el-form-item>
            </el-form>
            <p style="color: red; text-align: center;">{{ error }}</p>
            <el-button type="primary"
                       @click.native="submit"
                       :loading="isLogging"
                       :disabled="formStacked.phone == '' || formStacked.password == ''"
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
                error: null
            }
        },
        methods: {
            openDialog() {
                this.$refs.dialog.open()
            },
            submit() {
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
                        vm.error = "密码不正确！"
                    }
                })
            }
        }
    }
</script>