import { Schema } from "mongoose";
import { Istock } from "../../../models/stock";

type T_stock={value:Number,time:Date};
const mongoose=require('mongoose');
const stock:Schema<Istock>=new mongoose.Schema({
    value:{type:Number,required:true},
    oldest:{type:{ ...{} as T_stock,oldest:{} as T_stock}},
    time:{type:Date,required:false,default:Date.now()}
})
export default stock;