
import { MouseEvent } from "react"
import "./style/filtersidelist.css"
export function FilterSideList({filtersShow}:{filtersShow:()=>void}){
    const handler=function(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>){
                
                 (e.nativeEvent.target as HTMLDivElement)?.id =="filter" && filtersShow()
        };
    return <>
            <div id="filter" onClick={handler}>
                <section></section>
            </div>
    </>
}