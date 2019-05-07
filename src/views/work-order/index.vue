<template>
  <div class="woBox">
    <div class="topBox">
      <div class="topLeft">
        <div class="topLeftTop">
          <div class="">
            <div class="topTitle">
              <img src="./维修工组@2x.png">
              <span>维修工信息</span>
            </div>
            <div class="topContant">
              <div class="fl">维修工工号</div>
              <div class="fr">123456798</div>
            </div>
            <div class="topContant">
              <div class="fl">维修工姓名</div>
              <div class="fr">123456798</div>
            </div>
            <div class="topContant">
              <div class="fl">维修工手机号码</div>
              <div class="fr">123456798</div>
            </div>
          </div>
          <div class="" />
          <div class="" />
        </div>
        <div class="topLeftBot">
          <div>
            <div class="title">
              <span>维修方案</span>
            </div>
          </div>
          <div>
            <div class="title">
              <span>实时地图</span>
            </div>
            <div>
              <mapDrag lat="22.574405" lng="114.095388" @drag="dragMap" />
            </div>
          </div>
        </div>
      </div>
      <div class="topRight">
        <div class="topTitle">
          <img src="./维修工组@2x.png">
          <span>工单信息</span>
        </div>
        <div class="">
          <div class="topContant">
            <div class="fl">工单号</div>
            <div class="fr">123456798</div>
          </div>
        </div>
        <p>工单描述</p>
        <p>工单描述工单描述工单描述工单描述工单描述工单描述工单描述</p>
        <p>图片及视频</p>
      </div>
    </div>
    <div class="bottomBox">
      <div class="botLeft">
        <div class="title">
          <span>支付费用</span>
        </div>
        <div class="topContant">
          <div class="fl">工时费</div>
          <div class="fr">123456798</div>
        </div>
        <div class="topContant">
          <div class="fl">零件费</div>
          <div class="fr">123456798</div>
        </div>
        <div class="topContant">
          <div class="fl">其他</div>
          <div class="fr">123456798</div>
        </div>
        <div class="topContant">
          <div class="fl">合计</div>
          <div class="fr">123456798</div>
        </div>
      </div>
      <div class="botCenter">
        <div class="title">
          <span>工单进程</span>
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
          <span>工单评价</span>
        </div>
        <div class="flexBox">
          <div class="block" style="text-align: center;">
            <span>
              <img src="./评价@2x.png">
            </span>
            <br>
            <span>评价星级</span>
            <el-rate
              v-model="value"
              disabled
              :colors="['#FFA0A8','#FFA0A8','#FFA0A8']"
              score-template="{value}"
            />
          </div>
          <div class="block" style="text-align: center;">
            <span><img src="./服务态度@2x.png"></span>
            <br>
            <span>服务态度</span>
            <el-rate
              v-model="value"
              disabled
              :colors="['#FFA0A8','#FFA0A8','#FFA0A8']"
              score-template="{value}"
            />
          </div>
          <div class="block" style="text-align: center;">
            <span><img src="./效率@2x.png"></span>
            <br>
            <span>服务效率</span>
            <el-rate
              v-model="value"
              disabled
              :colors="['#FFA0A8','#FFA0A8','#FFA0A8']"
              score-template="{value}"
            />
          </div>
        </div>
        <p>意见意见内容意见内容意见内容意见内容意见内容意见内容内容内容内容</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrderList } from '@/api/workOrder'
import MapDrag from '@/components/MapDrag/mapDrag'
export default {
  components: {
    MapDrag
  },
  data: () => ({
    value: 3.1
  }),
  created() {
    this.getOrderListData()
  },
  methods: {
    getOrderListData() {
      getOrderList({ 'pageNo': 1, 'pageSize': 3 }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
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
		background: $leftBg;
  }
	.topTitle{
		margin-bottom: 16px;
		img{
			width: 50px;
			vertical-align: middle;
		}
		span{
			font-size: 16px;
			font-weight: bold;
			color: $white;
		}
	}
	.topContant{
		@include clearfix
		font-size: 12px;
		line-height: 24px;
		font-weight: 400;
		color: $white;
	}
	.topBox{
		display: flex;
		height: 700px;
		margin-bottom: 20px;
		.topLeft{
			width: 1170px;
			margin-right: 30px;
			.topLeftTop{
				display: flex;
				margin-bottom: 20px;
				> div{
					width: 370px;
					height: 190px;
					margin-right: 30px;
					@include boxShadow
					background-color: $leftBg;
					background-size: 130px 130px;
					background-position: 220px 40px;
					background-repeat: no-repeat;
					padding: 10px 20px 20px 30px;
					&:first-of-type{
						background-image: url(./维修工-底@2x.png);
					}
					&:nth-child(2){
						background-color: $centerBg;
						background-image: url(./车主-底@2x.png);
					}
					&:last-of-type{
						margin-right: 0px;
						background-color: $rightBg;
						background-image: url(./车辆-底@2x.png);
					}
				}
			}
			.topLeftBot{
				display: flex;
				height: 490px;
				> div{
					width: 370px;
					@include boxShadow
					margin-right: 30px;
					&:last-of-type{
						width: 770px;
						margin-right: 0px;
					}
				}
			}
		}
		.topRight{
			width: 400px;
			padding: 10px 30px 40px 30px;
			@include boxShadow ;
			.topTitle{
				span{
					color: $centerBg;
				}
			}
			.topContant{
				color: #666;
			}
		}
	}
  .bottomBox{
    display: flex;
    height: 190px;
    > div{
      @include boxShadow ;
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
      .title{
        background: $centerBg;
      }
    }
    .botRight{
      width: 400px;
      .title{
        background: $rightBg;
      }
      .flexBox{
        display: flex;
        padding: 25px 47px 10px 47px;
        .block{
          span{
            font-size: 12px;
            line-height: 24px;
          }
          img{
            display: inline-block;
            width: 20px;
          }
        }
      }
    }
  }
}
</style>
