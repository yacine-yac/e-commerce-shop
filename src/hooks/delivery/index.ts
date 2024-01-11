import { fetching } from "@/model/fetching"; 
import { useEffect, useState } from "react"
import { useQuery } from "react-query";

let success=false,loading=true;
type TAddress={city:string,province:string,deliveryPrice?: string};
export function useDelivery(initAddress:TAddress={city:"554",province:"16"}){
    const [state,setState]=useState< TAddress>({} as TAddress);
    const {data,isLoading,isError,isFetched,isSuccess,isFetching,refetch}=useQuery<any>(["tarifications",state.province],async ()=>await fetching(`/api/tarification?province=${state.province}`),
                                                        {enabled:false}
                                                        ); 
    const setCity=(value:string)=>{
        setState({...state,city:value}); 
    }
    const setProvince=(value:string)=>{
        setState({...state,province:value,deliveryPrice:undefined}); 
    }
    

    useEffect(()=>{
        const addressFromLocalStortage=JSON.parse(localStorage.getItem("address") as string ) ?? undefined;
        if(addressFromLocalStortage!=undefined)( setState(addressFromLocalStortage),loading=false,success=true); 
        else setState(initAddress);
    },[]);
    useEffect(()=>{ 
        if(data!=undefined){
            setState({...state,deliveryPrice:data.data?.Domicile});
            loading=false;success=true;
        }
    },[data]);
    useEffect(()=>{ 
        (state.deliveryPrice==undefined && state.province)&& (refetch());
        state.deliveryPrice !=undefined && 
                (localStorage.setItem("address",JSON.stringify(state)),loading=false,success=true); 
    },[state])
    return {
        isSuccess:success,
        isError,
        isLoading:loading,
        setCity,
        tarification:data?.data,
        ...state,setState,setProvince
    }
}