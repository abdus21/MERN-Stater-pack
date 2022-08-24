import mongoose from "mongoose";

const VerifySchema = mongoose.Schema({
  userId : mongoose.Types.ObjectId,
  code : {
    type: String
  }
},{
    timestamps : true,
    versionKey : false
})




export default mongoose.model('Code',VerifySchema)