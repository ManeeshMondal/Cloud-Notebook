var jwt = require('jsonwebtoken');

 
// this is the secret jwt 
const jwt_Secret="iloveumon152311@pelling"


const fetchUser=(req,res,next)=>{
//get the user from the jwt token and add the id to the req object 
    const token=req.header('auth_token');
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"})
    }
    try {
        const data=jwt.verify(token,jwt_Secret);
        req.user=data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Please authenticate using a valid token"}) 
    }
    
}

module.exports=fetchUser;