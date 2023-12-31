"use client";
import React, { useState } from "react";
import { MouseEvent } from "react"
import "./style/filtersidelist.css"
import { TfilterState, Tfilters } from "@/app/search/page";
import { Idomain } from "../../lib/models/domain"; 
import { Icategory } from "../../lib/models/category";
type TfilterSide={state:Tfilters,domaines:{id:string,value:string}[],categories:{id:string,value:string}[],filtersShow:()=>void,setFilter:(data: TfilterState)=>void}
export function FilterSideList({state,domaines,categories, filtersShow,setFilter}:TfilterSide){
    const [lists,setLists]=useState({domaines,categories})
    const handler=function(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>){
                 (e.nativeEvent.target as HTMLDivElement)?.id =="filter" && filtersShow()
    };
    const handleDomaines=(id:string)=>{
        const index=state.domaine.findIndex(x=>x==id);
        if(index!=-1){
            state.domaine.splice(index,1);   
            setFilter({...state}) 
        }else{
            setFilter({domaine:[...state.domaine,id]})
        } 
    };
    const handleCategories=(id:string)=>{
         const index=state.categorie.findIndex(x=>x==id);
         if(index!=-1){
            state.categorie.splice(index,1);
            setFilter({...state})
         }else{
            setFilter({categorie:[...state.categorie,id]}) 
         }
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
                                {domaines.map((x,y)=>{ 
                                    return  (<button   onClick={()=>handleDomaines(x.id)} className={ state.domaine.includes(x.id) ? "btn-active-ground":undefined} key={y} type="button">{x.value}</button>)
                                })}
                        </div>
                    </div>
                    <div className="f-section">
                        <h2>Categories</h2>
                        <div></div>
                        <div className="f-btns">
                                <button className="btn-active-ground" type="button">1L</button> 
                                {categories.map((x,y)=><button className={state.categorie.includes(x.id) ? "btn-active-ground" :undefined} onClick={()=>handleCategories(x.id)} key={y}  type="button">{x.value}</button>)  }
                        </div>
                    </div>
                </section>
            </div>
    </>
}