import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    username : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    cell : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    photo : {
        type : String,
    },
    age : {
        type : Number,
        required : true,
    },
    gender : {
        type : String,
    },
    isAdmin :{
        type : Boolean,
        default : false
    },
    status :{
        type : Boolean,
        default : true
    },
    trash :{
        type : Boolean,
        default : true
    },
},{
    timestamps : true,
    versionKey : false
})




export default mongoose.model('Student',studentSchema)