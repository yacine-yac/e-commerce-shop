import { Icatalog } from "../../../lib/models/catalog";
import { Iprice } from "../../../lib/models/prices";
import { Iproduct } from "../../../lib/models/products";
import { Istock } from "../../../lib/models/stock";

interface IProduct{
    quantity:number;
    price:number;
    oldPrice?:number;
    name:string;
    category:string;
}
class Product implements Iproduct{
    public codeBar:string;
    public name:string;
    public description:string;
    public catalog:Icatalog;
    public price:Iprice;
    public quantity:Istock;
    public category:number[];  
    public domain: number[];
    constructor(codeBar:string,name:string,description:string,category:number[],catalog:Icatalog,domain:number[],quantity:Istock,price:Iprice){
            this.codeBar=codeBar;    
            this.price=price;
            this.quantity=quantity;
            this.name=name;
            this.description=description;
            this.category=category;
            this.catalog=catalog;
            this.domain=domain;
    }
    getCodeBar(){
        return this.codeBar;
    }
    /** check if the product is availibale or no */
    getStatus(){
        return this.quantity.value>0 ? true :false;
    }
}
export {Product};