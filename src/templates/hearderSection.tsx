import Link from "next/link"
import "./style/headerSection.css";
export default function HeaderSection({state,eventHandler}:{state?:string,eventHandler:()=>void}){
    return  ( state=="products" ||  state=="cart") ?
    <>
        <header className="header-search header-pr">
            <button onClick={eventHandler}>
                <svg width="64px" height="64px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#4c5358"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#4c5358" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#4c5358" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>
            </button> 
        </header>
    </>
    :
    (state=="search")?
    <>
        <header className="header-search">
            <button onClick={eventHandler}>
                 <svg width="64px" height="64px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#4c5358"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#4c5358" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#4c5358" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>
            </button>
            <h1>Search</h1>
        </header>
    </>
    :
    <>
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