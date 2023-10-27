import Stock from "./stock";
import Catalog from "./catalog";
import Price from "./price";
import { Schema } from "mongoose";
import { Iproduct } from "../../../models/products";
 

const mongoose=require('mongoose');
const products:Schema<Iproduct>=new mongoose.Schema({
     codeBar:{type:String,required:true,unique:true},
     name:{type:String,required:true},
     description:{type:String,required:true},
     catalog:{type:Catalog,required:true},
     quantity:{type:Stock,required:true},
     price:{type:Price,required:true},
     domain:{type:[Number],required:true},
     category:{type:[Number],required:true}
});
export default products;