<template>
  <div class="dashboard-editor-container">
    <!-- <github-corner class="github-corner" /> -->

    <!-- <panel-group @handleSetLineChartData="handleSetLineChartData" /> -->
    <!-- <> -->
    <data-state />
    <div class="flexDiv">
      <div class="left">
        <div class="titleBox">
          <p class="title">The Owner Signed</p>
          <p class="subClass"><img src="./image/车主签约@2x.png">车主签约</p>
        </div>
        <pie-chart />
      </div>
      <div class="center">
        <p><img src="./image/电池租赁@2x.png"></p>
        <p>电池租赁</p>
        <p class="subTitle">Battery Leasing</p>
        <div class="backBox"><img src="./image/电池租赁底@2x.png"></div>
      </div>
      <div class="right">
        <div class="flexBox">
          <div class="itemContent">
            <div class="itemCell">
              <p class="titleDetail"><span><img src="./image/已租赁@2x.png">已租赁</span> <span>100/1000</span></p>
              <el-progress :show-text="false" :percentage="70" />
            </div>
            <div class="itemCell">
              <p class="titleDetail"><span><img src="./image/已归还@2x.png">已归还</span> <span>100/1000</span></p>
              <el-progress :show-text="false" :percentage="70" />
            </div>
          </div>
          <div class="itemContent">
            <div class="itemCell">
              <p class="titleDetail"><span><img src="./image/押金@2x.png">押金</span> <span>100/1000</span></p>
              <el-progress :show-text="false" :percentage="70" />
            </div>
            <div class="itemCell">
              <p class="titleDetail"><span><img src="./image/租金@2x.png">租金</span> <span>100/1000</span></p>
              <el-progress :show-text="false" :percentage="70" />
            </div>
          </div>
          <div class="itemContent">
            <div class="itemCell">
              <p class="titleDetail"><span><img src="./image/作废@2x.png">作废</span> <span>100/1000</span></p>
              <el-progress :show-text="false" :percentage="70" />
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="flexDiv lastBox">
      <div class="left">
        <p class="title">Wait For The Message</p>
        <p class="subClass"><img src="./image/待办消息@2x.png">待办消息</p>
        <div class="todoList">
          <p><span class="num">1</span><span>待指派工单</span></p>
          <p><el-tag>15单</el-tag></p>
        </div>
        <div class="todoList">
          <p><span class="num">2</span><span>待指派工单</span></p>
          <p><el-tag>15单</el-tag></p>
        </div>
        <div class="todoList">
          <p><span class="num">3</span><span>待指派工单</span></p>
          <p><el-tag>15单</el-tag></p>

        </div>
      </div>
      <div class="center">
        <p><img src="./image/数据统计@2x.png"></p>
        <p>数据统计</p>
        <p class="subTitle">Battery Leasing</p>
        <div class="backBox"><img src="./image/数据统计-底@2x.png"></div>
      </div>
      <div class="right">
        <line-chart :chart-data="lineChartData" />
      </div>
    </div>
  </div>
</template>

<script>
// import GithubCorner from '@/components/GithubCorner'
// import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
// import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
// import BarChart from './components/BarChart'
// import TransactionTable from './components/TransactionTable'
// import TodoList from './components/TodoList'
// import BoxCard from './components/BoxCard'
import DataState from './components/DataState'
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'Dashboard',
  components: {
    // GithubCorner,
    // PanelGroup,
    LineChart,
    // RaddarChart,
    PieChart,
    // BarChart,
    // TransactionTable,
    // TodoList,
    // BoxCard,
    DataState
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      lineChartStyle: {
        width: '1020px',
        height: '360px;'
      }
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
p {
  margin: 0;
}
.dashboard-editor-container {
  padding: 32px;
  background-color: transparent;
  position: relative;
  .flexDiv {
    display: flex;
    height: 200px;
    margin-bottom: 20px;
    .left {
      width: 390px;
      height: 200px;
      margin-right: 30px;
      position: relative;
      @include boxShadow;
      .titleBox{
        position: absolute;
        top: 40px;
        left: 40px;
      }
      .title{
        font-size:14px;
        color: #999;
      }
      .subClass{
        font-size:24px;
        font-weight:bold;
        color:rgba(102,102,102,1);
        margin-bottom: 10px;
        img{
          width: 22px;
          vertical-align: middle;
        }
      }
      .todoList {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid#F2F2F5;
        height: 50px;
        line-height: 50px;
        p{
          line-height: 50px;
          margin: 0;
          .num{
            display: inline-block;
            width: 18px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            vertical-align: middle;
            margin-right: 16px;
            color: #fff;
            border-radius: 50%;
            background: rgba(103,157,253,0.5);
          }
        }
      }
    }
    .center {
      width:150px;
      height:200px;
      @include boxShadow;
      background-color:rgba(102,231,253,1);
      margin-right: 10px;
      position: relative;
      padding: 40px 20px 20px 20px;
      p {
        font-size:24px;
        font-weight:bold;
        color:rgba(255,255,255,1);
        &.subTitle {
          font-size:14px;
        }
        img {
          width: 20px;
        }
      }
      .backBox {
        position: absolute;
        bottom: 10px;
        right: 10px;
        width: 80px;
        height: 80px;
        img{
          width: 100%;
        }
      }
    }
    .right {
      width:1020px;
      height:200px;
      padding: 40px;
      @include boxShadow;
      .flexBox{
        display: flex;
        div.itemContent{
          flex: 1;
          border-right: 1px solid #F2F2F5;
          padding-left: 20px;
          padding-right: 20px;
          div.itemCell{
            margin-bottom: 20px;
            p.titleDetail {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              line-height: 20px;
              margin-bottom: 10px;
              span {
                line-height: 20px;
                img {
                  width: 20px;
                  vertical-align: middle;
                  margin-right: 10px;
                }
              }
            }
          }
          &:last-of-type{
            border-right: none;
          }
        }
      }
    }
  }
  .lastBox {
    height: 360px;
    .left{
      height: 360px;
      padding: 40px;
    }
    .center{
      height: 360px;
      background: #679DFD;
    }
    .right{
      height: 360px;
    }
  }
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
