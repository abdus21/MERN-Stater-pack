import  jwt  from "jsonwebtoken";

const createToken = (id,expier = '2d')=>{
    return jwt.sign({id:id},process.env.JWT_SECRET,{
        expiresIn : expier
    });
}

export default createToken