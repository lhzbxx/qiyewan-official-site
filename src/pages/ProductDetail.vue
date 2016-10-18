<template>
    <div>
        <el-breadcrumb separator=">" style="padding: 10px 0; border-bottom: 1px solid #eee">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>工商查询</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
            <el-col :span="10">
                <img src="../assets/logo.png"
                     style="width: 100%;">
            </el-col>
            <el-col :span="14">
                <h3>代办税务</h3>
                <p style="font-size: 13px;
                          color: red;">
                    温馨提示：请选择服务区域、服务时长、购买数目；如有问题，请拨打售后服务热线：400-716-8896
                </p>
                <div style="background-color: #eee;
                            font-size: 14px;
                            margin: 10px 0 10px 10px;
                            padding: 20px;">
                    <p style="font-size: 13px;
                              color: #aaa;
                              ">
                        市场价格：&yen;{{ product.marketPrice }}
                    </p>
                    <p style="margin: 10px 0;">价格：
                        <span style="font-size: 20px;
                                     color: red;">
                            &yen;{{ product.price }}
                        </span></p>
                    <p style="">用户评分：
                        <el-rate
                                v-model="product.rate"
                                disabled
                                show-text
                                :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                                text-color="#ff9900"
                                text-template="{value}"
                                style="display: inline;">
                        </el-rate>
                        <span>（{{ product.reviewNum }}位用户参与评分）</span>
                    </p>
                </div>
                <el-form :model="form" label-width="100px">
                    <el-form-item label="服务区域">
                        <el-row>
                            <el-col :span="8">
                                <el-select v-model="form.regionCity"
                                           placeholder="">
                                    <el-option label="上海" value="021"></el-option>
                                    <el-option label="北京" value="010"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="8">
                                <el-select v-model="form.regionCountry"
                                           placeholder="">
                                    <el-option label="上海" value="021"></el-option>
                                    <el-option label="北京" value="010"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="8">
                                <el-select v-model="form.regionArea"
                                           placeholder="">
                                    <el-option label="上海" value="021"></el-option>
                                    <el-option label="北京" value="010"></el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="购买时长">
                        <el-radio-group v-model="form.period">
                            <el-radio-button label="一季度"></el-radio-button>
                            <el-radio-button label="半年"></el-radio-button>
                            <el-radio-button label="一年"></el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动形式">
                        <el-input-number @change="handleAmountChange"
                                         :min="1"
                                         size="small"
                                         v-model="form.amount">
                        </el-input-number>
                    </el-form-item>
                </el-form>
                <el-button type="primary"
                           size="large"
                           style="width: 120px;
                                  margin-left: 30px;">
                    立即购买
                </el-button>
                <el-button size="large"
                           style="width: 120px;
                                  margin-left: 10px;">
                    加入购物车
                </el-button>
                <p style="font-size: 13px;
                          color: #aaa;
                          margin-left: 30px;
                          margin-top: 10px;">
                    服务承诺：一站超值 快速响应 专业服务 全程无忧
                </p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <p>您可能需要：</p>
                <lh-product></lh-product>
                <lh-product></lh-product>
                <lh-product></lh-product>
                <lh-product></lh-product>
            </el-col>
            <el-col :span="18">
                <el-tabs type="border-card"
                         style="width: 100%;">
                    <el-tab-pane label="服务详情"></el-tab-pane>
                    <el-tab-pane label="用户评价（30）"></el-tab-pane>
                    <el-tab-pane label="常见问题"></el-tab-pane>
                    <div v-for="item in reviews">
                        <el-row style="margin: 10px 0;">
                            <el-col :span="12">
                                <p style="font-size: 15px;
                                          color: #333;
                                          white-space: normal; margin-bottom: 5px;">
                                    {{ item.content }}
                                </p>
                                <p style="font-size: 13px;
                                          color: #aaa;">
                                    {{ item.createAt }}
                                </p>
                            </el-col>
                            <el-col :span="6">
                                <el-rate
                                        v-model="item.rate"
                                        disabled
                                        show-text
                                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                                        text-color="#ff9900"
                                        text-template="{value}">
                                </el-rate>
                            </el-col>
                            <el-col :span="6"
                                    style="text-align: center;">
                                <img src="../assets/logo.png"
                                     style="width: 60px;
                                            border-radius: 50%;">
                                <p>
                                    {{ item.username }}
                                </p>
                            </el-col>
                        </el-row>
                    </div>
                    <div v-for="item in qa" style="margin-bottom: 10px;">
                        <p style="color: orange;
                                  font-size: 16px;
                                  margin: 5px 0;
                                  white-space: normal">
                            {{ item.q }}
                        </p>
                        <div style="color: #333;
                                  font-size: 13px;
                                  white-space: normal;">
                            {{ item.a }}
                        </div>
                    </div>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                product: {
                    price: "200.00",
                    marketPrice: "1000.00",
                    rate: 4.5,
                    reviewNum: 108
                },
                reviews: [
                    {
                        content: "专业的 服务也好 效率快 价格优惠推荐",
                        createAt: "2015年3月2日",
                        rate: 4.7,
                        username: "刘德华"
                    },
                    {
                        content: "高效率 服务态度挺好的 价格也还实惠值得推荐",
                        createAt: "2015年4月1日",
                        rate: 3.9,
                        username: "静静"
                    }
                ],
                form: {
                    period: "一年",
                    amount: 1
                },
                qa: [
                    {
                        q: "社保账户是强制开设的吗？",
                        a: "1、公司法定代表人签署的《公司变更登记申请书》（公司加盖公章）2、公司签署的《公司（企业）法定代表人登记表》（公司加盖公章）；3、《指定代表或者共同委托代理人的证明》（公司加盖公章）及指定代表或委托代理人身份证复印件（本人签字），应标明具体委托事项、被委托人的权限、委托期限；4、根据公司章程规定和程序提交原任法定代表人的免职证明、新任法定代表人的任职证明； 说明：有限责任公司提交股东会决议、董事会决议或者其他任免文件，股东会决议由全体股东签署（应当符合公司章程规定的表决方式，股东为自然人的由本人签字，自然人以外的股东加盖公章），董事会决议由公司董事签字；股份有限公司提交董事会决议或其他任免文件。董事会决议由公司董事签字；国有独资有限责任公司提交出资人或其授权部门的书面决定（加盖公章）、董事会决议（董事签字）或其他相关材料；一人有限责任公司提交股东的书面决定（股东为自然人的由本人签字，法人股东加盖公章）、董事会决议（由董事签字）或其他相关材料；5、法律、行政法规和国务院决定规定变更公司法定代表人必须报经批准的，提交有关部门的批准文件或者许可证书复印件；6、公司营业执照正、副本； 说明： 公司法定代表人姓名变更涉及公司董事调整的应按《公司董事、监事、经理备案提交材料规范》提交相应的备案材料，相同项目材料可以合并。"
                    },
                    {
                        q: "社保账户是强制开设的吗？",
                        a: "1、公司法定代表人签署的《公司变更登记申请书》（公司加盖公章）2、公司签署的《公司（企业）法定代表人登记表》（公司加盖公章）；3、《指定代表或者共同委托代理人的证明》（公司加盖公章）及指定代表或委托代理人身份证复印件（本人签字），应标明具体委托事项、被委托人的权限、委托期限；4、根据公司章程规定和程序提交原任法定代表人的免职证明、新任法定代表人的任职证明； 说明：有限责任公司提交股东会决议、董事会决议或者其他任免文件，股东会决议由全体股东签署（应当符合公司章程规定的表决方式，股东为自然人的由本人签字，自然人以外的股东加盖公章），董事会决议由公司董事签字；股份有限公司提交董事会决议或其他任免文件。董事会决议由公司董事签字；国有独资有限责任公司提交出资人或其授权部门的书面决定（加盖公章）、董事会决议（董事签字）或其他相关材料；一人有限责任公司提交股东的书面决定（股东为自然人的由本人签字，法人股东加盖公章）、董事会决议（由董事签字）或其他相关材料；5、法律、行政法规和国务院决定规定变更公司法定代表人必须报经批准的，提交有关部门的批准文件或者许可证书复印件；6、公司营业执照正、副本； 说明： 公司法定代表人姓名变更涉及公司董事调整的应按《公司董事、监事、经理备案提交材料规范》提交相应的备案材料，相同项目材料可以合并。"
                    },
                    {
                        q: "社保账户是强制开设的吗？",
                        a: "1、公司法定代表人签署的《公司变更登记申请书》（公司加盖公章）2、公司签署的《公司（企业）法定代表人登记表》（公司加盖公章）；3、《指定代表或者共同委托代理人的证明》（公司加盖公章）及指定代表或委托代理人身份证复印件（本人签字），应标明具体委托事项、被委托人的权限、委托期限；4、根据公司章程规定和程序提交原任法定代表人的免职证明、新任法定代表人的任职证明； 说明：有限责任公司提交股东会决议、董事会决议或者其他任免文件，股东会决议由全体股东签署（应当符合公司章程规定的表决方式，股东为自然人的由本人签字，自然人以外的股东加盖公章），董事会决议由公司董事签字；股份有限公司提交董事会决议或其他任免文件。董事会决议由公司董事签字；国有独资有限责任公司提交出资人或其授权部门的书面决定（加盖公章）、董事会决议（董事签字）或其他相关材料；一人有限责任公司提交股东的书面决定（股东为自然人的由本人签字，法人股东加盖公章）、董事会决议（由董事签字）或其他相关材料；5、法律、行政法规和国务院决定规定变更公司法定代表人必须报经批准的，提交有关部门的批准文件或者许可证书复印件；6、公司营业执照正、副本； 说明： 公司法定代表人姓名变更涉及公司董事调整的应按《公司董事、监事、经理备案提交材料规范》提交相应的备案材料，相同项目材料可以合并。"
                    }
                ]
            }
        },
        methods: {
            handleAmountChange() {

            }
        }
    }
</script>