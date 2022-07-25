import  Jwt  from "jsonwebtoken";
import createError from "../controllers/errorCreateController.js";


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

// check user is authenticated or not
export const adminMiddleware = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401,"You are not authenticated"))
    }

    // if logged in
    const login_user = Jwt.verify(token,process.env.JWT_SECRET)
    if(!login_user){
        return next(createError(401,"invalid token"))
    }
    if(!login_user.isAdmin){
        return next(createError(401,"Only admin can access this feture"))
    }
  
    if(login_user){
        req.user = login_user
        next()
    }
}

