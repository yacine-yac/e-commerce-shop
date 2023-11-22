import Link from "next/link";
import "./style/productShow.css";
import Image from "next/image";

export function ProductShow(){
    return <>
        <div className="show-p" >
            <Link href=""> 
                   <img  alt="pro" src="/shoes.jpg" />
                   <p>Shoes nike super  good 39-44</p> 
                  <h2>150 DZD</h2> 
                  <span id="second">220 DZD</span>
            </Link>
         
            
        </div>
    </>
}