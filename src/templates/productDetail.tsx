 
import "./style/productDetail.css"
import Link from "next/link"; 
import Products from "@/model/product/product";
import { Iproduct } from "../../lib/models/products"; 
// interface pro implements Iproduct{};
// type pro=Iproduct;
export default async function ProductDetails({product}:{product:Iproduct}){ 

  const {codeBar,name,description,price}=product;  
    const {oldPrice,currentPrice,catalog,category}={
                                  category:product.category,
                                  catalog:product.catalog,
                                  oldPrice:price?.oldest?.current,
                                  currentPrice:price?.current
                                };
    const selectedCategory= category[0];
    const p= {codeBar,name,selectedCategory,quantity:1,price,catalog:catalog};
    const stl={width:"30px",height:"30px", border:"1px solid red",margin:"10px"}
    
    return  <>
              <section>
                    <div></div>
                    <div>
                        <img src={catalog.main} />
                        {catalog.pictures.map((x:string)=><img src={x} />)} 
                    </div>
                    <div className="center">
                       <span className="active-span"></span>
                       <span></span>
                       <span></span>
                       <span></span>
                    </div>
              </section>
              <section> 
                <h1>{name}</h1>
                <p>{description}</p>
                <div>
                    <h3>Categories</h3>
                    <div className="scrolling">
                          <button value={39}>39</button>  
                          {/* { category.map((x:any)=><button className={"btn-active-ground-w"} key={x.id} value={x.id}>{x.name}</button>)}  */}
                          {category.map((x:any,y:number)=><Link style={stl} key={x.id} href={`?category=${y+1}`}>{x.name}</Link>)}
                   </div> 
                    <section>
                            <h2>{currentPrice} <sub>Dzd</sub></h2>
                           {oldPrice && <span>{oldPrice} <sub>Dzd</sub></span>}
                    </section>
                </div>
            
              </section>
             
    </>    
}