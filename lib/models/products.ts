import { Icatalog } from "./catalog";
import { Icategory } from "./category";
import { Iprice } from "./prices";
import { Istock } from "./stock";

export interface Iproduct{
     _id:string;
     codeBar:string;
     name:string;
     description:string;
     catalog:Icatalog;
     price:Iprice;
     quantity:Istock;
     domain:string[];
     category:Icategory[];
}
