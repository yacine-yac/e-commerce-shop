import posting from "@/model/fetching/posting";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const params = new URL(req.url);
    const province=params.searchParams.get('province'); 
    const tarification=  await posting("https://procolis.com/api_v1/tarification",undefined,
            {
                token:process.env.TOKEN,
                key:process.env.KEY,
                "Content-Type":"application/json"
    }); 
    const result=tarification?.data.filter((x:any)=>x.IDWilaya==province) ?? [];
    return NextResponse.json(result.length >0 ?  result[0] : {},{status:result.length>0 ? 200:404})
}