import axios, { AxiosResponse } from "axios";

export function fetching(url:string,params:{}={}):Promise<AxiosResponse<[], any>>{
   return axios.get(url,{params});
}