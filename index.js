const express = require('express');
// const http = require('http');
// let server =http.createServer()

const router =express.Router();

const app=express();

 router.get('/',(req,res)=>{
 res.send({
     message:"hi"
 });

 });

app.use(router);
app.listen(3000,()=>{
    console.log('server');
});