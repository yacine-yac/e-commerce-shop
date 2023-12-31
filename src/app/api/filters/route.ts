import { NextResponse } from "next/server";
import { Categories, Domains } from "../../../../lib/db/schema";

export async function GET(){
    const categories=await Categories.find().limit(15) ?? null;
    const domaines= await Domains.find().limit(15) ?? null;
    return NextResponse.json({categories,domaines})
}