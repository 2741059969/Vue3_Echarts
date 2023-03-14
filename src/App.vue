<template>
  <router-view/>
</template>
<script setup>
import { provide } from 'vue'
import * as echarts from 'echarts'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
provide('axios', axios)
provide('echarts', echarts)

</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-image: url(./assets/bg.jpg);
  background-position: top center;
  background-repeat: no-repeat;
  min-width: 1200px;
}
</style>
