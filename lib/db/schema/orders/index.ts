import orderState from "./orderState";
import { orderTypes } from "../../configurations/types";
import { Iorder, IorderState } from "../../../models/orders";
import { Schema} from "mongoose";
import GlobalState from "./globalState";

const mongoose=require('mongoose');
const order:Schema<Iorder>=new mongoose.Schema({
    orderNumber:{
        type: String,
        required:true,
        unique:true
    },
    client:{type:Number,required:true},
    products:{type:[
                    {
                        quantity:{type:Number,required:true},
                        product:{type:Number,required:true}
                    }
                   ],
                   required:true,
                   validate:{
                       validator:function(arr:[]){ return arr.length>0 && arr },
                       message:'products must not be empty'
                   }
            },
    total:{type:Number,required:true},
    deliveryPrice:{type:Number,required:true},
    state:{type:orderState,required:true}
});
order.methods={
    async setState(state:orderTypes,description:string){
                const obj:IorderState={
                    current:state,
                    history:this.state,
                    description
                };
                this.state=obj;
                await this.save();
               if( state !="Delevring"  || this.state.history.current=="confirmed" &&   this.state.current=="cancel"  ){
                    GlobalState.setGlobalState(state);
                    GlobalState.close();
               }        
    },
    

};
export default order;
