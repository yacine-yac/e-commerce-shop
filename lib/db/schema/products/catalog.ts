const Catalog={
    main:{type:String,required:true},
    pictures:{type:[String],required:false,default:[]},
    videos:{type:[String],required:false,default:[]}
};
export default Catalog;