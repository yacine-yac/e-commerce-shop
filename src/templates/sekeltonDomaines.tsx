import "./style/skeletonDomaines.css";
export function SkeletonDomaines(){

    return <>
            {[1,2,3,4].map((x:any,y:number)=> <span key={y}  className="center skeleton-domaine shape"></span>)}

    </>

}