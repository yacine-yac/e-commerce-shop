import { NextRequest, NextResponse } from "next/server";
import { Domains, Products } from "../../../../lib/db/schema";
const length=3;
export async function GET(NextRequest:NextRequest){
    const url=new URL(NextRequest.url);
    const page:number=+(url.searchParams.get('p') ?? 1);
    const skip=(page-1)*length;
    const name=url.searchParams.get("value");
    const category=url.searchParams.get("category");
    const domaine=url.searchParams.get("domaine");
    const maxPrice= url.searchParams.get("price[max]");
    const minPrice= url.searchParams.get("price[min]");
    const filter={
        ...(name && {name:{$regex: new RegExp(name,"i")}}),
        ...(domaine && {domain:domaine}),
        ...(category && {category}),
        ...((minPrice && maxPrice) && {"price.current":{$lte:maxPrice,$gte:minPrice}})

    }

    // if(domaine){
    //     const productsByDomaine= await Domains.findOne({name:domaine},{products:true}).populate("products");
    //     products= productsByDomaine.products.slice(skip,skip+length);
    // }else{
       
    // } 
    const params={...url.searchParams};
    console.log(params,"===>k",filter);
    const products= await Products.find(filter).skip(skip).limit(length); 
    const result= products ?? {errorMessage:"products not found"} 
    const status= products ? 200 : 404;
    return NextResponse.json(result,{status});
}