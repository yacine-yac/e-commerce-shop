

const mongoose=require('mongoose');
const stockSh=new mongoose.Schema({
    value:{type:Number,required:true},
    oldest:{type:mongoose.Schema.Types.Nested,ref:'ProductQuantity',default:null},
    time:{type:Date,required:false,default:Date.now()}
})
export default stockSh;