"use client";
import "./page.css";
import "../page.css"
import { useForm } from "react-hook-form";
import { Iclient } from "../../../../lib/models/clients"; 
import axios from "axios";
export default function Confirm(){
    const {register,watch,handleSubmit}=useForm<Iclient>();
    console.log(watch("firstName"));
    console.log(watch("contact.email"));
    console.log(watch("contact.address"));
    console.log(watch("contact.address.street"));
    const submiting=async(data:Iclient)=>{
            try{
                    await  axios.post('/api/cart',JSON.stringify(data));
            }catch(e){
                
            }
    }
    return <>
         <div className="pg pg-6 center-h">
            <div className="pg-form">
                 <h2>fill the application</h2>
                 <form id="contact-form" onSubmit={handleSubmit(submiting)}>
                    <label form="firstName">
                       <input {...register("firstName")}  id="firstName" type="text" name="firstName" placeholder="First name" /> 
                    </label> 
                    <label form="lastName">
                       <input {...register("lastName")} id="lastName" type="text" name="lastName" placeholder="Last name" />
                    </label>
                    <span>error message</span>
                    <label> 
                            <input {...register("contact.phone")} type="text" name="phone" placeholder="Phone"  />
                    </label>
                    <label>
                            <input type="text" name="phone2" placeholder="Confirm phone"  />
                    </label>
                    <span>error message</span>
                    <label><input {...register('contact.email')} type="email"   placeholder="E-mail" /></label>
                    <span>error message</span>
                    <label className="center-h" form="address">
                            <select {...register('contact.address.province')}>
                                <option value="province">Wilaya</option>
                                <option value="1">adrar</option>
                                <option value="2">alger</option>
                                <option value="3">oran</option>
                                <option value="4">sba</option>
                            </select>
                            <select {...register("contact.address.city")}>
                                <option value="-1">Commune</option>
                                <option value="1">ddddd</option>
                                <option value="2">cccc</option>
                                <option value="3">aaaaa</option>
                                <option value="4">qqqqq</option>
                            </select>
                            <input  {...register("contact.address.street")} type="text" id="address" placeholder="Adress" />
                    </label> 
                    <span>error message</span>



                 </form>
            </div>
            <div className="s-1 p-bottom s-1-two">
                <span>Error message</span>
                <button type="submit" form="contact-form" >finish</button>
            </div>
         </div>
    </>
}