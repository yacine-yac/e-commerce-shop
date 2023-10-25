
const  mongoose=require('mongoose');
const Price={
    current:{type:Number},
    reduction:{type:Number,require:false},
    time:{type:Date},
    oldest:{type:mongoose.Schema.Types.ObjectId }
}
export default Price;