<template>
  <div class="vmBox">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
    >
      <el-table-column
        fixed
        prop="orderType"
        label="类型"
        width="180"
      />
      <el-table-column
        prop="createTime"
        label="时间"
        width="180"
      />
      <el-table-column
        prop="companyName"
        label="公司名称"
      />
      <el-table-column
        prop="&{province}&{city}&{area}&{addr}"
        label="地址"
      />
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" @pagination="getCancelList" />
  </div>
</template>

<script>
// import { orderDetail, repairCompleteList, cancelList, repairProcessList } from '@/api/workOrder'
import { cancelList } from '@/api/workOrder'

import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
export default {
  components: { Pagination },
  data() {
    return {
      list: null,
      total: 100,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      tableData: []
    }
  },
  created() {
    this.getCancelList(this.listQuery)
  },
  methods: {
    getCancelList(data) {
      console.log(data)
      cancelList({ 'pageNo': data.page, 'pageSize': data.limit }).then(res => {
        console.log(res)
        if (res.code === 1) {
          this.tableData = res.data.rows
          this.total = res.data.total
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
p{
	margin: 0px;
}
.vmBox {
  min-width: 1600px;
    .companyName {
      position: absolute;
      left: 0;
      top: 40px;
      width: 180px;
      height: 44px;
      line-height: 44px;
      background: #679efd;
      border-radius: 0px 22px 22px 0px;
      color: #fff;
      text-align: center;
      font-weight: bold;
      font-size: 24px;
    }
    .checkDetail {
      position: absolute;
      right: 36px;
      top: 60px;
      width: 72px;
      height: 140px;
      border-radius: 70px 0px 0px 70px;
      background: #fff;
      align-items: center;
      display: flex;
      justify-content: center;
      cursor: pointer;
      span {
        color: #ff7278;
      }
      span:first-of-type {
        writing-mode: vertical-rl;
        letter-spacing: 3px;
        margin-right: 4px;
      }
    }
  }
</style>
