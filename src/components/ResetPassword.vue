<template>
  <div>
    <el-dialog title="企业湾密码修改"
               v-model="isVisible"
               ref="dialog"
               size="tiny">
      <el-form label-position="top"
               :model="formStacked"
               :rules="rules"
               ref="resetPasswordForm">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="formStacked.phone"></el-input>
        </el-form-item>
        <el-form-item label="校验码" prop="captcha">
          <el-input v-model="formStacked.captcha"
                    style="width: 50%; float:left; margin-right: 10px;"></el-input>
          <el-button type="primary"
                     :disabled="isWaiting"
                     @click.native.prevent="requestCaptcha"
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
                 :loading="isRegistering"
                 style="width: 100%">
        {{ isRegistering ? "修改中" : "确 认" }}
      </el-button>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      var validatePhone = (rule, value, cb) => {
        let reg = /^1[3|4|5|7|8][0-9]{9}$/
        if (!reg.test(value)) {
          cb(new Error('请输入正确的手机号！'))
        } else {
          cb()
        }
      }
      var validatePassword = (rule, value, cb) => {
        if (value.length < 6) {
          cb(new Error('密码强度低，请使用大写字母、小写字母和数字。'))
        } else {
          cb()
        }
      }
      var validatePassword2 = (rule, value, cb) => {
        if (value !== this.formStacked.password) {
          cb(new Error('两次输入密码不一致！'))
        } else {
          cb()
        }
      }
      return {
        isVisible: false,
        checked: true,
        formStacked: {
          phone: '',
          captcha: '',
          password: '',
          password2: ''
        },
        isWaiting: false,
        isRegistering: false,
        timer: 60,
        rules: {
          phone: [
            {
              required: true,
              message: '请输入手机号',
              trigger: 'change'
            },
            {
              validator: validatePhone
            }
          ],
          captcha: [
            {
              required: true,
              message: '请输入验证码',
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              validator: validatePassword
            }
          ],
          password2: [
            {
              required: true,
              message: '请再次输入密码',
              trigger: 'blur'
            },
            {
              validator: validatePassword2
            }
          ]
        }
      }
    },
    methods: {
      openDialog () {
        this.$refs.dialog.open()
      },
      requestCaptcha () {
        let vm = this
        this.$refs.resetPasswordForm.validateField('phone',
          (error) => {
            if (!error) {
              vm.$store.dispatch('isRegistered', vm.formStacked.phone).then(
                data => {
                  if (data) {
                    vm.$store.dispatch('requestCaptcha', vm.formStacked.phone)
                    vm.isWaiting = true
                    vm.timer = 60
                    vm.counterDown()
                  } else {
                    return false
                  }
                }
              )
            } else {
              return false
            }
          })
      },
      counterDown () {
        setTimeout(() => {
          if (this.timer === 0) {
            this.isWaiting = false
            return true
          }
          this.timer -= 1
          this.counterDown()
        }, 1000)
      },
      submit (ev) {
        this.$refs.resetPasswordForm.validate((valid) => {
          if (valid) {
            this.isRegistering = true
            let vm = this
            this.$store.dispatch('userResetPassword', {
              phone: this.formStacked.phone,
              password: this.formStacked.password,
              captcha: this.formStacked.captcha
            }).then(() => {
              vm.isVisible = false
              vm.formStacked.captcha = ''
              vm.formStacked.password = ''
              vm.formStacked.password2 = ''
              vm.isRegistering = false
              vm.$message('重置密码成功，已自动登录。')
            }, (error) => {
              vm.formStacked.captcha = ''
              vm.formStacked.password = ''
              vm.formStacked.password2 = ''
              vm.isRegistering = false
              vm.$message.error(error.message)
            })
          } else {
            return false
          }
        })
      }
    },
    computed: {
      timerShow () {
        return this.timer + '秒'
      }
    }
  }
</script>
