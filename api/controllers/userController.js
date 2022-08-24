import User from '../models/User.js';
import createError from './errorCreateController.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import sendSms from '../utility/sendSms.js';
import VerifyCode from '../models/VerifyCode.js';
import createToken from '../utility/createToken.js';
import sendEmail from '../utility/sendEmail.js';
import Token from '../models/Token.js';

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
        console.log(error);
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
        console.log(error);
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
        console.log(error);
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
        console.log(error);
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
            return next(createError(404,"user not found"));
             
         }
 
         if(data){
             res.status(200).json(data)
         }
    }catch(error){
        next(error)
        console.log(error);
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
        console.log(error);
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

        // verify code genarate
        let randomCode = Math.floor((Math.random() * 100) + 545269);
        await VerifyCode.create({userId:data._id,code:randomCode})
        sendSms('01920354886',`Hi ${data.name},wellcome to my facebook it's your ${randomCode} code`);
        res.status(200).json(data)
    }catch(error){
        next(error)
        console.log(error);
    }

};


export const verifyAccount = async (req,res,next)=>{
    const {code} = req.body
    const verify_code = await VerifyCode.findOne({code : code});
    if(!verify_code){
        next(createError(404,"invalid verify code"))
    }

    if(verify_code){
        await User.findByIdAndUpdate(verify_code.userId,{
            isVerify : true

        });
        res.status(200).json({message : "user account verify successful"});
        verify_code.remove();
    }
}

/**
 * @access public
 * @route /api/user/me
 * @method GET 
 */

export const getLoggedUser = async (req,res,next)=>{

   try{
        const barar_token =  req.headers.authorization;

        if(!barar_token){
            next(createError(404,"token not found"))
        }

        let token = '';

        if(barar_token){
        token =   barar_token.split(' ')[1]
        }

        let logged_user = jwt.verify(token,process.env.JWT_SECRET);

        if(!logged_user){
            next(createError(401,"invalid token"))
        };

        const user = await User.findById(logged_user.id)
        res.status(200).json(user);

   }catch(error){
    next(error)
   }

}


export const recoverpassword = async (req,res,next)=>{

    if(req.body.email){
        try{
            const user = await User.findOne({email : req.body.email});
    
            if(!user){
                next(createError(404,"no user for this email"));
            };
    
            if(user){
              let token =   createToken(user._id,'60s');

              await Token.create({userId : user._id,token : token});

              let reset_password_link = `http://localhost:3000/login/reset-password/url/${token}`;

              sendEmail(user.email,'reset-password',reset_password_link);

              res.status(200).json({message : "Check email"})
            };
    
        }catch(error){
            next(error)
        }
    }else{
        next(createError(400,"field is required"));
    };
   
    
};


export const resetpassword = async (req,res,next)=>{


        try{
            if(!req.body.password && !req.body.token){
                next(createError(404,"invalid"));
            }

            if(req.body.password && req.body.token){
                const verify_token = jwt.verify(req.body.token,process.env.JWT_SECRET);
                if(!verify_token){
                    next(createError(400,"please resent code"))
                }
                if(verify_token){
                    
                    /* let verify_user = await Token.findOne({token : req.body.token});
    
                    if(!verify_user){
                        next(createError(404,"invalid url"));
                    };
    
                    if(verify_user){
                        const salt = await bcrypt.genSalt(10);
                        const hashPass = await bcrypt.hash(req.body.password,salt);
                
                        await User.findByIdAndUpdate(verify_user.userId,{
                            password : hashPass
                        },{new : true});
    
                        res.status(200).json({message : "All is well"})
    
                        verify_user.remove();
                     } */

                     const salt = await bcrypt.genSalt(10);
                     const hashPass = await bcrypt.hash(req.body.password,salt);
             
                     await User.findByIdAndUpdate(verify_user.userId,{
                         password : hashPass
                     },{new : true});
 
                     res.status(200).json({message : "All is well"})
                }
                
            }

            
         }catch(error){
             next(error);
         }
   
}