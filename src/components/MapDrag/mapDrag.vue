<script>
export default {
  async created() {
    // 已载入高德地图API，则直接初始化地图
    if (window.AMap && window.AMapUI) {
      this.initMap()
      // 未载入高德地图API，则先载入API再初始化
    } else {
      // await remoteLoad(`http://webapi.amap.com/maps?v=1.3&key=${MapKey}`)
      // await remoteLoad('http://webapi.amap.com/ui/1.0/main.js')
      this.initMap()
    }
  },
  methods: {
    initMap() {
      // 加载PositionPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
      const AMapUI = this.AMapUI = window.AMapUI
      const AMap = this.AMap = window.AMap
      const MapCityName = 'cs'
      AMapUI.loadUI(['misc/PositionPicker'], PositionPicker => {
        const mapConfig = {
          zoom: 16,
          cityName: MapCityName
        }
        if (this.lat && this.lng) {
          mapConfig.center = [this.lng, this.lat]
        }
        const map = new AMap.Map('js-container', mapConfig)
        // 加载地图搜索插件
        AMap.service('AMap.PlaceSearch', () => {
          this.placeSearch = new AMap.PlaceSearch({
            pageSize: 5,
            pageIndex: 1,
            citylimit: true,
            city: MapCityName,
            map: map,
            panel: 'js-result'
          })
        })
        // 启用工具条
        AMap.plugin(['AMap.ToolBar'], function() {
          map.addControl(new AMap.ToolBar({
            position: 'RB'
          }))
        })
        // 创建地图拖拽
        const positionPicker = new PositionPicker({
          mode: 'dragMap', // 设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
          map: map // 依赖地图对象
        })
        // 拖拽完成发送自定义 drag 事件
        positionPicker.on('success', positionResult => {
          // 过滤掉初始化地图后的第一次默认拖放
          if (!this.dragStatus) {
            this.dragStatus = true
          } else {
            this.$emit('drag', positionResult)
          }
        })
        // 启动拖放
        positionPicker.start()
      })
    }
  }
}
</script>
