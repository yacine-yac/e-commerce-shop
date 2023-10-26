const {Schema}=require('mongoose');

const groups=new Schema({
     id:{type:Number,index:true,unique:true},
     name:{type:String,required:true,unique:true},
     categories:{type:[Number],required:true}
});
export default groups;