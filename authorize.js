const authorize=(req,res,next)=>{
    const {user}=req.query;
    //destructing the user parameter from query part of the request url(present in the url, after ?)
    console.log(req.query);
    if(user==='john')
    {
        req.user={name:'john',id:3};
        next();
    }
    else
    {
        res.status(401).send('Unauthorized');
    }
};
module.exports=authorize;