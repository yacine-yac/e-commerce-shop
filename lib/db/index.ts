import { Mongoose } from "mongoose";

const {server}=require('./config');
class DataSet{
    private db:Mongoose=require('mongoose');
    readonly state:boolean=false;
    constructor(){
        
            this.db.connect(server,)
            this.state=true;
   
            this.state=false;
     
    
    }
    insert():boolean{

        return true
    }
}
const db= require('mongoose');
//import mongoose from "mongoose";
let cc=5;
function addition(){
     cc+=77;
    cc-=98;

}

addition();
cc=+8;
console.log(db);

cc-2; 
 