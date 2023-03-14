<template>
 <div id="mychart4" class="mychart4">

  </div>
</template>

<script setup>
import { inject, onMounted, reactive } from 'vue'
const $echarts = inject('echarts')
const $axios = inject('axios')
let data = reactive({})
let xdata = reactive([])
onMounted(() => {
  async function getData4 () {
    data = await $axios.get('/four/data')
  }
  const mychart4 = $echarts.init(document.getElementById('mychart4'))
  window.onresize = function () {
    mychart4.resize()
  }
  getData4().then(() => {
    // console.log(data)
    xdata = data.data.chartData.day
    // console.log(xdata)

    mychart4.setOption({
      xAxis: {
        type: 'category',
        data: xdata,
        axisLine: {
          lineStyle: {
            color: 'white'
          }
        }
      },
      grid: { // 组件离容器的距离
        left: '1%',
        right: '5%',
        bottom: '3%',
        containLabel: true // grid 区域是否包含坐标轴的刻度标签
      },
      legend: {

      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: 'white'
          }
        }
      },
      series: [{
        data: data.data.chartData.num.Chemicals,
        type: 'bar',
        name: '服饰',
        stack: 'Total', // 数据堆叠
        label: {
          // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
          show: true
        },
        emphasis: {
          // 高亮的图形样式和标签样式。
          focus: 'series' // 聚焦当前高亮的数据所在的系列的所有图形。
        }

      },
      {
        data: data.data.chartData.num.Clothes,
        type: 'bar',
        name: '数码',
        label: {
          // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
          show: true
        },
        emphasis: {
          // 高亮的图形样式和标签样式。
          focus: 'series' // 聚焦当前高亮的数据所在的系列的所有图形。
        },
        stack: 'Total' // 数据堆叠
      },
      {
        data: data.data.chartData.num.Electricals,
        type: 'bar',
        name: '家电',
        stack: 'Total', // 数据堆叠
        label: {
          // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
          show: true
        },
        emphasis: {
          // 高亮的图形样式和标签样式。
          focus: 'series' // 聚焦当前高亮的数据所在的系列的所有图形。
        }
      },
      {
        data: data.data.chartData.num.digit,
        type: 'bar',
        name: '家居',
        stack: 'Total', // 数据堆叠
        label: {
          // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
          show: true
        },
        emphasis: {
          // 高亮的图形样式和标签样式。
          focus: 'series' // 聚焦当前高亮的数据所在的系列的所有图形。
        }
      },
      {
        data: data.data.chartData.num.gear,
        type: 'bar',
        name: '日化',
        stack: 'Total', // 数据堆叠
        label: {
          // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
          show: true
        },
        emphasis: {
          // 高亮的图形样式和标签样式。
          focus: 'series' // 聚焦当前高亮的数据所在的系列的所有图形。
        }
      }]
    })
  })
})
</script>

<style lang="less" scoped>
.mychart4{

  height: 5.1rem;
}
</style>
