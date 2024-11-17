const express=require('express');
const app=express();
const morgan=require('morgan');

//skip function returns a Boolean value based on whether the request should be skipped

app.use(morgan('tiny',{skip:(req)=>{
    return req.url.includes('/api') || req.url.includes('/items');
}}));

app.get('/',(req,res)=>{
    res.send("<h1>Home page</h1>");
});

app.get('/api/products',(req,res)=>{
    res.send("products");
});

app.get('/items',(req,res)=>{
    res.send("items");
});

app.listen(3000,()=>{
    console.log('Server is listening on the port 3000..');
});