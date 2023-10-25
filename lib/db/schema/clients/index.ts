<<<<<<< HEAD
import { Schema } from "mongoose";
import contact from "./contact";
const mongoose=require('mongoose'); 
const clients:Schema=new mongoose.Schema({
=======
import { Iclient } from "../../../models/clients";
import {Schema,Model} from "mongoose";
import contact from "./contact";
const mongoose=require('mongoose'); 

const client:Schema<Iclient> =new mongoose.Schema({
>>>>>>> 3e2756d (clients schema end)
    id:{type:Number,index:true ,unique:true},
    lastName:{type:String},
    firstName:{type:String},
    order:{type:Array()},
    contact:{type:contact}
});
<<<<<<< HEAD
export default clients;
=======
const Client:Model<Iclient>=mongoose.model('clients',client);

export default client;
>>>>>>> 3e2756d (clients schema end)
