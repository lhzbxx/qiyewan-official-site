<style>
  .bread-crumb {
    padding: 10px 0;
    border-bottom: 1px solid #eee
  }
</style>

<template>
  <div class="container">
    <el-breadcrumb separator=">" class="bread-crumb">
      <el-breadcrumb-item>
        <router-link to="/">首页</router-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ categoryName }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="24" style="margin-top: 20px;">
        <p>{{ categoryName }}</p>
      </el-col>
      <el-col :span="24">
        <lh-product v-for="item in products"
                    :title="item.name"
                    :summary="item.summary"
                    :img="cdnPrefix+item.cover"
                    :price="item.price"
                    :url="item.serialId"></lh-product>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import productApi from '../api/product'
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {
        products: null,
        categoryName: ''
      }
    },
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    computed: mapGetters({
      cdnPrefix: 'cdnPrefix'
    }),
    methods: {
      fetchData () {
        let category = this.$route.params.category
        let regionCode = this.$route.params.regionCode
        this.loading = true
        let vm = this
        productApi.getProductList(regionCode, category,
          function (data) {
            vm.products = data
            vm.categoryName = category
            let classifications = [
              {
                title: '工商服务',
                code: 'IC'
              },
              {
                title: '财税服务',
                code: 'FC'
              },
              {
                title: '法律服务',
                code: 'LD'
              },
              {
                title: '人事服务',
                code: 'HR'
              },
              {
                title: 'IT&设计服务',
                code: 'IT'
              },
              {
                title: '套餐服务',
                code: 'PS'
              }
            ]
            let index = classifications.findIndex(function (item) {
              return item.code == category
            })
            if (index >= 0) {
              vm.categoryName = classifications[index].title
            } else {
              vm.categoryName = category
            }
          },
          function (error) {
            vm.error = error
          }
        )
        this.loading = false
      }
    }
  }
</script>
