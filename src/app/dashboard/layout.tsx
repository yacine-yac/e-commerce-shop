"use client";
import { HeaderDash } from "@/templates/header-dash";
import { LayoutList } from "@/templates/layoutList";
import {  useParams} from "next/navigation"; 
import { useState } from "react"; 
export default function Layouts({children}:{children:React.ReactNode}){
    const params:{} =useParams();
    console.log(params);
    const [state,setState]=useState(false); 
    const handler=()=>{
      setState(!state)
    }
    return <>
        {state &&  <LayoutList handler={handler}/> }
        <HeaderDash handler={handler} params={params} />
        {children}
    </>
}