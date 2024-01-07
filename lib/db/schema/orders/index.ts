import orderState from "./orderState";
import { orderTypes } from "../../configurations/types";
import { Iorder, IorderState } from "../../../models/orders";
import { Schema} from "mongoose";
import GlobalState from "./globalState";
import { Clients } from "..";
import Price from "../products/price";
import { mdb } from "..";

const mongoose=require('mongoose');
const order:Schema<Iorder>=new mongoose.Schema({
    orderNumber:{
        type: String,
        required:true,
        unique:true
    },
    client:{type:Schema.Types.ObjectId,ref:"clients",required:true},
    products:{type:[
                    {
                        quantity:{type:Number,required:true},
                        price:{type:Price,required:true},
                        product:{type:Schema.Types.ObjectId,ref:'products',required:true}
                    }
                   ],
                   required:true,
                   validate:{
                       validator:function(arr:[]){ return arr.length>0 && arr },
                       message:'products must not be empty'
                   }
            },
    total:{
                    type:Number,
                    virtual:true,
                    get():number{
                        return this.products.reduce((prev,next)=>(prev+next.quantity*next.price.current),this.deliveryPrice);
                    }
            },
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
order.post("save",async function(doc:any){ 
        await Clients.findOneAndUpdate({_id:doc.client},{$push:{orders:doc._id}});
});
export default order;
