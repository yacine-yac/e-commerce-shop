import { Schema } from "mongoose";
import contact from "./contact";
const mongoose=require('mongoose'); 
const clients:Schema=new mongoose.Schema({
    id:{type:Number,index:true ,unique:true},
    lastName:{type:String},
    firstName:{type:String},
    order:{type:Array()},
    contact:{type:contact}
});
export default clients;