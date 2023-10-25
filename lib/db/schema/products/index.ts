import Stock from "./stock";
import Catalog from "./catalog";
import Price from "./price";
import { Schema } from "mongoose";
import { Iproduct } from "../../../models/products";
 

const mongoose=require('mongoose');
const products:Schema<Iproduct>=new mongoose.Schema({
     codeBar:{type:String},
     name:{type:String},
     description:{type:String},
     catalog:{type:Catalog},
     quantity:{type:Stock},
     price:{type:Price},
     domain:{type:[Number]},
     category:{type:[Number]}
});
export default products;