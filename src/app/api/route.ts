import {NextResponse, NextRequest} from "next/server";
export async function GET(req:NextRequest){
    console.log('hello consolez');
    const a=5;
     
    a+9;
    return NextResponse.json({error:"ggggggggggggggg"})
}