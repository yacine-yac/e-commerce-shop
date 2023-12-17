import { mdb } from "../../../lib/db/schema";  

class Products extends mdb.models.products {
    constructor(){ 
       super()
    }
    async get(length:number=6){ 
          return (await  Products.find().limit(length))  ?? undefined ;
        
    }
} 
export default Products;
