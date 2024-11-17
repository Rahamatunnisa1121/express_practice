const express=require('express');
const app=express();
const morgan=require('morgan');
const fs=require('fs');
const path=require('path');

const accessLogStream=fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'});

//{ stream: accessLogStream } configures Morgan to write logs to the accessLogStream, so each request log is appended to access.log.
app.use(morgan('combined',{stream:accessLogStream}));

app.get('/',(req,res)=>{
    res.send("<h1>Logging to a file!</h1>");
});

app.listen(3000,()=>{
    console.log('Server is listening on the port 3000..');
});