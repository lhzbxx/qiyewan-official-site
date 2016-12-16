<style scoped>
  .light {
    background-color: #fff;
  }

  .dark {
    background-color: #EFF2F7;
  }

  #table-header {
    height: 40px;
    border: 1px solid #eee;
    border-bottom: none;
  }

  #title {
    line-height: 40px;
    margin-left: 20px;
    color: #20A0FF;
  }
</style>

<template>
  <div id="table-header"
       v-bind:class="color">
    <span id="title"><b>{{ title }}</b></span>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      color: {
        type: String,
        default: 'dark'
      }
    }
  }
</script>
