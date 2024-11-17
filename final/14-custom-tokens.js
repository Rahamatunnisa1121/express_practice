const express=require('express');
const app=express();
const morgan=require('morgan');

//using user-defined/cutsom tokens -> building a middleware in morgan

morgan.token('type',(req,res)=>res.getHeader('content-type'));
morgan.token('type1',(req)=>req.query['user-id'] || 'guest');

app.use(morgan(':method, :url, :status, :type :type1'));

app.get('/',(req,res)=>{
    //res.setHeader('Content-Type','text/html');
    res.send("<h1>Home</h1>");
});

app.listen(3000,()=>{
    console.log("The server is listening..");
});