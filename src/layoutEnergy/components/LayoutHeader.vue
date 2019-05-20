<template>
  <div class="header">
    <div class="content">
      <div class="logoBox">
        <div class="logo">
          <img src="./logo.png">
        </div>
        <div v-for="(item, index) in menuList" :key="index" :class="{active: item.active}">
          <span class="el-dropdown-link" @mouseover="mouseOver(item)" @mouseout="mouseout(item)" @click="goPage(item)">
            <i class="iconfont" :class="item.icon" />{{ item.text }}
          </span>
        </div>
      </div>
      <div class="rightBox">
        <span>{{ phoneNo }}</span>
        <button>退出</button>
      </div>
    </div>
    <div class="lineBox" />
    <div v-if="thirdMenuList.length > 0" class="twoMenuList">
      <div class="mainContent">
        <!-- <el-dropdown v-for="(item, index) in thirdMenuList" :key="index" :class="{active: item.active}" @command="handleCommand" >
          <span class="el-dropdown-link" @click.prevent="clickItem(item)">{{ item.text }}
          </span>
          <el-dropdown-menu v-if="item.children && item.children.length > 0" :class="{active: item.active}">
            <el-dropdown-item v-for="itemCell in item.children" :key="itemCell.text" :disabled='item.active' :command="itemCell">{{ itemCell.text }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown> -->
        <el-dropdown v-for="(item, index) in thirdMenuList" :key="index" :class="{active: item.active}" @command="handleCommand">
          <span class="el-dropdown-link" @mouseover="mouseOver(item)" @click="clickItem(item)" @mouseout="mouseout(item)">{{ item.text }}
          </span>
          <el-dropdown-menu v-if="item.children && item.children.length > 0" slot="dropdown" :class="{active: item.active}">
            <el-dropdown-item v-for="itemCell in item.children" :key="itemCell.text" :disabled="false" :command="itemCell">{{ itemCell.text }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" v-if="thirdMenuList.length > 0">
          <el-menu-item v-for="(item, index) in thirdMenuList" :key="item" :index="index">处理中心</el-menu-item>
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
        </el-menu> -->
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  data: () => ({
    thirdMenuList: [],
    menuList: [{
      icon: 'iconshouyezhuanhuan',
      text: '首页',
      active: false,
      router: '/dashboard'
    },
    {
      icon: 'iconqiche',
      text: '车主',
      active: false
    },
    {
      icon: 'iconfuwudiqiu',
      text: '站点',
      active: false
    },
    {
      icon: 'iconzhanghaoquanxianguanli',
      text: '员工',
      active: false
    },
    {
      icon: 'icontianshenpi',
      text: '合同',
      active: false
    },
    {
      icon: 'iconchucun',
      text: '财务',
      active: false
    },
    {
      icon: 'icongongdan',
      text: '工单',
      active: false,
      router: '/workorder',
      children: [
        {
          icon: 'icongongdan',
          text: '维修工单',
          active: false,
          router: '/workorder/repair',
          children: [
            {
              icon: 'icongongdan',
              text: '维修中',
              active: false,
              router: '/workorder/repair/repairProcess'
            },
            {
              icon: 'icongongdan',
              text: '维修完成',
              active: false,
              router: '/workorder/repair/repairComplete'
            }
          ]
        },
        {
          icon: 'icongongdan',
          text: '预约工单',
          active: false,
          router: '/workorder/reserve'
        },
        {
          icon: 'icongongdan',
          text: '撤销工单',
          active: false,
          router: '/workorder/cancel'
        }
      ]
    },
    {
      icon: 'iconhuowudui',
      text: '库房',
      active: false
    },
    {
      icon: 'iconjiesuanzhuanhuan',
      text: '结算',
      active: false
    }
    ]
  }),
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    },
    phoneNo() {
      const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
      return userInfo.phoneNo
    }
  },
  created() {
    this.getRouter()
  },
  methods: {
    clickItem(item) {
      this.$router.push({ path: item.router })
      this.getRouter()
    },
    handleCommand(command) {
      this.$router.push({ path: command.router })
      this.getRouter()
    },
    mouseOver(item) {
      // console.log(item)
      item.active = true
    },
    mouseout(item) {
      // console.log(item)
      item.active = false
      this.getRouter()
    },
    getRouter() {
      this.menuList.forEach(item => {
        item.active = false
      })
      this.menuList.map(item => {
        if (this.$route.path.indexOf(item.router) !== -1) {
          item.active = true
          if (item.children) {
            this.thirdMenuList = item.children
            this.thirdMenuList.map(item => {
              if (this.$route.path.indexOf(item.router) !== -1) {
                item.active = true
              } else {
                item.active = false
              }
            })
          } else {
            this.thirdMenuList = []
          }
        }
      })
    },
    goPage(item) {
      this.$router.push({ path: item.router })
      this.getRouter()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";
  .mainContent {
    width: 1600px;
    margin: 0 auto;
  }
  .el-dropdown-link {
    display: block;
  }
  .el-dropdown-menu {
    box-shadow: 0px 5px 15px 0px rgba(103,157,253,0.2);
    width: 130px;
    border: none;
    background: rgba(103, 158, 253, 0.8);
    /* left: 0px!important; */
    border-radius: 0px;
    margin: 0;
    li {
      font-size:12px;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:48px;
    }
  }
  .header {
    height: 87px;
    width: 100%;
    min-width: 1920px;
    position: relative;
    /* border-bottom: 2px solid #679DFD; */
    .twoMenuList {
      height: 50px;
      width: 100%;
      background: rgba(103, 158, 253, 0.4);
      bottom: 50px;
      left: 0px;
      .el-dropdown {
        line-height: 50px;
        height: 50px;
        color: rgba(103,158,253,1);
        text-align: center;
        width: 130px;
        cursor: pointer;
      }
      .active {
        color: #fff;
        background: #679EFD;
      }
      .el-dropdown-link {
        display: block;
      }
    }
    .lineBox {
      width: 100%;
      height: 3px;
      background: $loginBtnBg;
    }
    .content {
      width: 100%;
      min-width: 1600px;
      margin: 0 auto;
      height: 87px;
      .logoBox {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 87px;
        line-height: 87px;
        float: left;
        div {
          flex: 1;
          height: 87px;
          line-height: 87px;
          text-align: center;
          color: #67C9FD;
          font-size: 14px;
          cursor: pointer;
          i {
            padding-right: 10px;
          }
          img {
            width: 60px;
            vertical-align: middle;
          }
        }
        div.active{
          background: linear-gradient(0deg,rgba(103,158,253,1),rgba(102,244,254,1));
          color: #fff;
          position: relative;
        }
        div.active::after{
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 10px solid #fff;
        }
      }
      .rightBox {
        width: 15%;
        float: right;
        line-height: 90px;
        text-align: right;
        padding-right: 30px;
        span {
          font-size:14px;
          color: #679DFD;
          margin-right: 30px;
        }
        button {
          background: #679FFD;
          height: 34px;
          width: 80px;
          border-radius: 17px;
          color: #fff;
          outline: none;
          border: none;
        }
      }
    }
  }
</style>
