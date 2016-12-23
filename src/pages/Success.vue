<template>
  <div id="success">
    <i class="el-icon-check"
       id="success-flag"></i>
    <p id="title">支付成功</p>
    <p id="description">我们的工作人员会尽快联系您，<br>以完成后续所有的服务流程。</p>
    <el-button type="primary"
               size="large"
               @click.native="jump"
               id="button">
      查看订单
    </el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      jump () {
        this.$router.replace({name: 'order'})
      }
    }
  }
</script>

<style scoped>
  #success {
    padding-top: 80px;
    text-align: center;
  }

  #success-flag {
    font-size: 80px;
    line-height: 100px;
    border-radius: 50%;
    background: #09bb07;
    color: white;
    height: 180px;
    width: 180px;
    display: block;
    padding-top: 45px;
    margin: 0 auto;
  }

  #button {
    display: block;
    margin: 20px auto;
  }

  #title {
    font-size: 24px;
    margin-top: 30px;
    font-weight: bold;
  }

  #description {
    font-size: 15px;
    line-height: 20px;
    margin-top: 15px;
    color: #aaa;
  }
</style>
