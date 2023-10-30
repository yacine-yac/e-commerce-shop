
const  mongoose=require('mongoose');
const Price=new mongoose.Schema({
    current:{type:Number,required:true},
    reduction:{type:Number,require:false,default:0},
    time:{type:Date,required:false,default:Date.now()},
    oldest:{type:this,default:null}
});
export default Price;