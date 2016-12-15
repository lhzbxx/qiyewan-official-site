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
        {{ isRegistering ? "注册中" : "注 册" }}
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
        var pwdRank = function (w) {
          var l = w.length
          var f = function (x, s) {
            return ((eval('/' + x + '/').test(s)) ? 1 : 0)
          }
          var z = f('[0-9]', w) + f('[a-z]', w) + f('[A-Z]', w) + f('[\\W_]', w)
          var r = (l > 10 && z === 1) ? z + 1 : z
          if (r > 1 && f('^(?:(\\w+)\\1+)+$|(\\w)\\2{2,}', w))r--
          if ((l > 11 && z > 1) || (l > 12 && z === 1))r++
          if (l > 13 && r < 5)r++
          return r
        }
        if (pwdRank(value) <= 1) {
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
        checked: false,
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
        this.$refs.registerForm.validateField(['phone'],
          (error) => {
            if (!error) {
              vm.$store.dispatch('isRegistered', vm.formStacked.phone).then(
                data => {
                  if (!data) {
                    vm.$store.dispatch('requestCaptcha', vm.formStacked.phone)
                    vm.isWaiting = true
                    vm.timer = 60
                    vm.counterDown()
                  } else {
                    vm.$message.error('手机号已被注册')
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
        this.$refs.registerForm.validate((valid) => {
          if (valid) {
            this.isRegistering = true
            let vm = this
            this.$store.dispatch('userRegister', {
              phone: this.formStacked.phone,
              password: this.formStacked.password,
              captcha: this.formStacked.captcha
            }).then(() => {
              vm.isVisible = false
              vm.formStacked.captcha = ''
              vm.formStacked.password = ''
              vm.formStacked.password2 = ''
              vm.isRegistering = false
            }, (error) => {
              vm.formStacked.captcha = ''
              vm.formStacked.password = ''
              vm.formStacked.password2 = ''
              vm.isRegistering = false
              if (error.detail === 'Error.Action.WRONG_CAPTCHA') {
                vm.$message.error('验证码不正确')
              }
              if (error.detail === 'Error.Duplicated.USER_EXISTS') {
                vm.$message.error('手机号已被注册')
              }
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
