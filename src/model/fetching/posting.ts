import axios from "axios";

export default function posting(url:string,body?:{},headers?:{}){
    return  axios.post(url,body,{headers,method:"post"}); 
}