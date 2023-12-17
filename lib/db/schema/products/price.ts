const  mongoose=require('mongoose');

type T_Price={current:Number,reduction:Number,time:Date};
const Price=new mongoose.Schema({
    current:{type:Number,required:true},
    reduction:{type:Number,require:false,default:0},
    time:{type:Date,required:false,default:Date.now()},
    oldest:{type: {...{} as T_Price,oldest:{} as T_Price} ,default:null}
});
export default Price;