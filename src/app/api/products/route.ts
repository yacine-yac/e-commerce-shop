import { NextRequest, NextResponse } from "next/server";
import { Domains, Products } from "../../../../lib/db/schema";
const length=3;
export async function GET(NextRequest:NextRequest){
    const url=new URL(NextRequest.url);
    const page:number=+(url.searchParams.get('p') ?? 1);
    const domaine=url.searchParams.get('domaine');
    const skip=(page-1)*length;
    let products;
    if(domaine){
        const productsByDomaine= await Domains.findOne({name:domaine},{products:true}).populate("products");
        products= productsByDomaine.products.slice(skip,skip+length);
    }else{
        products= await Products.find().skip(skip).limit(length);  
    }
    const result= products ?? {errorMessage:"products not found"} 
    const status= products ? 200 : 404;
    return NextResponse.json(result,{status});
}