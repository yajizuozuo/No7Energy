<template>
  <div class="woBox">
    <div class="topBox" />
    <div class="bottomBox">
      <div class="botLeft">
        <div class="title">
          <span>支付费用</span>
        </div>
      </div>
      <div class="botCenter">
        <div class="title">
          <span>支付费用</span>
        </div>
        <el-steps :active="2" align-center>
          <el-step title="步骤1" description="这是一段很长很长很长的描述性文字" />
          <el-step title="步骤2" description="这是一段很长很长很长的描述性文字" icon="el-icon-refresh" />
          <el-step title="步骤3" description="这是一段很长很长很长的描述性文字" />
          <el-step title="步骤4" description="这是一段很长很长很长的描述性文字" />
        </el-steps>
      </div>
      <div class="botRight">
        <div class="title">
          <span>支付费用</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
  }
}
</script>

<style lang="scss" scoped>
$leftBg: #66E2FE;
$centerBg: #67CBFD;
$rightBg: #67B3FE;
$white: #fff;
p{
	margin: 0px;
}
.woBox {
  min-width: 1600px;
  .title{
    display: inline-block;
    width:140px;
    height:34px;
    line-height: 34px;
    border-radius:0px 17px 17px 0px;
    text-align: center;
    color: $white;
    font-size: 16px;
    font-weight: bold;
  }
  .bottomBox{
    display: flex;
    height: 190px;
    > div{
      box-shadow:0px 20px 30px 0px rgba(103,157,253,0.2);
      border-radius:10px;
    }
    .botLeft{
      width: 370px;
      margin-right: 30px;
      .title{
        background: $leftBg;
      }
    }
    .botCenter{
      width: 770px;
      margin-right: 30px;
    }
    .botRight{
      width: 400px;
    }
  }
}
</style>
