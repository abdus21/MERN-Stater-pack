import mongoose from "mongoose";

const TokenSchema = mongoose.Schema({
  userId : mongoose.Types.ObjectId,
  token : {
    type: String
  }
},{
    timestamps : true,
    versionKey : false
})




export default mongoose.model('Token',TokenSchema)