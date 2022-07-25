import User from '../models/User.js';
import createError from './errorCreateController.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

/**
 * @access public
 * @route /api/user
 * @method GET 
 */
export const getAllUser = async (req,res,next)=>{
    
    try{
        const data = await User.find();
        if(!data){
            return next(createError(404,"user not found"))
             
         }
 
         if(data){
             res.status(200).json(data)
         }
    }catch(error){
        next(error)
    }
    
};




/**
 * @access public
 * @route /api/user:id
 * @method GET 
 */
export const getSingleUser = async (req,res,next)=>{


    try{
        const data = await User.findById(req.params.id);
        if(!data){
           return next(createError(404,"single user not found"))
            
        }

        if(data){
            res.status(200).json(data)
        }
        
    }catch(error){
        next(error)
    }
   
};



/**
 * @access public
 * @route /api/user
 * @method POST 
 */
 export const createUser = async (req,res,next)=>{

    try{
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password,salt)
        const data = await User.create({...req.body,
            password : hashPass
        });
        res.status(200).json(data)
    }catch(error){
        next(error)
    }

};




/**
 * @access public
 * @route /api/user:id
 * @method DELETE 
 */
export const deleteUser = async (req,res,next)=>{

    try{
        const data = await User.findByIdAndDelete(req.params.id);
        if(!data){
            return next(createError(404,"user not found"))
             
         }
 
         if(data){
             res.status(200).json(data)
         }

    }catch(error){
        next(error)
    }
};


/**
 * @access public
 * @route /api/user:id
 * @method PUT/PATCH 
 */
export const updateUser = async (req,res,next)=>{
    try{
        const data = await User.findByIdAndUpdate(req.params.id,req.body,{
            new : true
        });
        if(!data){
            return next(createError(404,"user not found"))
             
         }
 
         if(data){
             res.status(200).json(data)
         }
    }catch(error){
        next(error)
    }

    
};


/**
 * @access public
 * @route /api/user/login
 * @method POST 
 */
 export const userLogin = async (req,res,next)=>{


    try{
        const login_user = await User.findOne({email:req.body.email});
        // check user  exists or not
        if(!login_user){
            return next(createError(404,"user not found"))
        };

        // check password
        const passwordCheck = await bcrypt.compare(req.body.password,login_user.password)
        if(!passwordCheck){
            return next(createError(404,"wrong password"))
        };
        const token = jwt.sign({id:login_user._id,isAdmin:login_user.isAdmin},process.env.JWT_SECRET);

        // user info
        const {_id,isAdmin,password,...user_info} = login_user._doc
        res.cookie("access_token",token).status(200).json({
            token : token,
            user : user_info
        })

    }catch(error){

    }
    

};


/**
 * @access public
 * @route /api/user/register
 * @method POST 
 */
 export const userRegister = async (req,res,next)=>{

    try{
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password,salt)
        const data = await User.create({...req.body,
            password : hashPass
        });
        res.status(200).json(data)
    }catch(error){
        next(error)
    }

};
