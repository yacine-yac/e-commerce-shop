import orderState from "./orderState";
import { Iorder } from "../../../models/orders";
import { Schema} from "mongoose"; 
import products from "../products";
const mongoose=require('mongoose');
const order:Schema<Iorder>=new mongoose.Schema({
    number:{type:Number,index:true,unique:true},
    client:{type:[Number]},
    products:{type:[{quantity:Number,product:products}]},
    total:{type:Number},
    deliveryPrice:{type:Number},
    state:{type:orderState}
});
export default order;