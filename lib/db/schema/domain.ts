const {Schema}=require('mongoose');
const domain=new Schema({
    id:{type:Number,index:true,unique:true},
    name:{type:String,required:true,unique:true},
    product:{type:[Number],required:true}
});
export default domain; 