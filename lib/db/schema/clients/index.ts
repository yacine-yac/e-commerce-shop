import { Iclient } from "../../../models/clients";
import contact from "./contact";
import { autoIncrement } from "mongoose-plugin-autoinc";
const {Schema}=require('mongoose'); 

const client =new Schema({
    id:{type:Number,unique:true,required:true},
    lastName:{type:String,required:true},
    firstName:{type:String,required:true},
    orders:[{type:Schema.Types.ObjectId,ref:"orders",required:true}],
    contact:{type:contact,required:true}
});
client.methods={
    addOrder(orderId:number){
        this.order.push(orderId);
        this.save();
    }
}

client.plugin(autoIncrement,{model:"clients",field:"id",startAt:78549})
export default client;
