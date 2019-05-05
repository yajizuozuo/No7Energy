<template>
  <!-- <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
        <tags-view v-if="needTagsView" />
      </div>
      <app-main />
    </div>
  </div> -->
  <el-container>
    <el-header>
      <layout-header />
    </el-header>
    <el-main>
      <app-main />
    </el-main>
  </el-container>
</template>

<script>
import { AppMain, LayoutHeader } from './components'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    LayoutHeader
  },
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
  .el-header {
    height: 90px!important;
    padding: 0;
  }
  .el-main {
    width: 100%;
    min-width: 1600px;
    background: url(./mainBackground.png) no-repeat center;
    background-size: cover;
  }
</style>
