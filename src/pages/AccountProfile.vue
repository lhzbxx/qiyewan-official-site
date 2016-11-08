<style scoped>
    .title b, button, i {
        color: #229dd5 !important;
    }

    .el-button--primary {
        color: #fff !important;
        background-color: #229dd5 !important;
    }

</style>
<template>
    <div class="container">
        <br>
        <lh-table-header class="title" title="个人信息"></lh-table-header>
        <div style="border: 1px solid #eee; padding: 10px 20px;">
            <table border="0">
                <tr>
                    <td width="100">会员名</td>
                    <td width="150">
                        <el-input v-model="username" v-if="isEditingUsername"></el-input>
                        <span v-else>{{ username }}</span>
                    </td>
                    <td>
                        <el-button type="text"
                                   @click.native="confirmUsername"
                                   v-if="isEditingUsername">
                            确认
                        </el-button>
                        <el-button type="text"
                                   @click.native="isEditingUsername = true"
                                   v-else>
                            修改
                        </el-button>
                    </td>
                </tr>
                <tr>
                    <td>绑定手机</td>
                    <td>13868237889</td>
                    <td>
                        <el-button type="text">
                            修改
                        </el-button>
                    </td>
                </tr>
            </table>
        </div>
        <br>
        <lh-table-header class="title" title="公司信息">
        </lh-table-header>
        <el-button type="text"
                   style="position: relative;
                          top: -40px;
                          right: 0;
                          float: right;
                          height: 40px;"
                   @click.native="isEditingCompanyInfo = true"
                   v-if="!isEditingCompanyInfo">
            修改
        </el-button>
        <div style="border: 1px solid #eee; padding: 10px 20px;">
            <table border="0" ref="companyInfoTable">
                <tr>
                    <td width="120" height="35" align="right">公司名称：</td>
                    <td>
                        <el-input v-model="companyInfo.name"
                                  v-if="isEditingCompanyInfo"></el-input>
                        <span v-else>{{ companyInfo.name }}</span></td>
                </tr>
                <tr>
                    <td width="120" height="35" align="right">法人代表：</td>
                    <td>
                        <el-input v-model="companyInfo.legalRepresentative"
                                  v-if="isEditingCompanyInfo"></el-input>
                        <span v-else>{{ companyInfo.legalRepresentative }}</span></td>
                </tr>
                <tr>
                    <td width="120" height="35" align="right">公司地址：</td>
                    <td>
                        <el-input v-model="companyInfo.address"
                                  v-if="isEditingCompanyInfo"></el-input>
                        <span v-else>{{ companyInfo.address }}</span>
                    </td>
                </tr>
                <tr>
                    <td width="120" height="35" align="right">注册资本：</td>
                    <td>
                        <el-input v-model="companyInfo.registeredCapital"
                                  v-if="isEditingCompanyInfo"></el-input>
                        <span v-else>{{ companyInfo.registeredCapital }}</span></td>
                </tr>
                <tr>
                    <td width="120" height="35" align="right">员工人数：</td>
                    <td>
                        <el-input v-model="companyInfo.staffNum"
                                  v-if="isEditingCompanyInfo"></el-input>
                        <span v-else>{{ companyInfo.staffNum }}</span></td>
                </tr>
                <tr>
                    <td width="120" height="35" align="right">营业执照号：</td>
                    <td>
                        <el-input v-model="companyInfo.businessLicense"
                                  v-if="isEditingCompanyInfo"></el-input>
                        <span v-else>{{ companyInfo.businessLicense }}</span></td>
                </tr>
                <tr>
                    <td width="120" height="35" align="right">税务登记号：</td>
                    <td>
                        <el-input v-model="companyInfo.taxRegistration"
                                  v-if="isEditingCompanyInfo"></el-input>
                        <span v-else>{{ companyInfo.taxRegistration }}</span></td>
                </tr>
                <tr>
                    <td width="120" height="35" align="right">其它联系方式：</td>
                    <td>
                        <el-input v-model="companyInfo.contactNumber"
                                  v-if="isEditingCompanyInfo"></el-input>
                        <span v-else>{{ companyInfo.contactNumber }}</span></td>
                </tr>
            </table>
            <el-button v-if="isEditingCompanyInfo"
                       @click.native="confirmCompanyInfo"
                       type="primary"
                       style="margin-left: 125px; margin-top: 5px; margin-bottom: 5px;">确认修改
            </el-button>
        </div>
        <br>
        <lh-table-header class="title" title="账户安全"></lh-table-header>
        <div style="border: 1px solid #eee; border-bottom: none; padding: 20px 20px;">
            <div style="line-height: 50px;">
                <i class="el-icon-circle-check"
                   style="font-size: 30px;
                          color: #20A0FF; vertical-align: middle; margin-right: 5px;"></i>
                登录密码建议您定期更换密码，且设置一个包含数字和字母，且长度6位以上的密码。
                <div style="float: right;">
                    <el-button type="primary"
                               @click.native="openDialog">修改
                    </el-button>
                </div>
            </div>
        </div>
        <div style="border: 1px solid #eee; padding: 10px 20px;">
            <p style="font-size: 15px; color: #229dd5; margin: 10px 0 20px 0;">登录历史记录</p>
            <el-table :data="history"
                      style="width: 100%">
                <el-table-column
                        inline-template
                        label="登录时间">
                    <div>{{ getLocalTime(row.createAt) }}</div>
                </el-table-column>
                <el-table-column
                        property="address"
                        label="登录地点">
                </el-table-column>
                <el-table-column
                        property="ip"
                        label="IP地址">
                </el-table-column>
                <el-table-column
                        property="mode"
                        label="登录方式">
                </el-table-column>
            </el-table>
            <p style="font-size: 13px; color: #aaa; margin: 10px 0;">
                登陆历史只记录最近20条，请您核对登录时间及地点，如您确定在某时间未登录过，请立即“修改登录密码”以保障账号安全。因宽带提供商导致的IP地址变化，登录地点有可能显示不准确，请您以登录时间为参考基准。
            </p>
        </div>
        <lh-reset-password ref="dialog"></lh-reset-password>
    </div>
</template>

<script>
    import authApi from '../api/auth'
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                isEditingUsername: false,
                username: "某某某",
                phoneNumber: "132413423",
                isEditingCompanyInfo: false,
                companyInfo: null,
                isVisible: true,
                formStacked: {
                    phone: "",
                    captcha: "",
                    password: "",
                    password2: ""
                },
                history: []
            }
        },
        computed: mapGetters({
            token: 'getToken'
        }),
        methods: {
            openDialog() {
                this.$refs.dialog.openDialog()
            },
            confirmCompanyInfo() {
                this.isEditingCompanyInfo = false
            },
            confirmUsername() {
                this.isEditingUsername = false
            },
            fetchData() {
                let vm = this
                authApi.getLoginHistory(this.token,
                        data => {
                    vm.history = data
                },
                        error => {

                })
                authApi.getCompany(this.token,
                        data => {
                    vm.companyInfo = data
                },
                        error => {

                })
            },
            getLocalTime(nS) {
                return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/, ' ');
            },
        },
        created() {
            this.fetchData()
        }
    }
</script>