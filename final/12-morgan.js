const express=require('express');
const app=express();
const morgan=require('morgan');

//predefined log formats
//app.use(morgan('tiny'));
// app.use(morgan('dev'));
//app.use(morgan('combined));

app.use('/api',morgan('dev'));

app.get('/',(req,res)=>{
    res.send("home");
});

app.get('/api/products',(req,res)=>{
    res.send("products");
});

app.get('/api/items',(req,res)=>{
    res.send("items");
});

app.listen(3000,()=>{
    console.log("The server is listening..");
});