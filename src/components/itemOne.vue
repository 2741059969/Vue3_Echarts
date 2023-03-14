<template>
  <div id="mychart1" class="mychart1">
  </div>
</template>

<script >
import { inject, onMounted, reactive } from 'vue'
export default {

  setup () {
    let data = reactive({})
    let xdata = reactive([])
    let ydata = reactive([])
    const $echarts = inject('echarts')
    const $axios = inject('axios')
    onMounted(() => {
      const mychart1 = $echarts.init(document.getElementById('mychart1'))
      // const xdata = reactive([])
      // const ydata = reactive([])
      async function getData () {
        data = await $axios.get('/one/data')
        // console.log(data)
      }
      window.onresize = function () {
        mychart1.resize()
      }
      getData().then(() => {
        // console.log(data)
        // xdata = data.data.chartData.map(v => v.title)
        xdata = data.data.chartData.map(v => v.title)
        ydata = data.data.chartData.map(v => v.num)
        // console.log(xdata, ydata)
        mychart1.setOption({
          yAxis: {
            type: 'category',
            data: xdata,
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            }
          },
          grid: {
            left: '15%',
            // top: '0%',
            right: '5%'
            // bottom: '0%'
          },
          legend: {
            icon: 'circle',
            // inactiveColor: 'red',
            selectedMode: false,
            show: true,
            Color: 'red'
          },
          tooltip: {
            trigger: 'item'

          },

          xAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: 'white'
              }
            }
          },
          series: [{
            type: 'bar',
            name: '产品销售量',
            data: ydata,
            markPoint: {
              data: [
                { type: 'max' },
                { type: 'min' }
              ]
            },
            markLine: {
              data: [{
                type: 'average',
                name: '平均值'
              }]
            },
            itemStyle: {
              normal: {
                barBorderRadius: [0, 20, 20, 0],
                color: function (params) {
                  const colorlist = ['red', 'yellow', 'blue', 'orange', 'grey', 'green', 'aqua']
                  return colorlist[params.dataIndex]
                }
              }
            }
          }]
        })
      })

      // getData()
      // console.log(data)
      // console.log(data.data.data)
      // getData(data)
      // console.log(data)
      // console.log(111)
      // console.log(data, xdata, ydata)
    })
    return { data }
  }
}

</script>

<style lang="less" scoped>

.mychart1{
/* 高度360 */
height: 5.1rem;
// border:1px solid red
// background-color: gray;
}
</style>
