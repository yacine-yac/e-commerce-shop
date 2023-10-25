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
    client:number [],
    products:{quantity:number}[],
    total:number,
    deliveryPrice:number,
    state:{
    current:string,
    time:Date,
    description:string,
    history:IorderState[]
}
}

