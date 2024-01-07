
import { NextRequest, NextResponse } from "next/server";
import { Clients, Orders } from "../../../../lib/db/schema";
import mongoose from "mongoose";
import { stat } from "fs";
import { Iorder } from "../../../../lib/models/orders";
import { Iclient } from "../../../../lib/models/clients";
import { Delivery } from "@/model/order/delivery";
import { OrderModel } from "@/model/order";
import GlobalState from "../../../../lib/db/schema/orders/globalState";

export async function POST(req:NextRequest,params:{client:{},cart:{}}){
  const order:{client:Iclient,cart:{products:[],delivery:number}}=await req.json();
  let status,message,state=false;
  // filter before 
  if(order.client && order.cart){
        try{ 
           const client=new Clients(order.client);
           const clientCreated= await client.save();
           console.log(clientCreated)
           const orderModel=new OrderModel(clientCreated._id,order.cart.products);
           await orderModel.setOrderNumber();
           orderModel.setDelivery(client.contact.address.province,client.contact.address.city);
           orderModel.setState("order")
           const insertCart=new Orders(orderModel);
           const insertedOrder= await insertCart.save();
           status=201;message="your order is successfuly created";state=true;
        }catch(e){
           status=404;message="Insert order problem";
           console.log(e);
        }
  }else{
           status=404;message="Provide more data please!"
  }
  return NextResponse.json({message,state},{status})
}