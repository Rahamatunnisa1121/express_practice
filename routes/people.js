const express=require('express');
const router=express.Router();

let {people}=require('../data');

router.get('/',(req,res)=>{
    return res.status(200).json({success:true,data:people});
});

router.post('/',(req,res)=>{
    const {name}=req.body;
    if(!name)
    {
        return res.status(400).json({success:false,msg:'Please provide a value for name.'});
    }
    res.status(201).json({Success:true,person:name});
});

router.post('/postman',(req,res)=>{
    let {name}=req.body;
    if(!name)
    {
        return res.status(400).json({success:false,msg:'Please provide a value for name.'});
    }
    res.status(200).send({Success:true,data:[...people,{"name":name}]});
});

router.put('/:id',(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
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
    return res.status(200).send({Success:true,data:newPeople});
});

router.delete('/:id',(req,res)=>{
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
    );
    return res.status(200).send({Success:true,data:newPeople});
});

module.exports=router;