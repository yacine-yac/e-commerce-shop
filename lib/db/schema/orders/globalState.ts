import { Redis } from "ioredis";
import { orderTypes } from "../../configurations/types";
import {config} from "./config"
type IglobalState={
      [x:number]:{
            order: number;
            confirmed: number;
            delivred: number;
            returned: number;
      }
}


const initState={order:0,confirmed:0,delivred:0,returned:0};
class globalState{
  public value:IglobalState;
  private year:number;
  private  client:Redis;
  static gb:globalState;
  private constructor(){
        this.client=new Redis(config);
        this.year=new Date().getFullYear();
        this.value=this.defaultGlobalState();
  }
  async initglobalState(){
       const gs=await this.client.get('globalState');
       
       this.value=  gs== undefined  ? this.defaultGlobalState()  : JSON.parse(gs) ;
       if(this.value !=undefined && this.value[this.year]==undefined ){ 
                this.value={
                  ...this.value,
                  [this.year]:initState
                };
        }
        this.client.set('globalState',JSON.stringify(this.value)); 
  }
  getvalue(){
   return this.value;
  }
  getYear(){
     return this.year;
  }
  getCurrent(){ 
      return   this.value[this.year] ?? initState;
  }
  private defaultGlobalState(){      
       return   {
                    [this.year]:initState
                };
}
  async  setGlobalState(state?:orderTypes){
    
      if(this.value != undefined) 
         
          switch (state) {
            case "confirmed":
                        this.value[this.year].confirmed++;
                break;
            case "Delivered":
                        this.value[this.year].confirmed--;
                        this.value[this.year].delivred++;
                break;
            case "returned": 
                        this.value[this.year].delivred--;
                        this.value[this.year].returned++;
            break;
            case "cancel":
                        this.value[this.year].confirmed--;
                break;
            case "Delevring" :
                /** don't do anything */
                break;
            default:   
                        this.value[this.year].order++;        
            break;
          } 
        await   this.client.set('globalState',JSON.stringify(this.value))
          
      }
  async generate(){  
                const orderNumber=await this.getCurrent() ;
                await  this.setGlobalState();
                return `${orderNumber.order}/${this.year}`;
  }
   
  async close(){
       await this.client.quit();
  }
  static  initglobalState(){
        if(globalState.gb==undefined){
          globalState.gb=new globalState();
           globalState.gb.initglobalState();
        }
        return globalState.gb;
  }
} 
globalState.initglobalState();
const GlobalState= globalState.gb;
export default GlobalState;
