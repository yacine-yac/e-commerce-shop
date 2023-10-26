const {Schema}=require('mongoose');
const category=new Schema({
    id:{type:Number,required:true,index:true,unique:true},
    name:{type:String,required:true,unique:true},
    product:{type:[Number],required:true},
    groups:{type:[Number],required:true},
});
export default category;