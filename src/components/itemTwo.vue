<template>
 <div id="mychart2" class="mychart2">

  </div>
</template>

<script setup>
import { inject, onMounted, reactive } from 'vue'
const $echarts = inject('echarts')
const $axios = inject('axios')
let data = reactive({})
let xdata = reactive([])
onMounted(() => {
  async function getData2 () {
    data = await $axios.get('/two/data')
  }
  const mychart2 = $echarts.init(document.getElementById('mychart2'))
  window.onresize = function () {
    mychart2.resize()
  }
  getData2().then(() => {
    // console.log(data)
    xdata = data.data.chartData.day
    // console.log(xdata)

    mychart2.setOption({
      title: {
        text: '产品周销图',
        x: 'center',
        y: '10%',
        textStyle: {
          // fontSize: 15,
          fontWeight: 'bold'
        }
      },
      xAxis: {
        type: 'category',
        data: xdata,
        boundaryGap: false,
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
        type: 'line',
        name: '服饰',
        areaStyle: {
          lineStyle: { // 设置线段样式
            width: 0
          },
          color: 'orange',
          emphasis: { // 设置高亮的图形样式和标签样式
            focus: 'series' // 只显示选中的内容高亮
          }
        },
        stack: 'Total', // 数据堆叠
        smooth: true,
        showSymbol: false
      },
      {
        data: data.data.chartData.num.Clothes,
        type: 'line',
        name: '数码',
        areaStyle: {
          lineStyle: { // 设置线段样式
            width: 0
          },
          emphasis: { // 设置高亮的图形样式和标签样式
            focus: 'series' // 只显示选中的内容高亮
          }
        },
        stack: 'Total', // 数据堆叠
        smooth: true,
        showSymbol: false
      },
      {
        data: data.data.chartData.num.Electricals,
        type: 'line',
        name: '家电',
        stack: 'Total', // 数据堆叠
        areaStyle: {
          lineStyle: { // 设置线段样式
            width: 0
          },
          emphasis: { // 设置高亮的图形样式和标签样式
            focus: 'series' // 只显示选中的内容高亮
          }
        },
        smooth: true,
        showSymbol: false
      },
      {
        data: data.data.chartData.num.digit,
        type: 'line',
        name: '家居',
        stack: 'Total', // 数据堆叠
        areaStyle: {
          lineStyle: { // 设置线段样式
            width: 0
          },
          emphasis: { // 设置高亮的图形样式和标签样式
            focus: 'series' // 只显示选中的内容高亮
          }
        },
        smooth: true,
        showSymbol: false
      },
      {
        data: data.data.chartData.num.gear,
        type: 'line',
        name: '日化',
        stack: 'Total', // 数据堆叠

        areaStyle: {
          color: 'blue',
          lineStyle: { // 设置线段样式
            width: 0
          },
          emphasis: { // 设置高亮的图形样式和标签样式
            focus: 'series' // 只显示选中的内容高亮,
            // self: 'self'
          }
        },
        smooth: true,
        showSymbol: false
      }]
    })
  })
})
</script>

<style lang="less" scoped>
.mychart2{
 height: 5.1rem;
}
</style>
