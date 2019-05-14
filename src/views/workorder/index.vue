<template>
  <div class="woBox">
    <div class="btnBox">
      <el-button round icon="el-icon-arrow-left" @click="$router.go(-1)">返回</el-button>
    </div>
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
              <div class="fr">{{ orderDetail.employeeNo }}</div>
            </div>
            <div class="topContant">
              <div class="fl">维修工姓名</div>
              <div class="fr">{{ orderDetail.employeeName }}</div>
            </div>
            <div class="topContant">
              <div class="fl">维修工手机号码</div>
              <div class="fr">{{ orderDetail.employeePhoneNo }}</div>
            </div>
          </div>
          <div class="">
            <div class="topTitle">
              <img src="./车主组@2x.png">
              <span>车主信息</span>
            </div>
            <div class="topContant">
              <div class="fl">账号</div>
              <div class="fr">{{ orderDetail.userNo }}</div>
            </div>
            <div class="topContant">
              <div class="fl">车主姓名</div>
              <div class="fr">{{ orderDetail.userName }}</div>
            </div>
            <div class="topContant">
              <div class="fl">车主手机号码</div>
              <div class="fr">{{ orderDetail.phoneNo }}</div>
            </div>
          </div>
          <div class="">
            <div class="topTitle">
              <img src="./车辆组@2x.png">
              <span>车辆信息</span>
            </div>
            <div class="topContant">
              <div class="fl">车牌号</div>
              <div class="fr">{{ orderDetail.plateNo }}</div>
            </div>
            <div class="topContant">
              <div class="fl">车辆品牌</div>
              <div class="fr">{{ orderDetail.brand }}</div>
            </div>
            <div class="topContant">
              <div class="fl">车辆型号</div>
              <div class="fr">{{ orderDetail.model }}</div>
            </div>
            <div class="topContant">
              <div class="fl">车辆颜色</div>
              <div class="fr">{{ orderDetail.colour }}</div>
            </div>
          </div>
        </div>
        <div class="topLeftBot">
          <div class="planReair">
            <div class="title">
              <span>维修方案</span>
            </div>
            <div class="workorder">
              <div class="topContant">
                <div class="fl">所需工时</div>
                <div class="fr">{{ orderDetail.needWorkHours }}</div>
              </div>
              <div class="topContant">
                <div class="fl">所需零件</div>
              </div>
              <div v-if="orderDetail.partMoneyDetail && orderDetail.partMoneyDetail.length > 0">
                <el-table
                  :data="orderDetail.partMoneyDetail"
                  stripe
                  style="width: 100%"
                >
                  <el-table-column
                    v-for="item in dataStutas"
                    :key="item.key"
                    :prop="item.key"
                    :label="item.name"
                  />
                </el-table>
              </div>
              <p class="subTitle">方案描述</p>
              <p>{{ orderDetail.planDes }}</p>
            </div>
          </div>
          <div>
            <div class="title">
              <span>实时地图</span>
            </div>
            <div id="map">
              <!-- <mapDrag lat="22.574405" lng="114.095388" @drag="dragMap" /> -->
            </div>
          </div>
        </div>
      </div>
      <div class="topRight">
        <div class="workorder">
          <div class="topTitle">
            <img src="./维修工组@2x.png">
            <span>工单信息</span>
          </div>
          <div class="">
            <div class="topContant">
              <div class="fl">工单号</div>
              <div class="fr">{{ orderDetail.orderNo }}</div>
            </div>
            <div class="topContant">
              <div class="fl">工单类别</div>
              <div class="fr">{{ orderDetail.orderType | orderTypeFil }}</div>
            </div>
            <div class="topContant">
              <div class="fl">维修类别</div>
              <div class="fr">{{ orderDetail.hitchType | hitchTypeFil }}</div>
            </div>
            <div class="topContant">
              <div class="fl">受理网点</div>
              <div class="fr">{{ orderDetail.reservationNetworkName }}</div>
            </div>
            <div class="topContant">
              <div class="fl">申请时间</div>
              <div class="fr">{{ orderDetail.reservationTime }}</div>
            </div>
            <div class="topContant">
              <div class="fl">状态</div>
              <div class="fr">{{ orderDetail.status | statusFil }}</div>
            </div>
            <div class="topContant">
              <div class="fl">工单地址</div>
              <div class="fr">{{ `${orderDetail.province}${orderDetail.city}${orderDetail.area}${orderDetail.addr}` }}</div>
            </div>
          </div>
          <p class="subTitle">工单描述</p>
          <p>{{ orderDetail.orderDes }}</p>
          <p class="subTitle">图片及视频</p>
          <div v-if="orderDetail.imagesUrl && orderDetail.imagesUrl.indexOf(',') !== -1">
            <img v-for="item in orderDetail.imagesUrl.split(',')" :key="item" :src="item">
          </div>
          <video controls width="250">
            <source :src="orderDetail.videoUrl" type="video/webm">
          </video>
        </div>
      </div>
    </div>
    <div class="bottomBox">
      <div class="botLeft">
        <div class="title">
          <span>支付费用</span>
        </div>
        <div class="workorder">
          <div class="topContant">
            <div class="fl">工时费</div>
            <div class="fr">{{ orderDetail.workHoursMoney }}</div>
          </div>
          <div class="topContant">
            <div class="fl">零件费</div>
            <div class="fr">{{ orderDetail.partMoney }}</div>
          </div>
          <div class="topContant">
            <div class="fl">其他</div>
            <div class="fr">{{ orderDetail.otherMoney }}</div>
          </div>
          <div class="topContant">
            <div class="fl">合计</div>
            <div class="fr">{{ orderDetail.totalMoney }}</div>
          </div>
        </div>
      </div>
      <div class="botCenter">
        <div class="title">
          <span>工单进程</span>
        </div>
        <el-steps :active="step" align-center>
          <el-step title="工单申报" :description="orderDetail.acceptTime" />
          <el-step title="工单受理" :description="orderDetail.dispatchTime" />
          <el-step title="工单派遣" :description="orderDetail.reservationTime" />
          <el-step title="工单处置" :description="orderDetail.planCommitTime" />
          <el-step title="工单支付" :description="这是一段很长很长很长的描述性文字" />
          <el-step title="工单修理" :description="这是一段很长很长很长的描述性文字" />
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
              v-model="starLevel"
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
        <div class="workorder">
          <p>意见：{{ orderDetail.suggest ? orderDetail.suggest : '无建议' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { orderDetail, repairCompleteList, cancelList, repairProcessList } from '@/api/workOrder'
import { orderDetail } from '@/api/workOrder'
import img from './position.png'
import MapLoader from './AMap.js'
// import MapDrag from '@/components/MapDrag/mapDrag'
export default {
  components: {
    // MapDrag
  },
  filters: {
    statusFil(val) {
      switch (val) {
        case 'applied':
          return '工单已申报，待受理'
        case 'accepted':
          return '工单已受理，待派遣'
        case 'dispatched':
          return '工单已派遣，待处置'
        case 'planned':
          return '工单已处置,维修方案确定，待方案确定及支付'
        case 'paid':
          return '工单已支付，待修理'
        case 'close':
          return '工单已修理，完工'
        case 'canceled':
          return '工单已取消'
        default:
          break
      }
    },
    hitchTypeFil(val) {
      switch (val) {
        case 'servicing_repair':
          return '抢修'
        case 'servicing_rescue':
          return '救援(拖车)'
        case 'servicing_maintenance':
          return '保养'
        case 'servicing_other':
          return '（其他）'
        case 'maintain_overhaul':
          return '检修'
        case 'maintain':
          return '保养'
        case 'maintain_rectification':
          return '整改'
        case 'maintain_insurance':
          return '保险'
        case 'maintain_other':
          return '（其他）'
        default:
          break
      }
    },
    orderTypeFil(val) {
      switch (val) {
        case 'order_servicing':
          return '即时维修'
        case 'order_maintain':
          return '预约保养'
        default:
          break
      }
    }
  },
  data: () => ({
    value: 3.1,
    orderDetail: {
      starLevel: 3
    },
    step: 1,
    dataStutas: [
      { key: 'prdName', name: '	产品名称' },
      { key: 'prdModel', name: '产品型号' },
      { key: 'prdNum', name: '	产品数量' },
      { key: 'price', name: '单价' },
      { key: 'totalPrice', name: '总价' }
    ]
  }),
  computed: {
    starLevel() {
      return this.orderDetail.starLevel ? this.orderDetail.starLevel : this.value
    }
  },
  created() {
    this.getOrderDetail()
  },
  methods: {
    getOrderDetail() {
      this.orderNo = this.$route.query.queryId
      orderDetail({ 'orderNo': this.orderNo }).then(res => {
        console.log(res)
        if (res.code === 1) {
          this.orderDetail = res.data
          this.mapInit(res.data.coordinateX, res.data.coordinateY)
        }
      })
    },
    mapInit(x, y) {
      MapLoader().then(AMap => {
        console.log('地图加载成功')
        const mark_icon = new AMap.Icon({
          size: new AMap.Size(30, 30), // 图标尺寸
          image: img, // Icon的图像
          imageOffset: new AMap.Pixel(0, 0), // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(30, 30) // 根据所设置的大小拉伸或压缩图片
        })
        const m1 = new AMap.Marker({
          position: [x, y],
          icon: mark_icon
        })
        const map = new AMap.Map('map', {
          resizeEnable: true,
          center: [x, y],
          zoom: 10
        })
        map.add(m1)
      }, e => {
        console.log('地图加载失败', e)
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
  .btnBox{
    height: 60px;
    line-height: 60px;
    text-align: right;
    button{
      width: 130px;
      font-size: 14px;
    }
  }
  .title{
    display: inline-block;
    width:140px;
    height:34px;
    margin-top: 18px;
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
		@include clearfix;
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
					@include boxShadow;
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
					@include boxShadow ;
					margin-right: 30px;
					&:last-of-type{
            width: 770px;
            margin-right: 0px;
            #map{
              width: 710px;
              margin: 20px 30px;
              height: 400px;
            }
					}
				}
        .planReair{
          .workorder{
            margin: 0px 30px 40px 30px;
            .topContant{
              color: #666;
              .fr{
                width: 80%;
                text-align: right;
                white-space: pre;
                text-overflow: ellipsis;
                overflow: hidden;
              }
            }
            .subTitle{
              margin-top: 30px;
            }
          }
        }
			}
		}
		.topRight{
			width: 400px;
			@include boxShadow ;
      .workorder{
        margin: 10px 30px 40px 30px;
        .topTitle{
          span{
            color: $centerBg;
          }
        }
        .topContant{
          color: #666;
          .fr{
            width: 80%;
            text-align: right;
            white-space: pre;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        .subTitle{
          margin-top: 30px;
        }
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
      .topTitle{
        span{
          color: $centerBg;
        }
      }
      .workorder{
        margin: 10px 30px 40px 30px;
      }
      .topContant{
        color: #666;
      }
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
        padding: 25px 7px 10px 7px;
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
      .workorder{
        margin: 0px 30px 40px 30px;
      }
    }
  }
}
</style>
