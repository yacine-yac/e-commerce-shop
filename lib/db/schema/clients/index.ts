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
    id:{type:Number,index:true ,unique:true,required:true},
    lastName:{type:String,required:true},
    firstName:{type:String,required:true},
    order:{type:[Number]},
    contact:{type:contact}
});
<<<<<<< HEAD
export default clients;
=======
const Client:Model<Iclient>=mongoose.model('clients',client);

export default client;
>>>>>>> 3e2756d (clients schema end)
