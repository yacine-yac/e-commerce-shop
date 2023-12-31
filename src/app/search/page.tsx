"use client"
import { ProductShow } from "@/templates/productShow"
import "./page.css"
import { useState } from "react";
import { FilterSideList } from "@/templates/filterlistside"; 
import { useQuery } from "react-query";
import axios from "axios";
import { Icategory } from "../../../lib/models/category";
export type TfilterState={value:string} | {domaine:string[]} | {categorie:string[]} | {price:{min:number,max:number}}
export type Tfilters ={
    value: string;
    domaine: string[];
    categorie: string[];
    price: {
        min: number;
        max: number;
    };
}
const initState:Tfilters={value:"",domaine:[],categorie:[],price:{max:0,min:0}};
export default function Search(){
    const [state,setState]=useState<Tfilters>(initState);
    const [stateFilter,setStateFilter]=useState(false);
    const {data,isLoading,isError}=useQuery('filters',async()=>await axios.get('/api/filters'));
    const filtersShow=()=>{setStateFilter(!stateFilter);}
    const handleFilters=(data:TfilterState)=>{setState({...state,...data})}
    const domaines=data?.data.domaines.map((x:any)=>{ return {id:x?._id,value:x.name,state:false}});
    const categories=data?.data.categories.map((x:any)=>{ return {id:x?._id,value:x.name,state:false} });
    console.log(state,"eee")
    return <>
           {stateFilter &&
                            (!isLoading  &&  <FilterSideList state={state} domaines={domaines} categories={categories} setFilter={handleFilters} filtersShow={filtersShow} />
                            )
            }

            <div className="pg pg-2">
                <section className="center" id="search">
                    <form>
                            <button type="submit"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Search_Magnifying_Glass"> <path id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="#4c5358" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg></button>
                            <input type="text" placeholder="Search product" />
                    </form> 
                    <button type="button" onClick={filtersShow}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14ZM19 14V20M12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16ZM12 16V10M5 20V11M12 4V7M19 4V7M7 6C7 7.10457 6.10457 8 5 8C3.89543 8 3 7.10457 3 6C3 4.89543 3.89543 4 5 4C6.10457 4 7 4.89543 7 6Z" stroke="#4c5358" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                    </button>
                </section>
                <h2>Search result 12 items</h2>
                <div className="show-grid">
                    {/* <ProductShow />
                    <ProductShow />
                    <ProductShow />
                    <ProductShow />
                    <ProductShow />
                    <ProductShow /> */}
                </div>
            </div>
    </>
}