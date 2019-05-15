<template>
  <div class="vmBox">
    <div class="contentCell">
      <div class="companyName">
        {{ name }}
      </div>
      <div class="contentBox">
        <div class="databox"><pie-chart /></div>
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
    <div class="contentCell">
      <div class="companyName">
        {{ name }}
      </div>
      <div class="contentBox">
        <div class="databox"><pie-chart /></div>
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
    <div class="contentCell">
      <div class="companyName">
        {{ name }}
      </div>
      <div class="contentBox">
        <div class="databox"><pie-chart /></div>
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
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" @pagination="getList" />
  </div>
</template>

<script>
import image1 from './1.png'
import image2 from './2.png'
import image3 from './3.png'
import image4 from './4.png'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import PieChart from '@/views/busystem-index/components/PieChart'
export default {
  components: { Pagination, PieChart },
  data: () => ({
    name: '新沃科技',
    list: null,
    total: 100,
    listLoading: true,
    listQuery: {
      page: 1,
      limit: 20
    },
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
  methods: {
    getList() {
      console.log(this.listQuery.page)
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
  .contentCell {
    width: 1600px;
    height: 250px;
		padding: 25px 35px;
    background: #66e2fe;
    position: relative;
    box-shadow: 0px 20px 30px 0px rgba(103, 157, 253, 0.2);
    border-radius: 10px;
    margin-bottom: 20px;
    &:nth-child(2){
      background: #67CBFD;
    }
    &:nth-child(3){
      background: #67B3FE;
    }
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
