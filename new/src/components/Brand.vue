<template>
  <div id="brand">
    <img id="image" :src="imgUrl">
    <div id="detail">
      <p id="tmName">{{ tmName }}
        <span id="currentStatus">{{ currentStatus }}</span>
      </p>
      <div id="info">
        <span class="block"><span class="label">申请日期：</span>{{ appDate }}</span>
        <span class="block"><span class="label">类别：</span>{{ intCls }}</span>
        <span class="block" style="width: 35%;"><span class="label">申请人：</span>{{ applicantCn }}</span>
        <span class="block"><span class="label">注册号：</span>{{ regNo }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      agent: String,
      announcementDate: String,
      announcementIssue: String,
      appDate: String,
      applicantCn: String,
      currentStatus: String,
      intCls: String,
      regDate: String,
      regIssue: String,
      regNo: String,
      tmImg: String,
      tmName: String
    },
    computed: {
      imgUrl() {
        return 'http://pic.tmkoo.com/pic.php?s=1&zch=' + this.tmImg
      }
    }
  }
</script>

<style scoped>
  #brand {
    height: 120px;
    border: 1px solid #eee;
    margin-bottom: 15px;
  }

  #image {
    float: left;
    width: 90px;
    height: 90px;
    margin: 15px;
    border: 1px solid #eee;
  }

  #detail {
    display: inline-block;
    float: left;
    width: 1035px;
    height: 120px;
    margin-top: -1px;
    padding: 15px;
  }

  #tmName {
    font-size: 24px;
    line-height: 40px;
    font-weight: bold;
    margin-top: 8px;
  }

  #currentStatus {
    font-size: 14px;
    vertical-align: middle;
    background: #58B7FF;
    display: inline-block;
    color: white;
    font-weight: normal;
    margin-top: -5px;
    padding: 0 10px;
  }

  #info {
    height: 30px;
    position: relative;
  }

  .block {
    margin-top: 6px;
    display: inline-block;
    float: left;
    width: 20%;
    height: 30px;
    line-height: 30px;
    font-size: 13px;
  }

  .label {
    color: #aaa;
  }
</style>
