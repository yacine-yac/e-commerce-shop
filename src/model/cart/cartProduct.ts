import { Icatalog } from "../../../lib/models/catalog";
import { Icategory } from "../../../lib/models/category";
import { Iprice } from "../../../lib/models/prices";
import { Iproduct } from "../../../lib/models/products";

class CartProduct{
    public codeBar:string;
    public quantity:number;
    public price:Iprice;
    public name:string;
    public category:Icategory;
    public catalog:Icatalog;
    public total:number;
    constructor(codeBar:string,name:string,category:Icategory,quantity:number,price:Iprice,catalog:Icatalog){
        this.codeBar=codeBar
        this.name=name;
        this.price=price;
        this.quantity=quantity;
        this.category=category;
        this.catalog=catalog;
        this.total=quantity*price.current;
    } 
    setQuantity(q:number){
        this.quantity=q;
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