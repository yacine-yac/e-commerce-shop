"use client";
import FooterNavbar from "@/templates/footerNavbar";
import HeaderSection from "@/templates/hearderSection";

export default function({children}:{children:React.ReactNode}){
    return <>
         <HeaderSection title="Contact" />
         {children}
         {/* <FooterNavbar /> */}
    </>
}