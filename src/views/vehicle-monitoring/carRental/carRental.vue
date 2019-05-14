<template>
  <div class="vmBox">
    <div class="contentCell">
      <div class="companyName">
        {{ name }}
      </div>
      <div class="contentBox">
        <div class="databox" />
        <div class="huanBox">
          <div v-for="item in dataList" :key="item.id" class="itemCell">
            <p class="sumBox">{{ item.sum }}</p>
            <p class="text">{{ item.text }}</p>
            <img :src="item.imgSrc">
          </div>
        </div>
      </div>
      <div class="checkDetail">
        <span>查看明细</span>
        <span>></span>
      </div>
    </div>
    <div class="tableBox">
      <div class="title">
        <div class="subTitle">
          <span>表格内容</span>
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
            show-overflow-tooltip
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
  </div>
</template>

<script>
import image1 from '../1.png'
import image2 from '../2.png'
import image3 from '../3.png'
import image4 from '../4.png'
import { repairCompleteList } from '@/api/workOrder'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
export default {
  components: { Pagination },
  data: () => ({
    name: '新沃科技',
    list: null,
    total: 0,
    listLoading: true,
    listQuery: {
      page: 1,
      limit: 10
    },
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
    dataList: [
      {
        id: '1',
        text: '运营车辆',
        sum: '500',
        imgSrc: image1
      },
      {
        id: '2',
        text: '预期目标',
        sum: '500',
        imgSrc: image2
      },
      {
        id: '3',
        text: '已领补贴',
        sum: '500',
        imgSrc: image3
      },
      {
        id: '4',
        text: '5000km',
        sum: '1000',
        imgSrc: image3
      },
      {
        id: '5',
        text: '10000km',
        sum: '1000',
        imgSrc: image4
      },
      {
        id: '6',
        text: '15000km',
        sum: '1000',
        imgSrc: image4
      }
    ]
  }),
  created() {
    this.getCancelList(this.listQuery)
  },
  methods: {
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
  .tableBox {
    background: #fff;
    width: 1600px;
    padding-top: 40px;
    box-shadow: 0px 20px 30px 0px rgba(103,157,253,0.2);
    border-radius: 10px;
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
  .contentCell {
    width: 1600px;
    height: 250px;
		padding: 25px 35px;
    background: #66e2fe;
    position: relative;
    box-shadow: 0px 20px 30px 0px rgba(103, 157, 253, 0.2);
    border-radius: 10px;
    margin-bottom: 30px;
		.contentBox{
			display: flex;
			/* justify-content:space-between; */
			.databox{
				width:390px;
				height:200px;
				background:rgba(255,255,255,1);
				box-shadow:0px 10px 15px 0px rgba(103,157,253,0.2);
				border-radius:10px;
			}
			.huanBox{
				display: flex;
				padding: 20px;
				.itemCell{
					text-align: center;
					color: #fff;
					padding: 0px 40px;
					position: relative;
					.sumBox{
						font-size: 24px;
						font-weight: bold;
						line-height: 36px;
					}
					.text{
						font-size: 14px;
					}
					img{
						width: 90px;
						margin-top: 20px;
					}
					&::after{
						content: '';
						position: absolute;
						width: 0px;
						height: 90px;
						border-left: 1px solid rgba(255,255,255,0.5);
						right: 0;
						top: 0;
					}
					&:last-of-type::after{
						border-left: none;
					}
				}
			}
		}
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
      right: 0px;
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
}
</style>
