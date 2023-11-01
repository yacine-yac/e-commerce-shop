import { Iclient } from "../../../models/clients";
import {Schema} from "mongoose";
import contact from "./contact";
const mongoose=require('mongoose'); 

const client:Schema<Iclient> =new mongoose.Schema({
    id:{type:Number,index:true ,unique:true,required:true},
    lastName:{type:String,required:true},
    firstName:{type:String,required:true},
    order:{type:[Number],required:false},
    contact:{type:contact,required:true}
});
client.methods={
    addOrder(orderId:number){
        this.order.push(orderId);
        this.save();
    }
}

export default client;
