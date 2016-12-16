<style>


  /*页面内容*/
  .banner {
    width: 100%;
    height: 544px;
    margin-bottom: 20px;
    background-color: #48d684;
  }

  .contianer .show {
    display: block;
  }

  .contianer .hide {
    display: none;
  }

  .rec_word {
    text-align: center;
    padding-top: 60px;
  }

  .banner ul li {
    float: left;
    margin-right: 35px;
    width: 280px;
    height: 280px;
    background: url("../assets/rec_bg.png") #48d684;
    background-position-x: -16px;
    background-position-y: -28px;
    text-align: center;
    line-height: 280px;
    font-size: 36px;
    color: #48d684;
    font-family: "Microsoft YaHei";
    font-weight: bold;
    letter-spacing: 2px;
    position: relative;
  }

  .banner ul li:hover {
    cursor: pointer;
  }

  .department {
    width: 945px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    height: 280px;
  }

  .department li span {
    border-bottom: 20px solid white;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    position: absolute;
    top: 111%;
    left: 44%;
  }

  .business {
    margin-right: 0px;
  }

  .technology_l {
    width: 270px;
  }

  .recruitment_con li {
    height: 46px;
    line-height: 46px;
    width: 234px;
    border: 1px solid rgb(216, 216, 216);
    text-align: center;
    font-size: 18px;
    color: #738a7d;
    margin-bottom: 10px;
    font-family: "Microsoft YaHei";
    letter-spacing: 2px;
  }

  .recruitment_con li:hover {
    color: #48d684;
    border: 1px solid #48d684;
    cursor: pointer;
  }

  .on {
    background-color: #48d684;
    color: white !important;
  }

  .recruitment_con h5 {
    color: #28c369;
    font-size: 24px;
    font-family: "Microsoft YaHei";
    letter-spacing: 4px;
    margin-bottom: 15px;
  }

  .recruitment_con p {
    color: #3b915f;
    font-size: 18px;
    font-family: "Microsoft YaHei";
    margin-bottom: 30px;
    line-height: 1.9em;
  }

  .hide {
    display: none;
  }

  .recruitment_2 {
    width: 100%;
    margin-top: 20px;
  }

  .recruitment_2 img {
    width: 100%;
  }

  .technology_r {
    width: 880px;
  }
