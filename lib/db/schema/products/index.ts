import Stock from "./stock";
import Catalog from "./catalog";
import Price from "./price";
import { Schema } from "mongoose";
import { Iproduct } from "../../../models/products";
import stock from "./stock";
import { Domains, mdb } from "..";
 

const mongoose=require('mongoose');

const products=new mongoose.Schema({
     codeBar:{type:String,required:true,unique:true},
     name:{type:String,required:true},
     description:{type:String,required:true},
     catalog:{type:Catalog,required:true},
     quantity:{type:stock ,required:true},
     price:{type:Price,required:true},
     domain:{type:Schema.Types.ObjectId,ref:"domains",required:true},
     category:[{type:Schema.Types.ObjectId,ref:"categories",required:true}]
});

products.post("save",async function(doc:any){
     const {domains}=mdb.models
        await  domains.findOneAndUpdate({_id:doc.domain},{$push:{products:doc._id}});
});
export default products;