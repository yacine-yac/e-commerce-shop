import Products from "../products";
import orderState from "./orderState";

const {Schema}=require('mongoose');
const orders=new Schema({
    number:{type:Number,index:true,unique:true},
    client:{type:Array(Number)},
    products:{type:Array({quantity:Number,product:Products})},
    total:{type:Number},
    deliveryPrice:{type:Number},
    state:{type:orderState}
});
export default orders;