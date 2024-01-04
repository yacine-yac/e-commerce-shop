"use client"; 
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Iproduct } from "../../lib/models/products";
import React, { useEffect, useState } from "react"; 
import { useCart } from "@/hooks/cart";
import { CartProduct } from "@/model/cart/cartProduct"; 
 

export default function ProductPage(props:{product:string,children:React.ReactNode}){
    const product:Iproduct=JSON.parse(props.product);
    const {codeBar,name,description,price,...data}=product;
    const router=useRouter();
    const {cart,setCart,add}=useCart();
    const params=useSearchParams();  
    const initState={
         quantity:cart.items.find(x=>x.codeBar==codeBar)?.quantity ??  1,
         wilaya:-1,city:-1
    } 
    const [state,setState]=useState(initState);
    const addToCart=()=>{   
        const selectedCategory= product.category[Number(params.get("category"))-1] ;
        const p= new  CartProduct(codeBar,name,selectedCategory,state.quantity,price,data.catalog); 
        const indexProduct=cart.items.findIndex(x=>x.codeBar==codeBar)  
        if(params.get("category") ==null || !selectedCategory){
              return 
        } 
      
        if(indexProduct!= -1){
              setCart(x=>{ cart.items[indexProduct]=p; return {...cart}})
              return ;
        }
        add(p);
    } 
    const handleQuantity=(e: React.ChangeEvent<HTMLInputElement>)=>{
         state.quantity >0 && setState({...state,quantity:+e.target.value});
    }
    const handleWilaya=(e: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({...state,wilaya:e.target.selectedIndex});
    }
    const handleCity=(e: React.ChangeEvent<HTMLSelectElement>)=>{
      setState({...state,city:e.target.selectedIndex});
    }
    return <>
        <div  className="pg-5"> 
               {props.children} 
            <div>
                <input value={state.quantity} onChange={handleQuantity} type="number" placeholder="quantity" />
                 <select onChange={handleWilaya} name="wilaya">
                       <option value={-1}>Select wilaya</option>
                        <option value={1}>Adrar</option>
                        <option value={2}>Alger</option>
                        <option value={3}>oran</option>
                 </select>
                 <select onChange={handleCity} name="city">
                        <option value={-1}>Select city</option>
                        <option value={1}>Adrar</option>
                        <option value={2}>Alger</option>
                        <option value={3}>oran</option>
                 </select>
            </div>
            <section className="center">
                <span>
                  <Link onClick={addToCart} aria-disabled={true} className="center" href={{pathname:`/cart`}}>
                        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#ee105c" strokeWidth="1.5"></path> <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#ee105c" strokeWidth="1.5"></path> <path d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7" stroke="#ee105c" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                  </Link>
                </span>  
                <button onClick={()=>{addToCart(); router.push('/cart/confirm');}} type="button">order</button> 
              </section>
      </div> 
    </>
}