import { Product } from "../product";
import { CartProduct } from "./cartProduct";

class CartShoping{
    static main:CartShoping;
    private value:CartProduct[];
    private total:number;
    private delivery:number;

    private constructor(value:CartProduct[]=[]){
        this.value=JSON.parse(localStorage.getItem('cart') as string) ?? value;
        this.total=0;
        this.delivery=0;
    }
    delete(index:number):boolean{
        const deleting= this.value.splice(index,1);
        return deleting ? true : false;
    }
    add(product:CartProduct):boolean{
       return this.value.push(product) ? true : false;
    }
    setTotal(){
        const total1=this.value.reduce((prev:number,current:CartProduct)=>{
                      return prev+current.getTotal();
             },0);
        this.total=total1+this.delivery;
    }
    getTotal(){
        return this.total;
    }
    static init(){
        CartShoping.main ==undefined &&
                                         (CartShoping.main=new CartShoping());
    }
}

const Cart=CartShoping.init();
export {Cart}