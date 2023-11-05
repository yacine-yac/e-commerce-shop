import { autoIncrement } from "mongoose-plugin-autoinc";
const {Schema}=require('mongoose');
const domain=new Schema({
    id:{type:Number,required:true,unique:true},
    name:{type:String,required:true,unique:true},
    product:{type:[Number],required:true}
});

domain.plugin(autoIncrement,{model:"domains",field:'id',startAt:1});
export default domain; 