import { NextResponse } from "next/server";
import { Domains } from "../../../../../lib/db/schema";

export  async function GET(){
     const domaines=await Domains.find();
    return NextResponse.json(domaines ?? {errorMessage: "request has been failer "})
}