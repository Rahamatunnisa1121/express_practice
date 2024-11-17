const express=require('express');
const app=express();
const morgan=require('morgan');

//creating a log format string with predefined tokens available in morgan
app.use(morgan(':method , :url , :status , :response-time ms , :res[content-length] , :date , :user-agent , :http-version , :remote-addr '));

app.get('/',(req,res)=>{
    res.send("home");
});

app.listen(3000,()=>{
    console.log("The server is listening..");
});