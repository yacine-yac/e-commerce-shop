export interface Iclient{
    lastName:string;
    firstName:string;
    order:number[],
    contact:{
        address:string,
        email:string
        phone:string,
        phone2?:string
    }
};
