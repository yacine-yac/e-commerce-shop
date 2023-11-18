import Link from "next/link"
import "./style/headerSection.css";
export default function HeaderSection(){
    return <>
        <header className="header-shadow">
            <section className="up" id="header-1">
                <span><Link href="/"><img src='./icons/logo.jpg' /></Link></span> 
            </section>
            <section className="down" id="header-2" >
                <button className="btn-side-list"></button>
            </section>
        </header> 
    </>
}