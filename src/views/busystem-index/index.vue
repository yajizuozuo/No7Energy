<template>
  <div class="dashboard-editor-container">
    <!-- <github-corner class="github-corner" /> -->

    <!-- <panel-group @handleSetLineChartData="handleSetLineChartData" /> -->
    <!-- <> -->
    <data-state />
    <div class="flexDiv">
      <div class="left" />
      <div class="center">
        <p><img src="./image/电池租赁@2x.png"></p>
        <p>电池租赁</p>
        <p class="subTitle">Battery Leasing</p>
        <div class="backBox"><img src="./image/电池租赁底@2x.png"></div>
      </div>
      <div class="right">
        <div class="flexBox">
          <div class="">
            <div class="itemCell">
              <el-progress :show-text="false" :percentage="70" />
            </div>
            <div class="itemCell">
              <el-progress :show-text="false" :percentage="70" />
            </div>
          </div>
          <div class="">
            <div class="itemCell">
              <el-progress :show-text="false" :percentage="70" />
            </div>
            <div class="itemCell">
              <el-progress :show-text="false" :percentage="70" />
            </div>
          </div>
          <div class="">
            <div class="itemCell">
              <el-progress :show-text="false" :percentage="70" />
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="flexDiv" />
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>

    <el-row :gutter="32">
      <!-- <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <raddar-chart />
          </div>
        </el-col> -->
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <!-- <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <bar-chart />
          </div>
        </el-col> -->
    </el-row>

    <el-row :gutter="8">
      <!-- <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
          <transaction-table />
        </el-col> -->
      <!-- <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
          <todo-list />
        </el-col> -->
      <!-- <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
          <box-card />
        </el-col> -->
    </el-row>
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
      lineChartData: lineChartData.newVisitis
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
.dashboard-editor-container {
  padding: 32px;
  background-color: transparent;
  position: relative;
  .flexDiv {
    display: flex;
    height: 200px;
    .left {
      width: 390px;
      height: 200px;
      margin-right: 30px;
      @include boxShadow;
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
        div{
          flex: 1;
          border-right: 1px solid #F2F2F5;
          &:last-of-type{
            border-right: none;
          }
        }
      }
    }
  }
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
