<template>
  <div class="homeBox">
    <div class="timerDiv">
      <timer />
    </div>
    <div class="textBox">
      <p>欢迎进入</p>
      <p>7#综合业务系统</p>
      <p>integrated business system</p>
    </div>
    <div class="logoBox">
      <div class="flexBox">
        <div class="logoDiv" @click="gopage">
          <img src="./业务平台icon@2x.png">
          <span>业务平台</span>
        </div>
        <div class="logoDiv">
          <img src="./管理平台icon@2x.png">
          <span>管理平台</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Timer from './component/timer'
export default {
  components: {
    Timer
  },
  data: () => ({

  }),
  methods: {
    gopage() {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.homeBox{
  width: 100%;
  height: 100%;
  background: url(./background.png) no-repeat center;
  background-size: cover;
  position: relative;
  .timerDiv{
    padding-top: 100px;
    text-align: center;
  }
  .textBox{
    margin-top: 40px;
    p{
      color: $mainTextColor;
      font-size: 36px;
      font-weight: bold;
      line-height: 48px;
      margin: 0;
      text-align: center;
      &:last-of-type{
        font-size: 14px;
        line-height: 10px;
      }
    }
  }
  .logoBox{
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    .flexBox {
      display: flex;
      justify-content: center;
      align-items: center;
      .logoDiv{
        padding: 20px;
        padding-bottom: 0px;
        cursor: pointer;
        img{
          width: 100px;
        }
        span{
          display: block;
          text-align: center;
        }
      }
    }
  }
}
</style>
