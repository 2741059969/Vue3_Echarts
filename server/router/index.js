const express=require('express')
const router=express.Router()
const onedata=require('../ChartData/one.json')
const twodata=require('../ChartData/two.json')
const threedata=require('../ChartData/three.json')
const fourdata=require('../ChartData/four.json')
const mapdata=require('../ChartData/china.json')
// console.log(onedata);
router.get('/one/data',(req,res)=>{
  res.send(onedata)
})
router.get('/two/data',(req,res)=>{
  res.send(twodata)
})
router.get('/three/data',(req,res)=>{
  res.send(threedata)
})
router.get('/four/data',(req,res)=>{
  res.send(fourdata)
})
router.get('/map/data',(req,res)=>{
  res.send(mapdata)
})
module.exports=router