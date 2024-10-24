const express=require('express');
const app=express();
const {products}=require('./data.js')

app.get('/',(req,res)=>{
    //to send the json response and convert the data into a json string
    //content-type is also set sutomatically
    //res.json(products);

    res.send('<h1>Home page</h1><a href="/api/products">products</a>');
});

app.get('/api/products',(req,res)=>{
    const newProduct=products.map((product)=>{
        const {id,name,image}=product;//destructuring assignment
        return {id,name,image}
    });
    res.json(newProduct);
});

app.listen(5000,()=>{
    console.log("Server is listening on port 5000..");
});