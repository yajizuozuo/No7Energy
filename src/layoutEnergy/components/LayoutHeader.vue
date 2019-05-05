<template>
  <div class="header">
    <div class="content">
      <div class="logoBox">
        <div class="logo">
          <img src="./logo.png">
        </div>
        <div v-for="(item, index) in menuList" :key="index" :class="{active: item.active}" @click="getActive(item)">
          <i class="iconfont" :class="item.icon" />
          <span>{{ item.text }}</span>
        </div>
      </div>
      <div class="rightBox">
        <span>138****88888</span>
        <button>退出</button>
      </div>
    </div>
    <div class="lineBox" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  data: () => ({
    menuList: [{
      icon: 'iconshouyezhuanhuan',
      text: '首页',
      active: true
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
      active: false
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
    }
  },
  methods: {
    getActive(data) {
      this.menuList.forEach(item => {
        item.active = false
      })
      data.active = true
    },
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";
  .header {
    height: 87px;
    width: 100%;
    min-width: 1600px;
    /* border-bottom: 2px solid #679DFD; */
    .lineBox {
      width: 100%;
      height: 3px;
      background: $loginBtnBg;
    }
    .content {
      width: 100%;
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
          color: #d1d6dc;
          cursor: pointer;
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
      }
    }
  }
</style>
