<template>
  <!-- <p>图3</p> -->
  <div id="mychart3" class="mychart3">

  </div>
</template>

<script setup>
import { inject, onMounted, reactive } from 'vue'
const $echarts = inject('echarts')
const $axios = inject('axios')
let data = reactive({})
onMounted(() => {
  async function getData3 () {
    data = await $axios.get('/three/data')
    data = data.data.chartData
  }
  const mychart3 = $echarts.init(document.getElementById('mychart3'))
  window.onresize = function () {
    mychart3.resize()
  }
  getData3().then(() => {
    // console.log(data)

    mychart3.setOption({
      title: {
        text: '产品统计分析图',
        x: 'center',
        y: 'bottom'
      },
      tooltip: {
        trigger: 'item',
        borderRadius: 30
      },
      legend: {
        left: 'left',
        orient: 'vertical'
      },

      series: [{
        data,
        label: {
          position: 'inside',
          show: true
        },
        roseType: 'area',
        radius: [10, 100],
        center: ['50%', '45%'],
        type: 'pie'
      }]
    })
  })
})
</script>

<style lang="less" scoped>
.mychart3{
  height: 5.1rem;
  // border: 1px solid black;
}
</style>
