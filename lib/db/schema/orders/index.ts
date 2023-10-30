import orderState from "./orderState";
import { Iorder } from "../../../models/orders";
import { Schema} from "mongoose";  

const mongoose=require('mongoose');
const order:Schema<Iorder>=new mongoose.Schema({
    number:{type:Number,index:true,unique:true},
    client:{type:Number,required:true},
    products:{type:[
                    {
                        quantity:{type:Number,required:true},
                        product:{type:Number,required:true}
                    }
                   ],
                   required:true
            },
    total:{type:Number,required:true},
    deliveryPrice:{type:Number,required:true},
    state:{type:orderState,required:true}
});
export default order;