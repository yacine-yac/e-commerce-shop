export function scrolling(callback:()=>void){
    const current=  window.innerHeight + document.documentElement.scrollTop ;
    const height= document.documentElement.offsetHeight;

    if(current==height){
        callback();
    }
}