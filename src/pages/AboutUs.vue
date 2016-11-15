<style scoped>
    /*新页面开始*/
    /*content左边*/
    .con_l {
        width: 180px;
        margin-top: 26px;
    }

    .con_l ul li, .con_l ul p {
        width: 158px;
        height: 40px;
        line-height: 40px;
        border: 1px solid rgb(216, 216, 216);
        color: #616161;
        font-size: 16px;
        text-align: center;
        margin-bottom: 10px;
        font-family: "Microsoft YaHei";
    }

    .con_r img {
        width: 100%;
    }

    .con_l ul li:hover, .con_l ul p:hover {
        color: #0da3e5;
        border: 1px solid #0da3e5;
        cursor: pointer;
    }

    .active {
        background-color: #0da3e5;
        color: white !important;;
    }
   .con_r .show{
        display: block;
    }
    .hide{
        display: none;
    }

    /*content右边*/
    .con_r {
        width: 980px;
        float: right;
        margin-top: -58px;
    }

    /*关于我们*/
    .about-con {
        height: 1960px;
    }

    .about_intru {
        background: url("../assets/img/about_ban.jpg") no-repeat;
        -webkit-background-size: 100%;
        background-size: 110%;
        background-position: -93px 0;
        height: 343px;
        padding: 45px 0 15px 35px;
    }

    .about_tit {
        font-size: 24px;
        color: #0da3e5;
        font-family: "Microsoft YaHei";
        font-weight: 600;
    }

    .about_tit_b {
        border-bottom: 3px solid #0da3e5;
        width: 95px;
        margin-top: 15px;
    }

    .about_intru p {
        width: 615px;
        padding-left: 20px;
        margin-top: 16px;
        font-size: 16px;
        color: #595959;
        font-family: "Microsoft YaHei";
        line-height: 2em;
        text-indent: 2em;
    }

    .culture {
        margin-top: 55px;
    }

    .culture ul li {
        float: left;
        width: 220px;
        margin-right: 30px;
        border: 1px solid rgb(229, 229, 229);
        height: 285px;
    }

    .culture ul :last-child {
        margin-right: 0px;
    }

    .culture ul {
        margin-top: 20px;
    }

    .culture ul li h4 {
        text-align: center;
        color: #373737;
        font-size: 18px;
        font-family: "Microsoft YaHei";
        font-weight: normal;
        margin: 10px 0;
    }

    .culture ul li p {
        font-size: 14px;
        color: #9a9a9a;
        line-height: 1.3em;
        padding: 0 14px;
        letter-spacing: 2px;
    }

    .clear {
        height: 55px;
    }

    .advan_img {
        margin-top: 20px;
    }

    .about_tit_b1 {
        border-bottom: 3px solid #0da3e5;
        width: 118px;
        margin-top: 15px;
    }

    .dream {
        margin-top: 55px;
    }

    /*关于我们结束*/
    /*联系我们开始*/
    .contact_con {
        display: none;
    }

    .contact_img {
        border-top: 1px solid #dadada;
        border-right: 1px solid #dadada;
    }

    .contact_img img {
        width: 100%;
    }

    .contact_con ul li {
        float: left;
        width: 480px;
        padding: 15px;
        border: 1px solid #e7e7e7;
        margin-top: 25px;
        height: 223px;
    }

    .contact_con ul li h5 {
        font-size: 24px;
        color: #f08200;
        font-weight: normal;
        margin-bottom: 15px;
        letter-spacing: 2px;
    }

    .contact_con ul li .add {
        font-size: 16px;
        color: #595959;
        font-family: "Microsoft YaHei";
        letter-spacing: 1px;
        margin-bottom: 15px;
        line-height: 27px;
    }

    .contact_con ul :first-child p {
        font-size: 16px;
        color: #595959;
        font-family: "Microsoft YaHei";
        letter-spacing: 1px;
        line-height: 1.7em;
    }

    .contact_con ul li p {
        font-size: 16px;
        color: #595959;
        font-family: "Microsoft YaHei";
        letter-spacing: 3px;
        line-height: 2.4em;
    }

    .contact_con ul li p .time {
        margin-left: 20px;
    }

    .li_ {
        margin-right: 20px;
    }


    /*联系我们结束*/
    /*索取发票开始*/
    .receipt {
        display: none;
    }

    .receipt h4 {
        font-size: 24px;
        color: #666666;
        margin-top: 25px;
        margin-bottom: 15px;
    }

    .receipt p {
        font-size: 16px;
        color: #575757;
        line-height: 2.8em;
        font-family: "Microsoft YaHei";
    }

    .last_p {
        margin-bottom: 70px;
    }

    /*支付方式*/
    .pay {
        display: none;
    }

    .pay h4 {
        font-size: 24px;
        color: #666666;
        margin-top: 25px;
        margin-bottom: 15px;
    }

    .pay p {
        font-size: 16px;
        color: #575757;
        line-height: 2.8em;
        font-family: "Microsoft YaHei";
    }

    /*用户协议开始*/
    .protocol {
        display: none;
    }

    .protocol h4 {
        font-size: 24px;
        color: #666666;
        margin-top: 25px;
        margin-bottom: 15px;
    }

    .summary {
        display: inline-block;
        padding: 5px 20px;
        background-color: #ec8100;
        font-size: 16px;
        color: white;
        border-radius: 20px;
        font-family: "Microsoft YaHei";
        margin: 40px 0 10px 0;
    }

    .protocol p {
        color: #616161;
        font-size: 16px;
        line-height: 1.8em;
        margin-top: 12px;
        font-family: "Microsoft YaHei";
    }

    /*退款开始*/
    .refund {
        display: none;
    }

    .refund table td {
        border: 1px solid black;
        color: #616161;
        font-size: 18px;
        text-align: center;
        font-family: "Microsoft YaHei";
        padding: 15px;
    }

    .refund_img {
        margin-bottom: 40px;
    }

    .td_l {
        text-align: left !important;
    }

    .refund table {
        border-collapse: collapse;
        border-spacing: 0;
        margin-bottom: 20px;
    }

    .refund h4 {
        font-size: 24px;
        color: #666666;
        margin-top: 25px;
        margin-bottom: 15px;
    }

    .refund p {
        color: #616161;
        font-size: 16px;
        line-height: 1.8em;
        margin-top: 12px;
        font-family: "Microsoft YaHei";
    }

    .refund_blue {
        color: #1897e0 !important;
    }
