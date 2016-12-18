<template>
  <div>
    <el-table
      :data="carts"
      style="width: 100%"
      @cell-mouse-enter="handleCellEnter"
      @cell-mouse-leave="handleCellLeave"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="50">
      </el-table-column>
      <el-table-column
        inline-template
        label="商品信息"
        width="420">
        <div>
          <el-row style="height: 90px;">
            <el-col :span="5" style="height: 100%; display: table;">
              <div style="width: 100%;
                                        height: 100%;
                                        display: table-cell;
                                        vertical-align: middle;">
                <img :src="row.product.cover | cdn-filter"
                     style="width: 100%;
                                            display: table-cell;
                                            vertical-align: middle;">
              </div>
            </el-col>
            <el-col :span="19" style="height: 100%; display: table;">
              <div style="width: 100%;
                                        height: 100%;
                                        display: table-cell;
                                        vertical-align: middle;
                                        padding-left: 10px;">
                <p style="line-height: 16px; margin-bottom: 5px;">
                  {{ row.product.name }}
                </p>
                <p style="font-size: 13px; line-height: 15px; color: #aaa;">
                  区域：{{ row.region }}
                </p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        label="单价">
        <div>&yen;
          <span>{{ row.product.unitPrice }}</span>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        label="数量"
        width="210">
        <div>
          <el-input-number :min="1"
                           size="small"
                           v-model="row.amount">
          </el-input-number>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        label="小计">
        <div style="color: red;">
          &yen;
          <span>{{ getTotalPrice(row) }}</span>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        property="action"
        label="操作">
        <div>
          <el-button type="danger"
                     icon="delete"
                     size="small"
                     @click.native="deleteCart($index)">
            删除
          </el-button>
        </div>
      </el-table-column>
    </el-table>
    <div style="border: 1px solid #e0e6ed; border-top: none; width: 100%; text-align: right;">
            <span style="font-size: 13px; margin-right: 30px;">
                已选择{{ amountOfSelection() }}件商品，合计：
                <span style="color: red; font-size: 20px;">
                    &yen;{{ totalPrice() }}
                </span>
            </span>
      <el-button type="primary"
                 size="large"
                 :disabled="amountOfSelection() == 0"
                 @click.native="checkout"
                 style="border-radius: 0;">
        去结算
      </el-button>
    </div>
  </div>
</template>

<script>
  import dataApi from '../api/data'

  export default {
    data () {
      return {
        multipleSelection: [],
        currentAmount: null
      }
    },
    methods: {
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      deleteCart (index) {
        let vm = this
        this.$confirm('确认删除该商品吗？', '删除商品', {
          type: 'warning'
        }).then(() => {
          vm.$store.dispatch('removeCart', vm.carts[index].id).then(
            () => {
              vm.carts.splice(index, 1)
              vm.$message({
                type: 'success',
                message: '删除成功！'
              })
            },
            () => {
              vm.$message.error('删除失败~')
            }
          )
        }).catch(() => {
        })
      },
      handleCellEnter (row) {
        this.currentAmount = row.amount
      },
      handleCellLeave (row) {
        if (this.currentAmount !== row.amount) {
          this.$store.dispatch('updateCart', row).then(
            () => {
            },
            () => {
            }
          )
        }
      },
      updateCart (index) {
        this.$store.dispatch('updateCart', this.carts[index])
      },
      clearSelection () {
        this.multipleSelection = []
      },
      checkout () {
        this.$store.commit('CHECKOUT', this.multipleSelection)
        this.$router.push({name: 'checkout'})
      },
      getTotalPrice (row) {
        return dataApi.totalPrice(row)
      },
      totalPrice () {
        var r = 0
        for (var i of this.multipleSelection) {
          r = r + Number(dataApi.totalPrice(i))
        }
        return r.toFixed(2)
      },
      amountOfSelection () {
        return this.multipleSelection.length
      }
    },
    watch: {
      'page': 'clearSelection'
    },
    props: {
      carts: Array,
      page: Number
    }
  }
</script>
