<template>
  <div class="dataBox">
    <div class="textBox">
      <img src="../image/dataState.png">
      <p>数据统计</p>
      <p>Statistical Data</p>
    </div>
    <div class="huanBox">
      <div v-for="item in dataList" :key="item.id" class="itemCell">
        <p class="sumBox">{{ item.sum }}</p>
        <p class="text">{{ item.text }}</p>
        <img :src="item.imgSrc">
      </div>
    </div>
  </div>
</template>

<script>
import image1 from './1.png'
import image2 from './2.png'
import image3 from './3.png'
import image4 from './4.png'
export default {
  data() {
    return {
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
          text: '10000km',
          sum: '1000',
          imgSrc: image4
        },
        {
          id: '7',
          text: '10000km',
          sum: '1000',
          imgSrc: image4
        },
        {
          id: '8',
          text: '10000km',
          sum: '1000',
          imgSrc: image4
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/variables.scss";
  p{
    margin: 0;
  }
	.dataBox{
		width: 100%;
		background: $dataStateBg;
		border-radius: 10px;
		padding: 40px;
    display: flex;
    justify-content:space-between;
    box-shadow:0px 20px 30px 0px rgba(103,157,253,0.2);
    margin-bottom: 32px;
    .textBox{
      width: 180px;
      font-size: 24px;
      color: #fff;
      img{
        width: 24px;
        margin-bottom: 15px;
      }
      p{
        margin: 0px;
      }
    }
    .huanBox{
      display: flex;
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
          width: 89px;
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
</style>
