const {Schema}=require('mongoose');
const category=new Schema({
    id:{type:Number,index:true,unique:true},
    name:{type:String},
    product:{type:Array},
    groups:{type:Array},
});
export default category;