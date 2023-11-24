
import { MouseEvent } from "react"
import "./style/filtersidelist.css"
export function FilterSideList({filtersShow}:{filtersShow:()=>void}){
    const handler=function(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>){
                
                 (e.nativeEvent.target as HTMLDivElement)?.id =="filter" && filtersShow()
        };
    return <>
            <div id="filter" className="center-h" onClick={handler}>
                <section className="p-bottom">
                    <div className="f-top center-v">
                        <h1>Filter results</h1>
                        <button type="button" onClick={filtersShow}>
                        <svg width="64px" height="64px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#fff" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg>
                        </button>
                    </div>
                    <div className="f-section">
                        <h2>Price</h2>
                        <span>1000-2000<sub>Da</sub></span> 
                        <div className="progress-container">
                            <div className="button-container">
                                <button className="button">-</button>
                                <button className="button">+</button>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-inner"></div>
                            </div>
                        </div> 
                    </div>
                    <div className="f-section">
                        <h2>Domaine</h2>
                        <div></div>
                        <div className="f-btns">
                                <button className="btn-active-ground" type="button">All</button> 
                                <button type="button">Shoes & Clotes</button>
                                <button type="button">Phone & pc</button>
                                <button type="button">Food</button>
                                <button type="button">Medical</button>
                                <button type="button">Auto</button>
                                <button type="button">jeux & vidoe</button>
                        </div>
                    </div>
                    <div className="f-section">
                        <h2>Categories</h2>
                        <div></div>
                        <div className="f-btns">
                                <button className="btn-active-ground" type="button">1L</button> 
                                <button type="button">2L</button>
                                <button type="button">3L</button>
                                <button type="button">5L</button>
                                <button type="button">3L</button>
                                <button type="button">5L</button>
                                <button type="button">3L</button>
                                <button type="button">5L</button>
                                <button type="button">10L</button>
                        </div>
                    </div>
                </section>
            </div>
    </>
}