</style>
<template>
    <div class="container">
        <div class="con_l clear">
            <ul>
                <li :class="{active: isShow('about')}"  v-on:click="setLiName('about')" >关于企业湾</li>
                <li :class="{active: isShow('contact')}"  v-on:click="setLiName('contact')" >联系我们</li>
                <li :class="{active: isShow('invoice')}"  v-on:click="setLiName('invoice')" >索取发票</li>
                <li :class="{active: isShow('pay')}" v-on:click="setLiName('pay')">支付方式</li>
                <li :class="{active: isShow('refund')}"  v-on:click="setLiName('refund')">退款说明</li>
                <li :class="{active: isShow('protocol')}"  v-on:click="setLiName('protocol')">用户协议</li>
                <router-link to="/recruitment" target="_blank"><p>加入我们</p></router-link>
            </ul>
        </div>
        <div class="con_r">
            <!--关于企业湾-->
            <div class="about-con"  :class="{show: isShow('about'),hide: !isShow('about')}" >
                <div class="about_intru">
                    <h3 class="about_tit">企业介绍</h3>
                    <div class="about_tit_b"></div>
                    <p>
                        企业湾（www.qiyewan.com）是国内领先的专注于中小企业服务的一站式综合服务体。由伯藜基金、哈佛校友投资创建，通过整合业内优秀的财务、法务、人事、IT技术等资源，汇聚中国广大的优秀大学生和专业的退休人员；利用移动互联网和云端技术，通过线下线下的服务方式，优化服务流程，降低服务成本。为中国千万中小企业、创新创业者提供一站超值的服务。核心团队主要由上市公司高管，资深财务、法务、人力资源负责人以及国内知名互联网企业的精英组成。
                    </p>
                </div>

                <div class="culture">
                    <h3 class="about_tit">企业文化</h3>
                    <div class="about_tit_b"></div>
                    <ul>
                        <li>
                            <img src="../assets/img/cuture_1.jpg">
                            <h4>企业湾的愿景</h4>
                            <p>成为从业人员最多、最具有活力的专业服务机构。</p>
                        </li>
                        <li>
                            <img src="../assets/img/cuture_1.jpg">
                            <h4>使命</h4>
                            <p>重塑中国企业服务和专业高等教育实践的生态。</p>
                        </li>
                        <li>
                            <img src="../assets/img/cuture_1.jpg">
                            <h4>企业湾的战略</h4>
                            <p>聚焦小微企业的需求，借助高校相关资源，弘扬企业家精神，强大的过程能力保证绩效和扩张。</p>
                        </li>
                        <li>
                            <img src="../assets/img/cuture_1.jpg">
                            <h4>企业湾的服务承诺</h4>
                            <p>一站、超值、快速响应</p>
                        </li>
                    </ul>
                </div>
                <p class=" clear clearfix"></p>
                <div class="advantage">
                    <h3 class="about_tit">企业湾优势</h3>
                    <div class="about_tit_b1"></div>
                    <div class="advan_img"><img src="../assets/img/about_advan.jpg"></div>
                </div>
                <div class="dream">
                    <h3 class="about_tit">企业湾展望</h3>
                    <div class="about_tit_b1"></div>
                    <div class="advan_img"><img src="../assets/img/about_dream.png"></div>
                </div>
            </div>
            <!--联系我们开始   -->
            <div class="contact_con" :class="{show: isShow('contact'),hide: !isShow('contact')}" >
                <div class="contact_img"><img src="http://ofw6tmkxn.bkt.clouddn.com/contact-us-banner-2.jpg"></div>
                <ul>
                    <li class="li_">
                        <h5>企业湾总部</h5>
                        <div class="add">总部地址：上海市闵行区剑川路951号零号湾全球创新创业聚集区1号楼南楼508室</div>
                        <p>电话：400-716-8896 <span class="time">时间：每天8：30-17：30</span></p>
                        <p>邮箱：qiyewan@qiyewan.com</p>
                        <p>公司网址：www.qiyewan.com</p>
                    </li>
                    <li>
                        <h5>上海分公司</h5>
                        <div class="add">地址：上海市闵行区剑川路951号零号湾全球创新创业聚集区1号楼南楼508室</div>
                        <p>电话：021-54706618</p>

                    </li>
                    <li class="li_">
                        <h5>南京分公司</h5>
                        <div class="add">地址：南京市玄武区玄武大道699-1号徐庄软件管委会607室</div>
                        <p>电话：025-68022609</p>

                    </li>
                    <li>
                        <h5>镇江分公司</h5>
                        <div class="add">地址：镇江市润州区黄山南路66号中浩国际广场A座1201</div>
                        <p>电话：0511-88076713</p>

                    </li>

                    <li class="li_">
                        <h5>苏州分公司</h5>
                        <div class="add">地址：苏州市姑苏区阊胥路726号南新园3305</div>
                        <p>电话：17186396121</p>

                    </li>
                    <li>
                        <h5>北京分公司</h5>
                        <div class="add">地址：北京市海淀区中关村创业大街六号楼4层企业湾</div>
                        <p>电话：15712846498</p>

                    </li>
                    <li class="li_">
                        <h5>深圳分公司</h5>
                        <div class="add">地址：深圳市宝安区新湖路华侨新村西提一巷金华大厦12层1216</div>
                        <p>电话：0755-36301780</p>

                    </li>
                    <li>
                        <h5>成都分公司</h5>
                        <div class="add">地址：成都市高新益州大道1800号移动互联创业大厦G1，201</div>
                        <p>电话：13518211800</p>

                    </li>
                </ul>
            </div>
            <!--索取发票-->
            <div class="receipt"  :class="{show: isShow('invoice'),hide: !isShow('invoice')}">
                <div class="receipt_img"><img src="http://ofw6tmkxn.bkt.clouddn.com/ask-for-invoice-banner-1.jpg"></div>
                <h4>索取发票</h4>
                <p>1.本规则适用于在企业湾网站上进行的所有的订单服务。</p>
                <p>2.企业湾提供的收费服务，用户均可申请开具发票。为了保证发票开具的准确性，收票方必须先行提交填写发票所需的准确信息。</p>
                <p>3.在服务办结之日起10个工作日内，可通过与售前人员联系开具本次服务费发票（不含工本费）。</p>
                <p class="last_p">4.发票一旦开具，就无法更改发票内容，请申请开具发票的用户务必准确填写开具发票所需信息和详细联系方式。</p>
            </div>
            <!--支付方式-->
            <div class="pay" :class="{show: isShow('pay'),hide: !isShow('pay')}">
                <div class="pay_img"><img src="http://ofw6tmkxn.bkt.clouddn.com/method-of-payment-banner-3.jpg"></div>
                <h4>支付方式</h4>
                <p>1、企业湾提供网上支付方式。如您在结算时使用支付宝在线付款，企业湾可实时确认收款，快速进入操作阶段。</p>
                <p>2、如您通过网银接口付款，有可能存在跨行结算的情况，企业湾需要1-2个工作日来确认收款。</p>
                <p class="last_p">3、为保证业务快速进行，推荐使用第1种网上支付方式。</p>
            </div>
            <!--退款说明-->
            <div class="refund"  :class="{show: isShow('refund'),hide: !isShow('refund')}" >
                <div class="refund_img"><img src="http://ofw6tmkxn.bkt.clouddn.com/refund-instructions-banner-4.jpg"></div>
                <h4>退款说明</h4>
                <table width="100%" border="1">
                    <tr height="65px">
                        <td rowspan="2" colspan="2" width="18%">支付方式</td>
                        <td rowspan="2" width="18%">退款方式</td>
                        <td colspan="2" width="23%">退款说明</td>
                    </tr>
                    <tr height="65px">
                        <td>企业湾退款处理周期</td>
                        <td>银行退款处理周期</td>
                    </tr>
                    <tr height="45px">
                        <td rowspan="2" width="18%">在线支付</td>
                        <td width="18%">储蓄卡</td>
                        <td width="18%">退还原支付卡</td>
                        <td width="23%">3个工作日</td>
                        <td width="23%">1-15个工作日</td>
                    </tr>
                    <tr height="45px">
                        <td width="18%">信用卡</td>
                        <td width="18%">退还原支付卡</td>
                        <td width="23%">3个工作日</td>
                        <td width="23%">1-15个工作日</td>
                    </tr>
                    <tr height="80px">
                        <td width="18%" class="td_l">在线支付——手机支付平台</td>
                        <td width="18%">银行卡</td>
                        <td width="18%">退还原支付卡</td>
                        <td width="23%">3个工作日</td>
                        <td width="23%">1-15个工作日</td>
                    </tr>
                    <tr height="80px">
                        <td width="18%" class="td_l">在线支付--直连银行支付</td>
                        <td width="18%">建行、招行、邮储</td>
                        <td width="18%">退还原支付卡</td>
                        <td width="23%">3个工作日</td>
                        <td width="23%">1-15个工作日</td>
                    </tr>
                    <tr height="50px">
                        <td width="18%" colspan="2">公司转账</td>
                        <td width="18%">原支付公司账户</td>
                        <td width="23%">3个工作日</td>
                        <td width="23%">1-15个工作日</td>
                    </tr>
                    <tr height="50px">
                        <td width="18%" colspan="2">邮局汇款</td>
                        <td width="18%">个人储蓄卡</td>
                        <td width="23%">3个工作日</td>
                        <td width="23%">1-15个工作日</td>
                    </tr>
                </table>
                <h4>温馨提示</h4>
                <p class="refund_blue">（退款周期仅供您参考，具体退款周期可能会受银行、支付机构等相关因素影响）</p>
                <p>1、企业湾在线支付及POS机刷卡支付订单退款，如涉及到银行信息企业湾会依据银行及相关机构已经建立的条例处理退款
                    ，为了保证客户账户金额的安全，我们均会安排原卡原退。</p>
                <p>2、公司转账或支票支付的订单，需与客服人员确认公司相关信息后进行公司转账,目前企业湾只支持原路退回至客户原支付
                    的公司账户中，给您带来的不便请您谅解。</p>
                <p class="last_p">3、因银行系统升级，退银行卡服务不支持信用卡退款。</p>
            </div>
            <!--用户协议-->
            <div class="protocol" :class="{show: isShow('protocol'),hide: isShow('protocol')}">
                <div class="protocol_img"><img src="http://ofw6tmkxn.bkt.clouddn.com/user-agreement-banner-5.jpg"></div>
                <h4>企业湾用户服务协议</h4>
                <p>
                    您与企业湾所有者上海知加信息科技有限公司(以下简称为“本公司”)之间就金贝壳服务等相关事宜所订立的契约，请您仔细阅读本注册协议，同意本协议并接受全部条款下注册成为会员，本协议具有合同效力。您点击“立即注册”按钮后，本协议即构成对双方有约束力的法律文件。</p>
                <span class="summary">一、 用户条款内容</span>
                <p>1.本协议内容包括协议正文及所有企业湾已经发布的或将来可能发布的各类规则。所有规则为本协议不可分割的组成部分，与协议正文具有同等法律效力。除另行明确声明外，企业湾提供的服务均受本协议约束。</p>
                <p>
                    2.您应当在使用企业湾服务之前认真阅读全部协议内容。如您对协议有任何疑问，应向企业湾咨询。但无论您事实上是否在使用企业湾服务之前认真阅读了本协议内容，只要您使用企业湾服务，则本协议即对您产生约束，届时您不能以未阅读本协议的内容或者未获得企业湾对您问询的解答等理由，主张本协议无效，或要求撤销本协议。</p>
                <p>3.您承诺接受并遵守本协议的约定。如果您违反本协议约定的内容，您应立即停止注册程序或停止使用金贝壳服务。</p>
                <p>
                    4.企业湾有权根据需要不时地制订、修改本协议及各类规则，并以网站公示的方式进行公告，不再另行通知。变更后的协议和规则一经在网站公布后，立即自动生效。如您不同意相关变更内容，应当提出并立即停止使用金贝壳服务。您继续使用金贝壳服务的，即表示您对修改的协议无异议并接受。</p>

                <span class="summary">二、用户注册 </span>
                <p>1.注册者资格：<br>在您完成注册程序或以其他本公司允许的方式实际使用企业湾服务时，您应当是具备完全民事权利能力和完全民事行为能力的自然人、法人或其他组织。若您不具备前述主体资格，则您及您的监护人应承担因此而导致的一切后果，且本公司有权注销(永久冻结)您的企业湾账户，并向您及您的监护人索偿。
                </p>
                <p>2.账户：<br>在您签署本协议，完成会员注册程序或以其他本公司所允许的方式实际使用企业湾服务时，企业湾为您提供唯一编号的企业湾账户(以下亦称账户)。
                    账户设置会员名和密码，通过该会员名密码或与该会员名密码关联的其它用户名密码登陆企业湾。您设置的会员名不得侵犯或涉嫌侵犯他人合法权益。当您的账户设立完成后，您应当在此后90日内使用您的会员名和密码登陆金贝壳。逾期未登录的，本公司有权终止向您提供金贝壳服务，注销您的账户。账户注销后，相应的会
                    员名将开放给任意用户注册登记使用。您应对您的账户(会员名)和密码的安全，以及对通过您的账户(会员名)和密码实施的行为负责。除非有法律规定或司法裁定，且征得企业湾的同意，否则，账户(会员名)和密码不得以任何方式转让、赠与或继承(与账户相关的财产权益除外)。如果发现任何人不当使用您的账户或有任何其他可能危及您的账户安全的情形时，您应当立即以有效方式通知企业湾，要求企业湾暂停相关服务。请您理解企业湾对您的请求采取相应措施，在采取措施前已经产生的后果(包括但不限于您的任何损失)不承担任何责任。
                </p>
                <p>3.会员：<br>在您按照注册页面提示填写信息、阅读并同意本协议并完成全部注册程序后或以其他本公司允许的方式实际使用企业湾服务时，您即成为企业湾会员(亦称会员)。在注册时，您应当按照法律法规要求，或注册页面的提示准确提供，并及时更新您的资料，以使之真实、及时，完整和准确。如有合理理由怀疑您提供的资料错误、不实、过时或不完整的，本公司有权向您发出询问及/或要求改正的通知，并有权直接做出删除相应资料的处理，直至中止、终止对您提供部分或全部企业湾服务。本公司对此不承担任何责任，您将承担因此产生的任何直接或间接支出。您应当准确填写并及时更新您提供的电子邮件地址、联系电话、联系地址、邮政
                    编码等联系方式，以便本公司或其他会员与您进行有效联系，因通过这些联系方式无法与您取得联系，导致您在使用企业湾服务过程中产生任何损失或增加费用的， 应由您完全独自承担。
                    您在使用企业湾服务过程中，所产生的应纳税赋，以及一切硬件、软件、服务及其它方面的费用，均由您独自承担。</p>


                <span class="summary">三、 本公司服务</span>
                <p>1.通过本公司及其合作公司或个人提供的服务，会员可在企业湾上获得双软高新、管理体系认证、公司注册/变更/年报、知识产权、财会税务、法律服务、行业资质许可等方面的信息服务及技术服务支持。</p>
                <p>2.您了解并同意，本公司有权应政府部门(包括司法及行政部门)的要求，向其提供您在企业湾填写的注册信息和交易记录等必要信息。如您涉嫌侵犯他人人身权
                    益或者危害公共利益及国家安全，则本公司亦有权在初步判断涉嫌侵权行为存在的情况下，向权利人或司法机关提供您必要的身份信息。</p>

                <span class="summary">四、服务使用规范</span>
                <p>1.在企业湾上使用本公司服务过程中，您承诺遵守以下约定：<br>
                    a) 在使用企业湾服务过程中实施的所有行为均遵守国家法律、法规等规范性文件及企业湾各项规则的规定和要求，不违背社会公共利益或公共道德，不损害他人的合法
                    权益，不违反本协议及相关规则。您如果违反前述承诺，产生任何法律后果的，您应以自己的名义独立承担所有的法律责任，并确保本公司免于因此产生任何损失。<br>
                    b) 应保证不对企业湾上的任何数据作商业性利用，包括但不限于在未经本公司事先书面同意的情况下，以复制、传播等任何方式使用企业湾网站上展示的资料。<br>
                    c) 不使用任何装置、软件或例行程序干预或试图干预企业湾的正常运作或正在企业湾上进行的任何交易、活动。您不得采取任何将导致不合理的庞大数据负载加诸金贝壳网络设备的行动。</p>
                <p>
                    2.您了解并同意：<br>
                    a) 本公司有权对您是否违反上述承诺做出单方认定，并根据单方认定结果适用规则予以处理或终止向您提供服务，且无须征得您的同意或提前通知予您。<br>
                    b)
                    经国家行政或司法机关的生效法律文书确认您存在违法或侵权行为，或者本公司根据自身的判断，认为您的行为涉嫌违反本协议和/或规则的条款或涉嫌违反法律法规的规定的，则本公司有权在金贝壳上公示您涉嫌违法或违约行为及本公司已对您采取的措施。<br>
                    c) 对于您在金贝壳上发布的涉嫌违法或涉嫌侵犯他人合法权利或违反本协议和/或规则的信息，本公司有权不经通知您即予以删除，且按照规则的规定进行处罚。<br>
                    d)
                    对于您在金贝壳上实施的行为，包括您未在企业湾上实施但已经对金贝壳及其用户产生影响的行为，本公司有权单方认定您行为的性质及是否构成对本协议和/或规则的违反，并据此作出相应处罚。您应自行保存与您行为有关的全部证据，并应对无法提供充分证据而承担相应的责任。<br>
                    e) 对于您涉嫌违反承诺的行为对任意第三方造成损害的，您均应当以自己的名义独立承担所有的法律责任，并应确保本公司免于因此产生损失或增加费用。<br>
                    f) 如您涉嫌违反有关法律或者本协议之规定，使本公司遭受任何损失，或受到任何第三方的索赔，或受到任何行政管理部门的处罚，您应当赔偿本公司因此造成的损失及(或)发生的费用，包括合理的律师费用。
                </p>

                <span class="summary">五、 特别授权</span>
                <p>您完全理解并不可撤销地授予本公司及其合作公司下列权利：<br>
                    1.一旦您向本公司及(或)其合作公司或个人作出任何形式的承诺，且相关公司已确认您违反了该承诺，则本公司有权立即按您的承诺或
                    协议约定的方式对您的账 户采取限制措施，包括中止或终止向您提供服务，并公示相关公司确认的您的违约情况。您了解并同意，本
                    公司无须就相关确认与您核对事实，或另行征得您的同 意，且本公司无须就此限制措施或公示行为向您承担任何的责任。<br>
                    2.一旦您违反本协议，或与本公司签订的其他协议的约定，本公司有权以任何方式通知本公司合作公司或个人，要求其对您的权益采取
                    限制措施，包括但不限将您企业湾账户内的款项支付给本公司指定的对象，要求关联公司或个人中止、终止对您提供部分或全部服务，
                    且在其经营或实际控制的任何网站公示您的违约情况。<br>
                    3.对于您提供的资料及数据信息，您授予本公司及其合作公司或个人独家的、全球通用的、永久的、免费的许可使用权利 (并有权在多
                    个层面对该权利进行再授权)。此外，本公司及其合作公司有权(全部或部份地) 使用、复制、修订、改写、发布、翻译、分发、执行和
                    展示您的全部资料数据(包括但不限于注册资料、交易行为数据及全部展示于金贝壳的各类信息)或制作其派生作品，并以现在已知或日
                    后开发的任何形式、媒体或技术，将上述信息纳入其它作品内。
                </p>
                <span class="summary">六、责任范围和责任限制</span>
                <p>1.本公司负责按"现状"和"可得到"的状态向您提供企业湾服务。但本公司对企业湾服务不作任何明示或暗示的保证，包括但不限于企业
                    湾服务的适用性、没有 错误或疏漏、持续性、准确性、可靠性、适用于某一特定用途。同时，本公司也不对企业湾服务所涉及的技术
                    及信息的有效性、准确性、正确性、可靠性、质量、稳 定、完整和及时性作出任何承诺和保证。</p>
                <p>2.除非法律法规明确要求，或出现以下情况，否则，本公司没有义务对所有用户的注册数据、委托行为以及与交易有关的其它事项进行
                    事先审查：<br>
                    a) 本公司有合理的理由认为特定会员及具体交易事项可能存在重大违法或违约情形。<br>
                    b) 本公司有合理的理由认为用户在企业湾的行为涉嫌违法或不当。</p>
                <p>3.您了解并同意，本公司不对因下述任一情况而导致您的任何损害赔偿承担责任，包括但不限于利润、商誉、使用、数据等方面的损失
                    或其它无形损失的损害赔偿 (无论本公司是否已被告知该等损害赔偿的可能性) ：<br>
                    a) 使用或未能使用企业湾服务。<br>
                    b) 第三方未经批准的使用您的账户或更改您的数据。<br>
                    c) 通过企业湾服务购买产生的费用及损失。<br>
                    d) 您对企业湾服务的误解。<br>
                    e) 任何非因本公司的原因而引起的与金贝壳服务有关的其它损失</p>
                <p>
                    4.不论在何种情况下，本公司均不对由于互联网正常的设备维护，互联网络连接故障，电脑、通讯或其他系统的故障，电力故障，罢工
                    ，劳动争议，暴乱，起义， 骚乱，生产力或生产资料不足，火灾，洪水，风暴，爆炸，战争，政府行为，司法行政机关的命令或第三方
                    的不作为而造成的不能服务或延迟服务承担责任。
                </p>
                <p>5. 企业湾致力于全面保证您的个人信息安全及隐私,建议您在使用企业湾服务时,无需提供真实的个人真实财产信息,以确保在企业湾一旦
                    受到外界不法破坏时您的个人财产不受到损失。</p>
                <p>6. 企业湾秉承专业尽责的服务理念为您提供法律服务,一旦出现由于企业湾的原因造成服务产品出现瑕疵, 金贝壳仅在您针对该次服务所
                    支付的服务费用承担赔偿责任。</p>
                <span class="summary">七、 协议终止</span>
                <p>1.您同意，本公司有权自行全权决定以任何理由不经事先通知的中止、终止向您提供部分或全部金贝壳服务，暂时冻结或永久冻结(注销
                    )您的企业湾账户，且无 须为此向您或任何第三方承担任何责任。</p>
                <p>2.出现以下情况时，本公司有权直接以注销账户的方式终止本协议: <br>
                    a) 本公司终止向您提供服务后，您涉嫌再一次直接或间接或以他人名义注册为金贝壳用户的;<br>
                    b) 您提供的电子邮箱不存在或无法接收电子邮件，且没有其他方式可以与您进行联系，或企业湾以其它联系方式通知您更改电子邮件
                    信息，而您在企业湾通知后三个工作日内仍未更改为有效的电子邮箱的。<br>
                    c) 您注册信息中的主要内容不真实或不准确或不及时或不完整。<br>
                    d) 本协议(含规则)变更时，您明示并通知本公司不愿接受新的服务协议的;<br>
                    e) 本公司认为其它应当终止服务的情况。</p>
                <p>3.您有权向企业湾要求注销您的账户，经企业湾审核同意的，企业湾注销(永久冻结)您的账户，届时，您与本公司基于本协议的合同关
                    系即终止。您的账户被注销(永久冻结)后，本公司没有义务为您保留或向您披露您账户中的任何信息，也没有义务向您或第三方转发任
                    何您未曾阅读或发送过的信息。</p>
                <p>4.您同意，您与本公司合同关系终止后，本公司仍享有下列权利：<br>
                    a) 继续保存您的注册信息及您使用企业湾网服务期间的所有交易信息。<br>
                    b) 您在使用企业湾服务期间存在违法行为或违反本协议和/或规则的行为的，本公司仍可依据本协议向您主张权利。</p>
                <p>5. 本公司中止或终止向您提供金贝壳服务后，对于您在服务中止或终止之前的交易行为依下列原则处理，您应独立处理并完全承担进
                    行以下处理所产生的任何争议、损失或增加的任何费用，并应确保本公司免于因此产生任何损失或承担任何费用：<br>
                    a) 您在服务中止或终止之前已经上传至企业湾的订单尚未交易的，本公司有权在中止或终止服务的同时删除此项订单的相关信息;<br>
                    b) 您在服务中止或终止之前已经与其他企业湾合作公司达成咨询服务合同、委托服务合同或者其他合同，但合同尚未实际履行的，本
                    公司有权删除该咨询服务合同、委托服务合同或其他合同及其交易的相关信息;<br>
                    c) 您在服务中止或终止之前已经与其他企业湾合作公司达成咨询服务、委托服务合同或者其他合同且已部分履行的，本公司可以不删除
                    该项交易，但本公司有权在中止 或终止服务的同时将相关情形通知您的交易对方。</p>
                <span class="summary">八、隐私权政策</span>
                <p>本公司将在企业湾公布并不时修订隐私权相关条款，隐私权的规定构成本协议的有效组成部分。</p>
                <span class="summary">九、法律适用、管辖与其他</span>
                <p>1.本协议之效力、解释、变更、执行与争议解决均适用中华人民共和国大陆地区法律，如无相关法律规定的，则应参照国际通用商业惯
                    例和(或)行业惯例。</p>
                <p>2.因本协议产生之争议，应依照中华人民共和国法律予以处理，并以上海知加信息科技有限公司注册地法院为第一审管辖法院。
                    注：以工商核对为准，填写的信息真实可靠。</p>

            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                liName: 'about'
            }
        },
        methods: {
            setLiName(liName) {
                this.liName = liName;
            },
            getLiName(){
                return this.liName;
            },
            isShow(liName){
                return liName == this.liName;
            }
        }
    }
</script>
