import Stock from "./stock";
import Catalog from "./catalog";
import Price from "./price";
import { Schema } from "mongoose";
import { Iproduct } from "../../../models/products";
import stock from "./stock";
 

const mongoose=require('mongoose');

const products:Schema<Iproduct>=new mongoose.Schema({
     codeBar:{type:String,required:true,unique:true},
     name:{type:String,required:true},
     description:{type:String,required:true},
     catalog:{type:Catalog,required:true},
     quantity:{type:stock ,required:true},
     price:{type:Price,required:true},
     domain:[{type:Schema.Types.ObjectId,ref:"domains",required:true}],
     category:[{type:Schema.Types.ObjectId,ref:"categories",required:true}]
});
export default products;