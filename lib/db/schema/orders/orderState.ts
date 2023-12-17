 
const mongoose=require('mongoose'); 
type T_history={current:String,time:Date,description:String}; 
const orderState=new mongoose.Schema({
    current:{type:String,required:true},
    time:{type:Date,required:true,default:Date.now()},
    description:{type:String,required:false},
    history:{type:{...{} as T_history, history:{} as T_history}}
})
export default orderState;