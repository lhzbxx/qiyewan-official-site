<template>
  <div id="personal-center" class="container">
    <div id="personal-center-main">
      <div class="title">
        <p style="margin-left: 20px;">客户名称：侯桂勇</p>
        <div class="company-detail-button">
          <p>企业详情
            <i class="ci-right">
              <s>◇</s>
            </i>
          </p>
          <table class="company-detail">
            <tr>
              <td>公司名称：</td>
              <td class="company-details">暂无</td>
              <td>法人代表：</td>
              <td class="company-details">暂无</td>
            </tr>
            <tr>
              <td>公司地址：</td>
              <td class="company-details">暂无</td>
              <td>注册资本：</td>
              <td class="company-details">暂无</td>
            </tr>
            <tr>
              <td>员工人数：</td>
              <td class="company-details">暂无</td>
              <td>营业执照：</td>
              <td class="company-details">暂无</td>
            </tr>
            <tr>
              <td>纳税登记号：</td>
              <td class="company-details">暂无</td>
              <td>联系地址：</td>
              <td class="company-details">暂无</td>
            </tr>
          </table>
        </div>
        <p style="float: right; margin-right: 30px;">类型：企业</p>
      </div>
      <div class="contracts">
        <div class="contract">
          <div class="contract-title">
            <b style="margin-left: 20px;">2016-12-26</b>
            <p style="margin-left: 20px;">订单编号：</p>
            <p class="contract-collapse">
              <img src="../assets/collapse-white.png" class="collapse-icon">
            </p>
          </div>
          <div class="separator">
            <p>服务节点</p>
            <img src="../assets/collapse.png" class="collapse-icon">
          </div>
          <div class="service-nodes">
            <div class="service-node">
              <div class="node-date">
                <p>2016</p><br>
                <p>12-26</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="collapse">
        <img src="../assets/collapse.png" class="collapse-icon">
        <span class="helper"></span>
      </div>
    </div>
    <div id="personal-center-history"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>
  #personal-center-main {
    width: 75%;
    position: relative;
    height: 100px;
    float: left;
    padding: 20px;
  }

  #personal-center-history {
    width: 25%;
    background: red;
    position: relative;
    height: 100px;
    float: left;
    padding: 20px;
  }

  .title {
    background: #00a0ea;
    width: 100%;
    height: 47px;
    line-height: 47px;
    color: white;
    font-size: 16px;
  }

  p {
    display: inline-block;
  }

  .company-detail-button {
    float: right;
    margin-right: 30px;
    cursor: pointer;
    padding: 0 20px;
    border: 1px solid #00a0ea;
    border-top: none;
    border-bottom: none;
    z-index: 2;
  }

  .company-detail-button:hover {
    background: white;
    color: #00a0ea;
    border: 1px solid #eee;
    border-top: none;
    border-bottom: none;
  }

  .collapse {
    width: 100%;
    height: 31px;
    background: #f2f2f2;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }

  .collapse:hover {
    background: #d3d3d3;
  }

  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .ci-right {
    top: -2px;
    left: 5px;
    height: 7px;
    overflow: hidden;
    position: relative;
    display: inline-block;
    font: 400 15px/15px consolas;
    color: white;
    transform: rotate(0deg);
    transition: transform .2s ease-in 0s;
  }

  .company-detail-button:hover .ci-right {
    color: #00a0ea;
    transform: rotate(180deg);
    transition: transform .2s ease-in 0s;
  }

  s {
    position: relative;
    top: -7px;
    text-decoration: none;
  }

  .company-detail-button:hover .company-detail {
    display: block;
  }

  .company-detail {
    right: 49px;
    position: absolute;
    border: 1px solid #eee;
    height: 145px;
    top: 67px;
    display: none;
    cursor: default;
    font-size: 13px;
    background: white;
    border-top: none;
    color: black;
    padding: 10px;
  }

  .company-details {
    min-width: 50px;
    text-align: left;
  }

  td {
    line-height: 30px;
    text-align: right;
  }

  .contract-title {
    background: #ddf3fe;
    height: 39px;
    color: #546b79;
    line-height: 39px;
    font-size: 15px;
  }

  .contract-collapse {
    width: 56px;
    height: 20px;
    float: right;
    position: relative;
    top: 9px;
    margin-right:20px;
    background: #00a0ea;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    line-height: 20px;
  }

  .separator {
    height: 52px;
    background: #ddf3fe;
    text-align: center;
  }

  .separator p {
    display: block;
    font-size: 14px;
    padding-top: 8px;
  }

  .service-nodes {
    padding: 20px;
  }

  .service-node {

  }
</style>
