<style>
    .el-tabs__content {
        padding: 0px !important;
    }

    .detail_pic {
        background: url(http://ofw6tmkxn.bkt.clouddn.com/produce_2.jpg) no-repeat;
        width: 100%;
        height: 350px;
        background-size: 108%;;
        background-position: -36px -7px;
    }

    .detail_tit {
        width: 380px;
        margin-left: 370px;
        padding-top: 65px;
        white-space: normal;
    }

    .detail_tit h3 {
        color: #279ad2;
        font-size: 32px;
    }

    .detail_tit p {
        color: #747474;
        font-size: 16px;
        margin-top: 20px;
        word-wrap: break-word;
        word-break: normal;
        line-height: 1.7em;
    }

    .detail_pic h4 {
        color: #ffffff;
        font-size: 20px;
        margin-top: 79px;
        text-align: center;
    }

    .step ul li {
        border: 1px solid #0098db;
        height: 75px;
        margin: 25px 35px 0px 35px;
        padding: 10px 20px 0 20px;
    }

    .step ul li p {
        color: #385055;
        font-size: 16px;
        text-indent: 1em;
        margin-top: 5px;
    }

    .step ul li h5 {
        color: #0098da;
        font-size: 20px;
    }

    .Process {
        background: url(http://ofw6tmkxn.bkt.clouddn.com/progress_.jpg) no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
        width: 100%;
        height: 285px;
        margin-top: 30px;
        position: relative;
    }

    .Process .btn {
        width: 156px;
        margin: 0 auto;
        height: 42px;
        color: #009ada;
        font-size: 24px;
        background-color: #fff;
        line-height: 42px;
        text-align: center;
        border-radius: 5px;
    }
    .el-tabs__item{
        padding:0 25px;
        border-top:2px solid transparent;
        box-sizing: content-box;
    }
    .el-tabs__item.is-active{
        border-top:2px solid rgb(32,160,255);
        position: relative;
    }
    .el-tabs__item.is-active::before{
        position: absolute;
        content: '';
        border:5px solid transparent;
        border-top:5px solid rgb(32,160,255);
        top:0;
        left:50%;
        transform: translate(-50%,0%);
    }
    .el-radio-button:not(:last-child){
        margin-right:20px;
    }
    .el-radio-button__inner{
        width:85px;
    }
    .Process p {
        height: 30px;
    }

    .Process ul {
        margin-left: 77px;
    }

    .zhushi {
        position: absolute;
        top: 87%;
        text-align: center;
        width: 100%;
        font-size: 14px;
        color: white;
    }

    .Process ul li {
        margin-top: 20px;
        width: 180px;
        height: 52px;
        background-color: #fff;
        font-size: 20px;
        color: #049fe2;
        line-height: 52px;
        text-align: center;
        float: left;
        position: relative;
        z-index: 10;
    }

    .Process ul :nth-child(4n) {
        width: 165px;
    }

    .Process ul li:last-child span {
        display: none;
    }

    .Process ul li span {
        position: absolute;
        top: -4px;
        left: 119px;
        z-index: 50;
    }

    .detail_bg, .internet {
        background-color: #f7f7f7;
    }

    .tit {
        color: #2a9cd4;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        margin: 30px 0;
    }

    .pro_pic, .get_pic {
        text-align: center;
    }

    .p_c {
        text-align: center;
        color:#b1b1b1;
        font-size:14px;
    }

    .internet {
        height: 360px;
    }

    .internet ul {
        margin-left: 30px;
        margin-top: 30px;
    }

    .internet ul li {
        text-align: center;
        float: left;
        width: 180px;
        margin-right: 28px;
        border-radius: 8px;
        background-color: #fff;
        height: 170px;
        position: relative;
        transition: all .2s linear;
        cursor: pointer;
    }

    .internet ul li::after {
        position: absolute;
        content: '';
        border-top: 12px solid white;
        border-left: 11px solid transparent;
        border-right: 11px solid transparent;
        top: 100%;
        left: 44%;
    }

    .internet ul li h5 {
        height: 35px;
        line-height: 35px;
        background-color: #38b0e5;
        font-size: 18px;
        font-weight: normal;
        color: white;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .internet ul li p {
        font-size: 14px;
        color: #b1b1b1;
        line-height: 1.5em;
        margin: 10px 0;
    }

    .li_con {
        width: 140px;
        white-space: normal;
        margin: 0 auto;
    }

    .inter_bg {
        margin-top: 30px;
        margin-left: -4px;
    }

    .inter_bg img {
        width: 101%;
    }
    .internet ul li:hover{
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        transform: translate3d(0, -3px, 0);
    }
    .padd {
        padding: 15px;
        margin-top: 30px;
    }

    .el-radio-button{
        margin-right:20px;
    }
    .el-radio-button__inner{
        border-radius: 4px;
    }
    .el-radio-button:first-child .el-radio-button__inner,.el-radio-button:last-child .el-radio-button__inner{
        border-radius: 4px;
    }
    .advan_img img{
        width:100%;
    }
</style>
<template>
    <div class="container">
        <el-breadcrumb separator=">" style="padding: 10px 0; border-bottom: 1px solid #eee">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>工商查询</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row style="margin-top:20px">
            <el-col :span="11" style="margin-right:30px">
                <img src="../assets/logo.png"
                     style="width: 100%;">
            </el-col>
            <el-col :span="10">
                <h3 style="margin:10px 0;font-size:20px;color:#383838">代办税务</h3>
                <p style="font-size: 14px;
                          color: #dd2726;line-height:1.8em">
                    温馨提示：请选择服务区域、服务时长、购买数目；如有问题，请拨打售后服务热线：400-716-8896
                </p>
                <div style="background-color: #eee;
                            font-size: 14px;
                            margin: 10px 0;
                            padding: 20px;">
                    <p style="font-size: 13px;
                              color: #aaa;
                              ">
                        市场价格：&nbsp;&yen; {{ product.unitPrice * 5 }}
                    </p>
                    <p style="margin: 10px 0;">价 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：
                        <span style="font-size: 20px;
                                     color: red;">
                            &yen; {{ product.unitPrice }}
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
                        <span>（<span style="color:#f57c43">{{ product.reviewNum }}</span> 位用户参与评分）</span>
                    </p>
                </div>
                <el-form :model="form" label-width="75px" style="text-align:left">
                    <el-form-item label="服务区域">
                        <el-row>
                            <el-col :span="5" style="margin-right:20px;">
                                <el-select v-model="form.regionCity"
                                           placeholder="">
                                    <el-option label="上海" value="021"></el-option>
                                    <el-option label="北京" value="010"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="5"style="margin-right:20px;">
                                <el-select v-model="form.regionCountry"
                                           placeholder="">
                                    <el-option label="上海" value="021"></el-option>
                                    <el-option label="北京" value="010"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="5">
                                <el-select v-model="form.regionArea"
                                           placeholder="">
                                    <el-option label="上海" value="021"></el-option>
                                    <el-option label="北京" value="010"></el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="购买时长" style="margin-bottom:8px">
                        <el-radio-group v-model="form.period">
                            <el-radio-button label="一季度"></el-radio-button>
                            <el-radio-button label="半年"></el-radio-button>
                            <el-radio-button label="一年"></el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动形式" style="margin-bottom:8px">
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
                                 font-family:'Microsoft yahei';
                                  margin-left: 10px;">
                    立即购买
                </el-button>
                <el-button size="large"
                           style="width: 120px;
                                  margin-left: 10px;
                                  font-family:'Microsoft yahei';">
                    加入购物车
                </el-button>
                <p style="font-size: 13px;
                          color: #aaa;
                          margin: 10px 0 30px 30px;">
                    服务承诺：一站超值 快速响应 专业服务 全程无忧
                </p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <p style="font-size:14px;">您可能需要：</p>
                <lh-product :title="123"
                            :summary="123"
                            img="http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                            :price=123></lh-product>
                <lh-product :title="123"
                            :summary="123"
                            img="http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                            :price=123></lh-product>
                <lh-product :title="123"
                            :summary="123"
                            img="http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                            :price=123></lh-product>
                <lh-product :title="123"
                            :summary="123"
                            img="http://ofl0lw9er.bkt.clouddn.com/test.jpg"
                            :price=123></lh-product>
            </el-col>
            <el-col :span="18">
                <el-tabs type="border-card"
                         style="width: 100%;padding: 0;">
                    <el-tab-pane label="服务详情">
                        <div class="detail_bg">
                            <div class="detail_pic">
                                <div class="detail_tit">
                                    <h3>代办税务</h3>
                                    <p>多数主管税务机关要求企业提供软件著作权和软件登记检测报告，才可享受增值税即征即退，最多可退增值税</p>
                                </div>
                                <h4>为什么要代办税务／服务内容（服务能帮助您做什么）</h4>
                            </div>
                            <div class="step">
                                <ul>
                                    <li>
                                        <h5>1.参与</h5>
                                        <p>让你知道什么人可以成为公司股东，参与股权分配。让你知道什么人可以成为公司股东，参与股权分配。</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="provide">
                                <div class="tit">您需要提供</div>
                                <div class="pro_pic"><img src="../assets/img/provide.png" alt=""></div>
                            </div>
                            <div class="Process">
                                <p></p>
                                <div class="btn">服务流程</div>
                                <ul>
                                    <li>1 在线下单 <span><img src="../assets/img/border1.png"></span></li>
                                    <li>2 提交材料 <span><img src="../assets/img/border1.png"></span></li>
                                    <li>3 材料审核 <span><img src="../assets/img/border1.png"></span></li>
                                    <li>4 支付费用 <span><img src="../assets/img/border1.png"></span></li>
                                    <li>5 办理追踪 <span><img src="../assets/img/border1.png"></span></li>
                                </ul>
                                <div class="zhushi">注：由于地域、政策等因素不同，所需时间有差异</div>

                            </div>


                        </div>
                        <div class="get">
                            <div class="tit">您将得到</div>
                            <div class="get_pic"><img src="../assets/img/provide.png"></div>
                        </div>
                        <div class="internet">
                            <div class="tit" style="padding-top:30px;">网上预约流程</div>
                            <p class="p_c">多数主管税务机关要求企业提供软件著作权和软件登记检测报告，才可享受增值税即征即退，最多可退增值税额82%</p>
                            <ul>
                                <li>
                                    <h5>在线下单</h5>
                                    <div class="li_con">
                                        <p>在线直接下单，安全便捷</p>
                                        <img src="../assets/img/internet_1.png">
                                    </div>
                                </li>
                                <li>
                                    <h5>即时响应</h5>
                                    <div class="li_con">
                                        <p>服务专员快速联系，4小时响应</p>
                                        <img src="../assets/img/internet_2.png">
                                    </div>
                                </li>
                                <li>
                                    <h5>快速交付</h5>
                                    <div class="li_con">
                                        <p>定制专业、简约流程，不走弯路</p>
                                        <img src="../assets/img/internet_3.png">
                                    </div>
                                </li>
                                <li>
                                    <h5>满意为止</h5>
                                    <div class="li_con">
                                        <p>全程专业人员服务，满意为止</p>
                                        <img src="../assets/img/internet_4.png">
                                    </div>
                                </li>
                            </ul>
                            <div class="clearfix"></div>
                            <div class="inter_bg">
                                <img src="../assets/img/internet_bg.png">
                            </div>
                        </div>
                        <div class="advan">
                            <div class="tit">我们的服务优势</div>
                            <div class="advan_img"><img src="../assets/img/advan.png"></div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="用户评价（30）">
                        <div class="padd">
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

                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="常见问题">
                        <div v-for="item in qa" style="margin-bottom: 10px; padding: 10px">
                            <p style="color: orange;
                                  font-size: 16px;
                                  margin: 10px 0;
                                  white-space: normal">
                                {{ item.q }}
                            </p>
                            <div style="color: #333;
                                  font-size: 14px;
                                  white-space: normal;
                                  line-height: 1.5em;">
                                {{ item.a }}
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
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
                ],
                product: null,
                loading: false,
                error: null
            }
        },
        computed: mapState({
            product: 'product'
        }),
        created () {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            handleAmountChange() {

            },
            fetchData () {
                this.$store.commit("getProduct", {
                    serialId: this.$route.params.serialId,
                })
            }
        }
    }
</script>