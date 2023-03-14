const express =require('express')
const router=require('./router')
const app=express()
app.use(function(req,res,next){
 res.header('Access-Control-Allow-Origin', '*')
 next()
})
app.use(router)
// app.get('/hello',(req,res)=>{
//   res.send({
//     code:0,
//     msg:'请求成功'
//   })
// })
app.listen(3000,function(){
  console.log('server is running at http://localhost:3000');
})