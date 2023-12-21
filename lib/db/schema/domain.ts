import { autoIncrement } from "mongoose-plugin-autoinc";
const {Schema}=require('mongoose');
const domain=new Schema({
    id:{type:Number,required:true,unique:true},
    name:{type:String,required:true,unique:true},
    products:[{type:Schema.Types.ObjectId,ref:"products",required:true}]
});

domain.plugin(autoIncrement,{model:"domains",field:'id',startAt:1});
export default domain; 