import axios, { AxiosResponse } from "axios";

export function fetching(url:string):Promise<AxiosResponse<[], any>>{
   return axios.get(url);
}