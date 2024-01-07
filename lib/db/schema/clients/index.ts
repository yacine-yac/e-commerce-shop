import { Schema } from "mongoose";
import { Iclient } from "../../../models/clients";
import contact from "./contact"; 

const client:Schema<Iclient>=new Schema({
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

export default client;
