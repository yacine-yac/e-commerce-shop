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


let g=2+23;
const initState={order:0,confirmed:0,delivred:0,returned:0};
class gb{
  private globalState?:IglobalState;
  private year:number;
  private client:Redis;
  constructor(){
    this.client=new Redis({host:"127.0.0.1",port:6379});
    this.year=new Date().getFullYear();
     
  }
  async initglobalState(){
       const gs=await this.client.get('globalState');
   
       this.globalState=  gs== undefined  ? this.defaultGlobalState()  : JSON.parse(gs) ;
       if(this.globalState !=undefined && this.globalState[this.year]==undefined ){ 
                this.globalState={
                  ...this.globalState,
                  [this.year]:initState
                };
        }
        this.client.set('globalState',JSON.stringify(this.globalState)) 
  }
  getGlobalState(){
   return this.globalState;
  }
  private defaultGlobalState(){      
       return   {
                    [this.year]:initState
                };
}
  async  setGlobalState(state?:orderTypes){
    
      if(this.globalState != undefined) 
         
          switch (state) {
            case "confirmed":
                        this.globalState[this.year].confirmed++;
                break;
            case "Delivered":
                        this.globalState[this.year].confirmed--;
                        this.globalState[this.year].delivred++;
                break;
            case "returned": 
                        this.globalState[this.year].confirmed--;
                        this.globalState[this.year].returned++;
            break;
            default:   
                        this.globalState[this.year].order++;        
            break;
          } 
        await   this.client.set('globalState',JSON.stringify(this.globalState))
          
      }
}

export default gb;
