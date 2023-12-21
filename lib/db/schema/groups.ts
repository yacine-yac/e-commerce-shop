import { autoIncrement } from "mongoose-plugin-autoinc";
const {Schema}=require('mongoose');

const groups=new Schema({
     id:{type:Number,required:true,unique:true},
     name:{type:String,required:true,unique:true},
     categories:[{type:Schema.Types.ObjectId,ref:"categories",required:true}]
});
groups.plugin(autoIncrement,{model:"groups",field:"id",startAt:1})

export default groups;