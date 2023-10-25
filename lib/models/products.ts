import { Icatalog } from "./catalog";
import { Iprice } from "./prices";
import { Istock } from "./stock";

export interface Iproduct{
     codeBar:string;
     name:string;
     description:string;
     catalog:Icatalog;
     price:Iprice;
     quantity:Istock;
     domain:number[];
     category:number[];
}
