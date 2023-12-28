import { CartProduct } from "@/model/cart/cartProduct"; 
import { useEffect, useState } from "react"; 

type Tcart={items:CartProduct[],delivery:number};
const initCart:Tcart={items:[],delivery:50}
export function  useCart(){
    const [cart,setCart]=useState<Tcart>(initCart);
    const [state,setSetate]=useState({isLoading:true,isEmpty:true});
    if(cart.items.length==0 &&  typeof window !== 'undefined'){
        const storageCart:CartProduct[] =JSON.parse(localStorage.getItem('cart') as string);
        if(storageCart != null && storageCart.length > 0){ 
          //  change cart items state without re-render component
              cart.items=storageCart;
        }
    }
    
    const add=(product:CartProduct)=>{
      const newItems=[...cart.items,product];
          setSetate({...state,isEmpty:false});
          setCart({...cart,items:newItems});
    }
    const exists=(codeBar:string):boolean=>{
          const filter=cart.items?.filter(x=>x.codeBar== codeBar);
          return (filter.length==0 || cart.items.length==0) ? false:true;
    }
    useEffect(()=>{
      typeof window !== 'undefined' &&  localStorage.setItem("cart",JSON.stringify(cart.items)); 
      setSetate({...state,isLoading:false,isEmpty:cart.items.length >0? false: true});
       
    },[cart]); 
       return { 
         cart,
         ...state,
         items:cart.items,
         total:()=>cart.items.reduce((prev,current)=>prev+(current.quantity*current.price.current),cart.delivery)
        ,setCart,add,exists};
     ;

}