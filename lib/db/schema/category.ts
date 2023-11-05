import { autoIncrement } from "mongoose-plugin-autoinc";
const {Schema}=require('mongoose');

const category=new Schema({
    id:{type:Number,required:true,unique:true},
    name:{type:String,required:true,unique:true},
    products:{type:[Number],required:true},
    groups:{type:[Number],required:true},
});
category.plugin(autoIncrement,{model:"categories",field:'id',startAt:1});
export default category;