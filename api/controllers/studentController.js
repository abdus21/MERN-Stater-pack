import Student from '../models/Student.js'
import createError from './errorCreateController.js';
import bcrypt from 'bcrypt'

/**
 * @access public
 * @route /api/student
 * @method GET 
 */
export const getAllStudent = async (req,res,next)=>{
    
    try{
        const data = await Student.find();
        if(!data){
            return next(createError(404,"student not found"))
             
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
 * @route /api/student:id
 * @method GET 
 */
export const getSingleStudent = async (req,res,next)=>{


    try{
        const data = await Student.findById(req.params._id);
        if(!data){
           return next(createError(404,"single student not found"))
            
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
 * @route /api/student
 * @method POST 
 */
 export const createStudent = async (req,res,next)=>{

    try{
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password,salt)
        const data = await Student.create({...req.body,
            password : hashPass
        });
        res.status(200).json(data)
    }catch(error){
        next(error)
    }

};




/**
 * @access public
 * @route /api/student:id
 * @method DELETE 
 */
export const deleteStudent = async (req,res,next)=>{

    try{
        const data = await Student.findByIdAndDelete(req.params.id);
        res.status(200).json(data)
    }catch(error){
        next(error)
    }
};


/**
 * @access public
 * @route /api/student:id
 * @method PUT/PATCH 
 */
export const updateStudent = async (req,res,next)=>{
    try{
        const data = await Student.findByIdAndUpdate(req.params.id,req.body,{
            new : true
        });
        res.status(200).json(data);
    }catch(error){
        next(error)
    }

    
};