</style>
<template>
  <div>
    <div class="banner">
      <div class="rec_word">
        <img src="../assets/recruitment_1.png">
      </div>
      <ul class="department">
        <li v-on:click="setLiName('it')">技术部 <span
          :class="{show: getLiName() == 'it',hide: getLiName() != 'it'}"></span></li>
        <li v-on:click="setLiName('operation')">运营部 <span
          :class="{show: getLiName() == 'operation',hide: getLiName() != 'operation'}"></span></li>
        <li v-on:click="setLiName('commerce')" class="business">商务部<span
          :class="{show: getLiName() == 'commerce',hide: getLiName() != 'commerce'}"></span></li>
      </ul>
    </div>
    <div class="container">
      <div class="recruitment_con">
        <div class="contianer">
          <!--技术部-->
          <div class="content" :class="{show: getLiName() == 'it',hide: getLiName() != 'it'}">
            <span></span>
            <div class="technology_l l">
              <ul>
                <li :class="{on: getSubLiName() == 'it-java'}" v-on:click="setSubLiName('it-java')">Java工程师</li>
              </ul>
            </div>
            <div class="technology_r l">
              <h5>职位描述</h5>
              <p> 1. 负责所属模块的功能规划、需求分析设计、技术实现；<br>
                2. 负责公司产品的架构和性能的优化。
              </p>
              <h5>任职要求</h5>
              <p>1. 本科及以上，计算机相关专业。 <br>
                2. 年以上的Java开发实践经验，熟练Java语言，掌握主流web开发框架struts，spring，hibernate，springmvc，mybatis并熟悉其原理。<br>
                3. 熟练JavaScript脚本，熟悉HTML,CSS等相关知识。<br>
                4. 掌握数据库的相关知识，熟练Mysql，Oracal等SQL数据库，熟悉Moogodb，Redis等NoSQL数据库。<br>
                5. 掌握常用的Linux命令，具备服务器的部署配置能力。<br>
                6. 对技术有强烈的兴趣，喜欢钻研，喜欢挑战技术难题，具有良好的学习能力，沟通技能，团队合作能力。<br>
                7. 拥有OA、CRM、HR等企业级应用平台开发经验。
              </p>
            </div>
          </div>
          <!--运营部-->
          <div class="content" :class="{show: getLiName() == 'operation',hide: getLiName() != 'operation'}">
            <div class="technology_l l">
              <ul>
                <li :class="{on: getSubLiName() == 'opt-manager'}" v-on:click="setSubLiName('opt-manager')">服务经理</li>
                <li :class="{on: getSubLiName() == 'opt-commissioner'}" v-on:click="setSubLiName('opt-commissioner')">
                  工商服务专员
                </li>
                <li :class="{on: getSubLiName() == 'opt-accounting'}" v-on:click="setSubLiName('opt-accounting')">会计
                </li>
                <li :class="{on: getSubLiName() == 'opt-intern'}" v-on:click="setSubLiName('opt-intern')">会计实习生</li>
                <li :class="{on: getSubLiName() == 'opt-resources'}" v-on:click="setSubLiName('opt-resources')">人力资源经理
                </li>
                <li :class="{on: getSubLiName() == 'opt-audit'}" v-on:click="setSubLiName('opt-audit')">审计会计</li>
                <li :class="{on: getSubLiName() == 'opt-media'}" v-on:click="setSubLiName('opt-media')">新媒体运营</li>
              </ul>
            </div>
            <div class="technology_r l"
                 :class="{show: getSubLiName() == 'opt-manager',hide: getSubLiName() != 'opt-manager'}">
              <h5>职位描述</h5>
              <p>1. 服务流程 - 基于业务需求的监督、设计和交付服务系统。对服务流程进行审查和建议，提高合规性；<br>
                2. 业务流程 - 与客户和员工联系，收集想法，提出解决方案，以提高过程的有效性和使用性；<br>
                3. 员工管理 -
                制定和维护战略，以提高员工服务在业务环境中的影响。发展与内部和外部利益相关者的合作伙伴关系，平衡企业湾和外部市场的实践，建立一个世界级的专业服务供应商；<br>
                4. 政策发展 – 审核和维护所有的政策和程序，符合目前的立法和/或组织的变化；<br>
                5. 法律要求 - 保持知识的法律要求和政府法规的更新，及时服务功能，确保符合政策，程序的合规要求。<br>
              </p>
              <h5>任职要求</h5>
              <p>1. 大专学历6年以上工作经验。<br>
                2. 拥有中小型企业的服务经验。<br>
                3. 在面对模糊时，能做出有质量的决定。<br>
                4. 较强的适应能力，能应对不断变化的商业环境。<br>
                5. 能把战略和运营责任做结合。<br>
                6. 良好的人际交往和沟通能力。<br>
                7. 表现出有效的人员和工作量管理技能。<br>
                8. 优秀的书面和口头沟通能力。<br>
                9. 有积极倾听和解决冲突的能力，以及支持、鼓励、激励和直接员工。<br>
                10. 拥抱和促进文化变革的能力。<br>
                11. 关注细节。
              </p>
            </div>
            <div class="technology_r l"
                 :class="{show: getSubLiName() == 'opt-commissioner',hide: getSubLiName() != 'opt-commissioner'}">
              <h5>职位描述</h5>
              <p>1. 负责工商业务客户的咨询、解答并能够与政府部门进行有效沟通，办理业务；<br>
                2. 能够为客户提供专业的工商咨询服务,工商注册办理；<br>
                3. 与工商、税务、银行单位保持良好关系，办理业务；<br>
                4. 业务政策的上传下达；<br>
                5. 其他临时事务。
              </p>
              <h5>任职要求</h5>
              <p>1. 身体健康，能吃苦耐劳，勤奋进取，工作积极主动。<br>
                2. 具较好的沟通、协调能力及交际技巧，具有亲和力，能够独立完成公司下达任务。<br>
                3. 有不断学习的工作态度；有责任心，有团队协作精神。<br>
                4. 具有良好的个人品德和职业操守，有较强的事业心和抗压能力。
              </p>
            </div>
            <div class="technology_r l"
                 :class="{show: getSubLiName() == 'opt-accounting',hide: getSubLiName() != 'opt-accounting'}">
              <h5>职位描述</h5>
              <p>1. 管理一个多家客户，审查客户的每月凭证，财务报告和分析，以确保在记录和及时向客户报告的准确性；<br>
                2. 确保每月结帐的准确性和及时性，为客户准备报告；<br>
                3. 协调客户的审计流程；<br>
                4. 定期与客户沟通，以充分了解客户的需求和需求；<br>
                5. 协调与税务官员，并与相关政府部门保持良好的关系；<br>
                6. 管理一个会计团队，有效地利用、矫正，以确保团队质量的客户服务；<br>
                7. 处理并回复客户的日常行政事务；<br>
                8. 对业务开发活动的支持。
              </p>
              <h5>任职要求</h5>
              <p>1. 大专以上学历，财务、会计或相关专业。<br>
                2. 有1年以上会计、税务等领域的工作经验，财务审计、管理会计、预算编制等工作。<br>
                3. 熟悉中华人民共和国公认会计准则，中华人民共和国税收法律法规和规章制度方面表现良好。<br>
                4. 优秀的微软办公软件知识。<br>
                5. 较强的组织能力，多任务处理能力，时间管理能力强，有较强的责任心。<br>
                6. 出色的工作承诺，积极的主动性，良好的团队合作精神和正确的工作态度。<br>
                7. 在解决日常税务和会计事宜方面的技术能力。
              </p>
            </div>
            <div class="technology_r l"
                 :class="{show: getSubLiName() == 'opt-intern',hide: getSubLiName() != 'opt-intern'}">
              <h5>职位描述</h5>
              <p>1. 协助会计进行帐务处理及报税；<br>
                2. 收集、审核财务所需票据；<br>
                3. 为客户提供客帐务、税务的售前、售后咨询及解答；<br>
                4. 去工商税务机关办理相关业务。
              </p>
              <h5>任职要求</h5>
              <p>1.财务专员须财会相关专业，在校学生优先。<br>
                2.熟练使用Excel，word和其他文字处理工具。<br>
                3.踏实肯干、责任心强、工作积极主动，善于学习，善于团队协作。<br>
                4.认真细致，爱岗敬业，吃苦耐劳，有良好的职业操守。
              </p>
            </div>
            <div class="technology_r l"
                 :class="{show: getSubLiName() == 'opt-resources',hide: getSubLiName() != 'opt-resources'}">
              <h5>职位描述</h5>
              <p>1. 提供全方位的专业人力资源服务，包括计划，执行和实施中国地区的战略和战术人力资源，人才管理，发展计划和举措；<br>
                2. 监督人力资源计划和计划的制定和实施，并确定该地区新的人力资源计划，以支持组织发展；<br>
                3. 与地区的分支人力资源部门合作，推动和执行整体人力资本和人才管理战略，以及实施区域级人才管理战略和计划，如分行经理池，移动计划，多样性和包容性计划，毕业生招聘等；<br>
                4. 将业务需求转化为有效的人力资源实践，并提供符合业务目标的人员解决方案；<br>
                5. 定义区域内潜在的领导空白，确定人才来源，并加强领导力发展，以建设领导力；<br>
                6. 与地区的分公司经理协调，制定和确定员工的学习和发展计划；<br>
                7. 协调和人力资源实践的执行，绩效管理系统，在该地区的政策和做法；<br>
                8. 审视整个地区使用的人力资源运营模式的有效性，并提出一致性和持续改进的建议。
              </p>
              <h5>任职要求</h5>
              <p>1. 本科及以上学历，人力资源管理专业或其他相关专业。
                2. 在大型服务组织拥有5年以上的人力资源经验，具有作为区域人力资源HRBP顾问的实践经验
                3. 在人才管理和组织发展方面拥有丰富的经验，有区域学习和发展接触对外的优势
                4. 强烈的自我激励能力，具有良好的沟通和表达能力。
                5. 强大的集中交付能力。必须有优秀的执行能力，具有迅速的反应能力。并采取具有战术创意的方法，以确保实现目标。
                6. 强化团队成员深入了解重要问题，并直接参与日常执行的能力
                7. 高能量和激情；有效地开展工作，在快节奏的环境中茁壮成长的能力，动态。
                8. 具备可以创造性解决问题的能力，以及获得各级管理层的信任，尊重和信任的良好记录。
              </p>
            </div>
            <div class="technology_r l"
                 :class="{show: getSubLiName() == 'opt-audit',hide: getSubLiName() != 'opt-audit'}">
              <h5>职位描述</h5>
              <p>1. 财务核算、税务工作的审核；<br>
                2. 核对账务信息；<br>
                3. 根据客户要求，对外提供财务月报、季报和年报；<br>
                4. 协助做好公司财税客户每月的账本；<br>
                5. 组织业务学习、培训和会计岗位技能训练；<br>
                6. 解决客户税务问题。
              </p>
              <h5>任职要求</h5>
              <p>1. 注册会计师资格，退休人员优先。<br>
                2. 8年以上会计工作经验，3年以上审计工作经验。<br>
                3. 能很好地融入青年团队中，热爱本职工作。<br>
                4. 熟练使用Excel,Word和其他文字处理工具。<br>
                5. 良好的沟通能力，人际交往能力，组织协调和解决问题的能力。
              </p>
            </div>
            <div class="technology_r l"
                 :class="{show: getSubLiName() == 'opt-media',hide: getSubLiName() != 'opt-media'}">
              <h5>职位描述</h5>
              <p>1. 负责公司自媒体平台的文案编辑、推广；<br>
                2. 协助完成线下活动策划并保证活动的顺利进行；<br>
                3. 参与策划公司品牌推广；<br>
                4. 企业宣传资料的策划、设计、印刷等平面设计类工作；<br>
                5. 完成领导安排的其他事宜。
              </p>
              <h5>任职要求</h5>
              <p>1. 近期从事过和文案有关的工作。<br>
                2. 性格开朗，思维活跃有创造性，能够快速融入团队工作。<br>
                3. 有一定平面设计基础，会使用PS、AI等设计软件、设计宣传单页及杂志优先。<br>
                4. 本科学历，新闻、市场营销、广告等相关专业优先。<br>
                5. 文案风格偏企业风，外向型，熟悉网络词汇。<br>
                6. 会写软文，有耐心，全职/兼职均可。
              </p>
            </div>
          </div>
          <!--商务部-->
          <div class="content" :class="{show: getLiName() == 'commerce',hide: getLiName() != 'commerce'}">
            <div class="technology_l l">
              <ul>
                <li :class="{on: getSubLiName() == 'com-customer'}" v-on:click="setSubLiName('com-customer')">客服实习生</li>
                <li :class="{on: getSubLiName() == 'com-saler'}" v-on:click="setSubLiName('com-saler')">销售</li>
              </ul>
            </div>
            <div class="technology_r l"
                 :class="{show: getSubLiName() == 'com-customer',hide: getSubLiName() != 'com-customer'}">
              <h5>职位描述</h5>
              <p>1. 办公室信息录入； <br>
                2. 日常后台的维护； <br>
                3. 资料整理、接听电话； <br>
              </p>
              <h5>任职要求</h5>
              <p>1. 大专及以上学历，在校生优先。<br>
                2. 0~1年工作经验。<br>
                3. 熟练使用Excel表格、Word 文档。<br>
                4. 良好的沟通能力，做过客服的优先。
              </p>
            </div>
            <div class="technology_r l"
                 :class="{show: getSubLiName() == 'com-saler',hide: getSubLiName() != 'com-saler'}">
              <h5>职位描述</h5>
              <p>1. 发展和执行商业计划，包括但是不限于销售业务改进计划，以提高整体客户服务质量，开发和维护销售渠道，实现公司销售目标；<br>
                2. 支持销售主管完成销售指标，定期分析销售业务；<br>
                3. 负责日常的销售流程包括销售订单的跟踪和准备报价单；<br>
                4. 和后台运营团队进行有效的沟通，监督确保订单得到有效的沟通和执行；<br>
                5. 维护良好的客户关系；<br>
                6. 确定潜在的商业机会。
              </p>
              <h5>任职要求</h5>
              <p>1. 1年以上一线销售经验，有良好的销售技巧。<br>
                2. 有创业园，孵化器，写字楼运营经验者优先。<br>
                3. 愿意从零开始，拥有良好积极的工作态度。<br>
                4. 愿意接受挑战，渴望成长。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="clearfix"></div>
    </div>
    <div class="recruitment_2"><img src="../assets/recruitment_2.jpg"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentLi: 'it',
        currentSubLi: 'it-java'
      }
    },
    methods: {
      setLiName (liName) {
        this.currentLi = liName;
        switch (liName) {
          case 'it':
            this.currentSubLi = 'it-java';
            break;
          case 'operation':
            this.currentSubLi = 'opt-manager';
            break;
          case 'commerce':
            this.currentSubLi = 'com-customer';
            break;
        }
      },
      getLiName (){
        return this.currentLi;
      },
      setSubLiName (currentSubLi) {
        this.currentSubLi = currentSubLi;
      },
      getSubLiName (){
        return this.currentSubLi;
      },
    }
  }

</script>
