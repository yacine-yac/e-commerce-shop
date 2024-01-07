
const contact={
    address:{
        type:{
            province:String,
            city:String,
            street:String
        },
        required:true
    },
    email:{type:String,required:true,unique:true},
    phone:{type:String,required:true,unique:true} 
}
export default contact;