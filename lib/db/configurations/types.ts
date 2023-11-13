import {Models} from "mongoose";
export interface Ids{
        state: boolean;
        models: Models; 
        close():void;
};

export type orderTypes= "Delevring" | "Delivered" | "cancel" | "ordered" | "confirmed" | "returned";