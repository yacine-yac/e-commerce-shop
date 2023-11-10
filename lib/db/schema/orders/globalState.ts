import { Redis } from "ioredis";
import { orderTypes } from "../../configurations/types";

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
   
    this.client=new Redis({host:"127.0.0.1",port:6379});
    this.initglobalState();
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
                        this.value[this.year].confirmed--;
                        this.value[this.year].returned++;
            break;
            default:   
                        this.value[this.year].order++;        
            break;
          } 
        await   this.client.set('globalState',JSON.stringify(this.value))
          
      }
      static async initglobalState(){
           if(globalState.gb==undefined){
             globalState.gb=new globalState();
             await globalState.gb.initglobalState();
            }
            return globalState.gb;
      }
} 
const GlobalState=globalState.initglobalState();
export default GlobalState;
