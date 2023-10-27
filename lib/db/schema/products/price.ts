
const  mongoose=require('mongoose');
const Price={
    current:{type:Number,required:true},
    reduction:{type:Number,require:false,default:0},
    time:{type:Date,required:false,default:Date.now()},
    oldest:{type:mongoose.Schema.Types.ObjectId,ref:"Price"}
     
}
export default Price;