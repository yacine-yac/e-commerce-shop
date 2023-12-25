import { NextRequest, NextResponse } from "next/server";
import { Products } from "../../../../../lib/db/schema"; 
export async function GET(NextRequest:NextRequest,{params}:{params:{productId:string}}){
    const codeBar=params.productId;
    const products= await Products.findOne({codeBar}).populate('category');  
    const result= products ?? {errorMessage:"product not found "+codeBar} 
   return NextResponse.json(result);
}