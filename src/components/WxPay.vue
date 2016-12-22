<template>
  <div>
    <el-dialog title="微信支付"
               v-model="isVisible"
               size="tiny"
               ref="dialog">
      <span>请扫描下面二维码：</span>
      <img :src="'http://qr.liantu.com/api.php?mhid=4xDADwDpnJ0hMHcvKtxTP6s&text=' + data"
           width="260px"
           height="260px">
      <span slot="footer">
        <el-button @click="isVisible = false">取 消</el-button>
        <el-button type="primary" @click="isVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isVisible: false,
        data: ''
      }
    },
    methods: {
      openDialog (data) {
        this.data = data
        this.$refs.dialog.open()
      }
    }
  }
</script>
