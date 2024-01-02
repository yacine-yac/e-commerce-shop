export interface Iclient{
    lastName:string;
    firstName:string;
    order:number[],
    contact:{
        address:{province:string,city:string,street:string},
        email:string
        phone:string,
        phone2?:string
    }
};
