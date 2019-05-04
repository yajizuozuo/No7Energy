<template>
  <div class="timerBox">
    <div class="timeNum">
      <span>{{ hour }}</span>
      <span>{{ minute }}</span>
      <span>{{ second }}</span>
    </div>
    <p class="date">{{ year }}年{{ month }}月{{ date }}号  {{ week }}</p>
  </div>
</template>
<script>
export default {
  data: () => ({
    year: '',
    month: '',
    date: '',
    week: '',
    hour: '',
    minute: '',
    second: '',
    timer: null
  }),
  created() {
    this.timer = setInterval(() => {
      this.getLangTime()
    }, 1000)
  },
  beforeDestroy() {
    this.timer = null
  },
  methods: {
    dateFilter(date) { // 值小于10时，在前面补0
      if (date < 10) {
        return `0${date}`
      }
      return date
    },
    getLangTime() {
      const dateObj = new Date() // 表示当前系统时间的Date对象
      this.year = dateObj.getFullYear() // 当前系统时间的完整年份值
      this.month = this.dateFilter(dateObj.getMonth() + 1) // 当前系统时间的月份值
      this.date = this.dateFilter(dateObj.getDate()) // 当前系统时间的月份中的日
      const day = dateObj.getDay() // 当前系统时间中的星期值
      const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      this.week = weeks[day] // 根据星期值，从数组中获取对应的星期字符串
      this.hour = this.dateFilter(dateObj.getHours()) // 当前系统时间的小时值
      this.minute = this.dateFilter(dateObj.getMinutes()) // 当前系统时间的分钟值
      this.second = this.dateFilter(dateObj.getSeconds()) // 当前系统时间的秒钟值
    }
  }
}
</script>
<style lang="scss" scoped>
.timerBox {
  display: inline-block;
  width: 570px;
  height: 190px;
  background: url(./time.png) no-repeat center;
  background-size: cover;
  position: relative;
  .timeNum {
    padding: 36px 50px 0px 70px;
    color: #fff;
    text-align: center;
    span{
      margin-right: 40px;
      font-size: 80px;
      letter-spacing: 15px;
    }
    /* span:nth-child(2){
      margin-right: 30px;
    } */
    span:last-of-type{
      margin-right: 0px;
    }
  }
  .date {
    position: absolute;
    padding: 0;
    margin: 0;
    margin-left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    color: #333;
  }
}
</style>
