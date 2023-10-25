const mongoose=require('mongoose');
const Stock={
    quantity:{type:Number},
    oldest:{type: mongoose.Schema.Types.ObjectId },
    time:{type:Date}
}
export default Stock;