const express=require('express');
const app=express();
let {people}=require('./data')

app.use(express.static('./methods-public'));

app.use(express.urlencoded({extended:false}));
//urlencoded parses url-encoded data into json => name=john&age=10 -> {name:'john', age:'10' }

//extended: false specifies that express.urlencoded 
//should use the querystring library to parse the data with simple key value pair
//if true, uses advanced qs library that parses nested arrays too.

app.use(express.json()); //to parse json data from req body

app.get('/api/people',(req,res)=>{
    return res.status(200).json({success:true,data:people});
});

app.post('/api/people',(req,res)=>{
    const {name}=req.body; //express.json() parsed the incoming json data in the req.body
    //console.log(name);
    if(!name)
    {
        return res.status(400).json({success:false,msg:'Please provide a value for name.'});
    }
    res.status(201).json({Success:true,person:name});
});

//post req -> req.body contains info
app.post('/login',(req,res)=>{
    let {name}=req.body;
    if(name)
    {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(200).send('Please provide credentials!');
});

app.post('/api/postman/people',(req,res)=>{
    let {name}=req.body;
    if(!name)
    {
        return res.status(400).json({success:false,msg:'Please provide a value for name.'});
    }
    res.status(200).send({Success:true,data:[...people,{"name":name}]});
});

app.put('/api/people/:id',(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    // console.log(id,name);
    // res.send('hello world!');
    const person=people.find((person)=>person.id===Number(id)); //as id will be parsed as string from the req.params
    if(!person)
    {
        return res.status(400).json({success:false,msg:`no person exists with id ${id}`});
    }
    const newPeople=people.map((person)=>{
        if(person.id===Number(id))
        {
            person.name=name;
        }
        return person;
    });
    //the newPeople array changes as the requests are made at the specified id.
    //console.log(newPeople);
    return res.status(200).send({Success:true,data:newPeople});
});

app.delete('/api/people/:id',(req,res)=>{
    const person=people.find((person)=>person.id===Number(req.params.id)); //as id will be parsed as string from the req.params
    if(!person)
    {
        return res.status(404).json({success:false,msg:`no person exists with id ${req.params.id}`});
    }
    const newPeople=people.filter((person)=>
        {
            if(person.id!==Number(req.params.id))
            {
                return person;
            }
        }
        //person.id!==Number(req.params.id)
        //if the condition is satisfied, the person is filtered ana added to newpeople
    );
    return res.status(200).send({Success:true,data:newPeople});
});

app.listen(3000,()=>{
    console.log('Server is listening on the port 3000...');
});