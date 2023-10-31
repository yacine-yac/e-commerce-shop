import orderState from "./orderState";
import { orderTypes } from "../../configurations/types";
import { Iorder, IorderState } from "../../../models/orders";
import { Schema} from "mongoose";  

const mongoose=require('mongoose');
const order:Schema<Iorder>=new mongoose.Schema({
    number:{type:Number,unique:true},
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
    setState(state:orderTypes,description:string){
                const obj:IorderState={
                    current:state,
                    history:this.state,
                    description
                };
                this.state=obj;
                this.save();
    }
    
};

// };
// const order=new Order({
//     number:{type:Number,unique:true},
//     client:{type:Number,required:true},
//     products:{type:[
//                     {
//                         quantity:{type:Number,required:true},
//                         product:{type:Number,required:true}
//                     }
//                    ],
//                    required:true,
//                    validate:{
//                        validator:function(arr:[]){ return arr.length>0 && arr },
//                        message:'products must not be empty'
//                    }
//             },
//     total:{type:Number,required:true},
//     deliveryPrice:{type:Number,required:true},
//     state:{type:orderState,required:true}
// });
export default order ;