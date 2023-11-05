import { Iclient } from "../../../models/clients";
import {Schema} from "mongoose";
import contact from "./contact";
import { autoIncrement } from "mongoose-plugin-autoinc";
const mongoose=require('mongoose'); 

const client:Schema<Iclient> =new mongoose.Schema({
    id:{type:Number,unique:true,required:true},
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

<<<<<<< HEAD
export default client;
=======
client.plugin(autoIncrement,{model:"clients",field:"id",startAt:78549})
export default client;
>>>>>>> cb14f47 (define plugin for auto increment ids)
