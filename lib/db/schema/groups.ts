const {Schema}=require('mongoose');

const groups=new Schema({
     id:{type:Number,index:true,unique:true},
     name:{type:String},
     categories:{type:Array}
});
export default groups;