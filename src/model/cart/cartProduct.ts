import { Iprice } from "../../../lib/models/prices";
import { Iproduct } from "../../../lib/models/products";

class CartProduct{
    private codeBar:string;
    public quantity:number;
    public price:Iprice;
    public name:string;
    public category:number;
    constructor(codeBar:string,name:string,category:number,quantity:number,price:Iprice){
        this.codeBar=codeBar
        this.name=name;
        this.price=price;
        this.quantity=quantity;
        this.category=category;
    }
    getCodeBar(){
        return this.codeBar;
    }
    setQuantity(q:number){
        this.quantity=q;
    }
    setCategory(category:number){
        this.category=category;
    }
    getTotalByProduct(){
        return this.quantity*this.price.current;
    }
    /** check if product is availibale */
    getStatus(product:Iproduct){
       return this.quantity > product.quantity.value ? false : true;
    }
}

export {CartProduct};