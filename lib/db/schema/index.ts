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
mongoose.model('categories',category).resetCount();
mongoose.model("domains",domain).resetCount();
mongoose.model('groups',groups).resetCount();
export {mongoose as mdb};
