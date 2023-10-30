const mongoose=require('mongoose');

const orderState=new mongoose.Schema({
    current:{type:String,required:true},
    time:{type:Date,required:true,default:Date.now()},
    description:{type:String,required:false},
    history:{type:this,default:null}
})
export default orderState;