import { NextResponse } from "next/server";
import { Domains } from "../../../../../lib/db/schema";

export  async function GET(){
     const domaines=await Domains.find(); 
    return NextResponse.json({values:domaines}  ?? {errorMessage: "request has been failer "},{status:domaines.length>0 ? 200:404})
}