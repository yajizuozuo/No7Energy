<template>
  <div class="">
    <button @click="gopage">登录</button>
  </div>
</template>
<script>
export default {
  methods: {
    gopage() {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>
<style lang="scss">

</style>
