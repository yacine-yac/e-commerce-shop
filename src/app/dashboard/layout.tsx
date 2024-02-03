"use client";
import { HeaderDash } from "@/templates/header-dash";
import { LayoutList } from "@/templates/layoutList";
import { useState } from "react";

export default function Layouts({children}:{children:React.ReactNode}){

    const [state,setState]=useState(false);
    const handler=()=>{
      setState(!state)
    }
    return <>
        {state &&  <LayoutList handler={handler} /> }
        <HeaderDash handler={handler} />
        {children}
    </>
}