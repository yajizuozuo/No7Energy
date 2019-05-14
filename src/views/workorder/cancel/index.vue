<template>
  <div class="vmBox">
    <div class="title">
      <div class="subTitle">
        <span>数据详情</span>
      </div>
      <div class="" />
    </div>
    <div class="contentBox">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        @header-contextmenu.prevent.native="row_contextmenu(row, column, event)"
      >
        <el-table-column
          v-for="item in dataStutas"
          :key="item.key"
          :prop="item.key"
          :label="item.name"
          align="center"
          title="item.name"
          width="180"
        />
        <el-table-column label="操作" fixed="right" width="100" class-name="fixBox">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleEdit(scope.$index, scope.row)"
            >查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination v-show="total>0" :total="total" :limit="listQuery.limit" :page.sync="listQuery.page" @pagination="getCancelList" />
    </div>
  </div>
</template>

<script>
// import { orderDetail, repairCompleteList, cancelList, repairProcessList } from '@/api/workOrder'
import { repairProcessList } from '@/api/workOrder'

import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
export default {
  components: { Pagination },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      dataStutas: [
        { key: 'orderNo', name: '工单号' },
        { key: 'userNo', name: '车主账号' },
        { key: 'userName', name: '车主姓名' },
        { key: 'plateNo', name: '车牌号' },
        { key: 'companyName', name: '车辆所属企业' },
        { key: 'province', name: '省' },
        { key: 'city', name: '市' },
        { key: 'area', name: '区' },
        { key: 'addr', name: '详细地址' },
        { key: 'status', name: '状态' },
        { key: 'employeeNo', name: '维修工工号' },
        { key: 'employeeName', name: '维修工姓名' },
        { key: 'receptionCenterName', name: '受理中心' },
        { key: 'networkName', name: '受理网点' },
        { key: 'inputType', name: '录入方式' },
        { key: 'createTime', name: '下单时间' },
        { key: 'orderDes', name: '订单描述' }
      ],
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
    handleEdit(index, row) {
      console.log(row)
      this.$router.push({ name: 'OrderDetail', query: { queryId: row.orderNo }})
    },
    row_contextmenu(row, column, event) {
      event.preventDefault()
      alert(123)
      console.log(row)
    },
    checkDetail(row) {
      console.log(row.orderNo)
      this.$router.push({ name: 'OrderDetail', query: { queryId: row.orderNo }})
    },
    getCancelList(data) {
      console.log(data)
      repairProcessList({ 'pageNo': data.page, 'pageSize': data.limit }).then(res => {
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
  background: #fff;
  padding-top: 40px;
  .title {
    display: flex;
    margin-bottom: 40px;
    justify-content: space-between;
    .subTitle {
      span{
        display: inline-block;
        width: 180px;
        height: 44px;
        border-radius: 0 22px 22px 0;
        background: rgba(103, 158, 253, 1);
        color: #fff;
        font-size: 24px;
        text-align: center;
        line-height: 44px;
      }
    }
  }
  .contentBox {
    padding-left: 40px;
    padding-right: 40px;
    width: 100%;
  }
}
</style>
<template>
  <div class="vmBox">
    <div class="title">
      <div class="subTitle">
        <span>数据详情</span>
      </div>
      <div class="" />
    </div>
    <div class="contentBox">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        @header-contextmenu.prevent.native="row_contextmenu(row, column, event)"
      >
        <el-table-column
          v-for="item in dataStutas"
          :key="item.key"
          :prop="item.key"
          :label="item.name"
          align="center"
          title="item.name"
          width="180"
        />
        <el-table-column label="操作" fixed="right" width="100" class-name="fixBox">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleEdit(scope.$index, scope.row)"
            >查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination v-show="total>0" :total="total" :limit="listQuery.limit" :page.sync="listQuery.page" @pagination="getCancelList" />
    </div>
  </div>
</template>

<script>
// import { orderDetail, repairCompleteList, cancelList, repairProcessList } from '@/api/workOrder'
import { repairCompleteList } from '@/api/workOrder'

import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
export default {
  components: { Pagination },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      dataStutas: [
        { key: 'orderNo', name: '工单号' },
        { key: 'userNo', name: '车主账号' },
        { key: 'userName', name: '车主姓名' },
        { key: 'plateNo', name: '车牌号' },
        { key: 'companyName', name: '车辆所属企业' },
        { key: 'province', name: '省' },
        { key: 'city', name: '市' },
        { key: 'area', name: '区' },
        { key: 'addr', name: '详细地址' },
        { key: 'status', name: '状态' },
        { key: 'employeeNo', name: '维修工工号' },
        { key: 'employeeName', name: '维修工姓名' },
        { key: 'receptionCenterName', name: '受理中心' },
        { key: 'networkName', name: '受理网点' },
        { key: 'inputType', name: '录入方式' },
        { key: 'createTime', name: '下单时间' },
        { key: 'orderDes', name: '订单描述' }
      ],
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
    handleEdit(index, row) {
      console.log(row)
      this.$router.push({ name: 'OrderDetail', query: { queryId: row.orderNo }})
    },
    row_contextmenu(row, column, event) {
      event.preventDefault()
      alert(123)
      console.log(row)
    },
    checkDetail(row) {
      console.log(row.orderNo)
      this.$router.push({ name: 'OrderDetail', query: { queryId: row.orderNo }})
    },
    getCancelList(data) {
      console.log(data)
      repairCompleteList({ 'pageNo': data.page, 'pageSize': data.limit }).then(res => {
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
  background: #fff;
  padding-top: 40px;
  .title {
    display: flex;
    margin-bottom: 40px;
    justify-content: space-between;
    .subTitle {
      span{
        display: inline-block;
        width: 180px;
        height: 44px;
        border-radius: 0 22px 22px 0;
        background: rgba(103, 158, 253, 1);
        color: #fff;
        font-size: 24px;
        text-align: center;
        line-height: 44px;
      }
    }
  }
  .contentBox {
    padding-left: 40px;
    padding-right: 40px;
    width: 100%;
  }
}
</style>
<template>
  <div class="vmBox">
    <div class="title">
      <div class="subTitle">
        <span>数据详情</span>
      </div>
      <div class="" />
    </div>
    <div class="contentBox">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        @header-contextmenu.prevent.native="row_contextmenu(row, column, event)"
      >
        <el-table-column
          v-for="item in dataStutas"
          :key="item.key"
          :prop="item.key"
          :label="item.name"
          align="center"
          title="item.name"
          width="180"
        />
        <el-table-column label="操作" fixed="right" width="100" class-name="fixBox">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleEdit(scope.$index, scope.row)"
            >查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination v-show="total>0" :total="total" :limit="listQuery.limit" :page.sync="listQuery.page" @pagination="getCancelList" />
    </div>
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
      total: 0,
      listLoading: true,
      dataStutas: [
        { key: 'orderNo', name: '工单号' },
        { key: 'userNo', name: '车主账号' },
        { key: 'userName', name: '车主姓名' },
        { key: 'plateNo', name: '车牌号' },
        { key: 'companyName', name: '车辆所属企业' },
        { key: 'province', name: '省' },
        { key: 'city', name: '市' },
        { key: 'area', name: '区' },
        { key: 'addr', name: '详细地址' },
        { key: 'status', name: '状态' },
        { key: 'employeeNo', name: '维修工工号' },
        { key: 'employeeName', name: '维修工姓名' },
        { key: 'receptionCenterName', name: '受理中心' },
        { key: 'networkName', name: '受理网点' },
        { key: 'inputType', name: '录入方式' },
        { key: 'createTime', name: '下单时间' },
        { key: 'orderDes', name: '订单描述' }
      ],
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
    handleEdit(index, row) {
      console.log(row)
      this.$router.push({ name: 'OrderDetail', query: { queryId: row.orderNo }})
    },
    row_contextmenu(row, column, event) {
      event.preventDefault()
      alert(123)
      console.log(row)
    },
    checkDetail(row) {
      console.log(row.orderNo)
      this.$router.push({ name: 'OrderDetail', query: { queryId: row.orderNo }})
    },
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
  background: #fff;
  padding-top: 40px;
  .title {
    display: flex;
    margin-bottom: 40px;
    justify-content: space-between;
    .subTitle {
      span{
        display: inline-block;
        width: 180px;
        height: 44px;
        border-radius: 0 22px 22px 0;
        background: rgba(103, 158, 253, 1);
        color: #fff;
        font-size: 24px;
        text-align: center;
        line-height: 44px;
      }
    }
  }
  .contentBox {
    padding-left: 40px;
    padding-right: 40px;
    width: 100%;
  }
}
</style>
