 
import ProductDetails from "@/templates/productDetail"; 
import { Products } from "../../../../lib/db/schema";
import { Iproduct } from "../../../../lib/models/products"; 
import ProductPage from "@/templates/productPage";
 

export default async function Product({params}:{params:{productId:string}}){ 
      const product:Iproduct=await Products.findOne({codeBar:params.productId}).populate("category");
      
      return  <>{
                        product  ?    
                                <>
                                  <ProductPage product={JSON.stringify(product)} >
                                            <ProductDetails product={product} />
                                  </ProductPage>
                                </>
                              
                                : <h1>product not found {params.productId} </h1>
      }</> 
}     