<template>
  <!-- <h3>中国地图</h3> -->
  <div class="chinamap" id="chinamap">
  </div>
</template>

<script setup>
import { inject, onMounted, reactive } from 'vue'

const $axios = inject('axios')
const $echarts = inject('echarts')
let mapdata = reactive({})
onMounted(() => {
  async function getmapData () {
    mapdata = await $axios.get('/map/data')
    // console.log(mapdata)
  }
  const mychart = $echarts.init(document.getElementById('chinamap'))
  getmapData().then(() => {
    window.onresize = function () {
      mychart.resize()
    }
    // console.log(mapdata)
    $echarts.registerMap('chinamap', mapdata.data)
    mychart.setOption({
      title: {
        text: '在不同城市的销售量',
        x: 'center',
        textStyle: {
          color: '#fff',
          // fontSize: 20,
          // textShadowBlur: 10, // 文字本身的阴影长度。
          textShadowColor: '#33ffff'
        }
      },
      geo: {
        type: 'map',
        map: 'chinamap',
        itemStyle: {
          // 地图区域的多边形 图形样式
          // areaColor: '#5599ff', // 地图区域的颜色。
          // borderColor: '#55ffff', // 图形的描边颜色。
          // shadowColor: 'rgba(230,130, 70, 0.5)', // 橙色
          // shadowBlur: 30, // 图形阴影的模糊大小
          emphasis: {
            // focus: 'self',
            self: 'self'
          }

        }
      },
      series: [
        {
          rippleEffect: {
          // 涟漪特效相关配置。
            number: 2, // 波纹的数量。
            scale: 3 // 动画中波纹的最大缩放比例
          },
          type: 'effectScatter', // 类型散点图
          itemStyle: { // 散点图的颜色
            color: 'red'
          },
          name: '所在城市销售额',
          coordinateSystem: 'geo', // 该系列使用的坐标系 geo使用地理坐标系
          data: [
            { name: '北京', value: [116.46, 39.92, 4367] },
            { name: '上海', value: [121.48, 31.22, 4275] },
            { name: '深圳', value: [114.07, 22.62, 3461] },
            { name: '广州', value: [113.23, 23.16, 2187] },
            { name: '西安', value: [108.45, 34, 1521] }
          ]
        }
      ],
      tooltip: {
        trigger: 'item'
      },
      visualMap: {
        type: 'continuous', // 连续型
        min: 100, // 值域最小值，必须参数
        max: 5000, // 值域最大值，必须参数
        calculable: true, // 是否启用滑动空间
        inRange: {
          color: ['#50a3ba', '#eac736', '#d94e5d'] // 指定数值从低到高时的颜色变化
        },
        textStyle: {
          color: '#fff' // 值域控件的文本颜色
        }
      }

    }
    )
  })
})
</script>

<style lang="less" scoped>
.chinamap{
  width: 100%;
  height: 100%;
}
</style>
