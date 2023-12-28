"use client"
import { CartProduct } from "@/model/cart/cartProduct";
import "./page.css";
import {  useCart } from "@/hooks/cart"; 
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"; 
import { Iprice } from "../../../lib/models/prices";
import { Icatalog } from "../../../lib/models/catalog";
import { Icategory } from "../../../lib/models/category";

type TproductCart={
    codeBar: string;
    name: string;
    selectedCategory: Icategory;
    quantity: number;
    price: Iprice;
    catalog:Icatalog;
};let j=0;
export default function CartPage(){j++;
    const [selectedProduct,setSelectedProduct]=useState(0);
    const params:TproductCart=JSON.parse(useSearchParams().get('product') as string); 
    const {cart,items,total,isEmpty,isLoading,setCart,exists,add}=useCart(); 
    const increseQuantity=()=>{
        const m= items[selectedProduct].quantity=items[selectedProduct].quantity+1;
        setCart({...cart,items:items});
    }
    const decreseQuantity=()=>{
        if(items[selectedProduct].quantity>1){
            items[selectedProduct].quantity=items[selectedProduct].quantity-1;
            setCart({...cart,items})
        }
    } 

    useEffect(()=>{
                if(params && !exists(params.codeBar)){
                    const {codeBar,name,selectedCategory,quantity,price,catalog}=params;
                    const product=new CartProduct(codeBar,name,selectedCategory,quantity,price,catalog)
                    add(product);
                }
    },[]); 
    
        
    return  isLoading ? 
        <h1>Loading</h1>
        :
        isEmpty ? 
        <h1>Cart is empty</h1>
        :
        <div className="pg pg-3">
                <div>
                     <section className="center">
                        <span className='center'>
                            <button onClick={increseQuantity} className="btn-active-ground" type='button'>+</button>
                            <h2 className='center'>{items[selectedProduct].quantity}</h2>
                            <button onClick={decreseQuantity} className='btn-des'>-</button>
                        </span>
                        <img src={items[selectedProduct]?.catalog.main} />
                     </section>
                     <section  className="center-v">
                        <h1>{items[selectedProduct]?.name}</h1>
                        <div className="scrolling">
                            {items.map((x,y)=><div onClick={()=>setSelectedProduct(y)} key={y}  className={`center ${y==selectedProduct && "btn-active-ground" }`}>
                                                        <img src={x.catalog.main} />
                                                        <h2>{x.price.current} <sub>Dzd</sub></h2>
                                                        <p>{x.category.name}</p>
                                         </div>
                            )}   
                        </div>
                     </section>
                </div>
                <div className="s-1 p-bottom">
                    <section>
                        <h3>Total price</h3>
                        <h1>{total()} <sub>Dzd</sub></h1>
                    </section>
                    <section>
                        <h3>Items</h3>
                        <h1>{items.reduce((prev,current)=>prev+current.quantity,0)}</h1>
                    </section>
                    <button type="button">Confirmed order</button>
                    <span>Included delivery price {cart.delivery} Dzd</span>
                </div>
           </div>  
     
}