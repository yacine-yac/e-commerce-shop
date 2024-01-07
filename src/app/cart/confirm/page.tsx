"use client";
import "./page.css";
import "../page.css"
import { useForm } from "react-hook-form";
import { Iclient } from "../../../../lib/models/clients"; 
import axios from "axios";
import { useCart } from "@/hooks/cart";
import { useState } from "react";
export default function Confirm(){
    const {register,setError,watch,handleSubmit,formState}=useForm<Iclient>();
    const errors=formState.errors;
    const {cart}=useCart(); 
    const submiting=async(data:Iclient)=>{ 
            const cartData=cart.items.map(x=>({quantity:x.quantity,price:x.price,product:x._id}));
            console.log(data,cart)
            const order={client:data,cart:{products:cartData}};
            if(cart.items.length>0)
                 try{
                    await axios.post('/api/order',order);
                    // push into success state
                 }catch(e){
                    setError("root",{type:"deps",message:"AN error is occured"});
                 }
            else
                    setError("root",{type:"deps",message:"the cart is empty"})
    }
    return <>
         <div className="pg pg-6 center-h">
            <div className="pg-form">
                 <h2>fill the application</h2>
                 <form id="contact-form" onSubmit={handleSubmit(submiting)}>
                    <label form="firstName">
                       <input {...register("firstName",{required:{value:true,message:"PLease set a correct First Name"}})}  id="firstName" type="text" name="firstName" placeholder="First name" /> 
                    </label> 
                    <label form="lastName">
                       <input {...register("lastName",{required:{value:true,message:"Please set a correct Last Name"}})} id="lastName" type="text" name="lastName" placeholder="Last name" />
                    </label>
                    <span>{errors.firstName?.message  || errors.lastName?.message}</span>
                    <label> 
                            <input {...register("contact.phone",{required:{value:true,message:"set a phone number"},pattern:{value:/^(0)(5|6|7){1}[0-9]{8}$/i,message:"Please set a correct phone number"}})} type="text"  placeholder="Phone"  />
                    </label>
                    <label>
                            <input {...register("contact.phone2",{required:{value:true,message:"Please confirm your number"},validate:(m)=>m==watch("contact.phone") || "your numbers are not identical"})} type="text"   placeholder="Confirm phone"  />
                    </label>
                    <span>{errors.contact?.phone?.message || errors.contact?.phone2?.message}</span>
                    <span>{errors.contact?.address?.province?.message || errors.contact?.address?.city?.message || errors.contact?.address?.street?.message }</span>
                    <label><input {...register('contact.email',{required:{value:true,message:"insert email"},pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Insert a valide email"}})} type="email"   placeholder="E-mail" /></label>
                    <span>{errors.contact?.email?.message}</span>
                    <label className="center-h" form="address">
                            <select {...register('contact.address.province',{required:{value:true,message:'Please select province'}})}>
                                <option value="">Wilaya</option>
                                <option value="1">adrar</option>
                                <option value="2">alger</option>
                                <option value="3">oran</option>
                                <option value="4">sba</option>
                            </select>
                            <select {...register("contact.address.city",{required:{value:true,message:'Please select city'}})}>
                                <option value="">Commune</option>
                                <option value="1">ddddd</option>
                                <option value="2">cccc</option>
                                <option value="3">aaaaa</option>
                                <option value="4">qqqqq</option>
                            </select>
                            <input  {...register("contact.address.street",{required:{value:true,message:"Please write your adress"}})} type="text" id="address" placeholder="Adress" />
                    </label> 
                    <span>{errors.contact?.address?.city?.message}</span>
                 </form>
            </div>
            <div className="s-1 p-bottom s-1-two">
                <span>{errors.root?.message}</span>
                <button type="submit" form="contact-form" >finish</button>
            </div>
         </div>
    </>
}