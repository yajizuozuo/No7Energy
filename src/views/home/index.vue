<template>
  <div class="homeBox">
    <div class="timerDiv">
      <timer />
    </div>
    <button @click="gopage">登录</button>
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
.homeBox{
  width: 100%;
  height: 100%;
  background: url(./background.png) no-repeat center;
  background-size: cover;
  .timerDiv{
    padding-top: 100px;
    text-align: center;
  }
}
</style>
