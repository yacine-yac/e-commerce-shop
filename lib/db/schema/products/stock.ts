const mongoose=require('mongoose');
const Stock={
    value:{type:Number},
    oldest:{type: mongoose.Schema.Types.ObjectId },
    time:{type:Date}
}
export default Stock;