<template>
    <div style="margin: 10px;">
        <table-header title="个人信息"></table-header>
        <div style="border: 1px solid #eee; padding: 10px 20px;">
            <table border="0">
                <tr>
                    <td width="100">会员名</td>
                    <td width="150">一个昵称</td>
                    <td>
                        <el-button type="text">
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
        <table-header title="公司信息">
        </table-header>
        <el-button type="text"
                   style="position: relative;
                          top: -40px;
                          right: 0;
                          float: right;
                          height: 40px;"
                   @click.native="editCompanyInfo"
                   v-if="!isEditing">
            修改
        </el-button>
        <div style="border: 1px solid #eee; padding: 10px 20px;">
            <table border="0" ref="companyInfoTable">
                <tr>
                    <td width="120" height="35" align="right">公司名称： </td>
                    <td>
                        <el-input v-model="companyInfo.name"
                                  v-if="isEditing"></el-input>
                        <span v-else>{{ companyInfo.name }}</span></td>
                </tr>
                <tr>
                    <td width="120" height="35" align="right">法人代表： </td>
                    <td>
                        <el-input v-model="companyInfo.legalRepresentative"
                                  v-if="isEditing"></el-input>
                        <span v-else>{{ companyInfo.legalRepresentative }}</span></td>
                </tr>
                <tr>
                    <td width="120" height="35" align="right">公司地址： </td>
                    <td>
                        <el-input v-model="companyInfo.address"
                                  v-if="isEditing"></el-input>
                        <span v-else>{{ companyInfo.address }}</span>
                    </td>
                </tr>
                <tr>
                    <td width="120" height="35" align="right">注册资本： </td>
                    <td>
                        <el-input v-model="companyInfo.registeredCapital"
                                  v-if="isEditing"></el-input>
                        <span v-else>{{ companyInfo.registeredCapital }}</span></td>
                </tr>
                <tr>
                    <td width="120" height="35" align="right">员工人数： </td>
                    <td>
                        <el-input v-model="companyInfo.staffNum"
                                  v-if="isEditing"></el-input>
                        <span v-else>{{ companyInfo.staffNum }}</span></td>
                </tr>
                <tr>
                    <td width="120" height="35" align="right">营业执照号： </td>
                    <td>
                        <el-input v-model="companyInfo.businessLicense"
                                  v-if="isEditing"></el-input>
                        <span v-else>{{ companyInfo.businessLicense }}</span></td>
                </tr>
                <tr>
                    <td width="120" height="35" align="right">税务登记号： </td>
                    <td>
                        <el-input v-model="companyInfo.taxRegistration"
                                  v-if="isEditing"></el-input>
                        <span v-else>{{ companyInfo.taxRegistration }}</span></td>
                </tr>
                <tr>
                    <td width="120" height="35" align="right">其它联系方式： </td>
                    <td>
                        <el-input v-model="companyInfo.contactNumber"
                                  v-if="isEditing"></el-input>
                        <span v-else>{{ companyInfo.contactNumber }}</span></td>
                </tr>
            </table>
            <el-button v-if="isEditing"
                       @click.native="confirmCompanyInfo"
                       type="primary"
                       style="margin-left: 125px; margin-top: 5px; margin-bottom: 5px;">确认修改</el-button>
        </div>
        <br>
        <table-header title="账户安全"></table-header>
        <div style="border: 1px solid #eee; border-bottom: none; padding: 20px 20px;">
            <div style="line-height: 50px;">
                <i class="el-icon-circle-check"
                   style="font-size: 30px;
                          color: #20A0FF; vertical-align: middle; margin-right: 5px;"></i>
                登录密码建议您定期更换密码，且设置一个包含数字和字母，且长度6位以上的密码。
                <div style="float: right;">
                    <el-button type="primary"
                               @click.native="openDialog">修改</el-button>
                </div>
            </div>
        </div>
        <div style="border: 1px solid #eee; padding: 10px 20px;">
            <p style="font-size: 15px; color: #20A0FF; margin: 10px 0 20px 0;">登录历史记录</p>
            <el-table :data="history"
                      style="width: 100%">
                <el-table-column
                        property="loginAt"
                        label="登录时间">
                </el-table-column>
                <el-table-column
                        property="address"
                        label="登录地点">
                </el-table-column>
                <el-table-column
                        property="IP"
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
    export default {
        data() {
            return {
                isEditing: false,
                companyInfo: {
                    name: "企业湾",
                    legalRepresentative: "企业湾",
                    address: "公司地址",
                    registeredCapital: "2000万元",
                    staffNum: 2000,
                    businessLicense: "218r4101141",
                    taxRegistration: "jjds9230194321",
                    contactNumber: "1321321"
                },
                isVisible: true,
                formStacked: {
                    phone: "",
                    captcha: "",
                    password: "",
                    password2: ""
                },
                history: [
                    {
                        loginAt: "2016-10-16 13:06:53",
                        address: "中国 上海 上海市",
                        IP: "180.12.23.123",
                        mode: "PC端登录"
                    },
                    {
                        loginAt: "2016-10-16 13:06:53",
                        address: "中国 上海 上海市",
                        IP: "180.12.23.123",
                        mode: "PC端登录"
                    },
                    {
                        loginAt: "2016-10-16 13:06:53",
                        address: "中国 上海 上海市",
                        IP: "180.12.23.123",
                        mode: "PC端登录"
                    },
                    {
                        loginAt: "2016-10-16 13:06:53",
                        address: "中国 上海 上海市",
                        IP: "180.12.23.123",
                        mode: "PC端登录"
                    },
                    {
                        loginAt: "2016-10-16 13:06:53",
                        address: "中国 上海 上海市",
                        IP: "180.12.23.123",
                        mode: "PC端登录"
                    },
                    {
                        loginAt: "2016-10-16 13:06:53",
                        address: "中国 上海 上海市",
                        IP: "180.12.23.123",
                        mode: "PC端登录"
                    },
                    {
                        loginAt: "2016-10-16 13:06:53",
                        address: "中国 上海 上海市",
                        IP: "180.12.23.123",
                        mode: "PC端登录"
                    },
                    {
                        loginAt: "2016-10-16 13:06:53",
                        address: "中国 上海 上海市",
                        IP: "180.12.23.123",
                        mode: "PC端登录"
                    },
                    {
                        loginAt: "2016-10-16 13:06:53",
                        address: "中国 上海 上海市",
                        IP: "180.12.23.123",
                        mode: "PC端登录"
                    },
                    {
                        loginAt: "2016-10-16 13:06:53",
                        address: "中国 上海 上海市",
                        IP: "180.12.23.123",
                        mode: "PC端登录"
                    },
                    {
                        loginAt: "2016-10-16 13:06:53",
                        address: "中国 上海 上海市",
                        IP: "180.12.23.123",
                        mode: "PC端登录"
                    }
                ]
            }
        },
        methods: {
            openDialog() {
                this.$refs.dialog.openDialog()
            },
            editCompanyInfo() {
                this.isEditing = true
            },
            confirmCompanyInfo() {
                this.isEditing = false
            }
        }
    }
</script>