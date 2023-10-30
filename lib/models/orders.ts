import orderState from "../db/schema/orders/orderState"
import { Iproduct } from "./products"
export interface IorderState{
    current:string,
    time:Date,
    description:string,
    history:IorderState[]
}
export interface Iorder{
    number:number,
    client:number,
    products:{quantity:number,product:number}[],
    total:number,
    deliveryPrice:number,
    state:{
    current:string, 
    description?:string,
    history?:IorderState[]
}
}

