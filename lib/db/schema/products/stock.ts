const mongoose=require('mongoose');
const Stock={
    value:{type:Number,required:true},
    oldest:{type: mongoose.Schema.Types.ObjectId ,ref:"Stock"},
    time:{type:Date,required:false,default:Date.now()}
}
export default Stock;