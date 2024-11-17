const express=require('express');
const app=express();
const {products}=require('./data.js')

app.get('/api/v1/query',(req,res)=>{
    //console.log(req.params);
    //console.log(req.query);
    const {search,limit}=req.query;//destructuring assignment
    let sortedProducts=[...products];//spread operator, copied all products into new array
    if(search)
    {
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        });
    }
    if(limit)
    {
        sortedProducts=sortedProducts.slice(0,Number(limit));//The index at which to end the slice (exclusive) as 0 based index    
    }
    res.status(200).json(sortedProducts);
});

app.listen(5000,()=>{
    console.log("Server is listening on port 5000..");
});