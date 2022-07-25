import mongoose from "mongoose";

// mongo DB connetion
const mongoDBConnection =async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_STRING);
        console.log(`mongo DB connection successful HOST : ${mongoose.connection.host} `.bgGreen.white);
    }catch(error){
        console.log(`${error}`.bgRed);
    }
}

export default mongoDBConnection