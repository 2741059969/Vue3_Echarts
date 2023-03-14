<template>
 <header><h1>Vue3.0+Echarts5.0 —— 数据可视化</h1></header>
 <section class="container">
  <section class="left">
   <item-page><item-one></item-one> </item-page>
    <item-page><item-two></item-two></item-page>
  </section>
  <section class="center">
    <china-map></china-map>
  </section>
  <section class="right">
      <item-page><item-three></item-three></item-page>
     <item-page><item-four></item-four></item-page>
  </section>
 </section>
</template>

<script >
import ItemPage from '@/components/itemPage.vue'
import ItemOne from '@/components/itemOne.vue'
import ItemTwo from '@/components/itemTwo.vue'
import ItemThree from '@/components/itemThree.vue'
import ItemFour from '@/components/itemFour.vue'
import ChinaMap from '@/components/ChinaMap.vue'
// import { inject } from 'vue'
export default {
  components: {
    ItemPage,
    ItemOne,
    ItemTwo,
    ItemThree,
    ItemFour,
    ChinaMap
  },
  setup () {
    // const echarts = inject('echarts')
    // console.log(echarts)
  }
}
</script>

<style lang="less" scoped>
header{
  width:100%;
  line-height: 1rem;
  text-align: center;
  height:1rem;
  background-color:rgba(0, 0, 255, .2);;
  h1{
   font-size: .375rem;
color:#fff;
text-align: center;
line-height: 1rem;
  }
}
.center{
  // border:1px solid black;

  margin:  0.25rem;
  padding: 0.125rem;
  height: 10.5rem;
}
.container{
   width: 100%;
//  min-width: 1000px;
// max-width: 2048px;
// margin: 0 auto;
// 盒子上10px 左右10px 下0的外边距
padding: .125rem .125rem 0;
// background-color: orange;
// border:1px solid red;
display: flex;
.left,.right{
flex:3;
// border: 1px solid red;
}
.center{
  flex:5;
}
}
</style>
