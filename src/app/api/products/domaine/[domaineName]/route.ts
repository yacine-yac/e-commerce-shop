import { NextRequest, NextResponse } from "next/server";
import { Domains } from "../../../../../../lib/db/schema"; 
const length=5;
export async function GET(req:NextRequest,{params}:{params:{domaineName:string}}){
    let products;
    const url=new URL(req.url);
    const page:number=+(url.searchParams.get('p') ?? 1); 
    const skip=(page-1)*length;
    const productsByDomaine= await Domains.findOne({name:params.domaineName},{products:true}).populate("products");
    products= productsByDomaine.products.slice(skip,skip+length);
    return NextResponse.json(products ?? {errorMessage:"products not found"},{status: products ? 200:404});
}