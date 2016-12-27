<style scoped>
  .rpngzi {
    width: 1170px;
    margin: 0 auto;
    padding-top: 50px;
  }

  ul {
    list-style: none;
  }

  .banner h5 {
    font-size: 22px;
    font-family: "Microsoft YaHei";
    margin-left: 10px;
    color: rgb(80, 80, 80);
    font-weight: bold;
    margin-bottom: 20px;
  }

  .tit {
    border-left: 3px solid #0a8acb;
  }

  .tishi {
    font-size: 12px;
    color: #b4b2b3;
    text-align: center;
    margin: 30px 0;
  }

  .aisle {
    width: 100%;
    height: 55px;
    padding-left: 0;
  }

  .aisle li {
    width: 50%;
    height: 55px;
    float: left;
    text-align: center;
    line-height: 55px;
    color: white;
    font-family: "Microsoft YaHei";
    font-size: 18px;
  }

  .aisle li:hover {
    cursor: pointer;
  }

  .aisle_one {
    background-color: #f18612;
  }

  .aisle_two {
    background-color: #18a3e8;
  }

  .all_inp {
    font-size: 18px;
    color: #414141;
    font-family: "Microsoft YaHei";
    padding-top: 30px;
    position: relative;
  }

  .all_inp p, .Codes {
    height: 50px;
  }

  .Codes input {
    height: 35px;
    margin-left: 40px;
    width: 375px;
    padding-left: 15px;
  }

  .Codes label {
    letter-spacing: 6px;
    font-weight: normal;
  }

  .Codes button {
    height: 42px;
    width: 144px;
    margin-left: 25px;
    color: #626262;
    font-size: 16px;
    font-family: "Microsoft YaHei";
  }

  .all_inp p label {
    font-weight: normal;
  }

  .all_inp p input {
    height: 35px;
    margin-left: 40px;
    width: 550px;
    padding-left: 15px;
  }

  .clearfix {
    content: '';
    display: block;
    clear: both;
  }

  .checkbox {
    font-size: 14px;
    color: #727272;
    margin-left: 130px;
  }

  .submit {
    background-color: #168ecb;
    width: 200px;
    height: 50px;
    margin-left: 110px;
    margin-top: 40px;
    color: white;
    font-size: 18px;
    font-family: "Microsoft YaHei";
    margin-bottom: 100px;
  }

  .error {
    width: 565px;
    height: 30px;
    background-color: #ffe7e7;
    border: 1px solid #e70d0d;
    color: #e70d0d;
    text-align: center;
    position: absolute;
    top: 0px;
    left: 113px;
    font-family: "宋体";
    font-size: 14px;
    line-height: 30px;
    display: none;
  }

  .bitian {
    color: #e20e0e;
    padding-left: 20px;
    font-size: 16px;
  }
</style>

<template>
  <div class="container">
    <div class="rpngzi">
      <div class="banner">
        <div class="tit">
          <h5>投融资流程</h5>
        </div>
        <img src="../assets/inv_fin_banner.jpg" alt="">
      </div>
      <div class="tishi">
        为了保障您的账户安全需要进行手机验证（为必填项）。我们会对您的个人信息严格保密。
      </div>

      <ul class="aisle">
        <li class="aisle_one" @click="setInvShow(1)">投资通道</li>
        <li class="aisle_two" @click="setInvShow(0)">融资通道</li>
      </ul>
      <el-row>
        <el-col :span="10" :offset="7">
          <el-form label-position="top" style="padding-top: 30px"
                   :model="formStacked"
                   :rules="rules"
                   ref="invForm">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="formStacked.name"></el-input>
            </el-form-item>
            <el-form-item label="企业名称" prop="companyName">
              <el-input v-model="formStacked.companyName"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="mobile">
              <el-input v-model="formStacked.mobile"></el-input>
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
              <div v-if="showInv == 1 ">
                <el-form-item label="投资领域" prop="direction">
                  <el-input v-model="formStacked.direction"></el-input>
                </el-form-item>
                <el-form-item label="投资期限" prop="period">
                  <el-input v-model="formStacked.period"></el-input>
                </el-form-item>
              </div>
              <div v-if="showInv == 0 ">
                <el-form-item label="BP" prop="bp">
                  <el-input v-model="formStacked.bp"></el-input>
                </el-form-item>
                <el-form-item label="融资期限" prop="period">
                  <el-input v-model="formStacked.period"></el-input>
                </el-form-item>
              </div>
              <el-form-item label="地区" prop="area">
                <el-input v-model="formStacked.area"></el-input>
              </el-form-item>
            </el-form-item>
          </el-form>
          <el-button type="primary"
                     @click="submit"
                     :loading="isSubmitting"
                     style="width: 100%;margin-bottom: 30px">
            {{ isSubmitting ? "提交中" : "提 交" }}
          </el-button>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
  import articleApi from '../api/article'
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
      return {
        showInv: 1,
        formStacked: {
          name: '',
          companyName: '',
          mobile: '',
          captcha: '',
          direction: '',
          bp: '',
          period: '',
          area: ''
        },
        isWaiting: false,
        isSubmitting: false,
        timer: 60,
        rules: {
          name: [
            {
              required: true,
              message: '请输入姓名',
              trigger: 'blur'
            }
          ],
          companyName: [
            {
              required: true,
              message: '请输入企业名称',
              trigger: 'blur'
            }
          ],
          mobile: [
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
          direction: [
            {
              required: true,
              message: '请输入投资方向',
              trigger: 'blur'
            }
          ],
          bp: [
            {
              required: true,
              message: '请输入融资方向',
              trigger: 'blur'
            }
          ],
          period: [
            {
              required: true,
              message: '请输入投融资期限',
              trigger: 'blur'
            }
          ],
          area: [
            {
              required: true,
              message: '请输入地区',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      setInvShow (show) {
        this.showInv = show
      },
      requestCaptcha () {
        let vm = this
        this.$refs.invForm.validateField('mobile',
          (error) => {
            if (!error) {
              articleApi.getInvCaptcha(vm.formStacked.mobile,
                data => {},
                () => {})
              vm.isWaiting = true
              vm.timer = 60
              vm.counterDown()
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
      submit () {
        this.$refs.invForm.validate((valid) => {
          if (valid) {
            let vm = this
            let formStacked = JSON.parse(JSON.stringify(vm.formStacked))
            this.isSubmitting = true
            if (vm.showInv) {
              articleApi.postInvestments(formStacked, response => {
                vm.resetForm(response.body.success)
              })
            } else {
              articleApi.postFinances(formStacked, response => {
                vm.resetForm(response.body.success)
              })
            }
          } else {
            return false
          }
        })
      },
      resetForm (success) {
        let vm = this
        if (success) {
          vm.$message({
            message: '提交成功',
            type: 'success'
          })
        } else {
          vm.$message({
            message: '验证码错误',
            type: 'error'
          })
        }
        vm.formStacked.name = ''
        vm.formStacked.companyName = ''
        vm.formStacked.captcha = ''
        vm.formStacked.direction = ''
        vm.formStacked.period = ''
        vm.formStacked.area = ''
        vm.isSubmitting = false
      }
    },
    computed: {
      timerShow () {
        return this.timer + '秒后重新获取'
      }
    }
  }
</script>
