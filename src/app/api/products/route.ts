import { NextRequest, NextResponse } from "next/server";
import { Products } from "../../../../lib/db/schema";
const length=3;
export async function GET(NextRequest:NextRequest){
    const url=new URL(NextRequest.url);
    const page:number=+(url.searchParams.get('p') ?? 1);
    const skip=(page-1)*length;
    const products= await Products.find().skip(skip).limit(length);  
    const result= products ?? {errorMessage:"products not found"} 
   return NextResponse.json(result);
}