export interface IorderState{
    current:string,
    description?:string,
    history:IorderState
}
export interface Iorder{
    orderNumber:string,
    client:number,
    products:{quantity:number,product:number}[],
    total:number,
    deliveryPrice:number,
    state:{
    current:string, 
    description?:string,
    history?:IorderState
}
}

