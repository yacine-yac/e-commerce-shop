import { autoIncrement } from "mongoose-plugin-autoinc";
import {mdb} from "./index";
const {Schema}=require('mongoose');

const category=new Schema({
    id:{type:Number,required:true,unique:true},
    name:{type:String,required:true,unique:true},
    products:[{type:Schema.Types.ObjectId,ref:"products",required:true}],
    groups:{type:Schema.Types.ObjectId,ref:"groups",required:true},
});
category.plugin(autoIncrement,{model:"categories",field:'id',startAt:1});
category.post('save',async function(doc:any){
    
    const {groups}= mdb.models;
    await  groups.findOneAndUpdate({_id:doc.groups},{$push:{categories:doc._id}}); 
});
export default category;