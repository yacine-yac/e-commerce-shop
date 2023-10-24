const {Schema}=require('mongoose');
const domain=new Schema({
    id:{type:Number,index:true,unique:true},
    name:{type:String},
    product:{type:String}
});
export default domain; 