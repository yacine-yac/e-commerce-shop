import { constrainedMemory } from "process";
import { Iorder, IorderState } from "../../../lib/models/orders";
import { Iproduct } from "../../../lib/models/products"; 
import GlobalState from "../../../lib/db/schema/orders/globalState";
import order from "../../../lib/db/schema/orders";
import { Delivery } from "./delivery";

interface Icart{
    quantity:number,
    products:string
}

export class OrderModel{
    orderNumber:string;
    client:string;
    products:Icart[];
    deliveryPrice?:number;
    state?:IorderState
    constructor(client:string,cart:[]){
        this.orderNumber="";
        this.client=client;
        this.products=cart;
    }
    async setOrderNumber(){
       this.orderNumber= await GlobalState.generate();
    }
    public setState(current:string,description?:string,history?:IorderState){
            this.state={current, description,history};
            if(history) this.state.history=history;
    }
    public setDelivery(province:string,city:string){
        const delivery=new Delivery(province,city);
        this.deliveryPrice=delivery.getDeliveryPrice();
    }
}