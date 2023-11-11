import {  Mongoose } from "mongoose";
import { mdb } from "./schema"; 
import dataSetConfig from "./configurations/config";
import { Iproduct } from "../models/products";
import { Ids } from "./configurations/types";
/**
 * Object handle interactions with mongoo Database (based moongose)
 * @property {Mongoose}  db mongoose object
 * @property {boolean} state db connection state
 */

async function DataSet(){ 
    const DS:Ids={  
              state:false,
              models:mdb.models,
              close:async function(){
                  return  await mdb.connection.close();
              }
    }
    try{
           await mdb.connect(dataSetConfig.server);
           DS.state=true;
    }catch(e){
           DS.state=false;
    }

    return DS;
}
export  default DataSet ;