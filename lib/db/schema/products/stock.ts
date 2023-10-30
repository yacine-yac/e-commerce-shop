import { Schema } from "mongoose";
import { Istock } from "../../../models/stock";


const mongoose=require('mongoose');
const stock:Schema<Istock>=new mongoose.Schema({
    value:{type:Number,required:true},
    oldest:this,
    time:{type:Date,required:false,default:Date.now()}
})
export default stock;