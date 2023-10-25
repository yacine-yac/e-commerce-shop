import  client from "./clients";
import order from "./orders"; 
import products from "./products";
import category from "./category";
import domain from "./domain";
import groups from "./groups";


const mongoose=require('mongoose'); 
mongoose.model('clients',client); 
mongoose.model("orders",order);
mongoose.model("products",products);
mongoose.model('categories',category);
mongoose.model("domains",domain);
mongoose.model('groups',groups);
export {mongoose as mdb};
