import  client from "./clients";
import order from "./orders"; 
import products from "./products";
import category from "./category";
import domain from "./domain";
import groups from "./groups";
import dataSetConfig from "../configurations/config";


const mongoose=require('mongoose'); 
(async function(){
    await mongoose.connect(dataSetConfig.server);
})()
export  const Clients=mongoose.models.clients || mongoose.model('clients',client); 
export const Orders=mongoose.models.orders || mongoose.model("orders",order);
export const Products=mongoose.models.products || mongoose.model("products",products);
export const Categories=mongoose.models.categories || mongoose.model('categories',category);
export const Domains=mongoose.models.domains || mongoose.model("domains",domain);
export const Groups=mongoose.models.groups || mongoose.model('groups',groups); 
export {mongoose as mdb};
