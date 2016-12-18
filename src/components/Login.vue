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
      <div class="clearfix"></div>
      <div style="width: 100%; margin-top: -10px;">
        <el-button type="text"
                   @click.native="jumpToRegister"
                   style="float: left; text-decoration: underline;">
          快速注册
        </el-button>
        <el-button type="text"
                   @click.native="jumpToResetPassword"
                   style="float: right; text-decoration: underline;">
          忘记密码
        </el-button>
      </div>
      <div class="clearfix"></div>
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
    data () {
      return {
        isVisible: false,
        checked: false,
        formStacked: {
          phone: '',
          password: ''
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
      jumpToRegister () {
        this.$emit('register')
        this.isVisible = false
      },
      jumpToResetPassword () {
        this.$emit('reset-password')
        this.isVisible = false
      },
      openDialog () {
        this.error = ''
        this.$refs.dialog.open()
      },
      submit () {
        let vm = this
        this.$refs.loginForm.validate(function (valid) {
          console.log(valid)
          if (valid) {
            vm.isLogging = true
            vm.$store.dispatch('userLogin', {
              phone: vm.formStacked.phone,
              password: vm.formStacked.password
            }).then(function () {
              vm.isVisible = false
              vm.formStacked.password = ''
              vm.isLogging = false
            }, function (error) {
              vm.formStacked.password = ''
              vm.isLogging = false
              vm.$message.error(error.message)
            })
          } else {
            return false
          }
        })
      }
    }
  }
</script>
