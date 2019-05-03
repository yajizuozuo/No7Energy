<template>
  <div class="header">
    <div class="logoBox">
      <div class="logo">
        <img src="./logo.png">
      </div>
      <div v-for="item in menuList" :key="item">
        <i class="iconfont" :class="item.icon" />
        <span>{{ item.text }}</span>
      </div>
    </div>
    <div class="rightBox">
      <span>138****88888</span>
      <button>退出</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  data: () => ({
    menuList: [{
      icon: 'iconshouyezhuanhuan',
      text: '首页'
    },
    {
      icon: 'iconqiche',
      text: '车主'
    },
    {
      icon: 'iconfuwudiqiu',
      text: '站点'
    },
    {
      icon: 'iconzhanghaoquanxianguanli',
      text: '员工'
    },
    {
      icon: 'icontianshenpi',
      text: '合同'
    },
    {
      icon: 'iconchucun',
      text: '财务'
    },
    {
      icon: 'icongongdan',
      text: '工单'
    },
    {
      icon: 'iconhuowudui',
      text: '库房'
    },
    {
      icon: 'iconjiesuanzhuanhuan',
      text: '结算'
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
    height: 90px;
    border-bottom: 2px solid #679DFD;
    .logoBox {
      width: 85%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 90px;
      float: left;
      div {
        flex: 1;
        img {
          width: 60px;
        }
      }
    }
    .rightBox {
      width: 15%;
      float: left;
      line-height: 90px;
    }
  }
</style>
