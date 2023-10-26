
const contact={
    adress:{type:String,required:false,default:""},
    email:{type:String,required:false,default:""},
    phone:{type:String,required:true,unique:true},
    phone2:{type:String,required:false}
}
export default contact;