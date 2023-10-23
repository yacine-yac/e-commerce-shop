
const orderState={
    current:{type:String},
    time:{type:Date,default:Date.now()},
    description:{type:String},
    history:{type:Array}
}
export default orderState;