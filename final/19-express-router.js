const express=require('express');
const app=express();

const people=require('./routes/people');
const login=require('./routes/auth');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//base route of all those routes from people.js is present here
app.use('/api/people',people);

app.use('/login',login);

app.listen(3000,()=>{
    console.log('Server is listening on the port 3000...');
});